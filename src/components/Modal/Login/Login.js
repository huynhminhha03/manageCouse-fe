import classNames from 'classnames/bind';
import { useState, useRef, useEffect, useContext } from 'react';
import styles from './Login.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import { ErrorIcon } from '~/components/Icons';
import RememberLogin from '~/components/RememberLogin';
import api, { userApis } from '~/utils/api';
import Spinner from '~/components/Spinner';
import { UserContext } from '~/context/UserContext';
import axios from 'axios';

const cx = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState({ value: 'ducmanhnguyen0710@gmail.com', error: '' });
    const [password, setPassword] = useState({ value: '071003', error: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // State for form submission

    const { setCurrentUser } = useContext(UserContext);

    const usernameInputRef = useRef(null);

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    useEffect(() => {
        usernameInputRef.current.focus();
        const fetchRequest = async () => {
            try {
                const response = await axios.get('http://localhost:8080/courses/results?title=Học'
                //     , {
                //     email: username.value,
                //     password: password.value,
                // }
            );
                console.log(response.data);
            } catch (error) {
                // Xử lý lỗi ở đây
                console.log(error);
            }
        };
        fetchRequest();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true

        try {
            const response = await api.post(userApis.login, {
                email: username.value,
                password: password.value,
            });

            localStorage.setItem('token', response.data);
            setCurrentUser(true);
            console.log(response.data);
        } catch (error) {
            // Xử lý lỗi ở đây
            setIsSubmitting(false); // Set isSubmitting to true
            console.log(error);
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Tên đăng nhập</label>
                </div>
                <div className={cx('input-wrap', { invalid: username.error })}>
                    <input
                        autoFocus
                        placeholder="Email hoặc Username"
                        name="email"
                        value={username.value}
                        onChange={handleChange(setUsername)}
                        onBlur={() => handleInputBlur(username.value, setUsername)}
                        ref={usernameInputRef}
                    />
                    {username.error && <ErrorIcon className={cx('error-icon')} />}
                </div>
                {username.error && <div className={cx('error-message')}>{username.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <div className={cx('input-wrap', { invalid: password.error })}>
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password.value}
                        onChange={handleChange(setPassword)}
                        onBlur={() => handleInputBlur(password.value, setPassword)}
                    />
                </div>
                {password.error && <div className={cx('error-message')}>{password.error}</div>}
            </InputWrapper>

            <InputWrapper>
                <RememberLogin />
            </InputWrapper>

            <InputWrapper>
                <button
                    onClick={handleSubmit}
                    type="submit"
                    disabled={!username.value || !password.value}
                    className={cx('submit-btn', {
                        disabled: !username.value || !password.value,
                        rounded: true,
                        primary: true,
                        loading: isSubmitting,
                    })}
                >
                    {isSubmitting ? <Spinner /> : 'Đăng nhập'}
                </button>
            </InputWrapper>
        </form>
    );
}

export default Login;
