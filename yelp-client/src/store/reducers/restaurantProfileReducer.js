import {
  GET_RESTAURANT_DETAILS,
  UPDATE_RESTAURANT_DETAILS,
} from '../actions/types';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANT_DETAILS:
      return { ...state, user: action.payload };
    case UPDATE_RESTAURANT_DETAILS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
