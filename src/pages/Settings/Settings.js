import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import images from '~/assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI, userApis } from '~/utils/api';
import Modal from '~/components/Modal';
import ChangePassword from './ChangePassword';
import SuccessModal from '~/components/SuccessModal';
import EditProfile from './EditProfile';

const cx = classNames.bind(styles);

function Settings() {
    const [currentSection, setCurrentSection] = useState('info');
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await authAPI().get(userApis.getCurrentUser);
                setUserData(response.data);
                console.log('user-data ', response.data);
            } catch (error) {
                console.log(error);
                navigate('/404');
            }
        };
        fetchUserData();
    }, [navigate]);

    const handleEdit = () => {
        setShowEditProfile(!showEditProfile);
    };

    const closeEditProfile = () => {
        setShowEditProfile(false);
    };

    const handleShowChangePassword = () => {
        setShowChangePassword(true);
    };

    const closeChangePassword = () => {
        setShowChangePassword(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col col-lg-4">
                        <div className={cx('sidebar')}>
                            <Link to="/">
                                <img className={cx('logo')} src={images.logo} alt="Yuko" />
                            </Link>
                            <ul>
                                <li
                                    className={cx({ active: currentSection === 'info' })}
                                    onClick={() => setCurrentSection('info')}
                                >
                                    <span>Thông tin cá nhân</span>
                                </li>
                                <li
                                    className={cx({ active: currentSection === 'security' })}
                                    onClick={() => setCurrentSection('security')}
                                >
                                    <span>Mật khẩu và bảo mật</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col col-lg-8">
                        <div className={cx('content')}>
                            {currentSection === 'info' && (
                                <div className={cx('section')}>
                                    <div className={cx('heading')}>
                                        <h2>Thông tin cá nhân</h2>
                                        <button className={cx('close')} onClick={() => navigate(-1)}>
                                            x
                                        </button>
                                    </div>
                                    <div className={cx('info-group')}>
                                        <label>Họ và tên</label>
                                        <p>{userData?.name}</p>
                                    </div>
                                    <div className={cx('info-group')}>
                                        <label>Tên người dùng</label>
                                        <p>{userData?.slug}</p>
                                    </div>
                                    <div className={cx('info-group')}>
                                        <label>Giới thiệu</label>
                                        <p>{userData?.desc || 'Chưa cập nhật'}</p>
                                    </div>
                                    <div className={cx('info-group')}>
                                        <label>Ảnh đại diện</label>
                                        {userData?.avatar ? (
                                            <img src={userData?.avatar} className={cx('avatar')} alt={userData?.name} />
                                        ) : (
                                            <p>Chưa cập nhật</p>
                                        )}
                                    </div>
                                    <div className={cx('btn-wrapper')}>
                                        <button className={cx('edit-btn')} onClick={handleEdit}>
                                            Chỉnh sửa
                                        </button>
                                    </div>
                                    {showEditProfile && (
                                        <Modal onClose={closeEditProfile} isSetting>
                                            <h2 className={cx('heading')}>Thông tin cá nhân</h2>

                                            <EditProfile  onClose={closeEditProfile} userData={userData}/>
                                        </Modal>
                                    )}
                                </div>
                            )}
                            {currentSection === 'security' && (
                                <div className={cx('section')}>
                                    <div className={cx('heading')}>
                                        <h2>Mật khẩu và bảo mật</h2>
                                    </div>
                                    <div className={cx('info-group')}>
                                        <div className={cx('change-pw-btn')} onClick={handleShowChangePassword}>
                                            <span>Đổi mật khẩu</span>
                                        </div>
                                    </div>
                                    {showChangePassword && (
                                        <Modal onClose={closeChangePassword} isSetting>
                                            <h2 className={cx('heading')}>Đổi mật khẩu</h2>
                                            <span className={cx('desc')}>
                                                Mật khẩu của bạn phải có tối thiểu 6 ký tự
                                            </span>
                                            <ChangePassword showSuccessModal={setShowSuccessModal} />
                                        </Modal>
                                    )}

                                    {showSuccessModal && (
                                        <SuccessModal
                                            message="Đổi mật khẩu thành công!"
                                            onClose={() => {
                                                setShowSuccessModal(false);
                                                closeChangePassword();
                                            }}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
