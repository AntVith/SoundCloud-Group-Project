const GET_ALL_COMMENTS = 'comment/GET_ALL_COMMENTS'

const getAll = (comments) => ({
    type: GET_ALL_COMMENTS,
    comments
})


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


        default:
          return state

      }

}


export default commentsReducer
