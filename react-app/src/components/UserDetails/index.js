import React, { useState, useEffect } from 'react';
import { useInsertionEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import EditUserModal from './edituserModal.js'
import EditSongModal from './EditSongModal.js'



function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const songs = useSelector(state => state.songs.allSongs)
  const songsArr = Object.values(songs)
  const userSongs = songsArr.filter(song => song.user_id === Number(userId))
  const userInfo = useSelector(state => state.session.user)
  const userData = Object.values(userInfo)


  if(user !== userInfo){
    setUser(userInfo)
  }

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
       <div>
        <div>
          <strong>User Id</strong> {userId}
        </div>
        <div>
          <strong>Username</strong> {user.username}
        </div>
        <div>
          <strong>Email</strong> {user.email}
        </div>
        <div>
          {userSongs.map(eachSong => (
          <div>
            <div key={eachSong.id}>{eachSong.song_title}</div>
            <OpenModalButton
                 modalComponent={<EditSongModal currentSongId={ `${eachSong.id}` } />}
                 buttonText={'Edit'}
                />
          </div>
          ))}
        </div>
        </div>

      <OpenModalButton
        modalComponent={<EditUserModal user={{ user }} />}
        buttonText={'Edit'}
      />
    </>
  );
}
export default User;
