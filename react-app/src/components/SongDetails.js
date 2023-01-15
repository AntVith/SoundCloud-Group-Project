import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOneSong } from '../store/songs';
import { NavLink, useParams } from 'react-router-dom';
// import './HomePage.css';


const SongDetails = () => {
  const dispatch = useDispatch();
  const songObj = useSelector(state => state.songs.singleSong);
  const songData = Object.values(songObj)

  const {id} = useParams()

  useEffect(() => {
    dispatch(getOneSong(id))
  }, [id, dispatch])

  if (!songData.length){
    return null
  }
  console.log('soong', songData)
  const song = songData[0]

  return (
    <section>
      <div id= 'song-container'>
        <div>{song.cover_photo}</div>
        <div>{song.genre}</div>
        <div>{song.song_title}</div>
        <div>{song.song_file}</div>
      </div>

    </section>
  );
}

export default SongDetails;
