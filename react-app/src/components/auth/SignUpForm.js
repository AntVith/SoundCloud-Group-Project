import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ['https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_featured_artists-8081257b.jpg', 'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_b-447230ef.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
}, [currentIndex]);



  const onSignUp = async (e) => {
    e.preventDefault();
    const errors = []
    if (password === repeatPassword) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password));
      if (data) {
        setErrors(data)
      }

    }else{
      setErrors([...errors, 'Passwords do not match STOOPID'])
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form id='signup-form-whole-div' onSubmit={onSignUp}>
      <div id='imgSlider'>
        <TransitionGroup>
          <CSSTransition
          key={images[currentIndex]}
          timeout={5000}
          classNames='slide'
          >
          <img id='splash-image-login'  src={images[currentIndex]}/>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div id='sign-up-form-details-part'>
      <h1 id='site-name-label'>SoundSurf</h1>
      <h2 id='login-title-label'>Sign-Up</h2>
      <div id='error-message-login'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div id='first-name-signup'>
        <label id='firstname-label-signup'>First Name</label>
        <input
          type='text'
          name='First Name'
          required
          onChange={updateFirstName}
          id='first-name-input-field-login'
          value={first_name}
        ></input>
      </div>
      <div id='last-name-signup'>
        <label id='lastname-label-signup'>Last Name</label>
        <input
          type='text'
          name='Last Name'
          required
          onChange={updateLastName}
          id='last-name-input-field-login'
          value={last_name}
        ></input>
      </div>
      <div id='user-name-signup'>
        <label id='username-label-signup'>User Name</label>
        <input
          type='text'
          name='username'
          required
          onChange={updateUsername}
          id='username-input-field-login'
          value={username}
        ></input>
      </div>
      <div id='email-part-signup'>
        <label id='email-label-signup'>Email</label>
        <input
          type='text'
          name='email'
          required
          onChange={updateEmail}
          id='email-input-field-login'
          value={email}
        ></input>
      </div>
      <div id='password-signup'>
        <label id='password-label-signup'>Password</label>
        <input
          type='password'
          name='password'
          required
          onChange={updatePassword}
          id='password-field-login'
          value={password}
        ></input>
      </div>
      <div id='repeat-password-signup'>
        <label id='repeat-password-label-signup'>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          id='repeat-password-input-field-login'
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button  id='submit-button-singup' type='submit'>Sign Up</button>
      </div>
    </form>

  );

};

export default SignUpForm;
