import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ResetPassword.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import api, { userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';

const cx = classNames.bind(styles);

function ResetPassword({ setResetPasswordSuccess, setModalType }) {
    const [newPassword, setNewPassword] = useState({ value: '', error: '' });
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Xác thực mật khẩu
        if (!newPassword.value || !confirmPassword.value) {
            setNewPassword((prev) => ({
                ...prev,
                error: !newPassword.value ? 'Vui lòng nhập mật khẩu mới.' : '',
            }));
            setConfirmPassword((prev) => ({
                ...prev,
                error: !confirmPassword.value ? 'Vui lòng nhập lại mật khẩu mới.' : '',
            }));
            setIsSubmitting(false);
            return;
        }

        if (newPassword.value !== confirmPassword.value) {
            setConfirmPassword((prev) => ({
                ...prev,
                error: 'Mật khẩu mới và mật khẩu xác nhận không khớp.',
            }));
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await api.post(userApis.resetPassword, {
                newPassword: newPassword.value,
            });

            console.log(response.data);
            setIsSubmitting(false);
            setResetPasswordSuccess(true);
            setModalType('loginEmail')
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <InputWrapper>
                <div className={cx('input-wrap', newPassword.error && 'invalid')}>
                    <input
                        placeholder="Mật khẩu mới"
                        name="newPassword"
                        type="password"
                        minLength={6}
                        value={newPassword.value}
                        onChange={handleChange(setNewPassword)}
                        onBlur={() => handleInputBlur(newPassword.value, setNewPassword, 'password')}
                    />
                </div>
                {newPassword.error && <div className={cx('error-message')}>{newPassword.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', confirmPassword.error && 'invalid')}>
                    <input
                        placeholder="Nhập lại mật khẩu mới"
                        name="confirmPassword"
                        type="password"
                        minLength={6}
                        value={confirmPassword.value}
                        onChange={handleChange(setConfirmPassword)}
                        onBlur={() => handleInputBlur(confirmPassword.value, setConfirmPassword, 'password')}
                    />
                </div>
                {confirmPassword.error && <div className={cx('error-message')}>{confirmPassword.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <button
                    type="submit"
                    disabled={
                        isSubmitting ||
                        !newPassword.value ||
                        !confirmPassword.value ||
                        newPassword.error ||
                        confirmPassword.error
                    }
                    className={cx('submit-btn', {
                        disabled: isSubmitting || !(newPassword.value && confirmPassword.value),
                        rounded: true,
                        primary: true,
                        loading: isSubmitting,
                    })}
                >
                    {isSubmitting ? <Spinner /> : 'Đặt lại mật khẩu'}
                </button>
            </InputWrapper>
        </form>
    );
}

export default ResetPassword;
