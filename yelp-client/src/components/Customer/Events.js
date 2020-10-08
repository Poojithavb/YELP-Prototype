import React, { Component } from 'react';
import NavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Form, Button, FormControl } from 'react-bootstrap';
import RegisteredEvents from './RegisteredEvents';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:null,
      tempData:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentWillMount() {
    axios
      .get(
        `${connectionServer}/yelp/events/show/${null}
      `,
      )
      .then((response) =>
        this.setState({
          data: response.data,
          tempData:response.data,
        }),
      )
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange(e)
  {
    
    this.setState({searchText:e.target.value})
  }

  handleSearch(e)
  {
    e.preventDefault()
    axios
        .get(
          `${connectionServer}/yelp/events/${this.state.searchText}/search
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
    console.log(this.state.events);
    let renderOutput = [];

    if (this.state && this.state.data && this.state.data.length > 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        let imgsrc = null;
        if (this.state.data[i].filename) {
          imgsrc = `${connectionServer}/yelp/images/events/${this.state.data[i].filename}`;
        }
        renderOutput.push(
          <div className='col-md-5 ml-5 mt-5 mb-5 '>
            <Card className='pl-5 pr-5 pt-3'>
              <Card.Body className='pl-0'>
                <Card.Img src={imgsrc} />

                <Card.Title className='card-img-top img-fluid mt-2'>
                  <Link
                    to={{
                      pathname: `${this.state.data[i].event_id}/view`,
                    }}>
                    {this.state.data[i].name}
                  </Link>
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
                    {this.state.data[i].description.substring(0, 100)} {}...
                  </label>
                )}
              </Card.Body>
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
            <div className='col-md-6 mt-5 pl-5'>
              <h3 className='pl-9' style={{ color: ' #d0312d' }}>
                Browse Events
              </h3>
            </div>

            <div className='col-md-6 mt-5 pl-5'>
              <Form inline style={{ float: 'right' }}>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search Event'
                    className=' mr-sm-2'
                    onChange={this.handleChange}
                  />
                  <Button type='submit' onClick={this.handleSearch}>Submit</Button>
                </Form>
              </Form>
            </div>
          </div>
          {localStorage.getItem('user_id') && ( <div className='row'>
            <RegisteredEvents />
          </div>)}
          <div className='row'>
            <h4 className='ml-5 mt-5' style={{ color: ' #d0312d' }}>
              All Events
            </h4>
          </div>
          <div className='row'>{renderOutput}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
