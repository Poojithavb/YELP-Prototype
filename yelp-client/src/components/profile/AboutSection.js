import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button } from 'react-bootstrap';
import UserProfileNavBar from './UserProfileNavBar';
import NavList from './NavList';
import '../../App';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCustomerDetails,
  updateAboutMe,
} from '../../store/actions/customerProfileAction';

class AboutSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentWillMount() {
    this.props.getCustomerDetails();
  }

  changeHandler(e) {
    console.log(this.props.updateAboutMe);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const data = {
      ilove: e.target.elements.ilove.value,
      findmein: e.target.elements.findmein.value,
      blog: e.target.elements.blog.value,
      not_yelping: e.target.elements.not_yelping.value,
    };
    this.props.updateAboutMe(data);
  }

  render() {
    let redirectVar = null;
    if (this.props.user === 'updated') {
      alert('Updated successfully');
      redirectVar = <Redirect to='/user/user_details' />;
    }
    return (
      <React.Fragment>
        {redirectVar}
        <UserProfileNavBar></UserProfileNavBar>
        <div class='container mt-5'>
          <div class='row'>
            <div class='col-md-4 mt-3'>
              <NavList></NavList>
            </div>
            <div class='col-md-6 mb-5'>
              <h4 style={{ color: '#d0312d', float: 'left' }}>Profile</h4>
              <br />
              <hr class='mb-3'></hr>
              <Form onSubmit={this.submitHandler}>
                <Form.Group controlId='formilove'>
                  <Form.Label>
                    <strong>I Love...</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    Comma separated phrases (e.g. sushi, Radiohead, puppies)
                  </Form.Text>
                  <Form.Control
                    type='textarea'
                    name='ilove'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.thingsilove}
                  />
                </Form.Group>
                <Form.Group controlId='formfindmein'>
                  <Form.Label>
                    <strong>Find Me In</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    Nob Hill, the newest brunch spot, a turtleneck
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='findmein'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.findmein}
                  />
                </Form.Group>
                <Form.Group controlId='formblog'>
                  <Form.Label>
                    <strong>My Blog Or Website</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    www.example.com/myawesomeblog
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='blog'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.myblog}
                  />
                </Form.Group>
                <Form.Group controlId='formnotyelping'>
                  <Form.Label>
                    <strong>When I’m Not Yelping...</strong>
                  </Form.Label>
                  <Form.Text className='text-muted'>
                    I’m missing out, I’m working at the art gallery, I’m
                    probably at the movies
                  </Form.Text>
                  <Form.Control
                    type='text'
                    name='not_yelping'
                    onChange={this.changeHandler}
                    defaultValue={this.props.user.not_yelping}
                  />
                </Form.Group>
                <Button variant='danger' type='submit'>
                  Save Changes
                </Button>
                <a href='/user/user_details' style={{ marginLeft: '15px' }}>
                  Cancel
                </a>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AboutSection.propTypes = {
  getCustomerDetails: PropTypes.func.isRequired,
  updateAboutMe: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.customerProfile.user,
});

export default connect(mapStateToProps, {
  getCustomerDetails,
  updateAboutMe,
})(AboutSection);
