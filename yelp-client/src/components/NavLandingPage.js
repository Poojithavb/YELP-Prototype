import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';
import { Dropdown } from 'react-bootstrap';
import '../App.css';
import { connect } from 'react-redux';
import { logout } from '../store/actions/loginAction';

class NavLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    window.localStorage.clear();
    this.props.logout();
    cookie.remove('cookie');
    window.location.href = '/';
  }

  render() {
    let login = null;
    if (cookie.load('cookie')) {
      login = (
        <Dropdown style={{ float: 'right' }}>
          <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
            <i className='far fa-user'></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href='/user/user_details'>
              <span className='mr-2'>
                <i className='far fa-user'></i>
              </span>
              About Me
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={this.handleLogout}>
              <span className='mr-2'>
                <i className='fas fa-sign-out-alt'></i>
              </span>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
            href='/customersignup'>
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

export default connect(null, { logout })(NavLandingPage);
