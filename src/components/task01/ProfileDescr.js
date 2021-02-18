import React from 'react';
import styles from './ProfileDescr.module.css';


const ProfileDescr = ({ user: { name, tag, location, avatar } }) => {
    return (
        <div className={styles.description}>
            <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
            <p className={styles.name}> {name} </p>
            <p className={styles.tag}> @{tag} </p >
            <p className={styles.location}> {location} </p>
        </div>
    );
};

export default ProfileDescr;