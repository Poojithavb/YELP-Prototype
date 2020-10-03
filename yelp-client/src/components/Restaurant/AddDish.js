import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';
import { Redirect } from 'react-router';

class AddDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      price: '',
      desc: '',
      category: '',
      fileText: '',
      rest_id: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.handleImageupload = this.handleImageupload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange(e) {
    this.setState({ category: e.target.name });
  }

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

    axios
      .post(`${connectionServer}/yelp/upload/item`, formData, uploadConfig)
      .then((response) => {
        alert('Image uploaded successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const dishData = {
      name: this.state.name,
      ingredients: this.state.ingredients,
      price: this.state.price,
      description: this.state.desc,
      category: this.state.category,
      filename: this.state.fileText,
      rest_id: parseInt(localStorage.getItem('rest_id')),
    };

    axios
      .post(`${connectionServer}/yelp/menuitem/add`, dishData)
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
                Add/Update Dish
              </h4>
              <br />
              <hr className='mb-3'></hr>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='formName'>
                  <Form.Label>
                    <strong>Dish Name</strong>
                  </Form.Label>
                  <Form.Control
                    required={true}
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='formingredients'>
                  <Form.Label>
                    <strong>Main Ingredients</strong>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    name='ingredients'
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='formprice'>
                  <Form.Label>
                    <strong>Dish Price</strong>
                  </Form.Label>
                  <Form.Control
                    required
                    type='text'
                    name='price'
                    required
                    onChange={this.changeHandler}
                  />
                </Form.Group>
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
                <Form.Group>
                  <Form.Check
                    name='appetizer'
                    label='Appetizer'
                    onChange={this.handleCheckboxChange}
                  />
                  <Form.Check
                    name='salads'
                    label='Salads'
                    onChange={this.handleCheckboxChange}
                  />
                  <Form.Check
                    name='maincourse'
                    label='Main course'
                    onChange={this.handleCheckboxChange}
                  />
                  <Form.Check
                    name='desserts'
                    label='Desserts'
                    onChange={this.handleCheckboxChange}
                  />
                  <Form.Check
                    name='beverages'
                    label='Beverages'
                    onChange={this.handleCheckboxChange}
                  />
                </Form.Group>
                <Form.Group controlId='formphoto'>
                  <Form.Label>
                    <strong>Add Dish photo</strong>
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
                <a href='/res/restaurant_info' className='ml-3'>
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

export default AddDish;
