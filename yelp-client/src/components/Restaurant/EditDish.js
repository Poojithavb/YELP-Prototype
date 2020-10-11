import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router';

class AddEditDish extends Component {
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
      data: {},
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.handleImageupload = this.handleImageupload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params.item_id) {
      axios
        .get(
          `${connectionServer}/yelp/menuitem/edit/${this.props.match.params.item_id}`,
        )
        .then((response) =>
          this.setState({
            data: response.data,
            name: response.data.dishname,
            ingredients: response.data.ingredients,
            price: response.data.price,
            desc: response.data.description,
            category: response.data.itemCategory,
            fileText: response.data.item_image,
            rest_id: parseInt(localStorage.getItem('rest_id')),
          }),
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange(e) {
    this.setState({ category: e.target.value });
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
      .post(
        `${connectionServer}/yelp/menuitem/edit/${this.props.match.params.item_id}`,
        dishData,
      )
      .then((response) => {
        if (response.data === 'Updated') {
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
    if (this.state.message === 'Updated') {
      redirectVar = <Redirect to={{pathname:`/res/${localStorage.getItem('rest_id')}/restaurant_info`}} />;
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
                    defaultValue={this.state.data.dishname}
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
                    defaultValue={this.state.data.ingredients}
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
                    defaultValue={this.state.data.price}
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
                    defaultValue={this.state.data.description}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    name='appetizer'
                    label='Appetizer'
                    value='Appetizer'
                    onChange={this.handleCheckboxChange}
                    //checked={this.state.data.itemCategory === 'appetizer'}
                  />
                  <Form.Check
                    name='salads'
                    label='Salads'
                    value='Salads'
                    onChange={this.handleCheckboxChange}
                    //checked={this.state.data.itemCategory === 'salads'}
                  />
                  <Form.Check
                    name='maincourse'
                    label='Main course'
                    value='Main Course'
                    onChange={this.handleCheckboxChange}
                    //checked={this.state.data.itemCategory === 'Main Course'}
                  />
                  <Form.Check
                    name='desserts'
                    label='Desserts'
                    value='Desserts'
                    onChange={this.handleCheckboxChange}
                    // checked={this.state.data.itemCategory === 'desserts'}
                  />
                  <Form.Check
                    name='beverages'
                    label='Beverages'
                    value='Beverages'
                    onChange={this.handleCheckboxChange}
                    //checked={this.state.data.itemCategory === 'beverages'}
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
                    Update
                  </Button>
                </ButtonGroup>
                <Link
                  to={{
                    pathname: `/res/${localStorage.getItem(
                      'rest_id',
                    )}/restaurant_info`,
                  }}>
                  <a style={{ marginLeft: '15px' }}>Cancel</a>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddEditDish;
