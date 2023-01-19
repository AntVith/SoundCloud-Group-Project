
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllSongs } from '../../store/songs'
import { NavLink } from 'react-router-dom';
import './homepage.css'


const HomePage = () => {
  const dispatch = useDispatch();
  const songsObj = useSelector(state => state.songs.allSongs);
  const songs = Object.values(songsObj)


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
