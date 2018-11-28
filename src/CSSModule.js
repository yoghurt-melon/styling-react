import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const isBlue = false;

const CSSModule = () => {
    return (

        <div className={cx('box', {blue: isBlue})}>out
            <div className={cx('box-inside')}>in</div>
        </div>
    )
}

export default CSSModule;