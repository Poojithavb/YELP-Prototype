import { CUST_SIGNUP, RESTAURANT_SIGNUP } from '../actions/types';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CUST_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case RESTAURANT_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
