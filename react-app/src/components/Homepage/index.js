
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllSongs } from '../../store/songs'
import { NavLink } from 'react-router-dom';
import './homepage.css'


const HomePage = () => {
  const dispatch = useDispatch();
  const songsObj = useSelector(state => state.songs.allSongs);
  const songs = Object.values(songsObj)

  console.log('all songs', songs)

  const rapSongs = songs.filter(song => song.genre === 'Rap')
  const countrySongs = songs.filter(song => song.genre === 'Country')
  const classicalSongs = songs.filter(song => song.genre === 'Classical')
  const drillSongs = songs.filter(song => song.genre === 'Drill')
  const edmSongs = songs.filter(song => song.genre === 'EDM')
  const hiphopNrnbSongs = songs.filter(song => song.genre === 'Hip-Hop')
  const instrumentalSongs = songs.filter(song => song.genre === 'Instrumental')
  const jazzSongs = songs.filter(song => song.genre === 'Jazz')
  const rockSongs = songs.filter(song => song.genre === 'Rock')
  const popSongs = songs.filter(song => song.genre === 'Pop')

  console.log(rapSongs)


  useEffect(() => {
    dispatch(getAllSongs())
  }, [dispatch])



  return (
    <section className='hompage-container'>
      <div className='main-container'>
        <div className='genre-container'>Soul

        </div>

        <div className='genre-container'>Rock

        </div>

        <div className='genre-container'>R&B

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

        </div>

        <div className='genre-container'>Jazz

        </div>

        <div className='genre-container'>Instrumental

        </div>

        <div className='genre-container'>Hip-Hop

        </div>

        <div className='genre-container'>Gospel

        </div>

        <div className='genre-container'>EDM

        </div>

        <div className='genre-container'>Drill

        </div>

        <div className='genre-container'>Disco

        </div>

        <div className='genre-container'>Country

        </div>

        <div className='genre-container'>Classical

        {
          songs.map(song => (
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
