import style from "../product-portfolio/ProductPortfolio.module.css";
import className from "classnames/bind";
import bg_title from '../../../../img/bg_title.webp';
import { Link } from "react-router-dom";
import ProductPort from "./prouct-port/ProductPort";
import bg_hotline from '../../../../img/bg_hotline.jpg';


const cx = className.bind(style);

function ProductPortfolio() {
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
            <div className={cx('classify', 'd-flex', 'mt-5', 'mb-4')}>
                <div className={cx('clas-menu', 'mr-2', 'ml-2')}>
                    <Link className={cx('cl-menu')}>Rau củ</Link>
                </div>
                <div className={cx('clas-menu', 'mr-2')}>
                    <Link className={cx('cl-menu')}>Hoa quả</Link>
                </div>
                <div className={cx('clas-menu', 'mr-2')}>
                    <Link className={cx('cl-menu')}>Hải sản</Link>
                </div>
                <div className={cx('clas-menu', 'mr-2')}>
                    <Link className={cx('cl-menu')}>Các loại hạt</Link>
                </div>
                <div className={cx('clas-menu', 'mr-2')}>
                    <Link className={cx('cl-menu')}>Thực phẩm tươi sống</Link>
                </div>
            </div>
            <ProductPort />
            <div className={cx('hotline','mt-5')}>
                <img src={bg_hotline} className={cx('hot-img')}/>
                    <div className={cx('text-hotline','text-center')}>
                        <h1>Hotline</h1>
                        <p className={cx('phone')}>0912117494</p>
                        <p>Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất.</p>
                    </div>
            </div>


        </>
    );
}

export default ProductPortfolio;