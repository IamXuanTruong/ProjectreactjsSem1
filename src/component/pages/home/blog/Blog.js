import style from "../blog/Blog.module.css";
import className from "classnames/bind";
import bg_title from '../../../../img/bg_title.webp';
import bao1 from '../../../../img/bao1.webp';
import bao2 from '../../../../img/bao2.webp';
import bao3 from '../../../../img/bao3.webp';
import { Link } from "react-router-dom";

const cx = className.bind(style);

function Blog() {
    return (
        <>
            <div className={cx('content')}>
                <div className={cx('container','text-center')}>
                    <div className={cx('content','headers')}>
                        <h3 className={cx('text-gradiant','d-inline-block','mt-5')}>TIN TỨC MỚI NHẤT</h3>
                    </div>
                    <img src={bg_title} />

                </div>
            </div>
            <div className={cx('blog1')}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className={cx('newspaper','mt-4')}>
                                <img src={bao1} />
                                <div className={cx('new-text')}>
                                    <div className="d-flex">
                                        <i className="far fa-calendar d-flex mt-2 mr-1"></i><p className={cx('mr-1', 'mt-1','date')}>09/01/2021</p>
                                        <p className="mt-1">Đăng bởi: <span className={cx('date')}>Danh Đặng Hữu</span></p>
                                    </div>
                                </div>
                                <div className={cx('topic')}>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text')}>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text1')}>Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên ...</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={cx('newspaper','mt-4')}>
                                <img src={bao2} />
                                <div className={cx('new-text')}>
                                    <div className="d-flex">
                                        <i className="far fa-calendar d-flex mt-2 mr-1"></i><p className={cx('mr-1', 'mt-1','date')}>09/01/2021</p>
                                        <p className="mt-1">Đăng bởi: <span className={cx('date')}>Danh Đặng Hữu</span></p>
                                    </div>
                                </div>
                                <div className={cx('topic')}>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text')}>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text1')}>Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên ...</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={cx('newspaper','mt-4')}>
                                <img src={bao3} />
                                <div className={cx('new-text')}>
                                    <div className="d-flex">
                                        <i className="far fa-calendar d-flex mt-2 mr-1"></i><p className={cx('mr-1', 'mt-1','date')}>09/01/2021</p>
                                        <p className="mt-1">Đăng bởi: <span className={cx('date')}>Danh Đặng Hữu</span></p>
                                    </div>
                                </div>
                                <div className={cx('topic')}>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text')}>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text1')}>Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên ...</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx('blog2')}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={cx('newspaper','mt-4')}>
                                <img src={bao1} />
                                <div className={cx('new-text')}>
                                    <div className="d-flex">
                                        <i className="far fa-calendar d-flex mt-2 mr-1"></i><p className={cx('mr-1','mt-1','date')}>09/01/2021</p>
                                        <p className="mt-1">Đăng bởi: <span className={cx('date')}>Danh Đặng Hữu</span></p>
                                    </div>
                                </div>
                                <div className={cx('topic')}>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text')}>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text1')}>Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên ...</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={cx('newspaper','mt-4')}>
                                <img src={bao1} />
                                <div className={cx('new-text')}>
                                    <div className="d-flex">
                                        <i className="far fa-calendar d-flex mt-2 mr-1"></i><p className={cx('mr-1','mt-1','date')}>09/01/2021</p>
                                        <p className="mt-1">Đăng bởi: <span className={cx('date')}>Danh Đặng Hữu</span></p>
                                    </div>
                                </div>
                                <div className={cx('topic')}>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text')}>Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao</Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to={'/blog'} className={cx('top-text1')}>Khoảng gần một tuần nay, do ảnh hưởng của những cơn mưa lớn kéo dài liên tiếp nên ...</Link>
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

export default Blog;