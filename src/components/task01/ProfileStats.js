import React from 'react';
import PropTypes from 'prop-types';
import ProfileStatsItem from './ProfileStatsItem';

const ProfileStats = ({stats}) => {
  return (
    <ul>
      {
      Object.keys(stats).map(el =>(
          <ProfileStatsItem key={el} label={el} quantity={stats[el]}/>
        ))
      }
    </ul>
  );
};

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired
}

export default ProfileStats;
