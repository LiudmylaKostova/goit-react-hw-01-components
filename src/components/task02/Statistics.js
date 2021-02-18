import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import colorRandom from './colorRandom';


const Statistics = ({ title, stats }) => {
    return (
<section className = {styles.section}>
 {title && <h2 className = {styles.title}>{title}</h2>}
 {/* {title ? <h2 className={styles.title}>{title}</h2> : null} */}

  <ul className = {styles.stats}>
{ stats.map(stat => (
  <li key={stat.id}
  className={styles.item}
        style={{ backgroundColor: colorRandom() }}>  
        <span className = {styles.label}>{stat.label}</span>
        <span className = {styles.percentage}>{stat.percentage} % </span>
     </li> ))}
 </ul>
</section>
    );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};


export default Statistics;