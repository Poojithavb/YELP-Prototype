import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavigationSignUp from '../components/Signup/NavigationSignUp';
import signupimg from '../images/signup_img.png';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { custLogin } from '../store/actions/loginAction';
import '../App.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitLogin(e) {
    e.preventDefault();
    const data = {
      email_id: this.state.email_id,
      password: this.state.password,
    };
    this.props.custLogin(data);
    this.setState({
      authFlag: 1,
    });
  }

  render() {
    let redirectVar = null;
    let message = '';
    if (this.props.user && this.props.user.cust_id) {
      localStorage.setItem('email_id', this.props.user.email);
      localStorage.setItem('first_name', this.props.user.firstname);
      localStorage.setItem('user_id', this.props.user.cust_id);
      localStorage.setItem('last_name', this.props.user.lastname);
      redirectVar = <Redirect to='/' />;
    } else if (this.props.user && this.props.user.rest_id) {
      localStorage.setItem('email_id', this.props.user.email);
      localStorage.setItem('name', this.props.user.name);
      localStorage.setItem('rest_id', this.props.user.rest_id);
      localStorage.setItem('zipcode', this.props.user.zipcode);
      redirectVar = (
        <Redirect
          to={{
            pathname: `/res/${localStorage.getItem('rest_id')}/restaurant_info`,
          }}
        />
      );
    } else if (
      this.props.user === 'Username/password is wrong' &&
      this.state.authFlag
    ) {
      message = 'Incorrect Username/Password';
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
                    <a href='/customersignup' className='hyperlink'>
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
                  {/* <div className='forgot'>
                    <a href='#'>Forgot password?</a>
                  </div> */}
                  <div className='form-group formControl'>
                    <button
                      type='submit'
                      className='btn btn-danger btn-block form-control'>
                      Sign in
                    </button>
                  </div>
                  {message && (
                    <div className='alert alert-danger errormsg'>{message}</div>
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

Login.propTypes = {
  custLogin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  };
};

export default connect(mapStateToProps, { custLogin })(Login);
