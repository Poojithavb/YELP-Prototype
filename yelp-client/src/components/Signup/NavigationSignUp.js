import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/yelp-logo.png';
import signupimg from '../../images/signup_img.png';
import '../../App.css';

class NavigationSignUp extends Component {
  state = {};
  render() {
    return (
      <>
        <nav aria-label='breadcrumb' className='banner'>
          <a href='/'>
            <img src={logo} className='banner-img'></img>
          </a>
        </nav>
      </>
    );
  }
}

export default NavigationSignUp;
