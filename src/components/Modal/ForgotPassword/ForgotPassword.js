import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './ForgotPassword.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { ErrorIcon } from '~/components/Icons';
import api, { userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

function ForgotPassword({ setModalType }) {
    const [email, setEmail] = useState({ value: 'hadep7a@gmail.com', error: '' });

    const [otp, setOtp] = useState({ value: '', error: '' });
    const [isCodeInputActive, setIsCodeInputActive] = useState(false);
    const [isSendCodeButtonActive, setIsSendCodeButtonActive] = useState(true);
    const [countdown, setCountdown] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission
    const timerRef = useRef(null);

    const emailInputRef = useRef(null);

    useEffect(() => {
        emailInputRef.current.focus();
    }, []);

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
        setIsCodeInputActive(true);
        setIsSendCodeButtonActive(false);
        setCountdown(60); // Start 120s countdown
        try {
            const response = await api.post(userApis.sendOTP, {
                email: email.value,
            });
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
            await api.post(userApis.verifyOTP, {
                email: email.value,
                otp: otp.value,
            });

            setModalType('resetPassword');
        } catch (error) {
            console.log(error);
            if (error.response.status === 400) {
                setOtp((prev) => ({ ...prev, error: error.response.data.message }));
            }
            setIsSubmitting(false);
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Email của bạn</label>
                </div>
                <div className={cx('input-wrap', email.error && 'invalid')}>
                    <input
                        ref={emailInputRef}
                        placeholder="Email của bạn"
                        name="email"
                        type="email"
                        value={email.value}
                        onChange={handleChange(setEmail)}
                        onBlur={() => handleInputBlur(email.value, setEmail, 'email')}
                    />
                    {email.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {email.error && <div className={cx('error-message')}>{email.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', { disabled: !isCodeInputActive })}>
                    <input
                        disabled={!isCodeInputActive}
                        placeholder="Mã xác nhận"
                        name="otp"
                        maxLength={6}
                        value={otp.value}
                        onChange={(e) => setOtp({ value: e.target.value, error: '' })}
                        onBlur={() => handleInputBlur(otp.value, setOtp)}
                    />
                    <div
                        className={cx('right-btn', {
                            disabled: !(email.value && isSendCodeButtonActive) || email.error,
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
                    disabled={isSubmitting || !email.value || !otp.value}
                    className={cx('submit-btn', {
                        disabled: isSubmitting || !(email.value && otp.value) || email.error || otp.error,
                        rounded: true,
                        primary: true,
                        loading: isSubmitting,
                    })}
                >
                    {isSubmitting ? <Spinner /> : 'Xác nhận'}
                </button>
            </InputWrapper>
        </form>
    );
}

export default ForgotPassword;
