const GET_LIKES = 'likes/GET_LIKES'

const getLikes = (likes) => ({
    type:GET_LIKES,
    likes
})

export const getLikesBySongId = (id) => async(dispatch) => {
    const response = await fetch(`/api/songs/${id}/likes`)

    if(response.ok){
        const likes = await response.json()

        dispatch(getLikes(likes))
    }
    return response
}

const initialState = {likes: {}}

const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIKES: {

          const newState = { ...state }
          const updated_likes =  {}
          updated_likes["totalLikes"] = action.likes.likes
          newState.likes = updated_likes
         return newState
        }
        default:
          return state

      }

}
export default likesReducer
