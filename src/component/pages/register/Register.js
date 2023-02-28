import React from "react";
import banner from "../../../img/banner2.webp"
import style from './Register.module.css';
import className from 'classnames/bind';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import { register } from "../../../service/user.service";

const cx = className.bind(style);
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm: ""
}
function Register() {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit: async (data) => {
            let response = await register(data);
            response.status === 201 && navigate("/login");
        }
    });

    return (
        <>
            <div className={cx("banner")}>
                <img src={banner} alt="" />
                <div className={cx("text-banner")}>
                    <h1>Tạo tài khoản</h1>
                    <Link to={"/"}>Trang chủ </Link><span className={cx('pl-1')}> <MdKeyboardArrowRight /> Đăng Nhập</span>
                </div>
            </div>
            <div className={cx('container', 'mt-5', 'mb-5')}>
                <div className={cx("col-lg-6")}>
                    <h2>Tạo tài khoản</h2>
                </div>
                <form onSubmit={formik.handle} > {/* onSubmit={handleSubmit(onSubmit)} */}
                    <div className={cx("row")}>
                        <div className={cx("col-lg-6")}>
                            <p>Nếu bạn chưa có tài khoản vui lòng đăng kí tại đây.</p>

                            <div>
                                <p className={cx("text-email")}>Họ :</p>
                                <input type="text" placeholder="Họ" className={cx("email")} />
                                {/* {errors.name && <p className={cx('er')}>Vui lòng điền thông tin</p>}{...register("name", { required: true, minLength: 2 })} */}
                            </div>
                            <div className={cx("pt-3")}>
                                <p className={cx("text-email")}>Email :</p>
                                <input type="email" placeholder="Email" className={cx("email")} />
                                {/* {errors.email && <p className={cx('er')}>Vui lòng điền thông tin</p>}{...register("email", { required: true, maxLength: 30 })} */}
                            </div>
                            <div className={cx("row mt-5")}>
                                <div className={cx("col-lg-3")}>
                                    <button className={cx('w-100', 'p-3', 'btn-login')} type="submit">Đăng ký</button>

                                </div>
                                <Link to={"/login"} className={cx('p-3', 'text-submit')}  >Đăng nhập</Link>
                            </div>
                        </div>
                        <div className={cx('col-lg-6', 'mt-4')}>
                            <div className={cx("mt-3")}>
                                <p className={cx("text-email")}>Tên :</p>
                                <input type="text" placeholder="Tên" className={cx("email")} />
                                {/* {errors.text && <p className={cx('er')}>Vui lòng điền thông tin</p>}{...register("text", { required: true, maxLength: 30 })} */}
                            </div>
                            <div className={cx("pt-3")}>
                                <p className={cx("text-email")}>Mật Khẩu :</p>
                                <input type="password" placeholder="Mật khẩu" className={cx("email")} />
                                {/* {errors.password && <p className={cx('er')}>Vui lòng điền thông tin</p>}{...register("password", { required: true, maxLength: 15 })} */}
                            </div>
                        </div>
                    </div>
                </form>



            </div>
        </>
    );
}

export default Register;