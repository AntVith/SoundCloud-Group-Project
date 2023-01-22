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
import './userDetails.css'
import Waveformtwo from '../newwavsurf';
// import Waveform from '../Wavesurfer';




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
    history.push(`/users/${userId}`)

  }

  return (
    <>
    <div id='test-test'></div>
       <div id='whole-profile-page'>
        <div id ='userDetails-card'>
            <div id='userDetails-data'>
              <img id='user-profile-photo'src={user.profile_photo} alt='profile-page-photo'/>

                      <div id='user-username-email-bio-label'>
                        <div id='username-and-email'>
                                <div id='user-page-username'>
                                  {user.username}
                                </div>
                                <div id='user-page-email'>
                                 {user.email}
                                </div>
                            </div>
                            <div id='user-bio-section'>
                              <div id='bio-title'>Biography:</div>
                              <div id='actual-bio-info'>{user.bio}</div>
                              </div>
                      </div>


            </div>
            <div id='profile-edit-button'>
                <div id='userpage-actual-edit-button'>{ userInfo.id === user.id &&
              <OpenModalButton
                modalComponent={<EditUserModal user={{ user }} />}
                buttonText={'Edit Profile'}
              />
              }</div>
              </div>
          </div>
        <div id='user-page-your-tracks'>
            <div id='user-page-your-tracks-text'>Tracks</div>
          </div>

        <div id='song-card-all'>
          {userSongs.map(eachSong => (

          <div className='song-card-profile-page'key={eachSong.id}>
             <NavLink
            to={`/songs/${eachSong.id}`}
            style={{textDecoration:'none'}}
            id='song-card-exact'
            >
              <div id='song-detail-with-cover'>
                    <img  id='each-song-cover-photo' src={eachSong.cover_photo} alt='each-song-cover-photo'/>
                    <div id='song-detail-no-cover'>
                      <div id='each-song-title-and-buttons'>
                        <div id='each-song-title' key={eachSong.id}>{eachSong.song_title}</div>
                                <div>
                              { userInfo.id === user.id &&
                                <div id='each-song-edit-delete'>
                                        <div id='each-song-edit-button'>
                                      <OpenModalButton
                                         modalComponent={<EditSongModal currentSongId={ `${eachSong.id}` } />}
                                           buttonText={'Edit'}

                                         />
                                         </div>
                                          <div >
                                          <button id='each-song-delete-button' onClick={() => handleDeletion(eachSong.id)}>Delete</button>
                                       </div>
                                </div>
                              }
                              </div>
                          </div>
                          <div>
                          </div>
                        {/* <img id='wave-image' src='https://i.stack.imgur.com/MXAzC.png' /> */}
                    </div>
              </div>
            </NavLink>
                          <Waveformtwo  className='test' urlGetter={eachSong.song_file}/>




          </div>

          ))}
        </div>
        </div>

    </>
  );
}
export default User;
