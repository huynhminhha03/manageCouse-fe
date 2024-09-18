import classNames from 'classnames/bind';
import React, { useEffect, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Blog.module.scss';
import MainContent from '~/components/MainContent';
import PostItem from '~/components/PostItem';
import { NextPageIcon, PrevPageIcon } from '~/components/Icons';
import { authAPI, userApis } from '~/utils/api';
import config from '~/config';
import { calculateTimeSinceCreation } from '~/utils/calculateTimeSinceCreation';

const cx = classNames.bind(styles);

function Blog() {
    const location = useLocation(); // Lấy thông tin về URL hiện tại
    const queryParams = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(queryParams.get('page')) || 1;

    const [activePage, setActivePage] = useState(pageFromUrl);

    const [dataBlogs, setDataBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();
    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
        window.history.pushState(null, '', `/blog?page=${pageNumber}`);
    };

    const fetchDataBlogs = useCallback(
        async (page) => {
            try {
                const response = await authAPI().get(userApis.getAllBlogs, {
                    params: { page },
                });
                console.log(response.data.data);
                setDataBlogs(response.data.content);
                setTotalPages(response.data.totalPages);
                setIsLoading(false); // Dữ liệu đã được tải xong
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                navigate('/404');
            }
        },
        [navigate],
    );

    useEffect(() => {
        fetchDataBlogs(activePage);
    }, [activePage, fetchDataBlogs]);

    return (
        <MainContent
            title={'Bài viết nổi bật'}
            desc={'Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.'}
        >
            {isLoading ? (
                <div className={cx('loading')}>Đang tải dữ liệu...</div> // Hiển thị thông báo tải dữ liệu
            ) : (
                <div className={cx('main-container')}>
                    <div className="row">
                        <div className="col col-lg-9">
                            {dataBlogs.length > 0 ? (
                                <div className={cx('left-layout')}>
                                    {dataBlogs.map((blog, index) => (
                                        <PostItem
                                            toCreator={blog?.creator?.slug}
                                            creatorId={blog?.creator?._id}
                                            id={blog?._id}
                                            key={index}
                                            content={blog?.content}
                                            src={blog?.creator?.avatar}
                                            alt={blog?.creator?.name}
                                            name={blog?.creator?.name}
                                            title={blog?.title}
                                            desc={blog?.desc}
                                            tags={blog?.topic?.name}
                                            createAt={calculateTimeSinceCreation(blog?.createdAt)}
                                        />
                                    ))}

                                    <div className={cx('page-wrapper')}>
                                        <div className={cx('page-container')}>
                                            <div
                                                className={cx('page', { disabled: activePage === 1 })}
                                                onClick={() => activePage > 1 && handlePageClick(activePage - 1)}
                                            >
                                                <PrevPageIcon />
                                            </div>
                                            {[...Array(totalPages)].map((_, pageNumber) => (
                                                <div
                                                    key={pageNumber + 1}
                                                    className={cx('page', { active: activePage === pageNumber + 1 })}
                                                    onClick={() => handlePageClick(pageNumber + 1)}
                                                >
                                                    {pageNumber + 1}
                                                </div>
                                            ))}
                                            <div
                                                className={cx('page', { disabled: activePage === totalPages })}
                                                onClick={() =>
                                                    activePage < totalPages && handlePageClick(activePage + 1)
                                                }
                                            >
                                                <NextPageIcon />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={cx('no-result')}>
                                    Hiện chưa có bài viết về chủ đề này.
                                    <Link to={config.routes.createBlog}> Tạo bài mới ngay!</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </MainContent>
    );
}

export default Blog;
