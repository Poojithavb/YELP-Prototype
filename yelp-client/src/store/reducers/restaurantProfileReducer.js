import {
  GET_RESTAURANT_DETAILS,
  UPDATE_RESTAURANT_DETAILS,
  GET_RESTAURANT_REVIEWS,
} from '../actions/types';

const initialState = {
  user: {},
  reviews: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANT_DETAILS:
      return { ...state, user: action.payload };
    case UPDATE_RESTAURANT_DETAILS:
      return { ...state, user: action.payload };
    case GET_RESTAURANT_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
}
