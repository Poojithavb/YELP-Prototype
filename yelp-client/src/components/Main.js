import React from 'react';
import { Route, BrowserRouter as router } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CustomerSignup from './Signup/CustomerSignup';
import RestaurantOwnerSignup from './Signup/RestaurantOwnerSignup';
import UserDetails from './profile/UserDetails';
import BasicDetails from './profile/BasicDetails';
import AboutSection from './profile/AboutSection';
import ContactInfo from './profile/ContactInfo';
import RestaurantInfo from './Restaurant/Show';
import UpdateProfile from './Restaurant/UpdateProfile';
import AddEditDish from './Restaurant/AddEditDish';
import Menu from './Restaurant/Menu';

function Main() {
  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/customersignup' component={CustomerSignup} />
      <Route exact path='/ownersignup' component={RestaurantOwnerSignup} />
      <Route exact path='/user/user_details' component={UserDetails} />
      <Route exact path='/user/basic_details' component={BasicDetails} />
      <Route exact path='/user/about_section' component={AboutSection} />
      <Route exact path='/user/contact_info' component={ContactInfo} />
      <Route exact path='/res/restaurant_info' component={RestaurantInfo} />
      <Route
        exact
        path='/res/restaurant_info/update_profile'
        component={UpdateProfile}
      />
      <Route
        exact
        path='/res/restaurant_info/add_edit_dish'
        component={AddEditDish}
      />
      <Route exact path='/res/restaurant_info/menu' component={Menu} />
    </div>
  );
}

export default Main;
