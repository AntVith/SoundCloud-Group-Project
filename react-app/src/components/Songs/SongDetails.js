import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getOneSong } from '../../store/songs'
import { getAllComments, postAComment, deleteAComment } from '../../store/comments';
import { getLikesBySongId } from '../../store/likes';
import { postALike } from '../../store/likes';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player'
import OpenModalButton from '../OpenModalButton';
import EditCommentModal from './EditCommentModal'


const SongDetails = () => {
  const dispatch = useDispatch();
  const songObj = useSelector(state => state.songs.singleSong);
  const songData = Object.values(songObj)
  const commentObj = useSelector(state => state.comments.comments)
  const comments = Object.values(commentObj)
  const likes = useSelector(state => state.likes.likes)
  const {id} = useParams()
  const userObj = useSelector(state => state.session?.user)
  const history = useHistory()

  const [users, setUsers] = useState([]);
  const [newComment, setNewComment] = useState('')
  const [errors, setErrors] = useState([])
  // const [likeCount, setLikeCount] = useState(allLikes)

  useEffect(() => {
    dispatch(getOneSong(id))
    dispatch(getAllComments(id))
    dispatch(getLikesBySongId(id))

    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, [id, dispatch])


  if (!songData.length){
    return null
  }
  if(!users.length){
    return  null
  }
  console.log('users', users)




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

    setNewComment('')

  }




  let message = ''
  const handleDeletion = async (commentId) => {
    const response = await dispatch(deleteAComment(commentId))
    console.log('message', message)
    if (response){
      message = response.message
    }
  }






const handleLike = async () => {
  if(!userObj){
   return  history.push('/login')
  }
  const payload = {
    'songs': Number(id),
    'users': userObj.id
  }

   dispatch(postALike(payload,id))
  // console.log("llllll",response)
  // setLikeCount(response.likes)
}


  const song = songData[0]

  return (
    <section>
      <div id= 'song-container'>
        <div><img src={song.cover_photo} /></div>
        <div>{song.genre}</div>
        <div>{song.song_title}</div>
        <NavLink
        to={`/users/${song.user_id}`}
        >{users[song.user_id - 1].username}</NavLink>
        <ReactPlayer
          url={song.song_file}
          autoplay
          controls
      />
      </div>

      <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

          {userObj &&
          <div>
            <input
            type='text' required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
            placeholder='Write a Comment'></input>
            <button
            onClick={handleSubmit}
            disabled={!newComment}
            >Post Comment</button>
            </div>
          }

          {message.length > 0 &&
            <div>{message}</div>
          }

      <div id = 'comment-container'>
      {
          comments.map(comment => (

              <div>
                <div>comment: {comment.comment}</div>
                {userObj?.username === comment.username &&
                  <button
                onClick={() => handleDeletion(comment.id)}
                >Delete
                </button> }
                {userObj?.username === comment.username &&
                <OpenModalButton
                 modalComponent={<EditCommentModal currentCommentId={ `${comment.id}` } />}
                 buttonText={'Edit'}
                />}
               </div>



          ))

        }


      </div>
      <div id = 'likes-container'>
      <div>likes: {likes.totalLikes}</div>
      <button onClick={handleLike}>Like</button>
      </div>

    </section>
  );
}

export default SongDetails;
