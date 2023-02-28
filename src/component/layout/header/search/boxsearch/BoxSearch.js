import React from 'react';
import className from 'classnames/bind';
import styles from "./BoxSearch.module.css";
import { Link } from 'react-router-dom'; 

let cx = className.bind(styles);

function BoxSearch({ keyWord, data, reset }) {
    return (
        <div className={cx('pos')}>
            <div className={cx('box-search1', 'd-lg-block d-none')}>
                <p className={cx('p-result','font-weight-bold')}>Search: "{keyWord}"</p>
                {data.map((item) => {
                    return (
                        <Link className={cx('linkitem')} to={`/product/${item.id}`} onClick={reset}>
                            <div className={cx('media', 'form-item')} key={item.id}>
                                <img src={item.image} alt="" className={cx('img-search')} />
                                <div className="media-body">
                                    <h5 className={cx('fontname','mt-2')}>{item.productName}</h5>
                                    <h5 className={cx('fontname2')}>Cate: {item.cate}</h5>
                                   
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default BoxSearch;