import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import NavBar from '../profile/UserProfileNavBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  getRestaurantDetails,
  updateRestaurantDetails,
} from '../../store/actions/restaurantProfileAction';

class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
  }

  componentWillMount() {
    this.props.getRestaurantDetails();
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  updateDetails(e) {
    e.preventDefault();
    const data = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      address: e.target.elements.address.value,
      description: e.target.elements.description.value,
      city: e.target.elements.city.value,
      state: e.target.elements.userstate.value,
      zipcode: e.target.elements.zipcode.value,
      phone: e.target.elements.phone.value,
      openingtime: e.target.elements.openingtime.value,
      closingtime: e.target.elements.closingtime.value,
    };
    this.props.updateRestaurantDetails(data);
  }

  render() {
    let redirectVar = null;
    if (this.props.user === 'updated') {
      if (this.state.name) {
        localStorage.setItem('name', this.state.name);
      }
      if (this.state.email) {
        localStorage.setItem('email_id', this.state.email);
      }
      if (this.state.zipcode) {
        localStorage.setItem('zipcode', this.state.zipcode);
      }
      alert('Updated successfully');
      redirectVar = <Redirect to='/res/restaurant_info' />;
    }
    return (
      <React.Fragment>
        {redirectVar}
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 ml-5 mb-5 mt-3'>
              <h4 style={{ color: '#d0312d', float: 'left' }}>
                Update Profile
              </h4>
              <br />
              <hr className='mb-3'></hr>
              <Form onSubmit={this.updateDetails}>
                <Form.Group controlId='formName'>
                  <Form.Label>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.name}
                  />
                </Form.Group>
                <Form.Group controlId='formEmail'>
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
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
                <Form.Group controlId='formaddress'>
                  <Form.Label>
                    <strong>Address</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='address'
                    required
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.address}
                  />
                </Form.Group>
                <Form.Group controlId='formDescription'>
                  <Form.Label>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='description'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.description}
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
                <Form.Group controlId='formphone'>
                  <Form.Label>
                    <strong>Phone</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='phone'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.phone}
                  />
                </Form.Group>
                <Form.Group controlId='formtime'>
                  <Row>
                    <Col>
                      <Form.Label>
                        <strong>Opening Time</strong>
                      </Form.Label>
                      <input
                        type='time'
                        name='openingtime'
                        onChange={this.changeHandler}
                        defaultValue={this.props.user.opening_time}
                      />
                    </Col>
                    <Col>
                      <Form.Label>
                        <strong>Closing Time</strong>
                      </Form.Label>
                      <br />
                      <input
                        type='time'
                        name='closingtime'
                        onChange={this.changeHandler}
                        defaultValue={this.props.user.closing_time}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <ButtonGroup aria-label='First group'>
                  <Button variant='danger' type='submit'>
                    Save Changes
                  </Button>
                </ButtonGroup>
                <a href='/res/restaurant_info' style={{ marginLeft: '15px' }}>
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

UpdateProfile.propTypes = {
  getRestaurantDetails: PropTypes.func.isRequired,
  updateRestaurantDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.restaurantProfile.user,
});

export default connect(mapStateToProps, {
  getRestaurantDetails,
  updateRestaurantDetails,
})(UpdateProfile);
