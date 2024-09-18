import React, { useContext, useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CourseDetails.module.scss';
import { VideoIcon } from '~/components/Icons';
import api, { authAPI, userApis } from '~/utils/api';
import UserContext from '~/context/UserContext';
import ModalTypeContext from '~/context/ModalTypeContext';

const cx = classNames.bind(styles);

function CourseDetails() {
    const [courseData, setCourseData] = useState(null); // Ban đầu set null
    const [hasRegister, setHasRegister] = useState(false);
    const [loading, setLoading] = useState(true); // Trạng thái loading ban đầu
    const { course_id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { setModalType } = useContext(ModalTypeContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (user && course_id) {
            const checkRegisterCourse = async () => {
                try {
                    const response = await authAPI().get(userApis.checkRegisterCourse(course_id));
                    setHasRegister(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            checkRegisterCourse();
        }
    }, [course_id, user, navigate]);

    const fetchCourseData = useCallback(async () => {
        try {
            const [courseResponse, lessonResponse] = await Promise.all([
                api.get(userApis.getCourseDetails(course_id)),
                api.get(userApis.getQuickViewLessons(course_id)),
            ]);
            setCourseData({
                ...courseResponse.data,
                lessons: lessonResponse.data,
            });
        } catch (error) {
            console.error('Error fetching course details and lessons:', error);
            navigate('/404');
        } finally {
            setLoading(false);
        }
    }, [course_id, navigate]);

    useEffect(() => {
        fetchCourseData();
    }, [fetchCourseData]);

    const handleClick = async () => {
        if (user) {
            try {
                if (hasRegister) {
                    navigate(`/course/${course_id}/lesson`);
                    return;
                }

                const response = await authAPI().post(userApis.createPayment(course_id));

                if (response.data && !courseData?.isFree) {
                    window.location.href = response.data;
                } else if (response.data) {
                    navigate(`/course/${course_id}/lesson`);
                } else {
                    alert('Không thể khởi tạo thanh toán, vui lòng thử lại.');
                }
            } catch (error) {
                console.error('Error registering for course:', error);
            } finally {
                setLoading(false);
            }
        } else {
            setModalType('login');
        }
    };

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col col-md-8 col-lg-8">
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>{courseData?.title}</h1>
                            <div className={cx('heading-desc')}>
                                <p>{courseData?.desc}</p>
                            </div>

                            <div className={cx('header-sticker')}>
                                <div className={cx('header-block')}>
                                    <h2>Nội dung khóa học</h2>
                                </div>
                                <strong>{courseData?.lessons?.length || 0}</strong> bài học
                            </div>

                            <div className={cx('lesson-list')}>
                                {courseData?.lessons?.length > 0 ? (
                                    courseData?.lessons?.map((lesson, index) => (
                                        <div key={index} className={cx('lesson-item')}>
                                            <span className={cx('icon-link')}>
                                                <VideoIcon />
                                                <div className={cx('lesson-name')}>{lesson?.title}</div>
                                            </span>
                                            {/* <span>{formatDuration(lesson?.duration) || '00:00'}</span> */}
                                        </div>
                                    ))
                                ) : (
                                    <span>Hiện chưa có bài học nào</span>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-4 col-lg-4">
                        <div className={cx('purchase-badge')}>
                            <div className={cx('img-wrapper')}>
                                <div
                                    className={cx('img-bg')}
                                    style={{
                                        backgroundImage: `url(${courseData?.imageUrl})`,
                                    }}
                                ></div>
                            </div>
                            <h5>{courseData?.isFree ? 'Miễn phí' : `${courseData?.price}đ`}</h5>

                            <button className={cx('register-btn')} onClick={handleClick} disabled={loading}>
                                <span className={cx('inner')}>
                                    <span className={cx('title')}>{hasRegister ? 'TIẾP TỤC HỌC' : 'ĐĂNG KÝ HỌC'}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(CourseDetails);
