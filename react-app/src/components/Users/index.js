import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './whotofollow.css'

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      // <li key={user.id}>
      <div className='userCard'>
        <NavLink to={`/users/${user.id}`} style={{textDecoration:'none'}}>
          <div className='profile-photo-div'><img className="profile-photo" src={user.profile_photo} ></img></div>
          <div className='song-title'>{user.username}</div>
        </NavLink>
      </div>

      // </li>
    );
  });

  return (
    <>
      <div className='div-container'>
        <div className='title-div'>
          <h1>Upcoming Artist: </h1>
          <p className='small-text'>Suggested profiles based on your follows and tracks you've liked or played.</p>

        </div >
        <div className='allCards'>{userComponents}</div>
      </div>
    </>
  );
}

export default UsersList;
