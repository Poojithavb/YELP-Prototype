import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';
import Modal from 'react-modal';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      data: [],
      tempUserOrders: [],
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.handleCheckboxtypeChange = this.handleCheckboxtypeChange.bind(this);
  }

  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/orders/${localStorage.getItem(
          'rest_id',
        )}/getitemdetails
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

  handleCheckboxChange = (e) => {
    this.setState({
      orderStatus: e.target.value,
    });
    this.setState({
      order_id: e.target.id,
    });
  };

  onUpdate = (e) => {
    e.preventDefault();

    const data = {
      order_id: this.state.order_id,
      order_status: this.state.orderStatus,
    };
    console.log(this.state.orderStatus);
    return axios
      .post(`${connectionServer}/yelp/orders/update`, data)
      .then((response) => {
        if (response.data.status === 'updated') {
          window.location = `/res/restaurant_info/orders`;
        }
      })
      .catch(function (error) {
        alert('Error');
      });
  };

  handleCheckboxtypeChange(e) {
    e.preventDefault();
    let order_type = e.target.id;
    let filteredData = this.state.data.filter(
      (order) => order.order_type === order_type,
    );

    if (order_type === 'All Orders') {
      filteredData = this.state.data;
    }

    this.setState({ tempUserOrders: filteredData });
  }

  render() {
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
        let order_id = this.state.tempUserOrders[i].order_id;
        let button1;
        let button2;
        let userid = this.state.tempUserOrders[i].cust_id;
        if (this.state.tempUserOrders[i].category === 'PickUp') {
          button1 = (
            <Form.Check
              id={order_id}
              label='Pickup Ready'
              value='Pickup Ready'
              onChange={this.handleCheckboxChange}
              style={{ marginLeft: '10px', color: 'red' }}
            />
          );
          button2 = (
            <Form.Check
              id={order_id}
              name={this.state.tempUserOrders[i].order_status}
              label='Picked up'
              value='Picked up'
              onChange={this.handleCheckboxChange}
              style={{ marginLeft: '10px', color: 'red' }}
            />
          );
        } else {
          button1 = (
            <Form.Check
              id={order_id}
              label='On the way'
              value='On the way'
              onChange={this.handleCheckboxChange}
              style={{ marginLeft: '10px', color: 'red' }}
            />
          );
          button2 = (
            <Form.Check
              id={order_id}
              label='Delivered'
              value='Delivered'
              onChange={this.handleCheckboxChange}
              style={{ marginLeft: '10px', color: 'red' }}
            />
          );
        }

        renderOutput.push(
          <div className='container mb-5'>
            <div className='row mt-5  border-secondary'>
              <div className='col-md-1'></div>

              <div className='col-md-4'>
                <div class='card-body'>
                  <h5 class='card-title' style={{ color: ' #1167b1' }}>
                    <Link
                      to={{
                        pathname: `/user/${this.state.tempUserOrders[i].cust_id}/user_details`,
                        state:{customerId:userid}
                      }}>
                      {this.state.tempUserOrders[i].firstname}{' '}
                      {this.state.tempUserOrders[i].lastname}
                    </Link>
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
                    ${this.state.tempUserOrders[i].totalPrice}
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
                  </div>
                </div>
              </div>
              <div className='col-md-5 mt-5'>
                <Form onSubmit={this.onUpdate}>
                  <Form.Check
                    id={order_id}
                    label='Order Received'
                    value='Order Received'
                    onChange={this.handleCheckboxChange}
                    style={{ marginLeft: '10px', color: 'red' }}
                  />
                  <Form.Check
                    id={order_id}
                    label='Preparing'
                    value='Preparing'
                    onChange={this.handleCheckboxChange}
                    style={{ marginLeft: '10px', color: 'red' }}
                  />
                  {button1}
                  {button2}
                  <div>
                    <Button
                      size='sm'
                      style={{
                        marginLeft: '10px',
                        marginTop: '10px',
                        backgroundColor: 'red',
                        border: '1px solid red',
                      }}
                      type='submit'>
                      Update Order
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <hr />
          </div>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <h2 className='mt-5 ml-5' style={{ color: '#d0312d' }}>
            Orders
          </h2>
          <div
            className='btn-group btn-group-toggle mt-3'
            data-toggle='buttons'
            style={{ marginLeft: '10%' }}>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='All Orders'
                id='All Orders'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
                checked
              />
              All Orders
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill active'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='New Order'
                id='New Order'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
              New Order
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Delivered'
                id='Delivered'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
              Delivered
            </label>
            <label
              class='btn btn-outline-secondary rounded-pill'
              style={{ marginRight: '10px' }}>
              <input
                type='radio'
                name='Cancelled'
                id='Cancelled'
                autocomplete='off'
                onClick={this.handleCheckboxtypeChange}
              />
              Cancelled
            </label>
          </div>
          <div className='col-md-10'>{renderOutput}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Orders;
