import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import NavList from './NavList';
import '../../App';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCustomerDetails,
  updateContactInfo,
} from '../../store/actions/customerProfileAction';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount() {
    this.props.getCustomerDetails();
  }

  changeHandler(e) {
    console.log(this.props.updateAboutMe);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const data = {
      email: e.target.elements.email.value,
      contactnum: e.target.elements.contactnum.value,
    };
    console.log(data.contactnum);
    this.props.updateContactInfo(data);
  }

  render() {
    let redirectVar = null;
    if (this.props.user === 'updated') {
      if (this.state.email) {
        localStorage.setItem('email_id', this.state.email);
      }
      alert('Updated Successfully');
      redirectVar = <Redirect to='/user/user_details' />;
    }
    return (
      <React.Fragment>
        {redirectVar}
        <UserProfileNavBar></UserProfileNavBar>
        <div class='container mt-5'>
          <div class='row'>
            <div class='col-md-4 mt-3'>
              <NavList></NavList>
            </div>
            <div class='col-md-6 mb-5'>
              <h4 style={{ color: '#d0312d', float: 'left' }}>Profile</h4>
              <br />
              <hr class='mb-3'></hr>
              <Form onSubmit={this.submitHandler}>
                <Form.Group controlId='email'>
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control
                    required
                    type='email'
                    name='email'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.email}
                    pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$"
                    title='Please enter email in correct format'
                  />
                </Form.Group>
                <Form.Group controlId='contactnumber'>
                  <Form.Label>
                    <strong>Contact Number</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='contactnum'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.phone_number}
                  />
                </Form.Group>
                <Button variant='danger' type='submit'>
                  Save Changes
                </Button>
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

ContactInfo.propTypes = {
  getCustomerDetails: PropTypes.func.isRequired,
  updateContactInfo: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.customerProfile.user,
});

export default connect(mapStateToProps, {
  getCustomerDetails,
  updateContactInfo,
})(ContactInfo);
