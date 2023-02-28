import style from "./Shops.module.css"
import classNames from "classnames/bind";
import * as productService from "../../../../service/productService";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import NavShop from "../navshop/NavShop";
import banner2 from '../../../../img/banner2.webp';
import { IoIosArrowForward } from 'react-icons/io';

const cx = classNames.bind(style)

function Shops() {
    const [apiData, setapiData] = useState([]);
    const [ApiData, setApiData] = useState([])
    let { id } = useParams();

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.findByCate_id(id)
            setapiData(data)
        }
        getData()
    }
    // var _html = []
    // const paginate = () => {
    //     for (let index = 1; index <= 2; index++) {
    //         _html.push(<li className="page-item" key={index}><a className="page-link" href="" onClick={(e) => getDatas(index, e)}>{index}</a></li>)
    //     }
    // }

    // paginate();

    // const getDatas = (index, e) => {
    //     e.preventDefault();
    //     const getData = async () => {
    //         const data = await productService.getShops(index);
    //         setApiData(data)
    //     }
    //     getData();
    //     console.log(index)
    // }

    

    useEffect(() => {
        getApiData()
        // getDatas()
        // window.scrollTo(0, 0)
    }, [id])


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
                        <div className="col-lg-3">
                            <NavShop />
                        </div>
                        <div className="col-lg-9 col-md-9 mb-5">
                            <div className="row">
                                {
                                    apiData.map((items, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-4" key={index}>
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
                </div>


            </div>
            {/* <nav >
                <div className={cx('transfer')}>
                    <ul className="pagination justify-content-end">
                        {
                            _html.map(items => {
                                return items;
                            })
                        }
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </div>


            </nav> */}


        </>
    );
}

export default Shops;