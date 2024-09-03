import MainContent from '~/components/MainContent';
import CardItem from '~/components/CardItem';

function RegisterCourse() {
    const completedCourses = <strong>6</strong>;
    const description = <>Bạn đã đăng ký {completedCourses} khóa học của bạn.</>;

    return (
        <MainContent title={'Khóa học đã đăng ký'} desc={description}>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>

                        <div className="col mt-5 col-lg-3">
                            <CardItem
                                src={'https://files.fullstack.edu.vn/f8-prod/courses/6.png'}
                                title={'Node & ExpressJS'}
                                desc={'Node & ExpressJS'}
                                id={'node-expressJs'}
                                isMyCourse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default RegisterCourse;
