import style from './Shop.module.css';
import className from 'classnames/bind';
import { Link } from "react-router-dom";
import banner2 from '../../../img/banner2.webp';
import { IoIosArrowForward } from 'react-icons/io';
import NavShop from './navshop/NavShop';
import ProductShop from './productshop/ProductShop';

const cx = className.bind(style);

function Shop() {
    return (
        <>
            <div className={cx('banner')}>
                <img src={banner2} />
                <div className={cx('text-banner')}>
                    <h1>Sản phẩm</h1>
                    <Link to={'/'}>Trang chủ <IoIosArrowForward /></Link><span className="pl-1">Sản phẩm </span>
                </div>
            </div>
            <div className={cx('shop')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-5">
                            <NavShop />
                        </div>
                        <div className="col-lg-9">
                            <ProductShop />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Shop;