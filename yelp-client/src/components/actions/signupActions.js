import backendServer from '../webConfig';
import axios from 'axios';

export const userSignup = (userData) => {
  axios.defaults.withCredentials = true;
  axios
    .post(`${backendServer}/yelp/signup/user`, userdata)
    .then((response) => {
      co;
    })
    .catch((err) => {});
};
