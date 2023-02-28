import React from "react";
import banner2 from '../../../img/banner2.webp'
import className from "classnames/bind";
import style from './Cart.module.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useState } from "react";
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { date } from "yup";

const cx = className.bind(style);


function Cart() {
    const [count, setCount] = useState(1);
    let a = 0
    const [productCart, setProductCart] = useState([])
    const [sumPrice, setSumprice] = useState(0)


    useEffect(() => {
        setProductCart(JSON.parse(localStorage.getItem("cart") || '[]'))
        window.scrollTo(0, 0)
        for (let i = 0; i < productCart.length; i++) {
            a += (parseInt(productCart[i].price))
        }
        setSumprice(a)
    }, [])

    const removeProduct = (index) => {
        let data = JSON.parse(localStorage.getItem("cart") || '[]')
        data.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(data))
        setProductCart(data)

    }
    console.log(productCart)
    console.log(sumPrice);
    return (
        <>
            <div className={cx('banner')}>
                <img src={banner2} />
                <div className={cx('text-banner')}>
                    <h1>Giỏ hàng của bạn - Cool Organic</h1>
                    <Link to={'/'}>Trang chủ <IoIosArrowForward /></Link><span className="pl-1">Giỏ hàng của bạn - Cool Organic</span>
                </div>
            </div>
            <div className="container">
                <div className="mt-5 mb-5">
                    <h2>Giỏ hàng của bạn</h2>
                </div>
            </div>


            {
                productCart.length >= 1 ? productCart.map((item, index) => {
                    return (
                        <>
                            <div className="container">

                                <div className={cx('d-flex', 'all-cart','mb-5')}>

                                    <div className="d-flex">
                                        <img src={item.image} className={cx('cart-img')}></img>
                                        <div className="ml-3 mt-2">
                                            <p className={cx('name-cart')}>{item.productName}</p>
                                            <p className={cx('price-cart')}>{item.price}.000₫</p>
                                        </div>

                                    </div>
                                    <div className="pt-4 d-flex">
                                        <div className={cx('d-flex', 'price-num')}>
                                            <div className={cx('')}>
                                                <AiOutlineMinus className={cx('num')} onClick={() => {
                                                    if (count = 0) {
                                                        setCount(1)
                                                    } else {
                                                        setCount(count - 1)
                                                    }
                                                }} />
                                            </div>
                                            <div className={cx('count')}>
                                                {count}
                                            </div>
                                            <div className={cx('plus')}>
                                                <BsPlus className={cx('num')} onClick={() => {
                                                    setCount(count + 1)
                                                }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx("d-flex")}>
                                        <h5 onClick={() => removeProduct(index)} className={cx('icon-cart', 'mr-3', 'mt-4')}><RiDeleteBin5Fill /></h5>
                                        <div className={cx('ml-5', 'mt-3')}>
                                            <h4>Tổng tiền</h4> <strong className={cx("pl-3")}>{item.price}.000 đ</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }) :
                    <>
                        <div className="container">
                            <h3 className="mt-5">
                                Giỏ hàng của bạn (0 sản phẩm)
                            </h3>
                            <p className="mt-5 mb-5">Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp tục mua sắm.</p>
                        </div>

                    </>

            }
        </>
    );
}

export default Cart;