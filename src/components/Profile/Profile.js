import React from 'react';
import PropTypes from 'prop-types';
import ProfileDescr from './ProfileDescr';
import ProfileStats from './ProfileStats';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescr user={{ name, tag, location, avatar }} />
      <ProfileStats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
