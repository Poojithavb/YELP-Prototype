import React, { Component } from 'react';
import UserProfileNavBar from '../profile/UserProfileNavBar';
import connectionServer from '../../webConfig';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileText: '',
    };
    this.onImageChange = this.onImageChange.bind(this);
    this.handleImageupload = this.handleImageupload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myFunction = this.myFunction.bind(this);
  }

  onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        file: e.target.files[0],
        fileText: e.target.files[0].name,
      });
    }
  };

  handleImageupload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', this.state.file);
    console.log(formData);
    const uploadConfig = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    axios
      .post(
        `${connectionServer}/yelp/upload/restaurantimage`,
        formData,
        uploadConfig,
      )
      .then((response) => {
        alert('Image uploaded successfully!');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  myFunction(e) {
    this.handleImageupload(e);
    this.handleSubmit(e);
  }

  handleSubmit(e) {
    e.preventDefault();

    const filedata = {
      filename: this.state.fileText,
    };
    axios
      .post(
        `${connectionServer}/yelp/profile/restaurant/${this.props.location.state.id}/uploadphoto`,
        filedata,
      )
      .then((response) => {
        if (response.data === 'updated') {
          this.setState({
            message: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let redirectVar = null;
    if (this.props.user === 'updated') {
      if (this.state.email) {
        localStorage.setItem('email_id', this.state.email);
      }
      alert('Updated Successfully');
      redirectVar = (
        <Redirect
          to={{
            pathname: `/user/${localStorage.getItem('user_id')}/user_details`,
          }}
        />
      );
    }
    return (
      <React.Fragment>
        {redirectVar}
        <UserProfileNavBar />
        <Container fluid={true}>
          <Row>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4} mt={5}>
              <Card
                style={{
                  width: '25rem',
                  textAlign: 'center',
                  marginTop: '30%',
                }}>
                <Card.Img variant='top' />
                <Card.Body>
                  <Card.Title>
                    <h3 style={{ color: '#d0312d'}}>Upload Restaurant Image</h3>
                  </Card.Title>
                  <form>
                    <br />
                    <br />
                    <br />
                    <div class='custom-file' style={{ width: '80%' }}>
                      <input
                        type='file'
                        class='custom-file-input'
                        name='image'
                        accept='image/*'
                        onChange={this.onImageChange}
                        required
                      />
                      <label class='custom-file-label' for='image'>
                        {this.state.fileText}
                      </label>
                    </div>
                    <br />
                    <br />
                    <Button
                      type='submit'
                      variant='primary'
                      onClick={this.myFunction}>
                      Upload
                    </Button>
                    <Link
                      to={{
                        pathname: `/res/${localStorage.getItem(
                          'rest_id',
                        )}/restaurant_info`,
                      }}
                      style={{ marginLeft: '15px' }}>
                      <Button>Go Back</Button>
                    </Link>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddPhoto;
