import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import connectionServer from '../../webConfig';
import axios from 'axios';
import { Redirect } from 'react-router';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const reviewData = {
      rating: this.state.rating,
      review: this.state.review,
      rest_id: parseInt(localStorage.getItem('rest_id')),
      cust_id: parseInt(localStorage.getItem('user_id')),
    };

    axios
      .post(
        `${connectionServer}/yelp/restaurant/${localStorage.getItem(
          'rest_id',
        )}/addreview`,
        reviewData,
      )
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
    const rest_id = localStorage.getItem('rest_id');
    let redirectVar = null;
    if (this.state.message === 'Inserted') {
      redirectVar = (
        <Redirect
          to={{
            pathname: `/res/${rest_id}/restaurant_info`,
          }}
        />
      );
    }
    return (
      <React.Fragment>
        {redirectVar}
        <NavBar />
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: '#0197f6' }}>
              {this.props.location.state.name}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <StarRatings
              rating={this.state.rating}
              starRatedColor='red'
              changeRating={this.changeRating}
              numberOfStars={5}
              name='rating'
            />
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label></Form.Label>
              <Form.Control
                as='textarea'
                name='review'
                rows={8}
                onChange={this.changeHandler}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='danger' onClick={this.handleSubmit}>
              Save changes
            </Button>
            <Link
              to={{
                pathname: `/res/${localStorage.getItem(
                  'rest_id',
                )}/restaurant_info`,
              }}>
              <Button variant='secondary'>Close</Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </React.Fragment>
    );
  }
}

export default Review;
