import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import UserProfileJumbo from './UserProfileJumbo';
import NavList from './NavList';
import '../../App';

class ContactInfo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <UserProfileNavBar></UserProfileNavBar>

        <div class='container mt-5'>
          <div class='row'>
            <div class='col-md-4 mt-3'>
              <NavList></NavList>
            </div>
            <div class='col-md-6 mb-5'>
              <h4 style={{ color: 'red', float: 'left' }}>Profile</h4>
              <br />
              <hr class='mb-3'></hr>
              <Form.Group controlId='email'>
                <Form.Label>
                  <strong>Email</strong>
                </Form.Label>
                <Form.Text className='text-muted'>
                  This field is required.
                </Form.Text>
                <Form.Control type='email' />
              </Form.Group>
              <Form.Group controlId='contactnumber'>
                <Form.Label>
                  <strong>Contact Number</strong>
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

export default ContactInfo;
