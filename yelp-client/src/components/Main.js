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
import AddDish from './Restaurant/AddDish';
import EditDish from './Restaurant/EditDish';
import Menu from './Restaurant/Menu';
import Orders from './Restaurant/Orders';
import AddPhoto from './Restaurant/AddPhoto';
import ViewEvents from './Events/ViewEvents';
import CreateEvent from './Events/CreateEvent';
import RestaurantList from './Customer/RestaurantList';
import Review from './Customer/Review';
import Events from './Customer/Events';
import ViewEvent from './Customer/ViewEvent';
import PhotoUpload from './profile/PhotoUpload';
import MyOrders from './Customer/MyOrders';

function Main() {
  return (
    <div>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/customersignup' component={CustomerSignup} />
      <Route exact path='/ownersignup' component={RestaurantOwnerSignup} />
      <Route exact path='/user/:userid/user_details' component={UserDetails} />
      <Route exact path='/user/:userid/photo_upload/' component={PhotoUpload} />
      <Route exact path='/user/basic_details' component={BasicDetails} />
      <Route exact path='/user/about_section' component={AboutSection} />
      <Route exact path='/user/contact_info' component={ContactInfo} />
      <Route
        exact
        path='/res/:rest_id/restaurant_info/'
        component={RestaurantInfo}
      />
      <Route
        exact
        path='/res/restaurant_info/update_profile'
        component={UpdateProfile}
      />
      <Route exact path='/res/restaurant_info/adddish' component={AddDish} />
      <Route
        exact
        path='/res/restaurant_info/editdish/:item_id'
        component={EditDish}
      />
      <Route exact path='/res/restaurant_info/menu' component={Menu} />
      <Route
        exact
        path='/res/restaurant_info/:resid/events'
        component={ViewEvents}
      />
      <Route
        exact
        path='/res/restaurant_info/:resid/createevent'
        component={CreateEvent}
      />
      <Route exact path='/res/restaurant_info/orders' component={Orders} />
      <Route exact path='/res/restaurant_info/addphoto' component={AddPhoto} />
      <Route exact path='/res/restaurant_list' component={RestaurantList} />
      <Route exact path='/res/:resid/addreview' component={Review} />
      <Route exact path='/res/events' component={Events} />
      <Route exact path='/res/:eventid/view' component={ViewEvent} />
      <Route exact path='/:userid/orders' component={MyOrders} />
    </div>
  );
}

export default Main;
