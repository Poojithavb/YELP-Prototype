import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationSignUp from '../components/Signup/NavigationSignUp';
import signupimg from '../images/signup_img.png';
import connectionServer from '../webConfig';
import { Redirect } from 'react-router';
import cookie from 'react-cookies';
import axios from 'axios';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: '',
      password: '',
      authFlag: false,
      errors: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  componentWillMount() {
    this.setState({
      authFlag: false,
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitLogin(e) {
    const headers = new Headers();
    e.preventDefault();
    const data = {
      email_id: this.state.email_id,
      password: this.state.password,
    };
    axios.defaults.withCredentials = true;
    axios
      .post(`${connectionServer}/yelp/login`, data)
      .then((response) => {
        console.log('Status Code : ', response.status);
        if (response.status === 200 && response.data.firstname) {
          this.setState({
            authFlag: true,
            errors: '',
          });
          const { emailId } = this.state;
          sessionStorage.setItem('email_id', emailId);
          sessionStorage.setItem('firstname', response.data.firstname);
          sessionStorage.setItem('lastname', response.data.lastname);
          sessionStorage.setItem('cust_id', response.data.cust_id);
        } else {
          console.log(response);
          this.setState({
            authFlag: false,
            errors: '',
          });
        }

        if (response.data === 'Username/password is wrong') {
          const errorcredentials = 'Username/password is wrong';
          this.setState({ errors: errorcredentials });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let redirectVar = null;
    if (cookie.load('cookie')) {
      redirectVar = <Redirect to='/' />;
    }
    return (
      <React.Fragment>
        {redirectVar}
        <NavigationSignUp></NavigationSignUp>
        <div className='container'>
          <div className='formtext'>
            <div className='row' style={{ paddingTop: '10%' }}>
              <div className='col-md-6'>
                <div className='panel'>
                  <h4>Sign in to Yelp</h4>
                </div>
                <p>
                  New to Yelp?{' '}
                  <span>
                    <a href='/signup' className='hyperlink'>
                      Sign up
                    </a>
                  </span>
                </p>
                <br />
                <form onSubmit={this.submitLogin}>
                  <div className='form-group formControl'>
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
                  <div className='form-group formControl'>
                    <input
                      type='password'
                      className='form-control'
                      onChange={this.changeHandler}
                      name='password'
                      placeholder='Password'
                      required
                    />
                  </div>
                  <div className='forgot'>
                    <a href='#'>Forgot password?</a>
                  </div>
                  <div className='form-group formControl'>
                    <button
                      type='submit'
                      className='btn btn-danger btn-block form-control'>
                      Sign in
                    </button>
                  </div>
                  {this.state.errors && (
                    <div className='alert alert-danger'>
                      {this.state.errors}
                    </div>
                  )}
                </form>
              </div>
              <div className='col-md-6'>
                <img
                  src={signupimg}
                  alt='sign-up-img'
                  className='img-responsive'
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
