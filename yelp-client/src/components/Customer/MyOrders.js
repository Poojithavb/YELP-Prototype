import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';
import Modal from 'react-modal';
import { Card, Form, Button } from 'react-bootstrap';

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: [],
      tempUserOrders: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCancelOrder = this.handleCancelOrder.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/orders/${localStorage.getItem(
          'user_id',
        )}/getdetails
      `,
      )
      .then((response) =>
        this.setState({
          data: response.data,
          tempUserOrders: response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleOpenModal(arg) {
    console.log(arg);
    this.setState({ showModal: true });
    axios
      .get(
        `${connectionServer}/yelp/orders/${arg}/getorderdetails
    `,
      )
      .then((response) =>
        this.setState({
          orderDet: response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleCheckboxChange(e) {
    e.preventDefault();
    let order_status = e.target.id;
    let filteredData = this.state.data.filter(
      (order) => order.order_status === order_status,
    );

    if (order_status === 'All Orders') {
      filteredData = this.state.data;
    }
    this.setState({ tempUserOrders: filteredData });
  }

  handleCancelOrder(arg) {
    const data = {
      order_id: arg,
    };

    return axios
      .post(`${connectionServer}/yelp/orders/cancel`, data)
      .then((response) => {
        if (response.data.status === 'cancelled') {
          window.location = `/${localStorage.getItem('user_id')}/orders`;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.orderDet);
    let renderOutput = [];
    let renderOrders = [];
    let totalPrice = null;

    if (this.state && this.state.orderDet && this.state.orderDet.length > 0) {
      for (var i = 0; i < this.state.orderDet.length; i++) {
        totalPrice = this.state.orderDet[i].totalPrice;
        renderOrders.push(
          <Card.Body>
            <tr>
              <td>Item name - {this.state.orderDet[i].item_name}</td>
            </tr>
            <tr>
              <td>Quantity - {this.state.orderDet[i].quantity}</td>
            </tr>
            <tr>
              <td>
                Item Price for one quantity - ${this.state.orderDet[i].price}
              </td>
            </tr>
          </Card.Body>,
        );
      }
    }

    if (
      this.state &&
      this.state.tempUserOrders &&
      this.state.tempUserOrders.length > 0
    ) {
      for (var i = 0; i < this.state.tempUserOrders.length; i++) {
        let imgsrc = `${connectionServer}/yelp/images/rest/${this.state.tempUserOrders[i].filename}`;
        let order_id = this.state.tempUserOrders[i].order_id;

        renderOutput.push(
          <div className='container mb-5'>
            <div className='row mt-5  border-secondary'>
              <div className='col-md-1'></div>
              <div className='col-md-3'>
                <div class='card' style={{ width: '15rem', marginTop: '28px', }}>
                  <img class='card-img-top' src={imgsrc} alt='Card image cap' style={{height:'200px'}} />
                </div>
              </div>
              <div className='col-md-6'>
                <div class='card-body'>
                  <h5 class='card-title' style={{ color: ' #1167b1' }}>
                    {this.state.tempUserOrders[i].name}
                  </h5>

                  <p class='card-text'>
                    {' '}
                    <i className='far fa-calendar mr-2'></i>
                    {this.state.tempUserOrders[i].date}
                  </p>
                  <p class='card-text'>
                    Status - {this.state.tempUserOrders[i].order_status}
                  </p>
                  <p class='card-text'>
                    Order Type - {this.state.tempUserOrders[i].category}
                  </p>
                  <p class='card-text'>
                    Order Category - {this.state.tempUserOrders[i].order_type}
                  </p>
                  <p class='card-text'>
                    {' '}
                    Price - ${this.state.tempUserOrders[i].totalPrice}
                  </p>
                  <div>
                    <button
                      href='#'
                      class='btn btn-primary btn-sm'
                      onClick={() => this.handleOpenModal(order_id)}>
                      View Details
                    </button>
                    <Modal
                      isOpen={this.state.showModal}
                      contentLabel='Minimal Modal Example'>
                      <h4 className='ml-3' style={{ color: ' #d0312d' }}>
                        Order Details
                      </h4>
                      {renderOrders}
                      <p className='ml-3'>TotalPrice - $ {totalPrice}</p>
                      <br />
                      <button
                        className='mt-3 ml-3'
                        onClick={this.handleCloseModal}>
                        Close Modal
                      </button>
                    </Modal>
                    <button
                      href='#'
                      class='btn btn-danger btn-sm'
                      onClick={() => this.handleCancelOrder(order_id)}
                      style={{ marginLeft: '10px' }}>
                      Cancel Order
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <h2 className='mt-5 ml-5' style={{ color: '#d0312d' }}>
            Order History
          </h2>
          <div
            className='btn-group btn-group-toggle mt-3'
            data-toggle='buttons'
            style={{ marginLeft: '10%' }}>
            <label
              class='btn btn-outline-secondary rounded-pill active'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='All Orders'
                id='All Orders'
                autocomplete='off'
                checked
                onClick={this.handleCheckboxChange}
              />
              All Orders
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Order Received'
                id='Order Received'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              Order Received
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Preparing'
                id='Preparing'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              Preparing
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Pickup Ready'
                id='Pickup Ready'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              Pickup Ready
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='On the way'
                id='On the way'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              On the way
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Picked up'
                id='Picked up'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              Picked up
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Delivered'
                id='Delivered'
                autocomplete='off'
                onClick={this.handleCheckboxChange}
              />
              Delivered
            </label>
          </div>
        </div>
        {renderOutput}
      </React.Fragment>
    );
  }
}

export default MyOrders;
