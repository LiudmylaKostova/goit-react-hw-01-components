import React from 'react';
import PropTypes from 'prop-types';

const ProfileStatsItem = ({label, quantity}) => {
  return (
      <li>
        <span> {label} </span>
        <span> {quantity} </span>
      </li>
  );
};

ProfileStatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default ProfileStatsItem;