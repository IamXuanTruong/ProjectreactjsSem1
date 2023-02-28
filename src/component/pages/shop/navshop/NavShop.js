import style from "./NavShop.module.css";
import className from 'classnames/bind';
import * as productService from "../../../../service/productService";
import React, { useEffect, useState } from 'react';
import Accessories from "./Acessories";
import BoxSearch from "./boxsearch/BoxSearch";
import { BsSearch } from 'react-icons/bs';

const cx = className.bind(style);
function NavShop() {
    const [keyWord,setKeyWord] = useState ('');
    const [showProducts, setShowProducts] = useState([]);
    const reset = () => {
        setKeyWord('')
    }
    useEffect(() => {
        const filterByKeyName = async (keyWord) =>{
            const data = await productService.filterByKeyName(keyWord);
            setShowProducts(data);
        }
        const timeOut = setTimeout(() => {
            filterByKeyName(keyWord); 
        },700);
        return () => clearTimeout(timeOut);
    },[keyWord])
    return ( 
        <>
            <div className={cx('nav','mt-5')}>
                <h3 className="mb-4"> DANH MỤC SẢN PHẨM</h3>
                <div>
                    <Accessories />                   
                </div>


                <h3 className="mt-5 mb-4">COLOR</h3>
                <div className="d-flex w-100">
                    <div className={cx('black', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('gold', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('brown', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('pink', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('blue', 'color')}>
                        <button></button>
                    </div>
                    <div className={cx('silver', 'color')}>
                        <button></button>
                    </div>
                </div>
            </div>
            

            <div className="mt-5">     
                <input type="text" placeholder="Search product..." className={cx('search')} onChange = {(e) => setKeyWord(e.target.value.trim())} />
                    {keyWord !== '' && <BoxSearch keyWord={keyWord} data={showProducts} reset={reset} />}
                <BsSearch className={cx('icon')} />
            </div>
  
        </>
     );
}

export default NavShop;