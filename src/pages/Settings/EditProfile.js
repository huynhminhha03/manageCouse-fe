import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import styles from './Settings.module.scss';
import InputWrapper from '~/components/InputWrapper';
import { handleInputBlur } from '~/utils/handleInputBlur';
import Spinner from '~/components/Spinner';
import { authAPI, userApis } from '~/utils/api';

const cx = classNames.bind(styles);

function EditProfile({ onClose, userData }) {
    const [name, setName] = useState({ value: userData?.name || '', error: '' });
    const [username, setUsername] = useState({ value: userData?.slug || '', error: '' });
    const [desc, setDesc] = useState({ value: userData?.desc || '', error: '' });
    const [avatar, setAvatar] = useState(null);  
    const [avatarPreview, setAvatarPreview] = useState(userData?.avatar || null); 
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current?.focus();
    }, []);

    const handleChange = (setter) => (e) => {
        setter({ value: e.target.value, error: '' });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);  // Lưu file ảnh
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result);  // Hiển thị ảnh xem trước
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('slug', username.value);
        formData.append('desc', desc.value);
        if (avatar) {
            formData.append('avatar', avatar);  // Thêm file ảnh vào formData
        }

        try {
            await authAPI().patch(userApis.updateCurrentUser, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            onClose();
            window.location.reload(); 
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);

            if (error.response.status === 400) {
                setUsername((prev) => ({ ...prev, error: error.response.data.message }));
            }
        }
    };

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className={cx('form-container')}>
            {/* Input Họ và tên */}
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Họ và tên</label>
                </div>
                <div className={cx('input-wrap', { invalid: name.error })}>
                    <input
                        ref={nameInputRef}
                        placeholder="Họ và tên"
                        name="name"
                        type="text"
                        value={name.value}
                        onChange={handleChange(setName)}
                        onBlur={() => handleInputBlur(name.value, setName, 'name')}
                    />
                </div>
                {name.error && <div className={cx('error-message')}>{name.error}</div>}
            </InputWrapper>

            {/* Input Tên người dùng */}
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Tên người dùng</label>
                </div>
                <div className={cx('input-wrap', { invalid: username.error })}>
                    <input
                        placeholder="Tên người dùng"
                        name="username"
                        type="text"
                        value={username.value}
                        onChange={handleChange(setUsername)}
                        onBlur={() => handleInputBlur(username.value, setUsername, 'username')}
                    />
                </div>
                {username.error && <div className={cx('error-message')}>{username.error}</div>}
            </InputWrapper>

            {/* Input Giới thiệu */}
            <InputWrapper>
                <div className={cx('label-group')}>
                    <label className={cx('label')}>Giới thiệu</label>
                </div>
                <textarea
                    className={cx('desc')}
                    placeholder="Giới thiệu"
                    name="desc"
                    value={desc.value}
                    onChange={handleChange(setDesc)}
                    onBlur={() => handleInputBlur(desc.value, setDesc, 'desc')}
                />
                {desc.error && <div className={cx('error-message')}>{desc.error}</div>}
            </InputWrapper>

            {/* Input Chọn ảnh đại diện */}
            <div className={cx('label-group')}>
                <label className={cx('label')}>Ảnh đại diện</label>
            </div>
            <div className={cx('input-wrap')}>
                <input type="file"  onChange={handleAvatarChange} />
            </div>
            <div className={cx('img-wrapper')}>
                {avatarPreview && <img src={avatarPreview} alt="Avatar preview" className={cx('avatar-preview')} />}
            </div>

            {/* Nút submit */}
            <InputWrapper>
                <button
                    type="submit"
                    disabled={isSubmitting || !name.value || !username.value}
                    className={cx('submit-btn', {
                        disabled: isSubmitting || !name.value || !username.value,
                        rounded: true,
                        primary: true,
                        loading: isSubmitting,
                    })}
                >
                    {isSubmitting ? <Spinner /> : 'Cập nhật'}
                </button>
            </InputWrapper>
        </form>
    );
}

export default EditProfile;
