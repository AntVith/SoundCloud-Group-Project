import React from 'react'
import './footer.css'


const Footer = () => {

  return(
    <div className='main-footer'>
      <div className='footer-container'>
        <div className='footer-row'>
            <div className='footer-col1'>
                <p>Alim Lastname</p>
                <ul className='footer-ul'>
                  <a href='https://www.linkedin.com/in/alim-hussain-a86b72249/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </ul>
            </div>
            <div className='footer-col1'>
              <p>Anthony Vithayathil</p>
                <ul className='footer-ul'>
                <a href='https://www.linkedin.com/in/anthony-vithayathil-2256bb136/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </ul>
            </div>
            <div className='footer-col1'>
              <p>Kaleb Robi</p>
                <ul className='footer-ul'>
                <a href='https://www.linkedin.com/in/kaleb-robi-a5abb0124/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </ul>
            </div>
            <div className='footer-col1'>
              <p>Tyler Malinoski</p>
                <ul className='footer-ul'>
                <a href='https://www.linkedin.com/in/tyler-malinoski/' target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}




export default Footer;
