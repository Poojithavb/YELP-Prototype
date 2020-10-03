import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import connectionServer from '../../webConfig';
import axios from 'axios';
import { Redirect } from 'react-router';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      time: '',
      date: '',
      location: '',
      hashtags: '',
      fileText: '',
      rest_id: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.handleImageupload = this.handleImageupload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        file: e.target.files[0],
        fileText: e.target.files[0].name,
      });
    }
  };

  handleImageupload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.file);

    const uploadConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    console.log();
    axios
      .post(
        `${connectionServer}/yelp/upload/eventimage`,
        formData,
        uploadConfig,
      )
      .then((response) => {
        alert('Image uploaded successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const eventData = {
      name: this.state.name,
      desc: this.state.desc,
      time: this.state.time,
      date: this.state.date,
      location: this.state.location,
      hashtags: this.state.hashtags,
      fileText: this.state.fileText,
      rest_id: parseInt(localStorage.getItem('rest_id')),
    };

    axios
      .post(`${connectionServer}/yelp/events/add`, eventData)
      .then((response) => {
        if (response.data === 'Inserted') {
          this.setState({
            message: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let redirectVar = null;
    if (this.state.message === 'Inserted') {
      const rest_id = localStorage.getItem('rest_id');
      redirectVar = (
        <Redirect
          to={{
            pathname: `/res/restaurant_info/${rest_id}/events`,
          }}
        />
      );
    }

    return (
      <React.Fragment>
        {redirectVar}
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 ml-5 mb-5 mt-3'>
              <h4 style={{ color: '#d0312d', float: 'left' }}>Add Event</h4>
              <br />
              <hr className='mb-3'></hr>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formName'>
                  <Form.Label>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                  />
                  <Form.Group controlId='formdesc'>
                    <Form.Label>
                      <strong>Description</strong>
                    </Form.Label>
                    <Form.Control
                      type='text'
                      name='desc'
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group controlId='formtime'>
                  <Form.Label>
                    <strong>Time</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='time'
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='formdate'>
                  <Form.Label>
                    <strong>Date</strong>
                  </Form.Label>
                  <Form.Control
                    type='date'
                    name='date'
                    onChange={this.changeHandler}
                    //defaultValue={this.props.user.dateofbirth}
                  />
                </Form.Group>
                <Form.Group controlId='formlocation'>
                  <Form.Label>
                    <strong>Location</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='location'
                    required
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='formhashtag'>
                  <Form.Label>
                    <strong>Hashtags</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='hashtags'
                    onChange={this.changeHandler}
                  />
                </Form.Group>

                <Form.Group controlId='formphoto'>
                  <Form.Label>
                    <strong>Add Photo</strong>
                  </Form.Label>
                  <Form.File
                    name='addphoto'
                    id='file-input'
                    onChange={this.onImageChange}
                  />
                  <div>
                    <input
                      type='submit'
                      name='btn_upload_profile_pic'
                      value='Upload'
                      onClick={this.handleImageupload}
                    />
                  </div>
                </Form.Group>
                <ButtonGroup aria-label='First group' className='mt-2'>
                  <Button variant='danger' type='submit'>
                    Save Changes
                  </Button>
                </ButtonGroup>
                <Link
                  to={{
                    pathname: `/res/restaurant_info/${localStorage.getItem(
                      'rest_id',
                    )}/events`,
                  }}
                  className='ml-3'>
                  Cancel
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateEvent;
