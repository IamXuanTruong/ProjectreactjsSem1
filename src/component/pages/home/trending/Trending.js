import style from "../trending/Trending.module.css";
import className from "classnames/bind";
import bg_title from '../../../../img/bg_title.webp';
import * as productService from "../../../../service/productService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = className.bind(style);

function Trending() {
    const [apiData, setApiData] = useState([])

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
    
    // var _html = []

    // const paginate = () => {
    //     for (let index = 1; index <= 3; index++) {
    //         _html.push(<li className="page-item" key={index}><a className="page-link" href="" onClick={(e) => getDatas(index, e)}>{index}</a></li>)
    //     }
    // }

    // paginate();

    // const getDatas = (index, e) => {
    //     e.preventDefault();
    //     const getData = async () => {
    //         const data = await productService.getAll(index);
    //         setApiData(data)
    //     }
    //     getData();
    //     console.log(index)
    // }
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <div className={cx('content')}>
                <div className={cx('container', 'text-center')}>
                    <div className={cx('content', 'headers')}>
                        <h3 className={cx('text-gradiant', 'd-inline-block', 'mt-5')}>DANH MỤC SẢN PHẨM</h3>
                    </div>
                    <img src={bg_title} />

                </div>
            </div>
            <div className="col-lg-12 col-md-12">
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

export default Trending;