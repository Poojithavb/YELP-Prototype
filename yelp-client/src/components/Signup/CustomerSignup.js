import React, { Component } from 'react';
import NavigationSignUp from './NavigationSignUp';
import signupimg from '../../images/signup_img.png';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { customerSignUp } from '../../store/actions/signUpActions';
import '../../App.css';
import { Redirect } from 'react-router-dom';

class CustomerSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.SubmitUserDetails = this.SubmitUserDetails.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  SubmitUserDetails(e) {
    e.preventDefault();
    const userData = {
      fname: this.state.firstname,
      lname: this.state.lastname,
      email: this.state.email_id,
      password: this.state.password,
    };

    this.props.customerSignUp(userData);
    this.setState({
      signupFlag: 1,
    });
  }

  render() {
    let redirectVar = null;
    let message = '';
    if (localStorage.getItem('cust_id')) {
      redirectVar = <Redirect to='/' />;
    } else if (this.props.user === 'Inserted' && this.state.signupFlag) {
      alert('You have registered successfully');
      redirectVar = <Redirect to='/login' />;
    } else if (this.props.user === 'UserExists' && this.state.signupFlag) {
      message = 'Email id is already registered';
    }

    return (
      <React.Fragment>
        {redirectVar}

        <NavigationSignUp></NavigationSignUp>
        <div className='container'>
          <div className='row' style={{ padding: '1.4rem' }}>
            <div className='col-md-6 pl-5 pr-5'>
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
                {message && <div className='alert alert-danger'>{message}</div>}
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
      </React.Fragment>
    );
  }
}

CustomerSignup.propTypes = {
  customerSignUp: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.signup.user,
});

export default connect(mapStateToProps, { customerSignUp })(CustomerSignup);
