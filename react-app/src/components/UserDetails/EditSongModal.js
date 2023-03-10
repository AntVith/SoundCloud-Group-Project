import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useModal} from '../../context/Modal'
import { useHistory } from "react-router-dom";
import { updateASong } from "../../store/songs";
import './EditSongModal.css'


function EditSongModal(currentSongId) {
  const songId = currentSongId.currentSongId
  const dispatch = useDispatch();
  const history = useHistory()
  const songsObj = useSelector(state => state.songs.allSongs[songId])
  console.log('this is songsObj', songsObj)
  const [user_id, setUserId] = useState(songsObj.user_id)
  const [song_title, setSongTitle] = useState(songsObj.song_title)
  const [genre, setGenre] = useState(songsObj.genre)
  const [cover_photo, setCoverPhoto] = useState(songsObj.cover_photo)
  const [song_file, setSongFile] = useState(songsObj.song_file)

  const [errors, setErrors] = useState([])
  const {closeModal} = useModal()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

    const payload = {
      songId,
      user_id,
      song_title,
      genre,
      cover_photo,
      song_file

    }


    const editedSong = await dispatch(updateASong(payload, songId))
    .catch(
      async (res) => {
        const data = await res.json()
        if(data && data.errors) setErrors(data.errors)
      }
    )

    if(editedSong) {
      (closeModal)
      (history.push(`/users/${user_id}`))
    }
  }


  return (
    <form id= 'edit-song-form' onSubmit={handleSubmit}>
      <div id='edit-header-div'>
        <h1 className='edit-header-upload'>Update Your Track Here</h1>
        </div>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          name='genre'
          id='edit-form-genre'
          >
            <option value="Classical">Classical</option>
            <option value="Country">Country</option>
            <option value="Disco">Disco</option>
            <option value="Drill">Drill</option>
            <option value="EDM">EDM</option>
            <option value="Gospel">Gospel</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Instrumental">Instrumental</option>
            <option value="Jazz">Jazz</option>
            <option value="Pop">Pop</option>
            <option value="Rap">Rap</option>
            <option value="R&B">R&B</option>
            <option value="Rock">Rock</option>
            <option value="Soul">Soul</option>
        </select>

          <input
            type='text'
            required
            onChange={(e) => setSongTitle(e.target.value)}
            value={song_title}
            placeholder='Song Title'
            name='song_title'
            id= 'edit-form-song_title'
          />


          <button className="editSong-button" type='submit'>Update</button>

    </form>
  )
}



export default EditSongModal
