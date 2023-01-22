import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllSongs } from '../../store/songs'
import { NavLink } from 'react-router-dom';

import './homepage.css'


const HomePage = () => {
  const dispatch = useDispatch();
  const songsObj = useSelector(state => state.songs.allSongs);
  const songs = Object.values(songsObj)
  const [users, setUsers] = useState([]);


  const rapSongs = songs.filter(song => song.genre === 'Rap')
  const countrySongs = songs.filter(song => song.genre === 'Country')
  const classicalSongs = songs.filter(song => song.genre === 'Classical')
  const drillSongs = songs.filter(song => song.genre === 'Drill')
  const edmSongs = songs.filter(song => song.genre === 'EDM')
  const hiphopSongs = songs.filter(song => song.genre === 'Hip-Hop')
  const rnbSongs = songs.filter(song => song.genre === 'R&B')
  const instrumentalSongs = songs.filter(song => song.genre === 'Instrumental')
  const jazzSongs = songs.filter(song => song.genre === 'Jazz')
  const rockSongs = songs.filter(song => song.genre === 'Rock')
  const popSongs = songs.filter(song => song.genre === 'Pop')
  const soulSongs = songs.filter(song => song.genre === 'Soul')
  const gospelSongs = songs.filter(song => song.genre === 'Gospel')
  const discoSongs = songs.filter(song => song.genre === 'Disco')



  useEffect(() => {
    dispatch(getAllSongs())
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, [dispatch])





if (!users.length) {
  return null
}

function userNameFinder(id) {
  const usersFound = users.filter(user => user.id === id)
  const usernameFound = usersFound[0].username
  return usernameFound
}



return (
  <section className='hompage-container'>
    <div className='main-container'>
      <div>
        <div className='genre-container'>
          <div>
            <h2 className='genre-word'>Soul</h2>
          </div>
          <div className='song-gallary-container'>
            <div className='song-gallary'>
              <div className='slider-panel'>
                {
                  soulSongs.map(song => (
                    <div className='each-song-container'>
                      <div className='slider-eachsong'>
                        <NavLink
                          to={`/songs/${song.id}`}
                          key={song.id}
                          style={{ textDecoration: 'none' }}>
                          <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                          <div className='home-song-title'>{song.song_title}</div>
                          <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                        </NavLink>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Rock</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                rockSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>R&B</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                rnbSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Rap</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                rapSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Pop</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                popSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Jazz</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                jazzSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Instrumental</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                instrumentalSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Hip-Hop</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                hiphopSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                       <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Gospel</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                gospelSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>EDM</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                edmSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Drill</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                drillSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Disco</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                discoSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Country</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                countrySongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                        <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className='genre-container'>
        <div>
          <h2 className='genre-word'>Classical</h2>
        </div>
        <div className='song-gallary-container'>
          <div className='song-gallary'>
            <div className='slider-panel'>
              {
                classicalSongs.map(song => (
                  <div className='each-song-container'>
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{ textDecoration: 'none' }}>
                       <img className='will-change-to-img' src={song.cover_photo} alt='cover-photo'/>
                        <div className='home-song-title'>{song.song_title}</div>
                        <div className='home-user-name'>{userNameFinder(song.user_id)}</div>
                      </NavLink>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section >
  );

}


export default HomePage;
