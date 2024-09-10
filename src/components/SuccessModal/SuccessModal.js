import classNames from 'classnames/bind';
import styles from './SuccessModal.module.scss';

const cx = classNames.bind(styles);

function SuccessModal({ message, onClose }) {
    return (
        <div className={cx('modal-container')} onClick={onClose}>
            <div className={cx('modal-content')}>
                <p>{message}</p>
                <button onClick={onClose} className={cx('close-btn')}>OK</button>
            </div>
        </div>
    );
}

export default SuccessModal;
