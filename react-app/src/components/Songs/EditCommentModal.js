import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {useModal} from '../../context/Modal';
import { updateAComment } from "../../store/comments"


function EditCommentModal({ comment }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [newComment, setNewComment] = useState(comment.comment.comment)
    const currentUser = useSelector(state => state.session.user.username)
    const currentSong = useSelector(state => state.songs.singleSong.song.id)
    const [errors, setErrors] = useState([])
    const {closeModal} = useModal()



const commentId = comment.comment.id

const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

    const payload = {
        comment,
        'id': commentId,
        'song_id': currentSong,
        'username': currentUser

      }
      const editedComment = await dispatch(updateAComment(payload, commentId))
      .catch(
        async (res) => {
          const data = await res.json()
          if(data && data.errors) setErrors(data.errors)
        }
      )
      if(editedComment) {
        (closeModal)
        (history.push(`/songs/${currentSong}`))
      }

    }

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Update Your Comment</h1>
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <div>
              <input
                type='text'
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
                placeholder='Edit Comment'
                name="comment"

              />
              </div>
              <div>
          <button className="newcomment-button" type='submit'>Submit</button>
        </div>
            </div>
        </form>
    )
}
export default EditCommentModal