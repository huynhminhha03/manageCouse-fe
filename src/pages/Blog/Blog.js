import classNames from 'classnames/bind';
import React, { useEffect, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';

import styles from './Blog.module.scss';
import MainContent from '~/components/MainContent';
import PostItem from '~/components/PostItem';
import { NextPageIcon, PrevPageIcon } from '~/components/Icons';
import Topic from '~/components/Topic';
import { authAPI, userApis } from '~/utils/api';
import config from '~/config';
import { calculateTimeSinceCreation } from '~/utils/calculateTimeSinceCreation';

const cx = classNames.bind(styles);

function Blog() {
    const { slug: initialSlug } = useParams(); // Lấy slug từ URL
    const location = useLocation(); // Lấy thông tin về URL hiện tại
    const queryParams = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(queryParams.get('page')) || 1;

    const [activePage, setActivePage] = useState(pageFromUrl);
    const [topic, setTopic] = useState('');
    const [desc, setDesc] = useState('');
    const [slug, setSlug] = useState(initialSlug || '');
    const [dataBlogs, setDataBlogs] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // Trạng thái tải dữ liệu

    const navigate = useNavigate();
    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
        if (!slug) {
            window.history.pushState(null, '', `/blog?page=${pageNumber}`);
        } else {
            window.history.pushState(null, '', `/blog/topic/${slug}?page=${pageNumber}`);
        }
    };

    const handleChangeTopic = ({ label, desc, slug }) => {
        setTopic(label);
        setDesc(desc);
        setSlug(slug);
        window.history.pushState(null, '', `/blog/topic/${slug}`);
        setActivePage(1); // Reset page về 1 khi đổi chủ đề
    };

    const fetchDataBlogs = useCallback(
        async (page, slug) => {
            try {
                let response;
                if (!slug) {
                    response = await authAPI().get(userApis.getAllBlogs, {
                        params: { page },
                    });
                } else {
                    response = await authAPI().get(userApis.getBlogsByTopic(slug), {
                        params: { page },
                    });
                }
                setDataBlogs(response.data.data);
                setTotalPages(Math.ceil(response.data.total / response.data.limit));
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
        fetchDataBlogs(activePage, slug);
    }, [activePage, slug, fetchDataBlogs]);

    return (
        <MainContent
            title={topic || 'Bài viết nổi bật'}
            desc={
                desc ||
                'Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.'
            }
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
                        <div className="col col-lg-3">
                            <Topic setTopic={handleChangeTopic} isTopicActivated={slug} />
                        </div>
                    </div>
                </div>
            )}
        </MainContent>
    );
}

export default Blog;
