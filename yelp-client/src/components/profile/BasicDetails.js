import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import NavList from './NavList';
import '../../App';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCustomerDetails,
  updateCustomerBasicDetails,
} from '../../store/actions/customerProfileAction';

class BasicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }

  componentWillMount() {
    this.props.getCustomerDetails();
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateDetails(e) {
    e.preventDefault();
    const data = {
      firstname: e.target.elements.firstName.value,
      lastname: e.target.elements.lastName.value,
      nickname: e.target.elements.nickName.value,
      headline: e.target.elements.headline.value,
      dateofbirth: e.target.elements.dob.value,
      city: e.target.elements.city.value,
      state: e.target.elements.userstate.value,
      country: e.target.elements.country.value,
      zipcode: e.target.elements.zipcode.value,
    };
    this.props.updateCustomerBasicDetails(data);
  }

  render() {
    let redirectVar = null;
    if (this.props.user === 'updated') {
      if (this.state.firstName) {
        localStorage.setItem('first_name', this.state.firstName);
      }
      if (this.state.lastName) {
        localStorage.setItem('last_name', this.state.lastName);
      }
      alert('Updated successfully');
      redirectVar = <Redirect to='/user/user_details' />;
    }
    return (
      <React.Fragment>
        {redirectVar}
        <UserProfileNavBar></UserProfileNavBar>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 mt-3'>
              <NavList></NavList>
            </div>
            <div className='col-md-6' style={{ marginBottom: '5%' }}>
              <h4 style={{ color: '#d0312d', float: 'left' }}>Profile</h4>
              <br />
              <hr className='mb-3'></hr>
              <Form onSubmit={this.updateDetails}>
                <Form.Group controlId='formfirstName'>
                  <Form.Label>
                    <strong>First Name</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control
                    required={true}
                    type='text'
                    name='firstName'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.firstname}
                    pattern='^[A-Za-z0-9 ]+$'
                  />
                </Form.Group>
                <Form.Group controlId='formlastName'>
                  <Form.Label>
                    <strong>Last Name</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='lastName'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.lastname}
                    required
                    pattern='^[A-Za-z0-9 ]+$'
                  />
                </Form.Group>
                <Form.Group controlId='formnickName'>
                  <Form.Label>
                    <strong>Nick Name</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    The Boss, Calamity Jane, The Prolific Reviewer
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='nickName'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.nickname}
                  />
                </Form.Group>
                <Form.Group controlId='formHeadline'>
                  <Form.Label>
                    <strong>Your Headline</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    Taco Tuesday Aficionado, The Globetrotting Reviewer
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='headline'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.headline}
                  />
                </Form.Group>
                <Form.Group controlId='formdob'>
                  <Form.Label>
                    <strong>Date Of Birth</strong>
                  </Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    placeholder='Date of Birth'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.dateofbirth}
                  />
                </Form.Group>
                <Form.Group controlId='formcity'>
                  <Form.Label>
                    <strong>City</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='city'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.city}
                  />
                </Form.Group>
                <Form.Group controlId='formstate'>
                  <Form.Label>
                    <strong>State</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='userstate'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.state}
                  />
                </Form.Group>
                <Form.Group controlId='formcountry'>
                  <Form.Label>
                    <strong>Country</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='country'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.country}
                  />
                </Form.Group>
                <Form.Group controlId='formzipcode'>
                  <Form.Label>
                    <strong>Zipcode</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='zipcode'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.zipcode}
                  />
                </Form.Group>
                <ButtonGroup aria-label='First group'>
                  <Button variant='danger' type='submit'>
                    Save Changes
                  </Button>
                </ButtonGroup>
                <a href='/user/user_details' style={{ marginLeft: '15px' }}>
                  Cancel
                </a>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

BasicDetails.propTypes = {
  getCustomerDetails: PropTypes.func.isRequired,
  updateCustomerBasicDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.customerProfile.user,
});

export default connect(mapStateToProps, {
  getCustomerDetails,
  updateCustomerBasicDetails,
})(BasicDetails);
