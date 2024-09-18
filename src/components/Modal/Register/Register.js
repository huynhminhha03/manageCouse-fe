import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Register.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { ErrorIcon } from '~/components/Icons';
import api, { userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

function Register() {
    const [name, setName] = useState({ value: 'Huỳnh Minh Hà', error: '' });
    const [email, setEmail] = useState({ value: 'hadep12a@gmail.com', error: '' });
    const [password, setPassword] = useState({ value: 'minhha2k3', error: '' });
    const [otp, setOtp] = useState({ value: '', error: '' });
    const [isCodeInputActive, setIsCodeInputActive] = useState(false);
    const [isSendCodeButtonActive, setIsSendCodeButtonActive] = useState(true);
    const [countdown, setCountdown] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission
    const timerRef = useRef(null);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    const handleEmailBlur = async () => {
        handleInputBlur(email.value, setEmail, 'email');
        if (email.value) {
            try {
                await api.post(userApis.checkEmail, { email: email.value });
            } catch (error) {
                console.log(error);
                if (error.response.status === 400) {
                    setEmail((prev) => ({ ...prev, error: 'Email đã tồn tại' }));
                }
            }
        }
    };

    useEffect(() => {
        if (countdown > 0) {
            timerRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
        } else {
            clearTimeout(timerRef.current);
            setIsSendCodeButtonActive(true);
        }
        return () => clearTimeout(timerRef.current);
    }, [countdown]);

    const handleSendCodeClick = async () => {
        setIsSendCodeButtonActive(false);
        setIsCodeInputActive(true);
        setCountdown(60); // Start 60s countdown
        try {
            const response = await api.post(userApis.verifyEmail, { email: email.value });
            console.log(response.data);
        } catch (error) {
            console.log(error);
            setIsSendCodeButtonActive(true);
        }
    };

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true

        try {
            // Đăng ký
            const registerResponse = await api.post(userApis.register, {
                name: name.value,
                email: email.value,
                password: password.value,
                otp: otp.value,
            });
            console.log(registerResponse.data);

            const loginResponse = await api.post(userApis.login, {
                email: email.value,
                password: password.value,
            });
            localStorage.setItem('token', loginResponse.data);
            console.log(loginResponse.data);

            window.location.reload(); // Tải lại trang để cập nhật trạng thái
        } catch (error) {
            console.log(error);
            if (error.response.status === 400) {
                setOtp((prev) => ({ ...prev, error: error.response.data.message }));
            }
        } finally {
            setIsSubmitting(false); // Set isSubmitting to false khi kết thúc
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Tên của bạn?</label>
                </div>
                <div className={cx('input-wrap', name.error && 'invalid')}>
                    <input
                        ref={nameInputRef}
                        placeholder="Họ và tên của bạn"
                        name="name"
                        value={name.value}
                        onChange={handleChange(setName)}
                        onBlur={() => handleInputBlur(name.value, setName)}
                    />
                    {name.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {name.error && <div className={cx('error-message')}>{name.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Email của bạn</label>
                </div>
                <div className={cx('input-wrap', email.error && 'invalid')}>
                    <input
                        placeholder="Email của bạn"
                        name="email"
                        type="email"
                        value={email.value}
                        onChange={handleChange(setEmail)}
                        onBlur={handleEmailBlur}
                    />
                    {email.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {email.error && <div className={cx('error-message')}>{email.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', password.error && 'invalid')}>
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        minLength={6}
                        value={password.value}
                        onChange={handleChange(setPassword)}
                        onBlur={() => handleInputBlur(password.value, setPassword, 'password')}
                    />
                </div>
                {password.error && <div className={cx('error-message')}>{password.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', { disabled: !isCodeInputActive })}>
                    <input
                        disabled={!isCodeInputActive}
                        placeholder="Mã xác nhận"
                        name="otp"
                        maxLength={6}
                        value={otp.value}
                        onChange={(e) => {
                            setOtp({ value: e.target.value, error: '' });
                        }}
                        onBlur={() => handleInputBlur(otp.value, setOtp)}
                    />
                    <div
                        className={cx('right-btn', {
                            disabled:
                                !email.value ||
                                !password.value ||
                                !name.value ||
                                !isSendCodeButtonActive ||
                                email.error ||
                                password.error ||
                                name.error,
                        })}
                        onClick={handleSendCodeClick}
                    >
                        <span>{countdown > 0 ? `Gửi lại mã (${countdown}s)` : 'Gửi mã'}</span>
                    </div>
                </div>
                {otp.error && <div className={cx('error-message')}>{otp.error}</div>}
                {isCodeInputActive && <div className={cx('helper')}>Đã gửi mã! Kiểm tra email của bạn để lấy mã.</div>}
            </InputWrapper>

            <InputWrapper>
                <button
                    type="submit"
                    disabled={isSubmitting || !email.value || !password.value || !otp.value || !name.value}
                    className={cx('submit-btn', {
                        disabled:
                            isSubmitting ||
                            !(email.value && password.value && otp.value && name.value) ||
                            email.error ||
                            password.error ||
                            name.error ||
                            otp.error,

                        rounded: true,
                        primary: true,
                        loading: isSubmitting,
                    })}
                >
                    {isSubmitting ? <Spinner /> : 'Đăng ký'}
                </button>
            </InputWrapper>
        </form>
    );
}

export default Register;
