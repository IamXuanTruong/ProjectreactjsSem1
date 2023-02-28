import { MdKeyboardArrowRight } from "react-icons/md";
import React from 'react';
import style from './Registers.module.css';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { register } from "../../../service/user.service";
import { Link, useNavigate } from 'react-router-dom';
import banner from "../../../img/banner2.webp";

const cx = classNames.bind(style);

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập Họ tên"),
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    password: Yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự"),
    confirm: Yup.string().required("Vui lòng nhập lại mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự")
})

function Registers() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (user) => {
            let response = await register(user);
            response.status === 201 && navigate("/login");
        }
    });

    return (
        <>
            <div className={cx("banner")}>
                <img src={banner} alt="" />
                <div className={cx("text-banner")}>
                    <h1>Tạo tài khoản</h1>
                    <Link to={"/"}>Trang chủ </Link><span className={cx('pl-1')}> <MdKeyboardArrowRight /> Đăng Ký</span>
                </div>
            </div>
            <div className={cx('bg-register', 'd-block')}>
                <div className=''>
                    <form onSubmit={formik.handleSubmit} className={cx('form-submit', 'from')}>
                        <div className="container">
                            <div className="d-flex">
                                <div className="col-lg-6">
                                    <h2 className=''>Tạo tài khoản</h2>
                                    <p>Nếu chưa có tài khoản hãy đăng ký tại đây</p>
                                    <div className={cx("mt-3")}>
                                        <label className="mb-0 mr-2">
                                            Họ và tên
                                        </label>
                                        <input
                                            name="name" type="text" placeholder='Họ và tên'
                                            className={cx("form-control", "form-input", "mt-2")}
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </div>
                                    <span className={cx("err")}>
                                        {formik.errors.name ? formik.errors.name : ""}
                                    </span>

                                    <div className={cx('mt-3')}>
                                        <label className="mb-0 mr-2 d-block">
                                            Email
                                        </label>
                                        <input
                                            name="email" type="email "
                                            className={cx("form-control", "form-input", "mt-2")}
                                            onChange={formik.handleChange} placeholder="Email"
                                            value={formik.values.email}
                                        />
                                    </div>
                                    <span className={cx("err")}>
                                        {formik.errors.email ? formik.errors.email : ""}
                                    </span>
                                </div>

                                <div className="col-lg-6 mt-5">
                                    <div className={cx("mb-2", "mt-4")}>
                                        <label className="mb-0 mr-2 d-block">
                                            Mật khẩu
                                        </label>
                                        <input
                                            name="password" type="password"
                                            className={cx("form-control", "form-input", "mt-2")}
                                            onChange={formik.handleChange} placeholder="Mật khẩu"
                                            value={formik.values.password}
                                        />
                                    </div>
                                    <p className={cx("err")}>
                                        {formik.errors.password ? formik.errors.password : ""}
                                    </p>

                                    <div className={cx("mb-2", "mt-4")}>
                                        <label className="mb-0 mr-2 d-block">
                                            Nhập lại mật khẩu
                                        </label>
                                        <input
                                            name="confirm" type="password"
                                            className={cx("form-control", "form-input", "mt-2")}
                                            onChange={formik.handleChange} placeholder="Nhập lại mật khẩu"
                                            value={formik.values.confirm}
                                        />
                                    </div>
                                    <p className={cx("err")}>
                                        {formik.errors.confirm ? formik.errors.confirm : ""}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className={cx("btn","btn-button","mb-3", "mt-3",)}>
                                Đăng ký
                            </button>
                            <Link to={"/login"} className={cx('pl-3','pt-5','text-submit')}>Đăng nhập</Link>
                        </div>



                    </form>
                </div>
            </div>
        </>

    )
}
export default Registers;

