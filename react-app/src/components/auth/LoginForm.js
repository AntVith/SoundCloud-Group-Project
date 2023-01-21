import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const demoLogin = () => {
    setEmail('demo@aa.io')
    setPassword('password')
    return dispatch(login(email, password));
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form  id='login-form-whole-div' onSubmit={onLogin}>

      <img id='splash-image-login' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5O6aTHpvERBGPBblrlKP3D9WIeJ5zOictA&usqp=CAU'
      />
      <div id='login-form-details-part'>
      <h1 id='site-name-label'>SoundCrook</h1>
      <h2 id='login-title-label'>Login</h2>
      <div id='error-message-login'>
        {errors.map((error, ind) => (
          <div   key={ind}>{error}</div>
        ))}
      </div>
      <div id='email-login-form'>
        <label htmlFor='email' id='email-label-login'>Email</label>
        <input
          name='email'
          type='text'
          required
          placeholder='Email'
          id='email-input-field-login'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div id='password-login-form'>
        <label htmlFor='password' id='password-label-login'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          id='password-input-field-login'
          value={password}
          required
          onChange={updatePassword}
        /></div>
        <button id='submit-button-login' type='submit'>Login</button>
        <button  id='demo-user-login' onClick={demoLogin} type='submit'>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
