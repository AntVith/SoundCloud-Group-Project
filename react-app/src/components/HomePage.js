import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllSongs } from '../../store/songs';
import { NavLink } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
  const dispatch = useDispatch();
  const songsObj = useSelector(state => state.songs.allSongs);
  const songs = Object.values(songsObj)

  useEffect(() => {
    dispatch(getAllSongs())
  }, [dispatch])



  return (
    <section>
      <div id= 'main-container'>
        {
          songs.map(song => (

              <NavLink
                to={`/songs/${song.id}`} style={{textDecoration: 'none'}}>
               <div>{song.song_title}</div>

              </NavLink>


          ))
        }
      </div>

    </section>
  );
}

export default HomePage;
