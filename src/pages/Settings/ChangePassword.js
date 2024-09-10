import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

import styles from './Settings.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { authAPI, userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

function ChangePassword({ onClose, showSuccessModal }) {
    const [password, setPassword] = useState({ value: '', error: '' });
    const [newPassword, setNewPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const passwordRef = useRef(null);

    useEffect(() => {
        passwordRef.current.focus();
    }, []);

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await authAPI().post(userApis.changePassword, {
                currentPassword: password.value,
                newPassword: newPassword.value,
            });

            showSuccessModal(true);
        } catch (error) {
            console.error(error);
            if (error.response.status === 401) {
                setPassword((prev) => ({ ...prev, error: error.response.data.message }));
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReEnterPassword = () => {
        if (confirmPassword.value !== newPassword.value) {
            setConfirmPassword((prev) => ({ ...prev, error: 'Mật khẩu không khớp' }));
        }
    };

    const handleBlurNewPassword = () => {
        if (!newPassword.value) {
            setNewPassword((prev) => ({ ...prev, error: 'Trường này không được để trống' }));
            return;
        }

        if (password.value === newPassword.value) {
            setNewPassword((prev) => ({ ...prev, error: 'Mật khẩu mới phải khác mật khẩu hiện tại.' }));
            return;
        }

        if (newPassword.value.length < 6) {
            setNewPassword((prev) => ({ ...prev, error: 'Mật khẩu phải từ 6 kí tự trở lên' }));
            return;
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label htmlFor="password" className={cx('label')}>
                        Mật khẩu hiện tại
                    </label>
                </div>
                <div className={cx('input-wrap', password.error && 'invalid')}>
                    <input
                        ref={passwordRef}
                        id="password"
                        placeholder="Mật khẩu hiện tại"
                        name="password"
                        type="password"
                        minLength={6}
                        value={password.value}
                        onChange={handleChange(setPassword)}
                        onBlur={() => handleInputBlur(password.value, setPassword, 'currentPassword')}
                    />
                </div>
                {password.error && <div className={cx('error-message')}>{password.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('label-group')}>
                    <label htmlFor="newPassword" className={cx('label')}>
                        Mật khẩu mới
                    </label>
                </div>
                <div className={cx('input-wrap', newPassword.error && 'invalid')}>
                    <input
                        id="newPassword"
                        placeholder="Mật khẩu mới"
                        name="newPassword"
                        type="password"
                        minLength={6}
                        value={newPassword.value}
                        onChange={handleChange(setNewPassword)}
                        onBlur={handleBlurNewPassword}
                    />
                </div>
                {newPassword.error && <div className={cx('error-message')}>{newPassword.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('label-group')}>
                    <label htmlFor="confirmPassword" className={cx('label')}>
                        Nhập lại mật khẩu mới
                    </label>
                </div>
                <div className={cx('input-wrap', confirmPassword.error && 'invalid')}>
                    <input
                        id="confirmPassword"
                        placeholder="Nhập lại mật khẩu mới"
                        name="confirmPassword"
                        type="password"
                        minLength={6}
                        value={confirmPassword.value}
                        onChange={handleChange(setConfirmPassword)}
                        onBlur={handleReEnterPassword}
                    />
                </div>
                {confirmPassword.error && <div className={cx('error-message')}>{confirmPassword.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !password.value ||
                        !newPassword.value ||
                        !confirmPassword.value ||
                        password.error ||
                        newPassword.error ||
                        confirmPassword.error
                    }
                    className={cx('submit-btn', {
                        disabled:
                            isSubmitting ||
                            !(password.value && newPassword.value && confirmPassword.value) ||
                            password.error ||
                            newPassword.error ||
                            confirmPassword.error,
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

export default ChangePassword;
