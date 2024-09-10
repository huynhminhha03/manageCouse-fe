import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CardItem.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function CardItem({ isRegisterCourse, id, src, title, desc, isMyCourse, isFree, price, name, avatar }) {

    const courseLink = isMyCourse ? `/my-course/${id}` : `/course/${id}`;
    return (
        <div className={cx('wrapper')}>
            <Link to={courseLink} className={cx('link')}>
                <img className={cx('thumb')} src={src} alt={title} />
            </Link>

            <div className={cx('content')}>
                <h3 className={cx('title')}>
                    <Link to={courseLink}>{title}</Link>
                </h3>

                <p className={cx('desc')}>{desc}</p>

                {!isMyCourse && !isRegisterCourse && (
                    <>
                        <div className={cx('price')}>
                            <span className={cx('main-price')}>{!isFree ? `${price}đ` : 'Miễn phí'}</span>
                        </div>

                        {/* Teacher Info */}
                        <div className={cx('more-info')}>
                            <div className={cx('info-item')} title={`Teacher: ${name}`}>
                                <div className={cx('avatar')}>
                                    <img src={avatar || images.defaultAvatar} alt={name} />
                                </div>
                                <span>{name}</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CardItem;
