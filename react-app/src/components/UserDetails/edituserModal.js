import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useModal} from '../../context/Modal'
import { useHistory } from "react-router-dom";
// import { updateASpot } from "../store/spots";


function EditUserModal({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()


  const [bio, setBio] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [profile_photo, setProfile_photo] = useState();
  const [username, setUsername] = useState();




  return (
    <form>
      <div>
        <h1>Update Your Profile</h1>
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
            placeholder='Email'
            name='email'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setFirst_name(e.target.value)}
            value={first_name}
            placeholder='First Name'
            name='first_name'
          />
        </div>
        <div>
          <input
            type='text'
            onChange={(e) => setLast_name(e.target.value)}
            value={last_name}
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
