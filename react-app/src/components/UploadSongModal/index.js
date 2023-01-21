import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { createSong } from '../../store/songs'
import { useSelector } from "react-redux";
import './upload.css'



function UploadNewSong() {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()
  const dispatch = useDispatch()
  const [coverphoto, setCover_photo] = useState('')
  const [genre, setGenre] = useState('Classical')
  const [songfile, setSong_file] = useState('')
  const [song_title, setSong_title] = useState('')
  const [errors, setErrors] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {closeModal} = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setImageLoading(true);
    setIsLoading(true)
    setErrors([])
    const formData = new FormData()
    formData.append('songfile', songfile)
    formData.append('genre', genre)
    formData.append('song_title', song_title)
    formData.append('coverphoto', coverphoto)
    formData.append('user_id', sessionUser.id )

    const newSong = {
      coverphoto,
      genre,
      songfile,
      song_title,
      user_id: sessionUser.id
    }
    console.log('new song data', newSong)

    const createdSong = await dispatch(createSong(formData)).catch(
      async (res) => {
        const data = await res.json()
        if(data && data.errors) setErrors(data.errors)
      }
    )
    if(createdSong) {
      (closeModal)
      (history.push(`/songs/${createdSong.id}`))
    } else{
      setImageLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log("error");
    }
  }

  return (
  <div className= 'entire-upload-song-form-modal'>

    <form onSubmit={handleSubmit}  method="post" enctype="multipart/form-data">

    <div className='upload-form-modal-contents'>
    <h1 className='header-upload'>Add a Song</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

      <div>
        <input
          type='file'
          accept="image/*"
          required
          onChange={(e) => setCover_photo(e.target.files[0])}
          placeholder='Cover Photo'
          name='coverphoto'
          id='upload-form-cover-photo'
          className='song-upload-button'
        />
      </div>
      <div>
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
          name='genre'
          id='upload-form-genre'
          className='Select-Upload-Song-Input'
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

      </div>


      <div>
        <input
          type='file'
          required
          accept='audio/*'
          onChange={(e) => setSong_file(e.target.files[0])}
          placeholder='Song file'
          name='songfile'
          id= 'upload-form-song_file'
          className='song-upload-button'
        />
      </div>
      <div>
        <input
          type='text'
          required
          onChange={(e) => setSong_title(e.target.value)}
          value={song_title}
          placeholder='Song Title'
          name='song_title'
          id= 'upload-form-song_title'
          className='Upload-Song-Input'
        />
      </div>
      <div>
        <button className='song-upload-button' type="submit"
        disabled={isLoading}
        >Submit</button>
        {(imageLoading)&& <p>Loading...</p>}
      </div>
      </div>
    </form>
  </div>
  )
}
export default UploadNewSong
