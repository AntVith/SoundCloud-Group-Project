
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

  console.log("SONGS----",songs)
  // console.log("SONGSOBJ----",songsObj)

  console.log('all songs', songs)

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


  console.log(rapSongs)


  useEffect(() => {
    dispatch(getAllSongs())
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();

  }, [dispatch])



  console.log("USERSS", users)


  if(!users.length){
    return null
  }


  return (
    <section className='hompage-container'>
      <div className='main-container'>
        <div className='genre-container'>Soul
        {
          soulSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Rock
        {
          rockSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>R&B
        {
          rnbSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Rap
        {
          rapSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Pop
        {
          popSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Jazz
        {
          jazzSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Instrumental
        {
          instrumentalSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Hip-Hop
        {
          hiphopSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Gospel
        {
          gospelSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>EDM
        {
          edmSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Drill
        {
          drillSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Disco
        {
          discoSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Country
        {
          countrySongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>

        <div className='genre-container'>Classical

        {
          classicalSongs.map(song => (
              <NavLink
                to={`/songs/${song.id}`}
                key={song.id}
                style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>
              </NavLink>
          ))
        }
        </div>
      </div>

    </section>
  );
}

export default HomePage;
