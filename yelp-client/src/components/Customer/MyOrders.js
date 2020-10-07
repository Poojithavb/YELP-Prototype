import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';
import img1 from '../../images/res1_1.jpg';
import Modal from 'react-modal';
import { Card } from 'react-bootstrap';

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        let imgsrc = img1;
        let order_id = this.state.data[i].order_id;

        renderOutput.push(
          <div className='container mb-5'>
            <div className='row mt-5  border-secondary'>
              <div className='col-md-1'></div>
              <div className='col-md-3'>
                <div class='card' style={{ width: '15rem', marginTop: '28px' }}>
                  <img class='card-img-top' src={imgsrc} alt='Card image cap' />
                </div>
              </div>
              <div className='col-md-6'>
                <div class='card-body'>
                  <h5 class='card-title' style={{ color: ' #1167b1' }}>
                    {this.state.data[i].name}
                  </h5>

                  <p class='card-text'>
                    {' '}
                    <i className='far fa-calendar mr-2'></i>
                    {this.state.data[i].date}
                  </p>
                  <p class='card-text'>
                    Status - {this.state.data[i].order_status}
                  </p>
                  <p class='card-text'> ${this.state.data[i].totalPrice}</p>
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
            </div>
          </div>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container'>
          <h2 className='mt-5 ml-5' style={{ color: ' #d0312d' }}>
            Order History
          </h2>
        </div>
        {renderOutput}
      </React.Fragment>
    );
  }
}

export default MyOrders;
