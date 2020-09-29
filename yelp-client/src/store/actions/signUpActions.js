import { CUST_SIGNUP, RESTAURANT_SIGNUP } from './types';
import connectionServer from '../../webConfig';
import axios from 'axios';

export const customerSignUp = (customerData) => (dispatch) => {
  axios.defaults.withCredentials = true;
  axios
    .post(`${connectionServer}/yelp/signup/newuser`, customerData)
    .then((response) =>
      dispatch({
        type: CUST_SIGNUP,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: CUST_SIGNUP,
          payload: error.response.data,
        });
      }
      return;
    });
};

export const restaurantSignup = (restaurantData) => (dispatch) => {
  axios.defaults.withCredentials = true;
  axios
    .post(`${connectionServer}/yelp/signup/restaurant`, restaurantData)
    .then((response) =>
      dispatch({
        type: RESTAURANT_SIGNUP,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: RESTAURANT_SIGNUP,
          payload: error.response.data,
        });
      }
      return;
    });
};
