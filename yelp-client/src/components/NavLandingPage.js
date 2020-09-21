import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import '../App.css';

class NavLandingPage extends Component {
  state = {};
  render() {
    let login = null;
    if (cookie.load('cookie')) {
      login = (
        <a className='nav-link' href='/user/user_details'>
          <span style={{ float: 'right' }}>
            <i className='far fa-user'></i>
            <i class='fas fa-caret-square-down'></i>
          </span>
        </a>
      );
    } else {
      login = (
        <>
          <a
            type='button'
            className='btn btn-outline-light'
            style={{
              float: 'right',
              marginLeft: '10%',
            }}
            href='/signup'>
            Sign Up
          </a>
          <a
            style={{
              marginTop: '0.5%',
              float: 'right',
              color: '#FFF',
              textDecoration: 'none',
              borderBottom: '1px solid #FFF',
            }}
            href='/login'>
            Login
          </a>
        </>
      );
    }
    let redirectVar = null;
    if (cookie.load('cookie')) {
      redirectVar = <Redirect to='/' />;
    }
    return (
      <div className='container'>
        <div className='row' style={{ paddingTop: '3%' }}>
          <div className='col-md-9'>
            <a href='#' style={{ marginLeft: '2%', color: '#fff' }}>
              Write a Review
            </a>
            <a href='#' className='nav-landing'>
              Events
            </a>
            <a href='#' className='nav-landing'>
              Talk
            </a>
          </div>
          <div className='col-md-3'>{login}</div>
        </div>
      </div>
    );
  }
}

export default NavLandingPage;
