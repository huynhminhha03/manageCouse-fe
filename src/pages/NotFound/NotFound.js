// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss'; // Import style từ file CSS Module

function NotFound() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>404 - Không tìm thấy trang</h1>
            <p className={styles.message}>
                Trang bạn tìm kiếm không tồn tại. Quay lại <Link to="/" className={styles.homeLink}>trang chủ</Link>.
            </p>
        </div>
    );
}

export default NotFound;
