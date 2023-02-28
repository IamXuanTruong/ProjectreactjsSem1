import style from './Trademark.module.css';
import className from 'classnames/bind';
import bg_title from '../../../../img/bg_title.webp';
import brand_1 from '../../../../img/brand_1.webp';
import brand_2 from '../../../../img/brand_2.webp';
import brand_3 from '../../../../img/brand_3.webp';
import brand_4 from '../../../../img/brand_4.webp';
import brand_5 from '../../../../img/brand_5.webp';


const cx = className.bind(style);

function Trademark() {
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
            <div className={cx('trademark')}>
                <div className="container">
                    <div className={cx('mt-5', 'd-flex', 'm-auto')}>
                        <div className="col-lg-2">
                            <img src={brand_1} />
                        </div>
                        <div className="col-lg-2">
                            <img src={brand_2} />
                        </div>
                        <div className="col-lg-2">
                            <img src={brand_3} />
                        </div>
                        <div className="col-lg-2">
                            <img src={brand_4} />
                        </div>
                        <div className="col-lg-2">
                            <img src={brand_5} />
                        </div>
                        <div className="col-lg-2">
                            <img src={brand_1} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('trademark2')}>
                <div className="container-fluid">
                    <div className="row">
                        <div className={cx('mt-5', 'd-flex', 'm-auto')}>
                            <div className="col-lg-2">
                                <img src={brand_1} />
                            </div>
                            <div className="col-lg-2">
                                <img src={brand_2} />
                            </div>
                            <div className="col-lg-2">
                                <img src={brand_3} />
                            </div>
                            <div className="col-lg-2">
                                <img src={brand_4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Trademark;