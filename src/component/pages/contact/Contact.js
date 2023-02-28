import React from "react";
import banner from "../../../img/banner2.webp";
import style from '../contact/Contact.module.css';
import className from 'classnames/bind';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { Link } from "react-router-dom";
const cx = className.bind(style);

function Contact() {
    return (
        <>
            <main>
                <div className={cx("banner")}>
                    <img src={banner} alt="" />
                    <div className={cx("text-banner")}>
                        <h1>Liên hệ</h1>
                        <Link to={"/home"}>Trang chủ </Link><span className={cx('pl-1')}> <MdKeyboardArrowRight /> Liên hệ</span>
                    </div>
                </div>
                <div className={cx('container' ,'d-flex')}>
                    <div className={cx('col-lg-3', 'mt-5', 'mb-5')}>
                        <div className={('icon-footer', 'mt-4')}>
                            <div className={cx('d-flex', 'mt-3')}>
                                <MdPlace className={cx("icon")}/>
                                <span className={cx("pt-2")}>268 Cầu, Giấy, Hà Nội</span>
                            </div>
                            <div className={cx('d-flex','mt-3')}>
                                < MdPhoneIphone  className={cx("icon")}/>
                                <span className={cx("pt-2")}>0912117494</span>
                            </div>
                            <div className={cx('d-flex', 'mt-3')}>
                                <MdEmail className={cx("icon")}/>
                                <span className={cx("pt-2")}>dualeotheme@gmail.com</span>
                            </div>
                        </div>
                        <div className={cx("text-map")}>
                            <h5 className={cx("pb-3")}>Liên hệ với chúng tôi</h5>
                            <div>
                                <input type="text" placeholder="Họ và tên" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Nội dung" className={cx("content")} />
                            </div>

                        </div>
                        <nav className={cx('navbar', 'navbar-light', 'footer-login2')}>
                            <form className={cx("form-inline")}>
                                <button className={cx('btn my-2', 'my-sm-0')} type="submit">Gửi liên hệ</button>
                            </form>
                        </nav>

                    </div>
                    <div className={cx('col-lg-9', 'mt-5', 'mb-5','ml-5')}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.666158395465!2d105.79108181447641!3d21.046039785988963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3073615aff%3A0x5f7d5efd40024836!2zSG_DoG5nIFF14buRYyBWaeG7h3QsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1665112130718!5m2!1svi!2s" className={cx('w-100', 'h-100')}></iframe>
                    </div>
                </div>


            </main>

        </>
    );
}

export default Contact;