import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import { Link, useNavigate, useParams } from 'react-router-dom';

import styles from './BlogDetails.module.scss';
import config from '~/config';
import Avatar from '~/components/Avatar';
import { ActivedBookmarkIcon, BookMarkIcon, OptionIcon } from '~/components/Icons';
import Interact from '~/components/Interact';
import CommentModal from '~/components/CommentModal';
import { authAPI, userApis } from '~/utils/api';
import { calculateTimeSinceCreation } from '~/utils/calculateTimeSinceCreation';
import UserContext from '~/context/UserContext';
import ModalTypeContext from '~/context/ModalTypeContext';

const cx = classNames.bind(styles);

function BlogDetails() {
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [blogData, setBlogData] = useState({});
    const [activedLike, setActivedLike] = useState(false);
    const [activedBookmark, setActivedBookmark] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [loading, setLoading] = useState(true);

    const { id } = useParams(); // Lấy blogId từ URL
    const [blogId, setBlogId] = useState(id);

    const navigate = useNavigate();

    const { user } = useContext(UserContext);
    const { setModalType } = useContext(ModalTypeContext);

    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                try {
                    
                    const likeResponse = await authAPI().get(userApis.checkLikedBlog(blogId));

                    setActivedLike(likeResponse.data.hasLiked);
                } catch (error) {
                    console.log(error);
                }
            };

            fetchData();
        }
    }, [blogId, user, navigate]);

    const handleClickCommentBtn = () => {
        setShowComment(true);
    };

    const closingCommentModal = () => {
        setShowComment(false);
    };

    const likeBlog = async () => {
        if (user) {
            try {
                setActivedLike(!activedLike);

                await authAPI().post(userApis.likeBlog(blogId));
                // Cập nhật số lượng like sau khi người dùng bấm like/unlike
                const newLikeCount = activedLike ? likeCount - 1 : likeCount + 1;
                setLikeCount(newLikeCount);
            } catch (error) {
                console.log(error);
            }
        } else {
            setModalType('login');
        }
    };

    const bookmarkBlog = async () => {
        if (user) {
            try {
                await authAPI().post(userApis.bookmarkBlog(blogId));
                setActivedBookmark(!activedBookmark);
            } catch (error) {
                console.log(error);
            }
        } else {
            setModalType('login');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [blogResponse, numberLikes, numberComments] = await Promise.all([
                    authAPI().get(userApis.getBlogById(blogId)),
                    authAPI().get(userApis.getNumberBlogLikes(blogId)),
                    authAPI().get(userApis.getNumberBlogComments(blogId)),
                ]);

                // Cập nhật state sau khi cả hai hàm đã hoàn thành
                setBlogData(blogResponse.data);
                setLikeCount(numberLikes.data.count);
                setCommentCount(numberComments.data.count);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [blogId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-xl-3">
                    <div className={cx('aside')}>
                        <Link to={config.routes.profile(blogData?.creator?.slug)}>
                            <h4 className={cx('username')}>{blogData?.creator?.name}</h4>
                        </Link>
                        <p className={cx('userTitle')}>{blogData?.creator?.desc}</p>
                        <hr />
                        <Interact
                            likeCount={likeCount}
                            activedLike={activedLike}
                            onClickCommentBtn={handleClickCommentBtn}
                            onClickLikeBtn={likeBlog}
                            commentCount={commentCount}
                        />
                    </div>
                </div>

                <div className="col col-xl-6">
                    <article>
                        <h1 className={cx('heading')}>{blogData?.title}</h1>
                        <div className={cx('header')}>
                            <div className={cx('user')}>
                                <Link to={config.routes.profile(blogData?.creator?.slug)}>
                                    <Avatar
                                        alt={blogData?.creator?.name}
                                        fontsize="5.6px"
                                        src={blogData?.creator?.avatar}
                                    />
                                </Link>
                                <div className={cx('info')}>
                                    <Link to={config.routes.profile(blogData?.creator?.slug)}>
                                        <span className={cx('name')}>{blogData?.creator?.name}</span>
                                    </Link>
                                    <p className={cx('time')}>{calculateTimeSinceCreation(blogData?.createdAt)}</p>
                                </div>
                            </div>
                            <div className={cx('actions')}>
                                <div
                                    className={cx('bookmark-btn', { actived: activedBookmark })}
                                    onClick={bookmarkBlog}
                                >
                                    {activedBookmark ? <ActivedBookmarkIcon /> : <BookMarkIcon />}
                                </div>
                                <div className={cx('option-btn')}>
                                    <OptionIcon />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div dangerouslySetInnerHTML={{ __html: blogData?.content }} />
                        </div>
                    </article>
                    <div className={cx('body-bottom')}>
                        <Interact
                            likeCount={likeCount}
                            activedLike={activedLike}
                            onClickCommentBtn={handleClickCommentBtn}
                            onClickLikeBtn={likeBlog}
                            commentCount={commentCount}
                        />
                        <div className={cx('wrap-topic')}></div>
                    </div>
                    {showComment && (
                        <CommentModal
                            commentCount={commentCount}
                            setCommentCount={setCommentCount}
                            type="blogs"
                            type_id={blogId}
                            onClose={closingCommentModal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
