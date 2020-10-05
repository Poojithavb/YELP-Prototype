import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import { Card, CardImg, Jumbotron } from 'react-bootstrap';
import connectionServer from '../../webConfig';
import '../../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCustomerDetails } from '../../store/actions/customerProfileAction';

class UserProfileJumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getCustomerDetails();
  }

  render() {
    let imgsrc = null;
    if (this.props.user.profilepic) {
      imgsrc = `${connectionServer}/yelp/images/user/${this.props.user.profilepic}`;
    }
    console.log(imgsrc);
    return (
      <React.Fragment>
        <Jumbotron>
          <div className='row'>
            <div
              className=' col-md-2 card profilePic'
              style={{ position: 'absolute' }}>
              <CardImg
                className='pt-2'
                variant='top'
                src={imgsrc}
                className='profileImg'
              />
            </div>
            <div className='col-md-3'></div>
            <div className='col-md-5 profileName'>
              <h1 className='h1 display-5 ml-5'>
                {this.props.user.firstname} {this.props.user.lastname}
              </h1>
              <h5 class='ml-5'>{this.props.user.city}</h5>
              <br />
              {this.props.user.headline && (
                <h6 class='ml-5'>"{this.props.user.headline}"</h6>
              )}
            </div>
            {localStorage.getItem('first_name') && (
              <div className='col-md-3 vertical-divider'>
                <ul className='list-unstyled'>
                  <li>
                    <Link
                      to={{
                        pathname: `/user/${localStorage.getItem(
                          'user_id',
                        )}/photo_upload/`,
                      }}>
                      <span>
                        <i className='fas fa-camera'></i>{' '}
                      </span>
                      Add Profile Photo
                    </Link>
                  </li>
                  <li>
                    <a href='/user/basic_details'>
                      <span>
                        <i className='fas fa-id-card'></i>{' '}
                      </span>
                      Update your profile
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

UserProfileJumbo.propTypes = {
  getCustomerDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.customerProfile.user,
});

export default connect(mapStateToProps, { getCustomerDetails })(
  UserProfileJumbo,
);
