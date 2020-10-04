import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../images/res1_1.jpg';
import connectionServer from '../../webConfig';
import axios from 'axios';

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios
      .get(`${connectionServer}/yelp/restaurant/list`)
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
        let restId = this.state.data[i].rest_id;
        if (this.state.data[i].filename) {
          //   imgsrc = `${connectionServer}/yelp/images/events/${this.state.data[i].filename}`;
          imgsrc = { img1 };
        }

        renderOutput.push(
          <Card className='pl-5 pr-5 pt-3'>
            <Card.Body className='pl-0'>
              <Card.Img src={img1} />

              <Card.Title className='card-img-top img-fluid mt-2'>
                <Link
                  to={{
                    pathname: `/res/${this.state.data[i].rest_id}/restaurant_info`,
                  }}>
                  {this.state.data[i].name}
                </Link>
              </Card.Title>
              {this.state.data[i].address && (
                <label>
                  <i className='fas fa-map-marker-alt mr-2'></i>
                  {this.state.data[i].address}
                </label>
              )}
              <br />
              {this.state.data[i].description && (
                <label>$$ .{this.state.data[i].description}</label>
              )}
            </Card.Body>
            <Card.Footer>
              <Link>
                <button className='btn btn-outline-secondary'>
                  Start Order
                </button>
              </Link>
            </Card.Footer>
          </Card>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container mt-5 pl-5 mb-5'>
          <h3 style={{ color: ' #d0312d' }} className='pl-3'>
            Restaurants
          </h3>
          <br />
          <div className='col-md-6'>{renderOutput}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantList;
