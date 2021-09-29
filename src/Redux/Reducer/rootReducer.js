import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';
import list from './listReducer'

export default combineReducers({
  auth,
  loading,
  list,
});