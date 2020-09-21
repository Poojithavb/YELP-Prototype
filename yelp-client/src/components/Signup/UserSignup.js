import React, { Component } from 'react';
import NavigationSignUp from './NavigationSignUp';
import signupimg from '../../images/signup_img.png';
import 'bootstrap/dist/css/bootstrap.css';
import backendServer from '../../webConfig';
import axios from 'axios';
import '../../App.css';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email_id: '',
      password: '',
    };
    this.SubmitUserDetails = this.SubmitUserDetails.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  SubmitUserDetails(e) {
    const headers = new Headers();
    e.preventDefault();
    const userData = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email_id,
      password: this.state.password,
    };

    axios.defaults.withCredentials = true;
    axios
      .post(`${backendServer}/yelp/signup/newuser`, userData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <NavigationSignUp></NavigationSignUp>
        <div className='container'>
          <div className='row' style={{ padding: '1.4rem' }}>
            <div className='col-md-6'>
              <div className='panel formtext'>
                <a href='ownersignup'>
                  Are you a restaurant owner? Sign Up here
                </a>
              </div>
              <br />
              <div className='panel'>
                <h4 className='formtext'>Sign Up for Yelp</h4>
              </div>
              <br />
              <form onSubmit={this.SubmitUserDetails}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='firstname'
                    placeholder='First Name'
                    pattern='[A-Za-z0-9 ]+'
                    title='Please enter only alphabets or numbers'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='lastname'
                    placeholder='Last Name'
                    pattern='[A-Za-z0-9 ]+'
                    title='Please enter only alphabets or numbers'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='email_id'
                    placeholder='Email Id'
                    pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$"
                    title='Please enter valid email address'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    onChange={this.changeHandler}
                    placeholder='Password'
                    pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
                    title='Password must contain one lowercase, one uppercase, one number and one special character'
                    required
                  />
                </div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-danger btn-block form-control'>
                    Sign Up
                  </button>
                </div>
                <p className='forgot'>
                  Already on Yelp?
                  <span>
                    <a href='/login' className='hyperlink'>
                      Login
                    </a>
                  </span>
                </p>
              </form>
            </div>
            <div className='col-md-6 signupimg'>
              <img
                src={signupimg}
                alt='sign-up-img'
                className='img-responsive'
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserSignup;
