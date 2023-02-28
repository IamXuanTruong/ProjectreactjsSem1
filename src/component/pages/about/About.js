import style from "../about/About.module.css";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import banner2 from '../../../img/banner2.webp';
import { IoIosArrowForward } from 'react-icons/io';

const cx = className.bind(style);

function About() {
    return (
        <>
            <div className={cx('banner')}>
                <img src={banner2} alt="..."/>
                <div className={cx('text-banner')}>
                    <h1>Giới thiệu</h1>
                    <Link to={'/'}>Trang chủ <IoIosArrowForward /></Link><span className="pl-1">Giới thiệu</span>
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('container')}>
                    <div className={cx('content', 'headers')}>
                        <h3 className={cx('text-gradiant', 'd-inline-block', 'mt-5')}>GIỚI THIỆU</h3>
                    </div>
                    <div className={cx('text-about')}>
                        <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
                        <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                        <ul>
                            <li>Bạn là ai</li>
                            <li>Giá trị kinh doanh của bạn là gì</li>
                            <li>Địa chỉ cửa hàng</li>
                            <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                            <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                            <li>Đội ngũ của bạn gồm những ai</li>
                            <li>Thông tin liên hệ</li>
                            <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                        </ul>

                    </div>

                </div>


            </div>

        </>
    );
}

export default About;