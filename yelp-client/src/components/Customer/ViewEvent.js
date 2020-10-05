import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';

class ViewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/events/${this.props.match.params.eventid}/view
        `,
      )
      .then((response) =>
        this.setState({
          data: response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleRegister(e) {
    e.preventDefault();

    const eventData = {
      event_id: this.state.data.event_id,
      rest_id: this.state.data.rest_id,
      cust_id: parseInt(localStorage.getItem('user_id')),
      firstname: localStorage.getItem('first_name'),
      lastname: localStorage.getItem('last_name'),
    };

    axios
      .post(`${connectionServer}/yelp/events/register`, eventData)
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
    let imgsrc = `${connectionServer}/yelp/images/events/${this.state.data.filename}`;
    if (this.state.message === 'Inserted') {
      alert('Registered Succesfully');
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container mb-5'>
          <div className='row mt-5'>
            <div className='col-md-1'></div>
            <div className='col-md-5'>
              <div class='card' style={{ width: '28rem' }}>
                <img class='card-img-top' src={imgsrc} alt='Card image cap' />
              </div>
            </div>
            <div className='col-md-6'>
              <div class='card-body'>
                <h5 class='card-title' style={{ color: ' #1167b1' }}>
                  {this.state.data.name}
                </h5>
                <p class='card-text'>
                  {' '}
                  <i className='fas fa-map-marker-alt mr-2'></i>
                  {this.state.data.location}
                </p>
                <p class='card-text'>
                  {' '}
                  <i className='far fa-calendar mr-2'></i>
                  {this.state.data.date}
                </p>
                <p class='card-text'>
                  <i class='far fa-clock'></i> {this.state.data.time}
                </p>
                <p class='card-text'>Hashtag - {this.state.data.hashtags}</p>
                <button
                  href='#'
                  class='btn btn-primary'
                  onClick={this.handleRegister}>
                  Register
                </button>
                <a href='/res/events' class='btn btn-primary ml-2'>
                  Back
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10 mt-3'>
              <h5 style={{ color: ' #d0312d' }}>What/Why:</h5>
              <p>
                <p>{this.state.data.description}</p>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewEvent;
