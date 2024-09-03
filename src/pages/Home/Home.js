import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/components/Layouts/components/Slider';
import Classify from '~/components/Classify';
import CardItem from '~/components/CardItem';
import { useEffect, useState } from 'react';
import api, { userApis } from '~/utils/api';

const cx = classNames.bind(styles);

function Home() {
    const [courses, setCourses] = useState('');

    useEffect(() => {
        const fetchAllCourse = async () => {
            try {
                const response = await api.get(userApis.getAllCourses);
                setCourses(response.data);
                console.log('response: ', response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllCourse();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider />
            <div className={cx('body')}>
                <Classify title="Khóa học Pro" label={'Mới'} viewMore={'Xem tất cả'}>
                    <div className="row">
                        {courses &&
                            courses?.proCourses &&
                            courses?.proCourses.map((proCourse, index) => (
                                <div key={index} className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                                    <CardItem
                                        id={proCourse._id}
                                        src={proCourse?.image_url}
                                        title={proCourse?.title}
                                        desc={proCourse?.desc}
                                        price={proCourse?.price}
                                        isFree={proCourse?.is_free}
                                        name={proCourse?.creator?.name}
                                        avatar={proCourse?.creator?.avatar}
                                    />
                                </div>
                            ))}
                    </div>
                </Classify>

                <Classify title="Khóa học miễn phí" viewMore={'Xem tất cả'}>
                    <div className="row">
                        {courses &&
                            courses?.freeCourses &&
                            courses?.freeCourses.map((freeCourse, index) => (
                                <div key={index} className="col mt-5 col-lg-3 col-md-4 col-sm-6">
                                    <CardItem
                                        id={freeCourse._id}
                                        src={freeCourse?.image_url}
                                        title={freeCourse?.title}
                                        desc={freeCourse?.desc}
                                        price={freeCourse?.price}
                                        isFree={freeCourse?.is_free}
                                        name={freeCourse?.creator?.name}
                                        avatar={freeCourse?.creator?.avatar}
                                    />
                                </div>
                            ))}
                    </div>
                </Classify>
            </div>
        </div>
    );
}

export default Home;
