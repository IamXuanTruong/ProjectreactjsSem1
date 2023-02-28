import { HiSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import React from "react";
import { useForm } from "react-hook-form";
import style from './Search.module.css';
import className from 'classnames/bind';
import { GrClose } from 'react-icons/gr';
import * as productService from "../../../../service/productService";
import BoxSearch from './boxsearch/BoxSearch';


const cx = className.bind(style);


function Search() {
    const [check, setCheck] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [keyWord, setKeyWord] = useState('');
    const [showProducts, setShowProducts] = useState([]);
    const reset = () => {
        setKeyWord('')
    }
    useEffect(() => {
        const filterByKeyName = async (keyWord) => {
            const data = await productService.filterByKeyName(keyWord);
            setShowProducts(data);
        }
        const timeOut = setTimeout(() => {
            filterByKeyName(keyWord);
        }, 0);
        return () => clearTimeout(timeOut);
    }, [keyWord])
    return (
        <>
            {
                
                !check ? <HiSearch onClick={e => setCheck(!check)} className={cx('clos')} /> : <GrClose type="button" onClick={e => setCheck(!check)} className={cx('clos')} />
            }
            {
                check ?
                    <div className={cx('bg')}>
                        <div className={cx('login')}>
                            <div onSubmit={handleSubmit(onSubmit)} className="d-flex">
                                <input type="text" placeholder="Type search text here..." className={cx('search')} onChange={(e) => setKeyWord(e.target.value.trim())} />
                                {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />}

                            </div>
                        </div>
                    </div>
                    : <>

                    </>
            }
        </>
    );

}

export default Search;