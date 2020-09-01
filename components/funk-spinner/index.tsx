import React from 'react';
import styles from './spinner.module.scss';

interface Props {}

const FunkSpinner = (props: Props) => {
	return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinnerBody} />
    </div>
    );
};


export default FunkSpinner;