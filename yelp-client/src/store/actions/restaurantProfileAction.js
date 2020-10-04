import {
  GET_RESTAURANT_DETAILS,
  UPDATE_RESTAURANT_DETAILS,
  GET_RESTAURANT_REVIEWS,
} from './types';
import connectionServer from '../../webConfig';
import axios from 'axios';

export const getRestaurantDetails = () => (dispatch) => {
  axios
    .get(
      `${connectionServer}/yelp/profile/restaurant/${localStorage.getItem(
        'rest_id',
      )}/details
      `,
    )
    .then((response) =>
      dispatch({
        type: GET_RESTAURANT_DETAILS,
        payload: response.data,
      }),
    )
    .catch((error) => {
      console.log(error);
    });
};
export const updateRestaurantDetails = (restaurantData) => (dispatch) => {
  axios
    .post(
      `${connectionServer}/yelp/profile/restaurant/${localStorage.getItem(
        'rest_id',
      )}/details`,
      restaurantData,
    )
    .then((response) =>
      dispatch({
        type: UPDATE_RESTAURANT_DETAILS,
        payload: response.data,
      }),
    )
    .catch((error) => {
      console.log(error);
    });
};

export const getReviews = () => (dispatch) => {
  axios
    .get(
      `${connectionServer}/yelp/profile/restaurant/${localStorage.getItem(
        'rest_id',
      )}/reviews
      `,
    )
    .then((response) =>
      dispatch({
        type: GET_RESTAURANT_REVIEWS,
        payload: response.data,
      }),
    )
    .catch((error) => {
      console.log(error);
    });
};
