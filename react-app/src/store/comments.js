const GET_ALL_COMMENTS = 'comment/GET_ALL_COMMENTS'
const POST_COMMENT = 'comment/POST_COMMENT'

const getAll = (comments) => ({
    type: GET_ALL_COMMENTS,
    comments
})

const postComment = (comment) => ({
  type: POST_COMMENT,
  comment
})

export const postAComment = (id, payload) => async(dispatch) => {
  const response = await fetch(`/api/songs/${id}/comments/new`, {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
  })

  if (response.ok){
    const newComment = await response.json()

    dispatch(postComment(newComment))
    return newComment
  }

}


export const getAllComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/${id}/comments`);

    if (response.ok) {
      const comments = await response.json();

      dispatch(getAll(comments));
    }
    return response
  };

  const initialState = { comments: {} }

  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COMMENTS: {

          const newState = { ...state }
          const newObject = {}
          action.comments.comments.forEach(comment => {
            newObject[comment.id] = comment
          })

         newState.comments = newObject
         return newState

        }
        case POST_COMMENT: {
          const newState = {...state}
          const newObject = {...state.comments}
          newObject[action.comment.id] = action.comment
          newState.comments = newObject
          return newState
        }


        default:
          return state

      }

}


export default commentsReducer
