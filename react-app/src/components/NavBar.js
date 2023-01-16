
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './homepage.css'


const NavBar = () => {
  return (
    <div>
      <nav>
        <div className='navbar'>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
          <div>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;
