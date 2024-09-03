import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useNavigate, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import styles from './CreateCourse.module.scss';
import { authAPI, userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

function CreateCourse() {
    const [formData, setFormData] = useState({
        title: 'Learn Node and ExpressJS',
        desc: 'Learn Node and ExpressJS with many useful lessons',
        start_time: '2024-09-15',
        price: '',
        is_free: false,
    });
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { course_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (course_id) {
            const fetchMyCourseDetails = async () => {
                try {
                    const response = await authAPI().get(userApis.getMyCourseDetails(course_id));
                    const course = response.data;
                    const { start_time } = course;
                    const formattedDate = format(parseISO(start_time), 'yyyy-MM-dd');

                    setFormData({
                        title: course.title || '',
                        desc: course.desc || '',
                        start_time: formattedDate || '',
                        price: course.price || '',
                        is_free: course.price === 0 || false,
                    });
                    setImagePreview(course.image_url);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchMyCourseDetails();
        }
    }, [course_id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSubmit = new FormData();
        dataToSubmit.append('title', formData.title);
        dataToSubmit.append('desc', formData.desc);
        dataToSubmit.append('start_time', formData.start_time);
        dataToSubmit.append('price', formData.is_free ? 0 : formData.price);
        dataToSubmit.append('is_free', formData.is_free);
        console.log('image', image);
        console.log('dataToSubmit', dataToSubmit);
        if (image) dataToSubmit.append('image', image);

        try {
            setIsSubmitting(true);

            if (course_id) {
                const response = await authAPI().patch(userApis.updateCourse(course_id), dataToSubmit, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log(response.data);
            } else {
                const response = await authAPI().post(userApis.createCourse, dataToSubmit, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response.data);
            }
            setIsSubmitting(false);
            navigate('/my-course');
        } catch (error) {
            setIsSubmitting(false);
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <form className={cx('course-form')} onSubmit={handleSubmit}>
            <h1 className={cx('heading')}>{course_id ? 'Chỉnh sửa khoá học' : 'Tạo khoá học mới'}</h1>
            <div className={cx('form-group')}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter course title"
                    required
                />
            </div>

            <div className={cx('form-group')}>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required={!course_id}/>
                {imagePreview && (
                    <img src={imagePreview} alt="Preview of the selected file" className={cx('image-preview')} />
                )}
            </div>

            <div className={cx('form-group')}>
                <label htmlFor="desc">Description</label>
                <textarea
                    id="desc"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    placeholder="Enter course description"
                ></textarea>
            </div>

            <div className={cx('form-group')}>
                <label htmlFor="start_time">Start Time</label>
                <input
                    type="date"
                    id="start_time"
                    name="start_time"
                    value={formData.start_time}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={cx('form-group', { hidden: formData.is_free })}>
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter course price"
                    required={!formData.is_free}
                />
            </div>

            <div className={cx('form-group', 'checkbox-group')}>
                <label htmlFor="is_free" className={cx('checkbox-label')}>
                    <input
                        type="checkbox"
                        id="is_free"
                        name="is_free"
                        checked={formData.is_free}
                        onChange={handleChange}
                    />
                    <span className={cx('checkbox-text')}>Is Free</span>
                </label>
            </div>

            <button type="submit" className={cx('submit-button')} disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : course_id ? 'Chỉnh sửa' : 'Thêm khoá học'}
            </button>
        </form>
    );
}

export default CreateCourse;
