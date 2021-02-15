import React from 'react';

const ProfileDescr = ({ user: { name, tag, location, avatar } }) => {
    return (
        <div>
            <img src={avatar} alt="Аватар пользователя" />
            <p> {name} </p>
            <p> @{tag} </p >
            <p> {location} </p>
        </div>
    );
};

export default ProfileDescr;