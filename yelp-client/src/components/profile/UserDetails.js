import React, { Component } from 'react';
import UserProfileNavBar from './UserProfileNavBar';
import UserProfileJumbo from './UserProfileJumbo';
import NavList from './NavList';
import '../../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCustomerDetails } from '../../store/actions/customerProfileAction';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
   if(this.props.location.state && this.props.location.state.customerId)
   {
     localStorage.setItem('user_id',this.props.location.state.customerId)
   }
    this.props.getCustomerDetails();
  }

  render() {
    return (
      <React.Fragment>
        <UserProfileNavBar></UserProfileNavBar>
        <UserProfileJumbo></UserProfileJumbo>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-md-4 mt-5'>
              <NavList></NavList>
            </div>
            <div className='col-md-5'>
              <h5 style={{ color: '#d0312d' }}>Basic Details</h5>
              {this.props.user.nickname && (
                <React.Fragment>
                  <h6>
                    <strong>Nickname</strong>
                  </h6>
                  <p>{this.props.user.nickname}</p>
                </React.Fragment>
              )}
              {this.props.user.dateofbirth && (
                <React.Fragment>
                  <h6>
                    <strong>Date Of Birth</strong>
                  </h6>
                  <p>{this.props.user.dateofbirth}</p>
                </React.Fragment>
              )}
              {this.props.user.email && (
                <React.Fragment>
                  <h6>
                    <strong>Email</strong>
                  </h6>
                  <p>{this.props.user.email}</p>
                </React.Fragment>
              )}
              {this.props.user.phone_number && (
                <React.Fragment>
                  <h6>
                    <strong>Contact Number</strong>
                  </h6>
                  <p>{this.props.user.phone_number}</p>
                </React.Fragment>
              )}
            </div>
            <div className='col-md-3 ver-div'>
              <h5 style={{ color: '#d0312d' }}>
                About {this.props.user.firstname}
              </h5>
              {this.props.user.city && (
                <React.Fragment>
                  <h6>
                    <strong>Location</strong>
                  </h6>
                  <p>{this.props.user.city}</p>
                </React.Fragment>
              )}
              {this.props.user.yelping_since && (
                <React.Fragment>
                  <h6>
                    <strong>Yelping Since</strong>
                  </h6>
                  <p>{this.props.user.yelping_since}</p>
                </React.Fragment>
              )}
              {this.props.user.not_yelping && (
                <React.Fragment>
                  <h6>
                    <strong>When I’m Not Yelping...</strong>
                  </h6>
                  <p>{this.props.user.not_yelping}</p>
                </React.Fragment>
              )}
              {this.props.user.thingsilove && (
                <React.Fragment>
                  <h6>
                    <strong>Things I Love</strong>
                  </h6>
                  <p>{this.props.user.thingsilove}</p>
                </React.Fragment>
              )}
              {this.props.user.findmein && (
                <React.Fragment>
                  <h6>
                    <strong>Find Me In</strong>
                  </h6>
                  <p>{this.props.user.findmein}</p>
                </React.Fragment>
              )}
              {this.props.user.myblog && (
                <React.Fragment>
                  <h6>
                    <strong>My Blog Or Website</strong>
                  </h6>
                  <p>{this.props.user.myblog}</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UserDetails.propTypes = {
  getCustomerDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.customerProfile.user,
});

export default connect(mapStateToProps, { getCustomerDetails })(UserDetails);
