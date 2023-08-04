import React from 'react';
import styles from '../../styles/chips.module.css';

const Chips = ({ name, profileImage }) => {
    return (
        <div className={styles.chips}>
            <div className={styles.profileImageContainer}>
                <img src={profileImage} alt="Profile" className={styles.profileImage} />
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    );
};

export default Chips;
