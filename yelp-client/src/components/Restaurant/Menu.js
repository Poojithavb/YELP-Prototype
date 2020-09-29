import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Card } from 'react-bootstrap';
import connectionServer from '../../webConfig';

import axios from 'axios';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/menuitem/show/${localStorage.getItem(
          'rest_id',
        )}
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
    let resName = localStorage.getItem('name');
    let imgsrc = null;
    let renderOutput = [];
    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].item_image) {
          imgsrc = `${connectionServer}/yelp/images/item/${this.state.data[i].item_image}`;
        }
        renderOutput.push(
          <Card className='pl-5 pr-5'>
            <Card.Img
              variant='top'
              src={imgsrc}
              style={{ width: '40%', height: '15vw' }}
            />
            <Card.Title
              className='card-img-top img-fluid'
              style={{ color: 'red' }}>
              {this.state.data[i].dishname}
            </Card.Title>
            <Card.Body className='pl-0'>
              <label>
                <strong>Category - </strong>
                {this.state.data[i].itemCategory}
              </label>
              <br />
              <label>
                <strong>Ingredients - </strong>
                {this.state.data[i].ingredients}
              </label>
              <br />
              <label>
                <strong>Description - </strong>
                {this.state.data[i].description}
              </label>
              <br />
              <Card.Footer style={{ float: 'right' }}>
                <label>Price: </label> ${this.state.data[i].price}
              </Card.Footer>
            </Card.Body>
          </Card>,
        );
      }
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className='container mt-5 pl-5'>
          <h3>Menu for {resName}</h3>
          <br />
          <div className='col-md-7'>{renderOutput}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
