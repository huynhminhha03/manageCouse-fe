import classNames from 'classnames/bind';

import { ActivedBookmarkIcon, BookMarkIcon, OptionIcon } from '~/components/Icons';
import styles from './PostItem.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import {  useState } from 'react';


const cx = classNames.bind(styles);

function PostItem(params) {
    const { src, alt, name, title, desc, tags, createAt, id, toCreator } = params;
    const navigate = useNavigate();

    const [activedBookmark, setActivedBookmark] = useState(false);

    // const { user } = useContext(UserContext);
    // const { setModalType } = useContext(ModalTypeContext);

    // const bookmarkBlog = async () => {
        
    //     if (user) {
    //         try {
    //             await authAPI().post(userApis.bookmarkBlog(id));
    //             setActivedBookmark(!activedBookmark);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     } else {
    //         setModalType('login');
    //     }
    // };

    // useEffect(() => {
    //     if (user) {
    //         const fetchHasBookmark = async () => {
    //             try {
    //                 const response = await authAPI().get(userApis.checkBookmark(id));
    //                 setActivedBookmark(response.data.bookmarked);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         };
    //         fetchHasBookmark();
    //     }
    // }, [id, user]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('author')} onClick={() => navigate(config.routes.profile(toCreator))}>
                    <div className={cx('avatar')}>
                        <img src={src || 'https://fullstack.edu.vn/assets/fallback-avatar-BFb1fhaR.jpg'} alt={alt} />
                    </div>

                    <span>{name}</span>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('bookmark-btn', { actived: activedBookmark })} 
                    // onClick={bookmarkBlog}
                    onClick={() => setActivedBookmark(!activedBookmark)}
                    
                    >
                        {activedBookmark ? <ActivedBookmarkIcon /> : <BookMarkIcon />}
                    </div>
                    <div className={cx('option-btn')}>
                        <OptionIcon />
                    </div>
                </div>
            </div>
            <div className={cx('body')}>
                <div className={cx('info')}>
                    <Link to={`/blog/${id}`}>
                        <h2 className={cx('title')}>{title}</h2>
                    </Link>
                    <p className={cx('desc')}>{desc}</p>

                    <div className={cx('metaInfo')}>
                        {tags && (
                            <a href="/blog/tag/" className={cx('tags')}>
                                {tags}
                            </a>
                        )}
                        <span>{createAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
