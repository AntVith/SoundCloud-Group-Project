// import {csrFetch} from './'

const GET_ALL_SONGS = 'song/GET_ALL_SONGS'
const GET_ONE_SONG = 'song/GET_ONE_SONG'
const POST_SONG = 'song/POST_SONG'
const UPDATE_SONG = 'song/UPDATE_SONG'

const getAll = (songs) => ({
    type: GET_ALL_SONGS,
    songs
})
const getOne = (song) => ({
    type:GET_ONE_SONG,
    song
})

const postSong = (song) => ({
  type: POST_SONG,
  song
})

const updateSong = (song) => ({
  type: UPDATE_SONG,
  song
})

export const getOneSong = (id) => async(dispatch) => {
    const response = await fetch(`/api/songs/${id}`)

    if(response.ok){
        const song = await response.json()
        dispatch(getOne(song))
        return song
    }
    return response
}

export const getAllSongs = () => async (dispatch) => {
    const response = await fetch(`/api/songs`);
    if (response.ok) {
      const songs = await response.json();
      dispatch(getAll(songs));
    }
    return response
  };

  export const createSong = (newSong) => async (dispatch) => {
    console.log('thunk' , newSong)
    const response = await fetch('/api/songs/', {
      method: 'POST',
      body: newSong
    })
    console.log('err?', response)

    if (response.ok) {
      const createdNewSong = await response.json();
      dispatch(postSong(createdNewSong));
      return createdNewSong;
    }

  }

  export const updateASong = (payload, songId) => async dispatch => {
    const response = await fetch(`/api/songs/${songId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    if(response.ok) {
      const editedSong = await response.json()
      dispatch(updateSong(editedSong))
    return editedSong
    }
  }

const initialState = { allSongs: {}, singleSong: {} }

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SONGS: {
          const newState = { allSongs: {}, singleSong: {} }
          action.songs.songs.forEach(song => {
            newState.allSongs[song.id] = song
          });

          return newState;
        }
        case GET_ONE_SONG:{
            const newState = { allSongs: {}, singleSong: {} }
            newState.singleSong = action.song
            return newState
        }

        case POST_SONG: {
          const newState = { ...state, allSongs: { ...state.allSongs}}
          newState.allSongs[action.song.id] = action.song;
          return newState
        }

        case UPDATE_SONG: {
          const newState = { ...state, allSongs: { ...state.allSongs}}
          newState.allSongs[action.song.id] = action.song;
          return newState
        }

        default:
          return state

      }

}


export default songsReducer
