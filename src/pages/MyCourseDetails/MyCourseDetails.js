import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import styles from './MyCourseDetails.module.scss';
import { authAPI, userApis } from '~/utils/api';
import { VideoIcon } from '~/components/Icons';
import DeleteModal from '~/components/DeleteModal';

const cx = classNames.bind(styles);

function MyCourseDetails() {
    const [course, setCourse] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const { course_id } = useParams();
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await authAPI().get(userApis.getMyCourseDetails(course_id));
                setCourse(response.data);

                // Fetch các bài học liên quan đến khóa học
                const lessonsResponse = await authAPI().get(userApis.getLessonsByCourseId(course_id));
                setLessons(lessonsResponse.data);
            } catch (error) {
                console.error('Failed to fetch course data:', error);
                navigate('/404');

            }
        };

        fetchCourse();
    }, [course_id, navigate]);

    const handleEdit = () => {
        // Điều hướng đến trang chỉnh sửa khóa học
        navigate(`/course/${course_id}/edit`);
    };

    const handleDelete = async () => {
        try {
            await authAPI().delete(userApis.deleteCourse(course_id));
            navigate('/my-course');
        } catch (error) {
            console.error('Failed to delete course:', error);
        }
    };

    const hideDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div>
            {course ? (
                <div className={cx('wrapper')}>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-6">
                                <div className={cx('course-image')}>
                                    <img src={course.image_url} alt={course.title} />
                                </div>
                                <div className={cx('course-info')}>
                                    <h1 className={cx('course-title')}>{course.title}</h1>
                                    <p className={cx('course-desc')}>{course.desc}</p>
                                    <p className={cx('course-start')}>
                                        <strong>Start Time:</strong> {format(parseISO(course.start_time), 'dd-MM-yyyy')}
                                    </p>
                                    <p className={cx('course-price')}>
                                        <strong>Price:</strong> {course.is_free ? 'Free' : `${course.price}đ`}
                                    </p>
                                    {course.is_locked && (
                                        <p className={cx('course-locked')}>
                                            <strong>Locked by:</strong> {course.locked_by?.name || 'Unknown'}
                                        </p>
                                    )}

                                    {/* Nút Chỉnh sửa và Xóa */}
                                    <div className={cx('course-actions')}>
                                        <button onClick={handleEdit} className={cx('btn', 'btn-edit')}>
                                            Chỉnh sửa
                                        </button>
                                        <button
                                            onClick={() => setShowDeleteModal(true)}
                                            className={cx('btn', 'btn-delete')}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                    {showDeleteModal && (
                                        <DeleteModal
                                            title="Xác nhận Xoá"
                                            onClose={hideDeleteModal}
                                            onConfirm={handleDelete}
                                        >
                                            {`Bạn chắc chắn muốn xoá khoá học này. Tất cả bài học của khoá học này cũng sẽ mất? `}
                                        </DeleteModal>
                                    )}

                                    {/* Danh sách Bài học */}
                                </div>
                            </div>
                            <div className="col col-lg-6">
                                <div className={cx('lessons')}>
                                    <h2>Danh sách Bài học</h2>

                                    {lessons.length > 0 ? (
                                        <ul className={cx('lesson-list')}>
                                            <Link className={cx('new-lesson')} to={`/my-course/${course_id}/lesson`}>
                                                Thêm khoá học mới!
                                            </Link>

                                            {lessons.map((lesson) => (
                                                <Link key={lesson._id} to={`/my-course/${course_id}/lesson/${lesson._id}`}>
                                                    <li  className={cx('lesson-item')}>
                                                        <span>{lesson.title}</span>
                                                        <VideoIcon />
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>
                                            Không có bài học nào trong khóa học này.{' '}
                                            <Link to={`/my-course/${course_id}/lesson`}>Thêm ngay!</Link>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default MyCourseDetails;
