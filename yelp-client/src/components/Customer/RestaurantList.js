import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import connectionServer from '../../webConfig';
import axios from 'axios';
import MapContainer from './Map'

class RestaurantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
      selectoption: 0,
      tempdata:[],
      data:[],
    };
    this.handleCheckboxtypeChange = this.handleCheckboxtypeChange.bind(this);
  }

  componentDidMount() {
    if (
      this.props.location.state &&
      this.props.location.state.keyword !== 'undefined'
    ) {
      this.setState(
        {
          selectoption: this.props.location.state.selectoption,
          keyword: this.props.location.state.keyword,
        },
        () => {
          axios
            .get(
              `${connectionServer}/yelp/restaurant/searchlist/${this.state.selectoption}/${this.state.keyword}`,
            )
            .then((response) =>
              this.setState({
                tempdata:response.data,
                data: response.data,
              }),
            )
            .catch((error) => {
              console.log(error);
            });
        },
      );
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.location.state &&
      this.state.keyword !== this.props.location.state.keyword
    ) {
      this.setState(
        {
          keyword: this.props.location.state.keyword,
          selectoption: this.props.location.state.selectoption,
        },
        () => {
          axios
            .get(
              `${connectionServer}/yelp/restaurant/searchlist/${this.state.selectoption}/${this.state.keyword}`,
            )
            .then((response) =>
              this.setState({
                tempdata:response.data,
                data: response.data,
              }),
            )
            .catch((error) => {
              console.log(error);
            });
        },
      );
    }
  }

  handleCheckboxtypeChange(e) {
    e.preventDefault();
    let delivery_method = e.target.id;
    
    let filteredData = this.state.tempdata.filter(
      (order) => order.delivery_method === delivery_method,
    );

    if (delivery_method === 'All') {
      filteredData = this.state.tempdata;
    }
    this.setState({ data: filteredData });
  }

  render() {
    
    let renderOutput = [];
    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        let imgsrc = `${connectionServer}/yelp/images/rest/${this.state.data[i].filename}`;
        let restId = this.state.data[i].rest_id;
        renderOutput.push(
          <Card className='pl-5 pr-5 pt-3'>
            <Card.Body className='pl-0'>
              <Card.Img src={imgsrc} style={{height:'250px'}} />

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
              <Link
                className='btn btn-outline-secondary'
                to={{
                  pathname: `/res/${this.state.data[i].rest_id}/restaurant_info`,
                }}>
                <span className='mr-2'>
                  <i className='fas fa-utensils'></i>
                </span>
                Start Order
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
          <div
            className='btn-group btn-group-toggle mt-3'
            data-toggle='buttons'
            style={{ marginLeft: '2%' }}>
              <label
              class='btn btn-outline-secondary rounded-pill active'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='All'
                id='All'
                autocomplete='off'
                checked
                onClick={this.handleCheckboxtypeChange}
              />
              All Restaurants
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Curbside Pickup'
                id='Curbside Pickup'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
             Curbside Pickup
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Dine In'
                id='Dine In'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
              Dine In
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Yelp Delivery'
                id='Yelp Delivery'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
              Yelp Delivery
            </label>
            <br />
          </div>
          <div className='row'>
          <div className='col-md-6'><br />{renderOutput}</div>
        
        <div className='col-md-5 ml-2 mt-5 sticky-top' style={{height:'500px'}}>
         {/* <MapContainer restaurantlist={this.state.data}></MapContainer> */}
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantList;
