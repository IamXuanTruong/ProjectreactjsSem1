import style from "./ProductShop.module.css";
import className from 'classnames/bind';
import * as productService from "../../../../service/productService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const cx = className.bind(style)
function ProductShop() {
    const [apiData, setApiData] = useState([])

    const getApiData = () => {
        const getData = async () => {
            const data = await productService.getShop();
            setApiData(data)
        }
        getData();
    }

    useEffect(() => {
        getApiData();
    }, [])

    var _html = []

    const paginate = () => {
        for (let index = 1; index <= 5; index++) {
            _html.push(<li className="page-item" key={index}><a className="page-link" href="" onClick={(e) => getDatas(index, e)}>{index}</a></li>)
        }
    }

    paginate();

    const getDatas = (index, e) => {
        e.preventDefault();
        const getData = async () => {
            const data = await productService.getShop(index);
            setApiData(data)
        }
        getData();
        console.log(index)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>

            <div className={cx('row')}>
                {
                    apiData.map((items, index) => {
                        return (
                            <div className="col-lg-4 col-md-4 mb-4" key={index}>
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
            <nav >
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


            </nav>

        </>
    );
}

export default ProductShop;