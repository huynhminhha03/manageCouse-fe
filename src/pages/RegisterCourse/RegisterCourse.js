import MainContent from '~/components/MainContent';
import CardItem from '~/components/CardItem';
import { useEffect, useState } from 'react';
import { authAPI, userApis } from '~/utils/api';

function RegisterCourse() {
    const [registerCourse, setRegisterCourses] = useState([]);

    const completedCourses = <strong>{registerCourse.length}</strong>;
    const description = <>Bạn đã đăng ký {completedCourses} khóa học của bạn.</>;

    useEffect(() => {
        const handleFetchRegisterCourses = async () => {
            try {
                const response = await authAPI().get(userApis.getRegisterCourses);
                setRegisterCourses(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        handleFetchRegisterCourses();
    }, []);
    return (
        <MainContent title={'Khóa học đã đăng ký'} desc={description}>
            <div>
                <div className="container">
                    <div className="row">
                        {registerCourse ? (
                            registerCourse.map((course, index) => (
                                <div className="col mt-5 col-lg-3" key={index}>
                                    <CardItem
                                        src={course?.imageUrl}
                                        title={course?.title}
                                        desc={course?.title}
                                        id={course?.id}
                                        isRegisterCourse
                                    />
                                </div>
                            ))
                        ) : (
                            <div> Bạn chưa đăng ký khoá học nào</div>
                        )}
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default RegisterCourse;
