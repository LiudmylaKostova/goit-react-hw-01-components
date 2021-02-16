import React from 'react';
import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
    return (
<section>
 {title && <h2 >{title}</h2>}
 {/* {title ? <h2 className={styles.title}>{title}</h2> : null} */}

  <ul >
{ stats.map(stat => (
    <li  key={stat.id}>  
        <span >{stat.label}</span>
        <span >{stat.percentage} % </span>
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