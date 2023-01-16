import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { createSong } from '../../store/songs'
import { useSelector } from "react-redux";



function UploadNewSong() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch()
  const [cover_photo, setCover_photo] = useState('')
  const [genre, setGenre] = useState('')
  const [song_file, setSong_file] = useState('')
  const [song_title, setSong_title] = useState('')
  const [errors, setErrors] = useState([]);

  const {closeModal} = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    const newSong = {
      cover_photo,
      genre,
      song_file,
      song_title,
      user_id: sessionUser.id
    }

    const createdSong = await dispatch(createSong(newSong)).catch(
      async (res) => {
        const data = await res.json()
        if(data && data.errors) setErrors(data.errors)
      }
    )
    if(createdSong) {
      (closeModal)
      (history.push('/'))
    }
  }

  return (
  <form onSubmit={handleSubmit}>
    <div>
      <h1>Add a Song</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      <div>
        <input
          type='text'
          onChange={(e) => setCover_photo(e.target.value)}
          value={cover_photo}
          placeholder='Cover Photo'
          name='cover_photo'
        />
      </div>
      <div>
        <input
          type='text'
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          placeholder='Genre'
          name='genre'
        />
      </div>
      <div>
        <input
          type='text'
          onChange={(e) => setSong_file(e.target.value)}
          value={song_file}
          placeholder='Song file'
          name='song_file'
        />
      </div>
      <div>
        <input
          type='text'
          onChange={(e) => setSong_title(e.target.value)}
          value={song_title}
          placeholder='Song Title'
          name='song_title'
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>
  )
}
export default UploadNewSong
