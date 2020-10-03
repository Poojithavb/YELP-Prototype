import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import connectionServer from '../../webConfig';
import axios from 'axios';

class ViewEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/events/show/${localStorage.getItem('rest_id')}
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

  render() {
    let renderOutput = [];
    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        let imgsrc = null;
        if (this.state.data[i].filename) {
          imgsrc = `${connectionServer}/yelp/images/events/${this.state.data[i].filename}`;
        }
        renderOutput.push(
          <div className='col-md-5 ml-5 mt-5 mb-5'>
            <Card className='pl-5 pr-5 pt-3'>
              <Card.Body className='pl-0'>
                <Card.Img src={imgsrc} />

                <Card.Title className='card-img-top img-fluid mt-2'>
                  <Link>{this.state.data[i].name}</Link>
                </Card.Title>
                {this.state.data[i].date && (
                  <label>
                    <i className='far fa-calendar mr-2'></i>
                    {this.state.data[i].date}, {}
                    {this.state.data[i].time}
                  </label>
                )}
                <br />
                {this.state.data[i].location && (
                  <label>
                    <i className='fas fa-map-marker-alt mr-2'></i>
                    {this.state.data[i].location}
                  </label>
                )}
                <br />
                {this.state.data[i].description && (
                  <label>
                    <strong style={{ color: ' #d0312d' }}>What/Why: </strong>
                    <br />
                    {/* {this.state.data[i].description} */}
                    {this.state.data[i].description.substring(0, 155)}
                  </label>
                )}
              </Card.Body>
              <Card.Footer>
                <Link>Registered People </Link>
                <br />
              </Card.Footer>
            </Card>
          </div>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mt-5'>
              <h3
                style={{ color: ' #d0312d', textAlign: 'center' }}
                className='pl-3'>
                Events
              </h3>
              <span style={{ float: 'right' }}>
                <Link
                  to={{
                    pathname: `/res/restaurant_info/${localStorage.getItem(
                      'rest_id',
                    )}/createevent`,
                  }}>
                  <button className='btn btn-danger'>Create an Event</button>
                </Link>
              </span>
            </div>
            {renderOutput}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ViewEvents;
