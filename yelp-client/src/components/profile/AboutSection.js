import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import UserProfileJumbo from './UserProfileJumbo';
import NavList from './NavList';
import '../../App';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ilove: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  SubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
  }

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
              <Form onSubmit={this.SubmitHandler}>
                <Form.Group controlId='love'>
                  <Form.Label>
                    <strong>I Love...</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    Comma separated phrases (e.g. sushi, Radiohead, puppies)
                  </Form.Text>
                  <Form.Control
                    type='textarea'
                    name='ilove'
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='findmein'>
                  <Form.Label>
                    <strong>Find Me In</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    Nob Hill, the newest brunch spot, a turtleneck
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='blog'>
                  <Form.Label>
                    <strong>My Blog Or Website</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    www.example.com/myawesomeblog
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='yelpingSince'>
                  <Form.Label>
                    <strong>Yelping Since</strong>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='notyelping'>
                  <Form.Label>
                    <strong>When I’m Not Yelping...</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    I’m missing out, I’m working at the art gallery, I’m
                    probably at the movies
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Button variant='danger' type='submit'>
                  Save Changes
                </Button>
                <a href='#' style={{ marginLeft: '15px' }}>
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

export default AboutSection;
