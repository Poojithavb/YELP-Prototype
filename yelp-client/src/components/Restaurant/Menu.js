import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

    let renderOutput = [];
    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        let imgsrc = null;
        let itemid = this.state.data[i].item_id;
        if (this.state.data[i].item_image) {
          imgsrc = `${connectionServer}/yelp/images/item/${this.state.data[i].item_image}`;
        }
        renderOutput.push(
          <Card className='pl-5 pr-5 pt-3'>
            <Card.Title
              className='card-img-top img-fluid'
              style={{ color: 'red' }}
              variant='right'>
              {this.state.data[i].dishname}

              <Link
                to={{
                  pathname: `/res/restaurant_info/editdish/${this.state.data[i].item_id}`,
                }}>
                <Button variant='link' style={{ float: 'right' }}>
                  Edit
                </Button>
                &nbsp;
              </Link>
            </Card.Title>
            {imgsrc && (
              <Card.Img
                variant='left'
                src={imgsrc}
                style={{ width: '40%', height: '15vw' }}
              />
            )}
            <Card.Body className='pl-0'>
              {this.state.data[i].itemCategory && (
                <label>
                  <strong>Category - </strong>
                  {this.state.data[i].itemCategory}
                </label>
              )}
              <br />
              {this.state.data[i].ingredients && (
                <label>
                  <strong>Ingredients - </strong>
                  {this.state.data[i].ingredients}
                </label>
              )}
              <br />
              {this.state.data[i].description && (
                <label>
                  <strong>Description - </strong>
                  {this.state.data[i].description}
                </label>
              )}
              <br />
              <Card.Footer style={{ float: 'right' }}>
                <label>Price: </label> ${this.state.data[i].price}
                <br />
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

          <Link
            to={{
              pathname: `/res/${localStorage.getItem(
                'rest_id',
              )}/restaurant_info`,
            }}>
            <a className='btn btn-danger mb-5' style={{ float: 'right' }}>
              Cancel
            </a>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
