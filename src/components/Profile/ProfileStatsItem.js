import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileStatsItem.module.css';

const ProfileStatsItem = ({ label, quantity }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}> {label} </span>
      <span className={styles.quantity}> {quantity} </span>
    </li>
  );
};

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ProfileStatsItem;
