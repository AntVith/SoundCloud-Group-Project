import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOneSong } from '../../store/songs'
import { getAllComments, postAComment } from '../../store/comments';
import { getLikesBySongId } from '../../store/likes';
import { useParams, useHistory } from 'react-router-dom';


const SongDetails = () => {
  const dispatch = useDispatch();
  const songObj = useSelector(state => state.songs.singleSong);
  const songData = Object.values(songObj)
  const commentObj = useSelector(state => state.comments.comments)
  const comments = Object.values(commentObj)
  const likes = useSelector(state => state.likes.likes)
  const {id} = useParams()
  const userObj = useSelector(state => state.session.user)
  const history = useHistory()

  const [newComment, setNewComment] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getOneSong(id))
    dispatch(getAllComments(id))
    dispatch(getLikesBySongId(id))
  }, [id, dispatch])

  if (!songData.length){
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      'song_id': Number(id),
      'username': userObj.username,
      'comment': newComment
    }
    const postedComment = await dispatch(postAComment(id, payload))
    .catch(
      async (res) => {
        const data = await res.json()
        if(data && data.errors) setErrors(data.errors)
      }
    )
    if(postedComment) {
      (history.push(`/songs/${id}`))
    }
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

      <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

          {userObj &&
          <div>
            <input
            type='text'
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            placeholder='Write a Comment'></input>
            <button
            onClick={handleSubmit}
            >Post Comment</button>
            </div>
          }


      <div id = 'comment-container'>
      {
          comments.map(comment => (


            <div key= {comment.id}>comment: {comment.comment}</div>



          ))
        }

      </div>
      <div>likes: {likes.totalLikes}</div>

    </section>
  );
}

export default SongDetails;
