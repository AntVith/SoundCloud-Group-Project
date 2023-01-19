
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
      <div>
        <div className='genre-container'>
            <div className='genre-name'>
              <h2>Soul</h2>
            </div>
            <div className='song-gallary-container'>
            <div className='song-gallary'>
              <div className='slider-panel'>
                {
                  songs.map(song => (
                    <div className='slider-eachsong'>
                      <NavLink
                        to={`/songs/${song.id}`}
                        key={song.id}
                        style={{textDecoration: 'none'}}>
                      <div>{song.song_title}</div>
                      </NavLink>
                    </div>
                  ))
                }
              </div>
              </div>
              <div className='gallary-slider-left'>
                <button>Button left</button>
              </div>
              <div className='gallary-slider-right'>
                <button>button right</button>
              </div>
            </div>
        </div>

      </div>

        <div className='genre-container'>
          <div>
            <h2>Rock</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>R&B</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Rap</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Pop</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Jazz</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Instrumental</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Hip-Hop</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Gospel</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>EDM</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Drill</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Disco</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Country</h2>
          </div>
        </div>

        <div className='genre-container'>
          <div>
            <h2>Classical</h2>
          </div>
        </div>
      </div>

    </section>
  );
}

export default HomePage;
