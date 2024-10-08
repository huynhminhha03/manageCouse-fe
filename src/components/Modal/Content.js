import { useState, useContext } from 'react';
import ModalTypeContext from '~/context/ModalTypeContext';
import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import routes from '~/config/routes';
import images from '~/assets/images';
import { FacebookIcon, GithubIcon, GoogleIcon, PrevArrowIcon, TickIcon, UserIcon } from '~/components/Icons';
import config from '~/config';
import { toCamelCase } from '~/utils/toCamelCase';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';

const cx = classNames.bind(styles);

const LoginIcons = [
    {
        icon: <UserIcon />,
        title: 'Đăng nhập bằng Email',
        to: config.routes.loginEmail,
    },
    {
        icon: <GoogleIcon />,
        title: 'Đăng nhập với Google',
        onClick: () => (window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`),
    },
    {
        icon: <FacebookIcon />,
        title: 'Đăng nhập với Facebook',
        to: config.routes.post,
    },
    {
        icon: <GithubIcon />,
        title: 'Đăng nhập với Github',
        to: config.routes.post,
    },
];

const RegisterIcons = [
    {
        icon: <UserIcon />,
        title: 'Đăng ký bằng Email',
        to: config.routes.registerEmail,
    },
    {
        icon: <GoogleIcon />,
        title: 'Đăng ký với Google',
        onClick: () => (window.location.href = `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`),
    },
    {
        icon: <FacebookIcon />,
        title: 'Đăng ký với Facebook',
        to: config.routes.post,
    },
    {
        icon: <GithubIcon />,
        title: 'Đăng ký với Github',
        to: config.routes.post,
    },
];

function Content() {
    const { modalType, setModalType } = useContext(ModalTypeContext);
    const [previousModalType, setPreviousModalType] = useState(null);
    console.log(modalType);
    const icons = modalType === 'register' ? RegisterIcons : LoginIcons;

    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

    const handleClick = (e, to) => {
        e.preventDefault();
        const camelCaseScreen = toCamelCase(to);
        console.log(camelCaseScreen);
        console.log(to);
        setPreviousModalType(modalType);
        setModalType(camelCaseScreen);
    };

    const handleBackClick = () => {
        if (previousModalType) {
            setModalType(previousModalType);
            setPreviousModalType(null); // Reset previous modal type
        }
    };

    return (
        <div className={cx('container')}>
            <header className={cx('header')}>
                <a href={routes.home}>
                    <img className={cx('logo')} src={images.logo} alt="Yuko_logo" />
                </a>
                <h1 className={cx('heading')}>
                    {modalType.includes('register')
                        ? 'Đăng ký tài khoản Yuko'
                        : modalType.includes('login')
                          ? 'Đăng nhập tài khoản Yuko'
                          : modalType === 'forgotPassword'
                            ? 'Quên mật khẩu?'
                            : 'Đặt lại mật khẩu'}
                </h1>
                <p
                    className={cx(
                        modalType !== 'forgotPassword' && modalType !== 'resetPassword' ? 'warn' : 'description',
                    )}
                >
                    {modalType === 'forgotPassword'
                        ? 'Nhập email của bạn và chúng tôi sẽ gửi cho bạn mã khôi phục mật khẩu.'
                        : modalType === 'resetPassword'
                          ? 'Đặt mật khẩu mới cho tài khoản của bạn để có thể tiếp tục truy cập các khóa học.'
                          : 'Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.'}
                </p>
                {resetPasswordSuccess && modalType === 'loginEmail' && (
                    <p className={cx('message')}>
                        <TickIcon />
                        Mật khẩu đã được đặt lại. Vui lòng đăng nhập.
                    </p>
                )}
                {previousModalType && (
                    <button className={cx('back-btn')} onClick={handleBackClick}>
                        <PrevArrowIcon />
                        Quay lại
                    </button>
                )}
            </header>
            <main className={cx('main')}>
                <div className={cx('main-content')}>
                    {modalType === 'register' || modalType === 'login' ? (
                        <>
                            {icons.map((item, index) => (
                                <a
                                    href={item.to}
                                    className={cx('wrapper-btn')}
                                    key={index}
                                    onClick={!item.to ? item.onClick : (e) => handleClick(e, item.to)}
                                >
                                    <span className={cx('icon')}>{item.icon}</span>
                                    <span className={cx('title')}>{item.title}</span>
                                </a>
                            ))}
                        </>
                    ) : modalType === 'loginEmail' ? (
                        <Login />
                    ) : modalType === 'registerEmail' ? (
                        <Register />
                    ) : modalType === 'forgotPassword' ? (
                        <ForgotPassword setModalType={setModalType} />
                    ) : (
                        <ResetPassword setModalType={setModalType} setResetPasswordSuccess={setResetPasswordSuccess} />
                    )}

                    {modalType !== 'forgotPassword' && modalType !== 'resetPassword' && (
                        <p className={cx('register-or-login')}>
                            {modalType === 'register' ? 'Bạn đã có tài khoản?' : 'Bạn chưa có tài khoản?'}{' '}
                            <span onClick={() => setModalType(modalType === 'register' ? 'login' : 'register')}>
                                {modalType === 'register' ? 'Đăng nhập' : 'Đăng ký'}
                            </span>
                        </p>
                    )}

                    {modalType !== 'forgotPassword' && modalType !== 'resetPassword' && (
                        <span className={cx('forgot-password')} onClick={() => handleClick('forgotPassword')}>
                            Quên mật khẩu?
                        </span>
                    )}

                    <p className={cx('policy')}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
                        <span>điều khoản sử dụng</span> của chúng tôi.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Content;
