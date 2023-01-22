import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import { getOneSong } from '../../store/songs'
import { getAllComments, postAComment, deleteAComment } from '../../store/comments';
import { getLikesBySongId } from '../../store/likes';
import { postALike } from '../../store/likes';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player'
import OpenModalButton from '../OpenModalButton';
import EditCommentModal from './EditCommentModal'
import Waveform from '../Wavesurfer';
import './songdetails.css'




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

  function userNameFinder(id){
    const usersFound = users.filter(user => user.id === id)
    const usernameFound = usersFound[0].username
    return usernameFound
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      'song_id': Number(id),
      'user_id': userObj.id,
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




let num = likes.totalLikes
let newNum;

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
<div className='song-detail-page-container'>
  <div id= 'song-container'>
    <Waveform className='wave-form-player' urlGetter={song.song_file}/>
      <img className='song-detail-img' src={song.cover_photo} />
    {/* </div> */}

      {/* <div>{song.genre}</div> */}
        {/* <div>{song.song_title}</div>
         <NavLink
          to={`/users/${song.user_id}`}>{userNameFinder(song.user_id)}
        </NavLink> */}
  </div>

<div className='bottom-comment-likes'>
  <div id = 'comment-container'>
      <ul>
        {errors.map((error, idx) => (
        <li key={idx}>{error}</li>
        ))}
      </ul>
      {userObj &&
        <div className='comment-input'>
          <input
          type='text' required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          placeholder='Write a Comment'>
          </input>
        {/* <button
          className='post-comment-button'
          onClick={handleSubmit}
          disabled={!newComment}
          >Post Comment
        </button> */}
          <button
          className='post-comment-button'
          onClick={handleSubmit}
          style={!newComment ? {display: 'none'} : {}}
          >Post Comment</button>
        </div>
      }
      {message.length > 0 &&
        <div>{message}</div>
      }
<div>
</div>
</div>
<div id = 'likes-container'>
  {/* <div>likes: {likes.totalLikes}</div> */}
    <button className={'liked'}
    onClick={handleLike}><i class="fa-solid fa-heart"></i>Like</button>
    <div className='likes-counter-songdetails'><i class="fa-solid fa-heart like-count-heart"></i>{likes.totalLikes}</div>
</div>

<div className='comment-display-container'>
  <div className='song-artist-info'>
         <NavLink
         className={'link-to-artist-page'}
          to={`/users/${song.user_id}`}><i class="fa-solid fa-circle fa-7x"></i>
          <div className='song-details-artistInfo song-title-details'>{song.song_title}</div>
          <div className='song-details-artistInfo song-title-username'>{userNameFinder(song.user_id)} </div>
          <div className='song-details-artistInfo song-title-genre'>{song.genre}</div>
        </NavLink>
  </div>
  {/* <h2>Comments</h2> */}
  <div className='all-comments-posted'>
    <div>

    <h2 className='comments-title-song-details'><i class="fa-solid fa-message fa-2xs"></i>Comments</h2>
    </div>
  {
  comments.map(comment => (
      <div className='list-of-comments-song-details'>
        <div className='posted-comment'>{comment.comment}</div>
        <div className='comment-edit-and-delete'>
          {userObj?.id === comment.user_id &&
          <button
            className='delete-and-edit'
            onClick={() => handleDeletion(comment.id)}>Delete</button>}
              {userObj?.id === comment.user_id &&
                <OpenModalButton
                 modalComponent={<EditCommentModal currentCommentId={ `${comment.id}` } />}
                 buttonText={'Edit'}
              />}
          </div>
      </div>
    ))
  }
  </div>
</div>
</div>

</div>
</section>

);
}

export default SongDetails;
