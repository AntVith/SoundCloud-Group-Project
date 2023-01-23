import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ['https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_featured_artists-8081257b.jpg', 'https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_b-447230ef.jpg']


  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 8000);
      return () => clearInterval(interval);
  }, [currentIndex]);


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
      <div id='login-form-details-part'>
      <h1 id='site-name-label'>SoundStream</h1>
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
