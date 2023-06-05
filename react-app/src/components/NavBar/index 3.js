import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import LogoutButton from '../auth/LogoutButton'
import UploadNewSong from '../UploadSongModal';

import './navbar.css'



function NavBar({loaded}) {
  // const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if(sessionUser) {
    sessionLinks = (
    <>
    <nav className='nav'>
      <div className='header'>
      <NavLink className={'homeLink'} to='/' exact={true} activeClassName='active' >
          <div className='homelink-container'>
            <div className='test'>
          {/* <NavLink to='/' exact={true} activeClassName='active'> */}
              <i class="fa-brands fa-soundcloud fa-2x"></i>
            {/* </NavLink> */}
            </div>
            <div className='homeWord'>
              <p className='word'>Home</p>
            </div>
          </div>
        </NavLink>
        <div className='header-center'>
            <input
            type='text'
            disabled
            placeholder='Search coming soon'
            className='search-input'>
            </input>
            <div className='search-icon'>
            <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className='header-right'>
            <div className='artists-link'>
            <NavLink className={'userslink'} to='/users' exact={true} activeClassName='active'>Search by Artist
            </NavLink>
            </div>
            <div className='upload-button'>
            <OpenModalButton
            buttonText='Upload'
            modalComponent={<UploadNewSong />}
            />
            </div>
            <div className='navbar-user-pagelink'>
              <NavLink className={'nav-curr-user-link'} to={`/users/${sessionUser.id}`} exact={true}><i class="fa-solid fa-circle-user fa-xl"></i>{sessionUser.username}</NavLink>
            </div>
            <div className='log-out'>
            <LogoutButton />
            </div>
        </div>
      </div>
    </nav>
    </>
    );
  } else {
    sessionLinks = (
<>
<nav className='nav'>
  <div className='header'>
    <NavLink className={'homeLink'} to='/' exact={true} activeClassName='active'>
      <div className='homelink-container'>
        <div className='test'>
          <i class="fa-brands fa-soundcloud fa-2x"></i>
        </div>
        <div className='homeWord'>
          <p className='word'>Home</p>
        </div>
      </div>
    </NavLink>
    <div className='header-center-logged-out'>
      <input
        type='text'
        disabled
        placeholder='Feature coming soon'
        className='search-input'>
      </input>
      <div className='search-icon'>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div className='header-right'>
      <div className='login-nav'>
        <NavLink className='login-nav' to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink>
      </div>
      <div className='sign-up-nav'>
        <NavLink className='sign-up-nav' to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </div>
    </div>
  </div>
</nav>
</>
    )
  }

  return (
    <div>
      {loaded && sessionLinks}
    </div>
  );


  }









export default NavBar;
