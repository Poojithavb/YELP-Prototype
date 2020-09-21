import React, { Component } from 'react';
import UserProfileNavBar from './UserProfileNavBar';
import UserProfileJumbo from './UserProfileJumbo';
import NavList from './NavList';
import '../../App.css';

class UserDetails extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <UserProfileNavBar></UserProfileNavBar>
        <UserProfileJumbo></UserProfileJumbo>
        <div class='container'>
          <div class='row mb-5'>
            <div class='col-md-4 mt-5'>
              <NavList></NavList>
            </div>
            <div class='col-md-4 pl-0'>
              <h5 style={{ color: 'red' }}>Basic Details</h5>
              <h6>
                <strong>Nickname</strong>
              </h6>
              <p>Poojitha</p>
              <h6>
                <strong>Date Of Birth</strong>
              </h6>
              <p>VB</p>
              <h6>
                <strong>Email</strong>
              </h6>
              <p>pujith@abc.com</p>
              <h6>
                <strong>Contact Number</strong>
              </h6>
              <p>xxxxxxxxxx</p>
            </div>
            <div class='col-md-4 ver-div'>
              <h5 style={{ color: 'red' }}>About Poojitha</h5>
              <h6>
                <strong>Location</strong>
              </h6>
              <p>SanJose, CA</p>
              <h6>
                <strong>Yelping Since</strong>
              </h6>
              <p>2020</p>
              <h6>
                <strong>When I’m Not Yelping...</strong>
              </h6>
              <p>camping</p>
              <h6>
                <strong>Things I Love</strong>
              </h6>
              <p>camping</p>
              <h6>
                <strong>Find Me In</strong>
              </h6>
              <p>camping</p>
              <h6>
                <strong>My Blog Or Website</strong>
              </h6>
              <p>camping</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetails;
