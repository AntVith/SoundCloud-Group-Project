// import {csrFetch} from './'

const GET_ALL_SONGS = 'song/GET_ALL_SONGS'
const GET_ONE_SONG = 'song/GET_ONE_SONG'

const getAll = (songs) => ({
    type: GET_ALL_SONGS,
    songs
})
const getOne = (song) => ({
    type:GET_ONE_SONG,
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
    console.log('res', response)
    console.log('hello')
    if (response.ok) {
      const songs = await response.json();
      console.log('songs', songs)
      dispatch(getAll(songs));
    }
    return response
  };

const initialState = { allSongs: {}, singleSong: {} }

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SONGS: {
          const newState = { allSongs: {}, singleSong: {} }
          action.songs.songs.forEach(song => {
            console.log('song', song)
            newState.allSongs[song.id] = song
          });

          return newState;
        }
        case GET_ONE_SONG:{
            const newState = { allSongs: {}, singleSong: {} }
            newState.singleSong = action.song
            return newState
        }

        default:
          return state

      }

}


export default songsReducer
