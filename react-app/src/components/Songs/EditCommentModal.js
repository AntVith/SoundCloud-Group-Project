import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {useModal} from '../../context/Modal';
import { updateAComment } from "../../store/comments"
import './editcommentmodal.css'


function EditCommentModal(currentCommentId) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [newComment, setNewComment] = useState('')
    const currentUser = useSelector(state => state.session?.user.id)
    const currentSong = useSelector(state => state.songs?.singleSong.song.id)
    const currComment = useSelector(state => state.comments.comments)
    const [errors, setErrors] = useState([])
    const {closeModal} = useModal()



const commentId = currentCommentId.currentCommentId


const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

    const payload = {
        'comment': newComment,
        'id': commentId,
        'song_id': currentSong,
        'user_id': currentUser

      }
      const editedComment = await dispatch(updateAComment(payload, commentId))
      .catch(
        async (res) => {
          if(res && res.errors) setErrors(res.errors)
        }
      )
      if(editedComment) {
        (closeModal)
        (history.push(`/songs/${currentSong}`))
      }

    }

    return (
        <form id= 'edit-comment-form' onSubmit={handleSubmit}>
          <div id='edit-comment-header-div'>
            <h1 className='edit-comment-header'>Update Your Comment</h1>
            </div>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>

              <input
                type='text'
                required
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                placeholder={currComment[commentId].comment}
                name="comment"
                id= 'edit-comment-form-comment'

              />


          <button className="editcomment-button" type='submit'>Submit</button>


        </form>
    )
}
export default EditCommentModal
