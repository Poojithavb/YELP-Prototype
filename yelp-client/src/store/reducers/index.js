import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signUpReducer from './signUpReducer';
import customerProfileReducer from './customerProfileReducer';
import restaurantProfileReducer from './restaurantProfileReducer';

export default combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  customerProfile: customerProfileReducer,
  restaurantProfile: restaurantProfileReducer,
});
