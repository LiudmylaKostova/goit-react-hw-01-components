import React from 'react';
import PropTypes from 'prop-types';
import ProfileStatsItem from './ProfileStatsItem';
import styles from './ProfileStats.module.css'

const ProfileStats = ({stats}) => {
  return (
    <ul className = {styles.stats}>     
      {
      Object.keys(stats).map(el =>(
          <ProfileStatsItem key={el} label={el} quantity={stats[el]}/>
        ))
      }

{/* {  Object.entries(stats).map(el =>(
        <ProfileStatsItem key={el[0]} label={el[0]} quantity={el[1]}/>
      ))
    } */}
    </ul>
  ); 
};

ProfileStats.propTypes = {
  stats: PropTypes.object.isRequired
}

export default ProfileStats;
