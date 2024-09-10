import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import { authAPI, userApis } from '~/utils/api';

const cx = classNames.bind(styles);

function PaymentResult() {
    const [paymentInfo, setPaymentInfo] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                const queryParams = new URLSearchParams(window.location.search);
                const paymentData = {};

                queryParams.forEach((value, key) => {
                    paymentData[key] = value;
                });

                const response = await authAPI().get(userApis.getReturnUrl, { params: paymentData });
                console.log(response.data);
                console.log(paymentData);
                if (response.data.code === '00') {
                    setPaymentInfo(paymentData);
                } else {
                    setError('Thanh toán không thành công');
                }
            } catch (error) {
                setError('Có lỗi xảy ra khi xác thực thanh toán');
            }
        };

        fetchPaymentData();
    }, []);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('payment-container')}>
                {error ? (
                    <p className={cx('error-message')}>{error}</p>
                ) : (
                    <div>
                        <h1 className={cx('title')}>Thanh toán thành công!</h1>
                        <p className={cx('info')}>
                            Mã giao dịch: <span>{paymentInfo.vnp_TransactionNo}</span>
                        </p>
                        <p className={cx('info')}>
                            Số tiền: <span>{(paymentInfo.vnp_Amount / 100)}đ</span>
                        </p>
                        <p className={cx('info')}>
                            Ngân hàng: <span>{paymentInfo.vnp_BankCode}</span>
                        </p>
                        <p className={cx('info')}>
                            Loại thẻ: <span>{paymentInfo.vnp_CardType}</span>
                        </p>
                        <p className={cx('info')}>
                            Thông tin đơn hàng: <span>{paymentInfo.vnp_OrderInfo}</span>
                        </p>
                    </div>
                )}
                <button onClick={handleGoHome} className={cx('go-home-button')}>
                    Quay về trang chủ
                </button>
            </div>
        </div>
    );
}

export default PaymentResult;
