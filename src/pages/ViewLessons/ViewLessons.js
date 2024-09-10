import classNames from 'classnames/bind';
import styles from './ViewLessons.module.scss';
import { PrevArrowIcon } from '~/components/Icons';
import { useNavigate, Link, useParams } from 'react-router-dom';
import images from '~/assets/images';
import { useEffect, useState, useCallback } from 'react';
import api, { authAPI, userApis } from '~/utils/api';
import formatDuration from '~/utils/formatDuration';

const cx = classNames.bind(styles);

function ViewLessons() {
    const navigate = useNavigate();
    const { course_id, lesson_id } = useParams();

    const [courseData, setCourseData] = useState(null);
    const [lessonData, setLessonData] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = () => {
        navigate(-1);
    };

    // Hàm để cập nhật URL và lesson được chọn, dùng useCallback để tránh thay đổi mỗi lần render
    const handleSelectLesson = useCallback(
        (lesson) => {
            navigate(`/course/${course_id}/lesson/${lesson._id}`, { replace: true });
            setSelectedLesson(lesson);
        },
        [course_id, navigate]
    );

    // Hàm để chuyển đến bài học trước
    const handlePrevLesson = () => {
        const currentIndex = lessonData.findIndex((lesson) => lesson._id === selectedLesson._id);
        if (currentIndex > 0) {
            handleSelectLesson(lessonData[currentIndex - 1]);
        }
    };

    // Hàm để chuyển đến bài học tiếp theo
    const handleNextLesson = () => {
        const currentIndex = lessonData.findIndex((lesson) => lesson._id === selectedLesson._id);
        if (currentIndex < lessonData.length - 1) {
            handleSelectLesson(lessonData[currentIndex + 1]);
        }
    };

    useEffect(() => {
        const fetchCourseAndLessons = async () => {
            try {
                // Thực hiện cả hai API call cùng lúc
                const [courseRes, lessonsRes] = await Promise.all([
                    api.get(userApis.getCourseDetails(course_id)),
                    authAPI().get(userApis.getLessonsByCourseId(course_id)),
                ]);

                setCourseData(courseRes.data);
                setLessonData(lessonsRes.data);

                if (!lesson_id && lessonsRes.data.length > 0) {
                    handleSelectLesson(lessonsRes.data[0]);
                } else {
                    const currentLesson = lessonsRes.data.find((lesson) => lesson._id === lesson_id);
                    if (currentLesson) {
                        setSelectedLesson(currentLesson);
                    }
                }

                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                navigate('/404');
            }
        };

        fetchCourseAndLessons();
    }, [navigate, course_id, lesson_id, handleSelectLesson]);

    const handleContextMenu = (e) => {
        e.preventDefault(); // Chặn nhấp chuột phải
    };

    if (isLoading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('left')}>
                    <div className={cx('back-btn')} onClick={handleClick}>
                        <PrevArrowIcon />
                    </div>
                    <Link to="/" className={cx('logo')}>
                        <img className={cx('logo')} src={images.logo} alt="Yuko_logo" />
                    </Link>
                    <div className={cx('title')}>{courseData?.title}</div>
                </div>
                <div className={cx('right')}>
                    <span className={cx('total-lesson')}>{lessonData.length} bài học</span>
                </div>
            </div>

            {lessonData.length > 0 && selectedLesson ? (
                <div className={cx('body')}>
                    <div className={cx('video-wrapper')}>
                        <video
                            className={cx('video')}
                            src={selectedLesson.video_url}
                            controls
                            controlsList="nodownload"
                            onContextMenu={handleContextMenu}
                            alt={selectedLesson.title}
                        />
                        <div className={cx('lesson-title')}>{selectedLesson.title}</div>
                        <div className={cx('lesson-actions')}>
                            <div className={cx('navigation')}>
                                <button
                                    className={cx('prev-btn')}
                                    onClick={handlePrevLesson}
                                    disabled={lessonData.findIndex((lesson) => lesson._id === selectedLesson._id) === 0}
                                >
                                    BÀI TRƯỚC
                                </button>
                                <button
                                    className={cx('next-btn')}
                                    onClick={handleNextLesson}
                                    disabled={
                                        lessonData.findIndex((lesson) => lesson._id === selectedLesson._id) ===
                                        lessonData.length - 1
                                    }
                                >
                                    BÀI TIẾP THEO
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={cx('lesson-list')}>
                        {lessonData.map((lesson, index) => (
                            <div
                                key={index}
                                className={cx('lesson-item', { active: lesson._id === selectedLesson._id })}
                                onClick={() => handleSelectLesson(lesson)}
                            >
                                <span>
                                    {index + 1}. {lesson.title}
                                </span>
                                <span>{formatDuration(lesson.duration)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={cx('no-result')}>
                    <span>
                        Chưa có bài học nào trong khoá này.
                        <button onClick={handleClick}>Quay lại ngay</button>
                    </span>
                </div>
            )}
        </div>
    );
}

export default ViewLessons;
