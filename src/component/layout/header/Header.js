import logo from "../../../img/logo.webp";
import { Link } from "react-router-dom";
import style from '../header/Header.module.css';
import className from 'classnames/bind';

import { FaUserPlus } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Search from "./search/Search";


const cx = className.bind(style);
function Header() {
    return (
        <>
            <header className={cx('d-flex', "align-items-center", "justify-content-between")}>
                <div className={cx('icon-menu')}><GiHamburgerMenu/></div>
                <div className={cx('logo')}>
                    <img src={logo} />
                </div>
                <ul className={cx('nav justify-content-center', 'menu')}>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link', 'home')} to="/">Trang chủ</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link', 'text-menu')} to="/about">Giới thiệu</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link', 'text-menu')} to="/shop">Sản phẩm</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link', 'text-menu')} to="/blog">Blog</Link>
                    </li>
                    <li className={cx('nav-item')}>
                        <Link className={cx('nav-link', 'text-menu')} to='/contact'>Liên hệ</Link>
                    </li>
                </ul>
                <div className={cx('icon-header','d-flex')}>
                    <div className={cx('item-header')}>
                        <Search />
                    </div>
                    <div className={cx('item-header')}>
                        <Link to={'/login'}><FaUserPlus /></Link>
                    </div>
                    <div className={cx('item-header')}>
                        <Link to={"/cart"}><FaShoppingBasket /></Link>
                    </div>


                </div>
            </header>
        </>

    );
}

export default Header;