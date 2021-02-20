import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

// const FriendList = ({ friends }) => {
//     return (
//         <ul >
//             {friends.map(friend => (
//                 <FriendListItem key={friend.id}
//                     isOnline={friend.isOnline}
//                     avatar={friend.avatar}
//                     name={friend.name}/>
//                 ))}
//         </ul>
//     )
// };

function FriendList({ friends }) {
  return (
    <ul className = {styles.friends}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}


FriendList.propType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};


export default FriendList;