import style from './Footer.module.css';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import logo from "../../../img/logo.webp";
import { BiMap } from 'react-icons/bi';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const cx = className.bind(style);

function Footer() {
    return (
        <>
            <footer>
                <div className={cx('footer-login', "align-items-center", "justify-content-between")}>
                    <h5 >Đăng kí nhận tin khuyến mại</h5>
                    <form className={cx('form-inline')}>
                        <div className={cx('d-flex')}>
                            <div>
                                <input className={cx('form-control', 'but-email')} type="email" placeholder="Nhập email của bạn" aria-label="Search" />
                            </div>
                            <div>
                                <button className={cx('btn my-2 my-sm-0')} type="submit">Đăng ký</button>
                            </div>

                        </div>

                    </form>
                </div>

                <div className={cx('menu-footer', "container-fluid")}>
                    <div className='row'>

                        <div className={cx('col-lg-3', "col-md-12")}>
                            <div className='mt-5'>
                                <img src={logo} />
                            </div>
                            <div className={cx('icon-footer', ' mt-4')}>
                                <div className={cx('d-flex mt-3')}>
                                    <div className={cx('item-fot')}><BiMap /></div>
                                    <span className={cx('pt-2')}>268 Cầu, Giấy, Hà Nội</span>
                                </div>
                                <div className={cx('d-flex mt-3')}>
                                    <div className={cx('item-fot')}><MdOutlinePhoneIphone /></div>
                                    <span className={cx('pt-2')}>0912117494</span>
                                </div>
                                <div className={cx('d-flex mt-3')}>
                                    <div className={cx('item-fot')}><MdOutlineMail /></div>
                                    <span className={cx('pt-2')}>dualeotheme@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-9 col-md-12 mt-5'>
                            <div className="container-fluid">
                                <div className='row'>
                                    <div className={cx('col-lg-4', "col-md-4", 'col-sm-12', 'mt-4', 'user')}>
                                        <span className={cx('')}>Cẩm nang sử dụng</span>
                                        <div className={cx('mt-4',)}>
                                            <Link href="" className={cx('user-fot')} to="/">Trang chủ</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/shop">Sản phẩm</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                                        </div>
                                    </div>

                                    <div className={cx('col-lg-4', "col-md-4", 'col-sm-12', 'mt-4', 'user')}>
                                        <span className={cx('')}>Chính sách</span>
                                        <div className={cx('mt-4',)}>
                                            <Link href="" className={cx('user-fot')} to="/">Trang chủ</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/shop">Sản phẩm</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-4', "col-md-4", 'col-sm-12', 'mt-4', 'user')}>
                                        <span className="">Dịch vụ</span>
                                        <div className={cx('mt-4',)}>
                                            <Link href="" className={cx('user-fot')} to="/">Trang chủ</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/shop">Sản phẩm</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                                        </div>
                                        <div className={cx('mt-2', 'user-fot')}>
                                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>



                </div>
                <div className={cx("dropdown", 'drop')}>
                    <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dịch vụ
                        <div>
                            <IoMdArrowDropdown />
                        </div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div className={cx('mt-2', 'text-fot')}>
                            <Link href="" className={cx('user-fot', 'dropdown-item')} to="/">Trang chủ</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/shop">Sản phẩm</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                        </div>

                    </div>

                </div>
                <div className={cx("dropdown", 'drop', 'mt-4', 'pb-2')}>
                    <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dịch vụ
                        <div>
                            <IoMdArrowDropdown />
                        </div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div className={cx('mt-2', 'text-fot', 'pb-2')}>
                            <Link href="" className={cx('user-fot', 'dropdown-item')} to="/">Trang chủ</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/shop">Sản phẩm</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                        </div>

                    </div>

                </div>
                <div className={cx("dropdown", 'drop', 'mt-4', 'pb-2')}>
                    <button className="btn btn-secondary " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dịch vụ
                        <div>
                            <IoMdArrowDropdown />
                        </div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div className={cx('mt-2', 'text-fot')}>
                            <Link href="" className={cx('user-fot', 'dropdown-item')} to="/">Trang chủ</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/about">Giới thiệu</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/shopshop">Sản phẩm</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/blog">Blog</Link>
                        </div>
                        <div className={cx('mt-2', 'text-fot', 'dropdown-item', 'user-fot')}>
                            <Link href="" className={cx('user-fot')} to="/contact">Liên hệ</Link>
                        </div>

                    </div>

                </div>

                <div className={cx('license')}>
                    <span className="pl-1">@ Bản quyền thuộc về</span>
                    <span className="pl-1"> Cool Team</span>
                    <span className="pl-2 pr-3"> | </span>
                    <span>Powered by Haravan</span>
                </div>


            </footer>

        </>
    );
}

export default Footer;