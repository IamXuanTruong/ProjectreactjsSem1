import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../../../service/productService";
import style from "./Detail.module.css";
import classNames from "classnames/bind";
import { addToCart } from "../../../../src/redux/action/CartAction";
import { useDispatch } from "react-redux";
import * as Swal from 'sweetalert2';
import banner2 from '../../../img/banner2.webp';
import bg_pro from '../../../img/bg_pro.webp';
import { IoIosArrowForward } from 'react-icons/io';
import { BsPlus } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import bg_title from '../../../img/bg_title.webp';

const cx = classNames.bind(style)

function Detail() {
    const [apiData, setApiData] = useState([])
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    let { id } = useParams();


    const getApiData = () => {
        const getData = async () => {
            const data = await productService.getPro();
            setApiData(data)
        }
        getData();
    }

    useEffect(() => {
        getApiData();
    }, [])

    const addToCart = (product) => {
        let data = JSON.parse(localStorage.getItem("cart") || '[]')
        data.push(product)
        localStorage.setItem("cart", JSON.stringify(data))
        Swal.fire({
            icon: "success",
            text: "Đã thêm vào giỏ hàng",
            color: "#91AD41",
            confirmButtonColor: "#A1A847",
            timer: 3000
        });
        navigate("/cart")
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const getData = async () => {
            const data = await productService.detailsProducts(id);
            setProduct(data)
        }
        getData();

    }, [id])

   



    return (

        <>
            <div className={cx('banner')}>
                <img src={banner2} />
                <div className={cx('text-banner')}>
                    <h1>{product.productName}</h1>
                    <Link to={'/'}>Trang chủ <IoIosArrowForward /></Link><span className="pl-1">{product.productName}</span>
                </div>
            </div>
            <div className="container">
                <div className={cx('container', 'p-2', 'ctrans')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-6', 'p-0')}>
                            <img src={product.image} className={cx('card-img')} />
                        </div>

                        <div className="col-lg-6">
                            <div className={cx('all-information')}>
                                <div className="">
                                    <h3 className={cx('name')}>{product.productName}</h3>
                                </div>
                                <div className="d-flex pt-3">
                                    <div className={cx('text-pro')}>
                                        <p>Thương hiệu: <span className="pr-2">{product.trademark}</span>| </p>
                                    </div>
                                    <div className={cx('text-pro')}>
                                        <p className="pl-2">Tình trạng: <span>{product.status}</span></p>
                                    </div>
                                </div>
                                <div className={cx('text-price')}>
                                    <h3>{product.price}.000₫</h3>
                                </div>
                                <div className={cx('text-infomation', 'pb-4')}>
                                    <span>Thông tin sản phẩm đang được cập nhật</span>
                                </div>
                            </div>

                            <div className="pt-4 d-flex">
                                <p>Số lượng:</p>
                                <div className={cx('d-flex', 'price-num')}>
                                    <div className={cx('')}>
                                        <AiOutlineMinus className={cx('num')} onClick={() => {
                                            if (count == 0) {
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
                            <div>
                                <button onClick={(e) => addToCart(product)} className={cx('m-3', 'btn-login')} type="submit">Thêm vào giỏ hàng</button>
                                <p className="m-3">Gọi đặt mua để nhanh chóng đặt hàng.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={cx('bg-pro')}>
                    <img src={bg_pro} />
                </div>

                <div className="container">
                    <div className={cx('row', 'detail-product', 'mt-5')}>
                        <div div className="col-lg-6">
                            <Link className={cx('none')}>
                                <h4 className={cx('text-center')}>Mô tả sản phẩm</h4>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <Link className={cx('none')}>
                                <h4 className={cx('text-center')}>Hỏi đáp về sản phẩm</h4>
                            </Link>
                        </div>
                    </div>


                    <div className="">
                        <div className="mt-4">
                            <h4 className={cx('boss-tittle')}>
                                {product.describe1}
                            </h4>
                            <p className={cx('')}>{product.describe12}</p>
                            <p className={cx('tittle')}>{product.describe2}</p>
                            <p className={cx('text-tittle')}>{product.describe3}</p>
                            <p className={cx('tittle')}>{product.describe4}</p>
                            <p className={cx('text-tittle')}>{product.describe5}</p>
                            <p className={cx('tittle')}>{product.describe6}</p>
                            <p>{product.describe7}</p>
                            <p className={cx('tittle')}>{product.describe8}</p>
                            <p className={cx('text-tittle')}> {product.describe9}</p>
                            <p className={cx('tittle')}>{product.describe10}</p>
                            <p className={cx('text-tittle')}> {product.describe11}</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className={cx('content')}>
                <div className={cx('container', 'text-center')}>
                    <div className={cx('content', 'headers')}>
                        <h3 className={cx('text-gradiant', 'd-inline-block', 'mt-5')}>SẢN PHẨM LIÊN QUAN</h3>
                    </div>
                    <img src={bg_title} />

                </div>
            </div>
            <div className="col-lg-12 col-md-12 mb-5">
                <div className="container">
                    <div className="row">
                        {
                            apiData.map((items, index) => {
                                return (
                                    <div className="col-lg-3 col-md-3" key={index}>
                                        <div className={cx('product', 'mt-4')}>
                                            <img src={items.image} className={cx('product-img')} />
                                            <div className={cx('text-center')}>
                                                <Link className={cx('tomato')} to={`/detail/${items.id}`}>{items.productName}</Link>
                                                <Link className={cx('price')}>{items.price}.000₫</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>


        </>
    );
}

export default Detail;