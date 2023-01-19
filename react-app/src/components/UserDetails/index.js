import React, { useState, useEffect } from 'react';
import { useInsertionEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import EditUserModal from './edituserModal.js'
import EditSongModal from './EditSongModal.js'
import { getAUser } from '../../store/session';
import { deleteASong } from '../../store/songs';
import { NavLink } from 'react-router-dom';





function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const songs = useSelector(state => state.songs.allSongs)
  const songsArr = Object.values(songs)
  const userSongs = songsArr.filter(song => song.user_id === Number(userId))
  const userInfo = useSelector(state => state.session.user)
  const userData = Object.values(userInfo)
  const dispatch = useDispatch()
  const history = useHistory()

  const userBio = userData[0]
  const userEmail = userData[1]
  const userFName = userData[2]
  const userLName = userData[4]
  const userProfilePhoto = userData[5]
  const userUsername = userData[6]




  // if(user !== userInfo){
    //   setUser(userInfo)
    // }

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await dispatch(getAUser(userId));
      const user = response
      console.log('this is user----', user)
      setUser(user);
    })();
  }, [userId, userBio, userEmail, userFName, userLName, userProfilePhoto, userUsername, dispatch]);

    if (!user) {
      return null;
    }
  // const songsArr = Object.values(songs)

  // console.log(songsArr)

  let message = ''
  const handleDeletion = async (songId) => {
    const response = await dispatch(deleteASong(songId))
    if (response){
      message = response.message
    }
  }

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
          <div>
            <div key={eachSong.id}> <NavLink
            to={`/songs/${eachSong.id}`}>
            <div key={eachSong.id}>{eachSong.song_title}</div>
            </NavLink></div>
            <OpenModalButton
                 modalComponent={<EditSongModal currentSongId={ `${eachSong.id}` } />}
                 buttonText={'Edit'}
                />
                <button onClick={() => handleDeletion(eachSong.id)}>Delete</button>
          </div>

            </div>
          ))}
        </div>
        </div>
       { userInfo.id === user.id &&
      <OpenModalButton
        modalComponent={<EditUserModal user={{ user }} />}
        buttonText={'Edit'}
      />
      }
    </>
  );
}
export default User;
