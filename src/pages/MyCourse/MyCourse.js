import { useEffect, useState } from 'react';

import MainContent from '~/components/MainContent';
import CardItem from '~/components/CardItem';
import AddCard from '~/components/AddCard';
import config from '~/config';
import { authAPI, userApis } from '~/utils/api';
import { useNavigate } from 'react-router-dom';

function MyCourse() {
    const [myCourses, setMyCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
       
        const fetchMyCourses = async () => {
            try {
                const response = await authAPI().get(userApis.getMyCourses);
                setMyCourses(response.data);
            } catch (error) {
                console.log(error);
                navigate('/404');

            }
        };
        fetchMyCourses();
    }, [navigate]);

    return (
        <MainContent
            title={'Khóa học của tôi'}
            isEmpty={!!myCourses.length <= 0}
            desc={'Danh sách các khoá học của bạn!'}
            noResults={'Chưa có khoá học nào. Tạo mới ngay!'}
        >
            <div>
                <div className="container">
                    <div className="row">
                        {myCourses.length > 0 &&
                            myCourses.map((course, index) => (
                                <div key={index} className="col mt-5 col-lg-3">
                                    <CardItem
                                        id={course._id}
                                        src={course?.image_url}
                                        title={course?.title}
                                        desc={course?.desc}
                                        isMyCourse
                                    />
                                </div>
                            ))}
                        <div className="col mt-5 col-lg-3">
                            <AddCard to={config.routes.createCourse} />
                        </div>
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default MyCourse;
