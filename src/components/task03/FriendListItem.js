import React from 'react';
import PropTypes from 'prop-types';


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <li>
                <span>{isOnline} </span>
                <img src={avatar} alt={name} width="48" />
                <p >{name}</p>
            </li>
        </>
    )
};

FriendListItem.propType = {
  isOnline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};




export default FriendListItem;
