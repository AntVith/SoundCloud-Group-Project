import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'
import OpenModalButton from '../OpenModalButton'
import LogoutButton from '../auth/LogoutButton'
import UploadNewSong from '../UploadSongModal';

// import '../Homepage/homepage.css'


function NavBar({loaded}) {
  // const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if(sessionUser) {
    sessionLinks = (
    <>
      <nav>
        <div className='navbar'>
          <div>
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>
          </div>
          <div>
            <NavLink to='/users' exact={true} activeClassName='active'>Users
            </NavLink>
          </div>
          <div>
            <OpenModalButton
            buttonText='Upload'
            modalComponent={<UploadNewSong />}
            />
          </div>
        </div>
        <div>
          <LogoutButton />
        </div>
      </nav>
    </>
    );
  } else {
    sessionLinks = (
      <>
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
      </>
    )
  }

  return (
    <div>
      {loaded && sessionLinks}
    </div>
  );


  }


    // return (
    //   <div>
    //     <nav>
    //       <div className='navbar'>
    //         <div>
    //           <NavLink to='/' exact={true} activeClassName='active'>
    //             Home
    //           </NavLink>
    //         </div>
    //         <div>
    //           <NavLink to='/login' exact={true} activeClassName='active'>
    //             Login
    //           </NavLink>
    //         </div>
    //         <div>
    //           <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //             Sign Up
    //           </NavLink>
    //         </div>
    //         <div>
    //           <NavLink to='/users' exact={true} activeClassName='active'>
    //             Users
    //           </NavLink>
    //         </div>
    //         <div>
    //           <LogoutButton />
    //         </div>
    //       </div>
    //     </nav>

    //   </div>
    // );












export default NavBar;
