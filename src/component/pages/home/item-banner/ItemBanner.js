import className from "classnames/bind";
import style from '../item-banner/ItemBanner.module.css';
import col_1 from '../../../../img/col_1.png';
import col_2 from '../../../../img/col_2.webp';
import col_3 from '../../../../img/col_3.webp';
import col_4 from '../../../../img/col_4.webp';
import bg_title from '../../../../img/bg_title.webp';
import icon_uti_1 from '../../../../img/icon_uti_1.webp'
import icon_uti_2 from '../../../../img/icon_uti_2.webp'
import icon_uti_3 from '../../../../img/icon_uti_3.webp'
import icon_uti_4 from '../../../../img/icon_uti_4.webp'


const cx = className.bind(style);

function ItemBanner() {
    return (
        <>
            <div className="col-lg-12 col-md-12 p-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className={cx('banner-icon1')}>
                                <img src={col_1} className={cx('col-img1')} />
                                <div className={cx('text-banner')}>
                                    <h3>Rau quả tươi</h3>
                                    <span>
                                        Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo
                                        chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                                        chị
                                    </span>
                                </div>
                                <div className={cx('but')}>
                                    <button>Xem ngay</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className={cx('banner-icon2')}>
                                <img src={col_2} className={cx('col-img2')} />
                                <div className={cx('text-banner')}>
                                    <h3>Sinh tố hoa quả</h3>
                                    <span>
                                        Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo
                                        chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                                        chị
                                    </span>
                                </div>
                                <div className={cx('but')}>
                                    <button>Xem ngay</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className={cx('banner-icon3')}>
                                <img src={col_3} className={cx('col-img3')} />
                                <div className={cx('text-banner')}>
                                    <h3>Thực phẩm tươi</h3>
                                    <span>
                                        Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo
                                        chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                                        chị
                                    </span>
                                </div>
                                <div className={cx('but')}>
                                    <button>Xem ngay</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className={cx('banner-icon4')}>
                                <img src={col_4} className={cx('col-img4')} />
                                <div className={cx('text-banner')}>
                                    <h3>Hoa quả tươi mát</h3>
                                    <span>
                                        Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo
                                        chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các
                                        chị
                                    </span>
                                </div>
                                <div className={cx('but')}>
                                    <button>Xem ngay</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className={cx('content')}>
                <div className="container">
                    <div className={cx('text-center')}>
                        <div className={cx('content_headers')}>
                            <h3 className={cx('text-gradiant', 'd-inline-block', 'mt-5')}>VỀ CHÚNG TÔI</h3>
                        </div>
                        <img src={bg_title} />
                        <p className={cx('condition', 'mt-4')}>
                            Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực tập tươi sạch với số lượng lớn vì
                            đang
                            vào vụ mùa thu hoạch nên chúng tôi có thể cung ứng cho tất cả các đối tác xuất khẩu nông sản trên cả
                            nước.
                        </p>
                    </div>
                </div>

            </div>
            <div className={cx('all')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className={cx('sp', 'text-center', 'mt-5')}>
                                <img src={icon_uti_1} />
                                <p className="pt-3">Trang trại hữu cơ</p>
                                <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('sp', 'text-center', 'mt-5')}>
                                <img src={icon_uti_2} />
                                <p className="pt-3">Thực phẩm sạch</p>
                                <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('sp', 'text-center', 'mt-5')}>
                                <img src={icon_uti_3} />
                                <p className="pt-3">An toàn sinh học</p>
                                <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={cx('sp', 'text-center', 'mt-5')}>
                                <img src={icon_uti_4} />
                                <p className="pt-3">Đa dạng sinh học</p>
                                <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx('all2')}>
                <div className="col-md-12">
                    <div className="">
                        <div className="row">
                            <div className="d-flex">
                                <div className="col-md-4">
                                    <div className={cx('sp', 'text-center', 'mt-5')}>
                                        <img src={icon_uti_1} />
                                        <p className="pt-3">Trang trại hữu cơ</p>
                                        <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className={cx('sp', 'text-center', 'mt-5')}>
                                        <img src={icon_uti_2} />
                                        <p className="pt-3">Thực phẩm sạch</p>
                                        <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className={cx('sp', 'text-center', 'mt-5')}>
                                        <img src={icon_uti_3} />
                                        <p className="pt-3">An toàn sinh học</p>
                                        <span>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default ItemBanner;