import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const stylesColor = status => ({
  backgroundColor: status ? 'green' : 'red',
});

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status} style={stylesColor(isOnline)}>
        {isOnline}
      </span>
      {/* <span className={isOnline ? styles.online : styles.offline}>{isOnline}</span> */}
      {/* <span className={styles.status}>{isOnline}</span>  */}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
