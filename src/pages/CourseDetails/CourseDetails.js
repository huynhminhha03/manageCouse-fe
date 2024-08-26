import classNames from 'classnames/bind';
import styles from './CourseDetails.module.scss';
import Button from '~/components/Button';
import { VideoIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function CourseDetails() {
    return (
        <div className={cx('wrapper')}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-md-8 col-lg-8">
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>{'App "Đừng Chạm Tay Lên Mặt'}</h1>
                            <div className={cx('heading-desc')}>
                                <p>
                                    Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng
                                    thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.
                                </p>
                            </div>

                            <div className={cx('header-sticker')}>
                                <div class={cx('header-block')}>
                                    <h2>Nội dung khóa học</h2>
                                </div>
                                <strong>13 </strong> bài học
                            </div>

                            <div className={cx('lesson-list')}>
                                <div className={cx('lesson-item')}>
                                    <span class={cx('icon-link')}>
                                        <VideoIcon />
                                        <div class="_lessonName_1u0ca_130">1. Giới thiệu</div>
                                    </span>
                                    <span>03:58</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-4 col-lg-4">
                        <div className={cx('purchase-badge')}>
                            <div className={cx('img-wrapper')}>
                                <div
                                    className={cx('img-bg')}
                                    style={{
                                        backgroundImage:
                                            'url("https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png")',
                                    }}
                                ></div>
                            </div>
                            <h5>Miễn phí</h5>
                            <button className={cx('register-btn')}>
                                <span class={cx('inner')}>
                                    <span class={cx('title')}>ĐĂNG KÝ HỌC</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;
