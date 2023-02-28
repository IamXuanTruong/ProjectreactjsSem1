import className from 'classnames/bind';
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import banner2 from '../../../img/banner2.webp';
import style from './Login.module.css';
// import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { saveUserToLocalStorage } from '../../../redux/action/UserAction';
import { getUsers } from '../../../service/user.service';

const cx = className.bind(style);
const initValues = {
    email: "",
    password: ""
}
const validationSchema = Yup.object().shape({
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    password: Yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiếu 6 ký tự"),
})
function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const formik = useFormik({
        initialValues: initValues,
        validationSchema: validationSchema,
        onSubmit: async (data) => {
            let response = await getUsers();
            // console.log(response);
            let users = response.data;
            let findUser = users.filter(u => {
                return data.email === u.email && data.password === u.password;
            });
            // console.log(findUser);
            let user = findUser[0];
            if (user) {
                dispatch(saveUserToLocalStorage(user));
                navigate("/");
            } else {
                Toast.fire({
                    icon: "error",
                    title: "Email hoặc mật khẩu không chính xác",
                })
            }
        }

    })


    return (
        <>
            <div className={cx("banner")}>
                <img src={banner2} />
                <div className={cx('text-banner')}>
                    <h1>Đăng Nhập</h1>
                    <Link to={'/'}>Trang chủ </Link><span className={cx('pl-1')}> <MdKeyboardArrowRight /> Đăng Nhập</span>
                </div>
            </div>
            <div className={cx("container mt-5 mb-5")}>
                <div className={cx("row")}>
                    <form onSubmit={formik.handleSubmit} className={cx("col-lg-6")}>
                        <div>
                            <h2>Tài Khoản</h2>
                            <p >Nếu bạn đã có tài khoản, đăng nhập tại đây.</p>
                            <div className="mt-5">
                                <p className={cx("text-email")}>Email:</p>
                                <input
                                    name="email"
                                    className={cx("form-control", "form-input", "mt-2", "email")}
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                <span className={cx("err")}>
                                    {formik.errors.email ? formik.errors.email : ""}
                                </span>

                            </div>

                            <div className={cx("pt-4")}>
                                <p className={cx("text-email")}>Mật Khẩu:</p>
                                <input
                                    name="password" type="password"
                                    className={cx("form-control", "form-input", "mt-2", "email")}
                                    placeholder="Mật khẩu"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <p className={cx("err")}>
                                    {formik.errors.password ? formik.errors.password : ""}
                                </p>

                            </div>

                            <div className={cx("row mt-5")}>
                                <div className={cx("col-lg-3")}>
                                    <button className={cx('w-100', 'p-3', 'btn-login')} type="submit">Đăng nhập</button>
                                </div>
                                <Link to={"/registers"} className={cx('p-3', 'text-submit')}>Đăng kí</Link>
                            </div>
                        </div>
                    </form>
                    <form className={cx("col-lg-6")}>
                        <div >
                            <p>Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.</p>
                            <div>
                                <p className={cx("text-email")}>Email:</p>
                                <input type="text" placeholder="Email" className={cx("email")} />

                                <div className={cx("col-lg-4 p-0 mt-5")}>
                                    <button className={cx('w-100', 'p-3', 'btn-login')}>Lấy lại mật khẩu</button>

                                </div>
                            </div>
                        </div>
                    </form>


                </div>

            </div>




        </>
    );
}

export default Login;