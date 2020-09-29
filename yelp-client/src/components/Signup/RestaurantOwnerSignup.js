import React, { Component } from 'react';
import NavigationSignUp from './NavigationSignUp';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import signupimg from '../../images/signup_img.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { restaurantSignup } from '../../store/actions/signUpActions';

class RestaurantOwnerSignup extends Component {
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
    const headers = new Headers();
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email_id,
      password: this.state.password,
      address: this.state.address,
      zipcode: this.state.zipcode,
    };
    this.props.restaurantSignup(userData);
    this.setState({
      signupFlag: 1,
    });
  }

  render() {
    let redirectVar = null;
    let message = '';
    // if (localStorage.getItem('user_id')) {
    //   redirectVar = <Redirect to='/' />;
    // } else
    if (this.props.user === 'Inserted' && this.state.signupFlag) {
      alert('You have registered your restaurant successfully');
      redirectVar = <Redirect to='/login' />;
    } else if (
      this.props.user === 'RestaurantExists' &&
      this.state.signupFlag
    ) {
      message = 'Your restaurant is already registered';
    }
    console.log(message);

    return (
      <React.Fragment>
        {redirectVar}
        <NavigationSignUp></NavigationSignUp>
        <div className='container'>
          <div className='row' style={{ padding: '1.4rem' }}>
            <div className='col-md-6 pl-5 pr-5'>
              <div className='panel formtext'>
                <a href='customersignup'>Are you a Customer? Sign Up here</a>
              </div>
              <br />
              <div className='panel'>
                <h4 className='formtext'>Sign up for new restaurant account</h4>
              </div>
              <br />
              <form onSubmit={this.SubmitUserDetails}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='name'
                    placeholder='Restaurant Name'
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
                  <input
                    type='text'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='address'
                    placeholder='Address'
                    pattern='[A-Za-z0-9 ]+'
                    title='Please enter your address'
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    onChange={this.changeHandler}
                    name='zipcode'
                    placeholder='Zipcode'
                    pattern='[0-9 ]+'
                    title='Please enter only numbers'
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
                  Already on Yelp?{' '}
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

RestaurantOwnerSignup.propTypes = {
  restaurantSignup: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.signup.user,
});

export default connect(mapStateToProps, { restaurantSignup })(
  RestaurantOwnerSignup,
);
