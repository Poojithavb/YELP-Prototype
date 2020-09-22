import { CUST_LOGIN } from './types';
import connectionServer from '../../webConfig';
import axios from 'axios';

export const custLogin = (loginData) => (dispatch) => {
  axios.defaults.withCredentials = true;
  axios
    .post(`${connectionServer}/yelp/login`, loginData)
    .then((response) =>
      dispatch({
        type: CUST_LOGIN,
        payload: response.data,
      }),
    )
    .catch((error) => {
      if (error.response && error.response.data) {
        return dispatch({
          type: CUST_LOGIN,
          payload: error.response.data,
        });
      }
    });
};
