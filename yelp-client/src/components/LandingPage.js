import React, { Component } from 'react';
import Navbar from './NavLandingPage';
import logo from '../images/yelp-logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='bg-overlay'>
          <Navbar></Navbar>
          <div className='container'>
            <div className='landing-header'>
              <img src={logo} className='logo'></img>
              <br />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
