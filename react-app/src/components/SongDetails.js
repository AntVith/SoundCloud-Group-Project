import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getOneSong } from '../store/songs';
import { getAllComments } from '../store/comments';
import { useParams } from 'react-router-dom';


const SongDetails = () => {
  const dispatch = useDispatch();
  const songObj = useSelector(state => state.songs.singleSong);
  const songData = Object.values(songObj)
  const commentObj = useSelector(state => state.comments.comments)
  const comments = Object.values(commentObj)

  const {id} = useParams()

  useEffect(() => {
    dispatch(getOneSong(id))
    dispatch(getAllComments(id))
  }, [id, dispatch])

  if (!songData.length){
    return null
  }

 

  const song = songData[0]

  return (
    <section>
      <div id= 'song-container'>
        <div>{song.cover_photo}</div>
        <div>{song.genre}</div>
        <div>{song.song_title}</div>
        <div>{song.song_file}</div>
      </div>
      <div id = 'comment-container'>
      {
          comments.map(comment => (


               <div>{comment.comment}</div>



          ))
        }

      </div>

    </section>
  );
}

export default SongDetails;
