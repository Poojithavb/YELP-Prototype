import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import UserProfileJumbo from './UserProfileJumbo';
import NavList from './NavList';
import '../../App';

class BasicDetails extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <UserProfileNavBar></UserProfileNavBar>
        <UserProfileJumbo></UserProfileJumbo>
        <div class='container'>
          <div class='row'>
            <div class='col-md-4 mt-5'>
              <NavList></NavList>
            </div>
            <div class='col-md-6' style={{ marginBottom: '5%' }}>
              <h4 style={{ color: 'red', float: 'left' }}>Profile</h4>
              <br />
              <hr class='mb-3'></hr>
              <Form.Group controlId='firstName'>
                <Form.Label>
                  <strong>First Name</strong>
                </Form.Label>
                <Form.Text className='text-muted'>
                  This field is required.
                </Form.Text>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='lastName'>
                <Form.Label>
                  <strong>Last Name</strong>
                </Form.Label>
                <Form.Text className='text-muted'>
                  This field is required.
                </Form.Text>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='nickName'>
                <Form.Label>
                  <strong>Nick Name</strong>
                </Form.Label>
                <Form.Text className='text-muted'>
                  The Boss, Calamity Jane, The Prolific Reviewer
                </Form.Text>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='nickName'>
                <Form.Label>
                  <strong>Your Headline</strong>
                </Form.Label>
                <Form.Text className='text-muted'>
                  Taco Tuesday Aficionado, The Globetrotting Reviewer
                </Form.Text>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='dob'>
                <Form.Label>
                  <strong>Date Of Birth</strong>
                </Form.Label>
                <Form.Control
                  type='date'
                  name='dob'
                  placeholder='Date of Birth'
                />
              </Form.Group>
              <Form.Group controlId='city'>
                <Form.Label>
                  <strong>City</strong>
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='state'>
                <Form.Label>
                  <strong>State</strong>
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='country'>
                <Form.Label>
                  <strong>Country</strong>
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Form.Group controlId='zipcode'>
                <Form.Label>
                  <strong>Zipcode</strong>
                </Form.Label>
                <Form.Control type='text' />
              </Form.Group>
              <Button variant='danger' type='submit'>
                Save Changes
              </Button>
              <a href='#' style={{ marginLeft: '15px' }}>
                Cancel
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BasicDetails;
