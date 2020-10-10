import React, { Component } from 'react';
import cookie from 'react-cookies';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/yelp-logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../App.css';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../store/actions/loginAction';
import connectionServer from '../../webConfig';
import axios from 'axios';

class UserProfileNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      selectoption: 0,
      isSignedUp: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  handleLogout() {
    window.localStorage.clear();
    cookie.load('cookie');
    cookie.remove('cookie', { path: '/' });
    this.props.logout();
    window.location.href = '/';
  }

  handleInputChange(e) {
    this.setState({ selectoption: parseInt(e.target.value) });
    
  }

  searchChangeHandler(e) {
    if(e.target.value===' '){
      this.setState({ keyword: null});
    }
    this.setState({ keyword: e.target.value });
  }

  handleSubmit(e) {
    this.setState({ isSignedUp: true });
  }

  render() {
    let redirectVar = null;
    if (this.state.isSignedUp) {
      this.setState({ isSignedUp: false });
      redirectVar = (
        <Redirect
          to={{
            pathname: '/res/restaurant_list/',
            state: {
              keyword: this.state.keyword,
              selectoption: this.state.selectoption,
            },
          }}></Redirect>
      );
    }
    return (
      <React.Fragment>
        {redirectVar}
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
         

            {localStorage.getItem('name') ? (
               <Link
               to={{
                 pathname: `/res/${localStorage.getItem('rest_id')}/restaurant_info`,
               }}
             >
            <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='banner-img profile-logo'></img>
          </a>
          </Link>) :  <a href='/'>
              <img
                src={logo}
                alt='logo'
                className='banner-img profile-logo'></img>
          </a> }

          </div>
          {localStorage.getItem('name') ? null: ( <div className='navbar' style={{ marginRight: '10%' }}>
            <form className='form-inline mx-auto'>
              <select
                className='custom-select input-group'
                id='inputGroupSelect02'
                onChange={this.handleInputChange}>
                <option value='0' selected>All...</option>
                <option value='1'>Mode of delivery</option>
                <option value='2'>Location</option>
                <option value='3'>Cuisine</option>
                <option value='4'>Dish Name</option>
              </select>
              <input
                style={{ width: '330px' }}
                list='searchWord'
                className='form-control lg-5'
                type='search'
                placeholder='Restaurant Search'
                aria-label='Search'
                autoComplete='on'
                onChange={this.searchChangeHandler}
              />
              <button
                style={{
                  backgroundColor: 'red',
                }}
                type='button'
                className='btn'
                onClick={this.handleSubmit}>
                <i className='fas fa-search'></i>
              </button>
            </form>
          </div>)}
          <div>
            <ul className='navbar-nav mr-auto'>
            {localStorage.getItem('name') ? null:  (<li className='nav-item active mr-2 btn'>
                <a href='/res/events' className='nav-button'>
                  Events
                </a>
              </li>)}
              {localStorage.getItem('name') ? null: (<li className='nav-item active mr-2 btn'>
                <Link  to={{
                pathname: '/res/restaurant_list/',
                state: {
                  keyword: null,
                  selectoption: 0,
                },
              }} className='nav-button'>
                  Restaurant
                </Link>
              </li> )}
              <li className='nav-item'>
              {localStorage.getItem('yelp_user') && (<Dropdown style={{ float: 'right' }}>
                  <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                    <i className='far fa-user'></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {localStorage.getItem('first_name') && (
                      <Dropdown.Item>
                        <Link
                          to={{
                            pathname: `/user/${localStorage.getItem(
                              'user_id',
                            )}/user_details`,
                          }}>
                          <span className='mr-2'>
                            <i className='far fa-user'></i>
                          </span>
                          About Me
                        </Link>
                      </Dropdown.Item>
                    )}
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.handleLogout}>
                      <span className='mr-2'>
                        <i className='fas fa-sign-out-alt'></i>
                      </span>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>)}
              </li>
            </ul>
          </div>
        </nav>
        <nav className='navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <div className='navbar-header'></div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default connect(null, { logout })(UserProfileNavBar);
