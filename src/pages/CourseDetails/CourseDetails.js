import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './CourseDetails.module.scss';
import { VideoIcon } from '~/components/Icons';
import api, { userApis } from '~/utils/api';
import { useParams } from 'react-router-dom';
import formatDate from '~/utils/formatDate';

const cx = classNames.bind(styles);

function CourseDetails() {
    const [courseData, setCourseData] = useState({}); // Gộp courseData và lessonData thành một state
    const { course_id } = useParams(); // Lấy course_id từ URL

    console.log("course-detail", course_id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fetchCourseData = useCallback(async () => {
        if (course_id) {
            try {
                // Sử dụng Promise.all để thực hiện đồng thời các yêu cầu API
                const [courseResponse, lessonResponse] = await Promise.all([
                    api.get(userApis.getCourseDetails(course_id)),
                    api.get(userApis.getQuickViewLessons(course_id)),
                ]);
                
                // Lưu cả hai kết quả vào một state
                setCourseData({
                    ...courseResponse.data,
                    lessons: lessonResponse.data,
                });
            } catch (error) {
                console.error("Error fetching course details and lessons:", error);
            }
        }
    }, [course_id]);

    useEffect(() => {
        fetchCourseData();
    }, [fetchCourseData]);

    return (
        <div className={cx('wrapper')}>
            <div className="container">
                <div className="row">
                    <div className="col col-md-8 col-lg-8">
                        <div className={cx('container')}>
                            <h1 className={cx('heading')}>{courseData.title}</h1>
                            <div className={cx('heading-desc')}>
                                <p>{courseData.desc}</p>
                            </div>

                            <div className={cx('header-sticker')}>
                                <div className={cx('header-block')}>
                                    <h2>Nội dung khóa học</h2>
                                </div>
                                <strong>{courseData.lessons?.length || 0} </strong> bài học
                            </div>

                            <div className={cx('lesson-list')}>
                                {courseData.lessons?.map((lesson, index) => (
                                    <div key={index} className={cx('lesson-item')}>
                                        <span className={cx('icon-link')}>
                                            <VideoIcon />
                                            <div className={cx('lesson-name')}>{lesson?.title}</div>
                                        </span>
                                        <span>{lesson?.duration || '00:00'}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col col-md-4 col-lg-4">
                        <div className={cx('purchase-badge')}>
                            <div className={cx('img-wrapper')}>
                                <div
                                    className={cx('img-bg')}
                                    style={{
                                        backgroundImage: `url(${courseData.image_url})`,
                                    }}
                                ></div>
                            </div>
                            <h5>{courseData.is_free ? 'Miễn phí' : `${courseData.price}đ`}</h5>
                            <span className={cx('start-time')}>Bắt đầu vào {formatDate(courseData.start_time)}</span>

                            <button className={cx('register-btn')}>
                                <span className={cx('inner')}>
                                    <span className={cx('title')}>ĐĂNG KÝ HỌC</span>
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
