import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import img1 from '../../images/res1_1.jpg';
import img2 from '../../images/res1_2.jpg';
import img3 from '../../images/res1_3.jpg';
import img4 from '../../images/res1_4.jpg';
import '../../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import {
  getRestaurantDetails,
  getReviews,
} from '../../store/actions/restaurantProfileAction';

class RestaurantInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    localStorage.setItem('rest_id', this.props.match.params.rest_id);
    this.props.getRestaurantDetails();
    this.props.getReviews();
  }

  render() {
    let renderOutput = [];
    let renderStars = [];

    if (this.props && this.props.reviews && this.props.reviews.length > 0) {
      for (var i = 0; i < this.props.reviews.length; i++) {
        renderOutput.push(
          <Card>
            <Card.Header>
              <StarRatings
                rating={this.props.reviews[i].rating}
                starDimension='18px'
                starSpacing='1px'
                starRatedColor='red'
              />
              <span style={{ float: 'right' }}>
                {this.props.reviews[i].date}
              </span>
            </Card.Header>
            <Card.Body>
              <p>{this.props.reviews[i].review}</p>
              <footer className='blockquote-footer'>
                {this.props.reviews[i].firstname} {}
                {this.props.reviews[i].lastname}
              </footer>
            </Card.Body>
          </Card>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container pt-5' style={{ height: '470px' }}>
          <div className='row'>
            <div className='col-md-12'>
              <img
                src={img1}
                className='rounded float-left  res-img'
                alt='...'
                style={{ width: '100%', height: '50%' }}
              />
            </div>
            {/* <div className='col-md-3 col-sm-6 col-xs-12'>
              <img
                src={img2}
                className='rounded float-left res-img'
                alt='...'
              />
            </div>
            <div className='col-md-3 col-sm-6 col-xs-12'>
              <img
                src={img3}
                className='rounded float-right res-img'
                alt='...'
              />
            </div>
            <div className='col-md-3 col-sm-6 col-xs-12 img-wrapper'>
              <img
                src={img4}
                className='rounded float-right res-img'
                alt='...'
              /> */}
            {/* <div className='img-overlay'>
                <button className='button btn-light btn-lg'>See All</button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mb-5'>
              <h1 className='display-6' style={{ fontWeight: '40rem' }}>
                {this.props.user.name}
              </h1>
              {this.props.user.description && (
                <p>{this.props.user.description}</p>
              )}
              <p>
                {this.props.user.address}
                {this.props.user.city && <span>, {this.props.user.city}</span>}
                {this.props.user.state && (
                  <span>, {this.props.user.state}</span>
                )}
              </p>
              <p>
                <i
                  className='fa fa-star'
                  aria-hidden='true'
                  style={{ color: 'red' }}></i>
                <i
                  className='fa fa-star'
                  aria-hidden='true'
                  style={{ color: 'red' }}></i>
                <i
                  className='fa fa-star'
                  aria-hidden='true'
                  style={{ color: 'red' }}></i>
                <i
                  className='fa fa-star-half'
                  aria-hidden='true'
                  style={{ color: 'red' }}></i>
              </p>
              <p style={{ color: 'green' }}>
                Timings:{' '}
                <span style={{ color: 'black' }}>
                  {this.props.user.opening_time} AM -
                  {this.props.user.closing_time} PM
                </span>
              </p>
              <p>
                <Link
                  to={{
                    pathname: `/res/${localStorage.getItem(
                      'rest_id',
                    )}/addreview`,
                    state: {
                      name: this.props.user.name,
                    },
                  }}>
                  <button className='btn btn-danger'>
                    <span className='mr-2'>
                      <i
                        className='fa fa-star'
                        aria-hidden='true'
                        style={{ color: 'white' }}></i>
                    </span>
                    Write a Review
                  </button>
                </Link>
                <button className='btn btn-outline-dark ml-2'>
                  <span className='mr-2'>
                    <i className='fas fa-camera' aria-hidden='true'></i>
                  </span>
                  Add Photo
                </button>
                <Link
                  to={{
                    pathname: `/res/restaurant_info/${localStorage.getItem(
                      'rest_id',
                    )}/events`,
                  }}>
                  <button className='btn btn-outline-dark ml-2'>
                    <span className='mr-2'>
                      <i className='far fa-calendar-check'></i>
                    </span>
                    Events
                  </button>
                </Link>
              </p>
            </div>
            <div className='col-md-4'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <span className='mr-2'>
                    <i className='fas fa-phone-alt'></i>
                  </span>
                  {this.props.user.phone}
                </li>
                <li className='list-group-item'>
                  <span className='mr-2'>
                    <i className='fas fa-envelope-open-text'></i>
                  </span>
                  {this.props.user.email}
                </li>
                <li className='list-group-item'>
                  <a href='/res/restaurant_info/menu'>
                    <span className='mr-2'>
                      <i className='fas fa-utensils'></i>
                    </span>
                    Full Menu
                  </a>
                </li>
                {localStorage.getItem('name') && (
                  <li className='list-group-item'>
                    <a href='/res/restaurant_info/update_profile'>
                      <span className='mr-2'>
                        <i className='far fa-id-card'></i>
                      </span>
                      Update Profile
                    </a>
                  </li>
                )}
                {localStorage.getItem('name') && (
                  <li className='list-group-item'>
                    <a href='/res/restaurant_info/adddish'>
                      <span className='mr-2'>
                        <i className='fas fa-hotdog'></i>
                      </span>
                      Add/Edit Dishes
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='col-md-6 pl-0 mb-5'>
            <hr />
            <h5 className='display-7'>Review Highlights</h5>
            <div>{renderOutput}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

RestaurantInfo.propTypes = {
  getRestaurantDetails: PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  reviews: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.restaurantProfile.user,
  reviews: state.restaurantProfile.reviews,
});

export default connect(mapStateToProps, { getRestaurantDetails, getReviews })(
  RestaurantInfo,
);
