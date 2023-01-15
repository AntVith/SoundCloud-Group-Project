// import {csrFetch} from './'

const GET_ALL_SONGS = 'song/GET_ALL_SONGS'

const getAll = (songs) => ({
    type: GET_ALL_SONGS,
    songs
})

export const getAllSongs = () => async (dispatch) => {
    const response = await Fetch(`/api/songs`);
    if (response.ok) {
      const songs = await response.json();
      dispatch(getAll(songs));
    }
    return response
  };

initialState = { allSongs: {}, singleSong: {} }

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SONGS: {
          const newState = { allSongs: {}, singleSong: {} }
          action.songs.Songs.forEach(song => {
            newState.allSongs[song.id] = song
          });

          return newState;
        }

        default:
          return state

      }

}


export default songsReducer
