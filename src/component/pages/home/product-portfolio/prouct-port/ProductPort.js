import style from "./ProductPort.module.css";
import className from "classnames/bind";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as productService from "../../../../../service/productService";

const cx = className.bind(style);

function ProuctPort() {
    const [apiData, setApiData] = useState([])

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.getAll();
            setApiData(data)
        }
        getData();
    }

    useEffect(() => {
        getApiData();
    }, [])

    var _html = []

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
                                                <Link to={`/detail/${items.id}`} className={cx('tomato')}>{items.productName}</Link>
                                                <Link  className={cx('price')}>{items.price}.000₫</Link>
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

export default ProuctPort;