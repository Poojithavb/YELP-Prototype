import React from 'react';
import { Route, BrowserRouter as router } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import UserSignup from './Signup/UserSignup';
import RestaurantOwnerSignup from './Signup/RestaurantOwnerSignup';
import UserDetails from './profile/UserDetails';
import BasicDetails from './profile/BasicDetails';
import AboutSection from './profile/AboutSection';
import ContactInfo from './profile/ContactInfo';

function Main() {
  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={UserSignup} />
      <Route exact path='/ownersignup' component={RestaurantOwnerSignup} />
      <Route exact path='/user/user_details' component={UserDetails} />
      <Route exact path='/user/basic_details' component={BasicDetails} />
      <Route exact path='/user/about_section' component={AboutSection} />
      <Route exact path='/user/contact_info' component={ContactInfo} />
    </div>
  );
}

export default Main;
