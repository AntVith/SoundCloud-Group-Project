import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useModal} from '../../context/Modal'
import { useHistory } from "react-router-dom";
import { updateAUser } from "../../store/session";
// import { updateASpot } from "../store/spots";

function EditUserModal({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()

  const [bio, setBio] = useState(user.user.bio);
  const [email, setEmail] = useState(user.user.email);
  const [first_name, setFirst_name] = useState(user.user.first_name);
  const [last_name, setLast_name] = useState(user.user.last_name);
  const [profile_photo, setProfile_photo] = useState(user.user.profile_photo);
  const [username, setUsername] = useState(user.user.username);
  const [errors, setErrors] = useState([])


  const {closeModal} = useModal()

 const userId = user.user.id

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

    const payload = {
      userId,
      bio,
      email,
      first_name,
      last_name,
      profile_photo,
      username
    }


    const editedUser = await dispatch(updateAUser(payload, userId))
    .catch(
      async (res) => {
        const data = await res.json()
        if(data && data.errors) setErrors(data.errors)
      }
    )
      console.log('editted', editedUser)
    if(editedUser) {
      (closeModal)
      (history.push(`/users/${userId}`))
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Update Your Profile</h1>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
          <input
            type='text'
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder='Bio'
            name="bio"

          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder='Email'
            name='email'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
            required
            placeholder='First Name'
            name='first_name'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
            required
            placeholder='Last Name'
            name='last_name'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setProfile_photo(e.target.value)}
            value={profile_photo}
            placeholder='Profile Photo'
            name='profile_photo'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            placeholder='UserName'
            name='username'
          />
        </div>
        <div>
          <button className="newHome-button" type='submit'>Submit</button>
        </div>
      </div>
    </form>
  )
}



export default EditUserModal
