import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MainContent from '~/components/MainContent';
import { OptionIcon } from '~/components/Icons';
import styles from './Bookmark.module.scss';
import { authAPI, userApis } from '~/utils/api';
import { calculateTimeSinceCreation } from '~/utils/calculateTimeSinceCreation';

const cx = classNames.bind(styles);

function Bookmark() {
    const [optionsVisibleId, setOptionsVisibleId] = useState(null); 
    const [data, setData] = useState({ bookmarks: [], bookmarkCount: 0 });

    const fetchBookmarkBlogs = async () => {
        try {
            const response = await authAPI().get(userApis.getAllBookmarkBlogs);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchBookmarkBlogs();
    }, []);

    const handleOptionsClick = (id) => {
        setOptionsVisibleId(optionsVisibleId === id ? null : id);
    };

    const handleDeleteBookMark = async (id) => {
        try {
            await authAPI().delete(userApis.deleteBookmarkBlogs(id));
            fetchBookmarkBlogs();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <MainContent title={'Bài viết đã lưu'}>
            <div className={cx('main-container')}>
                <div className="row">
                    <div className="col col-lg-10">
                        <div className={cx('types')}>
                            <ul className={cx('tabs')}>
                                <li>
                                    <span className={cx('actived')}>
                                        Bài viết ({data.bookmarkCount})
                                    </span>
                                </li>
                            </ul>
                            <div className={cx('divider')}></div>
                        </div>

                        {data?.bookmarks && data?.bookmarks.length > 0 ? (
                            data?.bookmarks.map((blog, index) => (
                                <div className={cx('wrapper')} key={index}>
                                    <h3 title={!blog?.blog_id?.is_deleted ? blog.blog_id.title : "Bài viết không tồn tại hoặc đã bị ẩn"}>
                                        <Link to={!blog?.blog_id?.is_deleted ? `/blog/${blog._id}` : '#'}>{!blog?.blog_id?.is_deleted? blog.blog_id.title : "Bài viết không tồn tại hoặc đã bị ẩn"}</Link>
                                    </h3>
                                    <div className={cx('author')}>
                                        <Link to={!blog?.blog_id?.is_deleted ? `/blog/${blog._id}` : '#'}>
                                            Đã lưu {calculateTimeSinceCreation(blog?.createdAt)}
                                        </Link>
                                        <span className={cx('dot')}>·</span>
                                        <span>
                                            Tác giả <strong>{blog?.blog_id?.creator?.name || "Không xác định"}</strong>
                                        </span>
                                    </div>
                                    <HeadlessTippy
                                        visible={optionsVisibleId === blog._id} 
                                        interactive
                                        placement="bottom-end"
                                        onClickOutside={() => setOptionsVisibleId(null)}
                                        render={(attrs) => (
                                            <div tabIndex="-1" className={cx('wrap-popper', 'options')} {...attrs}>
                                                <span onClick={() => handleDeleteBookMark(blog._id)}>Xóa khỏi mục đã lưu</span>
                                            </div>
                                        )}
                                    >
                                        <div
                                            className={cx('more')}
                                            aria-expanded={optionsVisibleId === blog._id} 
                                            onClick={() => handleOptionsClick(blog._id)} 
                                        >
                                            <OptionIcon />
                                        </div>
                                    </HeadlessTippy>
                                </div>
                            ))
                        ) : (
                            <div className={cx('no-bookmarks')}>
                                Không có bài viết đã lưu.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainContent>
    );
}

export default Bookmark;
