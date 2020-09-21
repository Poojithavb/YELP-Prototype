import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import { card, CardImg, Jumbotron } from 'react-bootstrap';
import profilepic from '../../images/profile-icon.png';
import '../../App.css';

class UserProfileJumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: '',
      uploadedFile: '',
      fileText: '',
    };
    this.changeProfileImage = this.changeProfileImage.bind(this);
  }

  changeProfileImage = (e) => {
    this.setState({
      uploadedFile: e.target.files[0],
      fileText: e.target.files[0].name,
    });
    console.log(e.target.files[0]);
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <div class='row'>
            <div
              class=' col-md-2 card profilePic'
              style={{ position: 'absolute' }}>
              <label for='profileImage'>
                <a
                  href='#'
                  class='btn btn-secondary btn-sm btn-rounded'
                  style={{ marginLeft: '10px', marginTop: '10px' }}>
                  <i class='fas fa-camera' style={{ marginRight: '10px' }}></i>
                  Add a photo
                </a>
              </label>
              <input
                type='file'
                name='profileImage'
                id='profileImage'
                style={{ display: 'none' }}
                value=''
                onChange={this.changeProfileImage}></input>
              <card>
                <CardImg
                  variant='top'
                  src={profilepic}
                  className='profileImg'
                />
              </card>
            </div>
            <div class='col-md-3'></div>
            <div class='col-md-4 profileName'>
              <h1>Poojitha</h1>
              <h4>San Jose,CA</h4>
            </div>
            <div class='col-md-3 vertical-divider'>
              <ul class='list-unstyled'>
                <li>
                  <a href='#'>
                    <span>
                      <i class='fas fa-camera'></i>{' '}
                    </span>
                    Add Profile Photo
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span>
                      <i class='fas fa-id-card'></i>{' '}
                    </span>
                    Update your profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default UserProfileJumbo;
