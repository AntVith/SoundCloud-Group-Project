import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OpenModalButton from './OpenModalButton';
import EditUserModal from './edituserModal.js'



function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const songs = useSelector(state => state.songs.allSongs)
  const songsArr = Object.values(songs)
  const userSongs = songsArr.filter(song => song.user_id === Number(userId))

  // console.log('array of songs',songsArr)
  // console.log("TEST", songs)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }
  // const songsArr = Object.values(songs)

  // console.log(songsArr)

  return (
    <>
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        {userSongs.map(eachSong => (
          <div key={eachSong.id}>{eachSong.song_title}</div>
        ))}
      </li>
    </ul>
    <OpenModalButton
      modalComponent={<EditUserModal user={{user}} />}
      buttonText={'Edit'}
    />
    </>
  );
}
export default User;
