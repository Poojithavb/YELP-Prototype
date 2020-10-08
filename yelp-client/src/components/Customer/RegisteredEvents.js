import React, { Component } from 'react';
import connectionServer from '../../webConfig';
import axios from 'axios';
import { Card } from 'react-bootstrap';

class RegisteredEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/events/showregistered/${localStorage.getItem(
          'user_id',
        )}`,
      )
      .then((response) =>
        this.setState({
          events: response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let renderRegistered = [];
    if (this.state && this.state.events && this.state.events.length > 0) {
      for (var i = 0; i < this.state.events.length; i++) {
        renderRegistered.push(
          <Card.Body>
            <ul>
              <li>{this.state.events[i].name}</li>
              <span>
                {this.state.events[i].date && (
                  <label>
                    <i className='far fa-calendar mr-2'></i>
                    {this.state.events[i].date}, {}
                    {this.state.events[i].time}
                  </label>
                )}
              </span>
              <br />
              <span>
                {this.state.events[i].location && (
                  <label>
                    <i className='fas fa-map-marker-alt mr-2'></i>
                    {this.state.events[i].location}
                  </label>
                )}
              </span>
            </ul>
          </Card.Body>,
        );
      }
    }
    else
    { 
      renderRegistered.push(
        <Card.Body  className='ml-5 mt-4'>
          <p>No Upcoming Events</p>
        </Card.Body>
      )
    }

    return (
      <div className='col-md-5 mt-5 ml-5 mr-4'>
        <Card className='pr-4'>
          <Card.Title className='ml-5 mt-4' style={{ color: ' #d0312d' }}>
            Registered Events
          </Card.Title>
          {renderRegistered}
        </Card>
      </div>
    );
  }
}

export default RegisteredEvents;
