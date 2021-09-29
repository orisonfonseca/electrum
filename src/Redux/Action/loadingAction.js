import { ERROR_MESSAGE, SUCCESS_MESSAGE, LOADING } from '../type';

let timeOutSuccessMsg = '';
let timeOutErrMsg = '';

export const setLoading = (data) => (dispatch) => {
  dispatch({ type: LOADING, payload: data });
};

export const setSuccessMessage = (message, timer = 4000) => (dispatch) => {
  dispatch({ type: SUCCESS_MESSAGE, payload: message });
  clearTimeout(timeOutSuccessMsg);
  timeOutSuccessMsg = setTimeout(() => {
    dispatch({ type: SUCCESS_MESSAGE, payload: '' });
  }, timer);
};

export const setErrorMessage = (message, timer = 4000) => (dispatch) => {
  dispatch({ type: ERROR_MESSAGE, payload: message });
  clearTimeout(timeOutErrMsg);
  timeOutErrMsg = setTimeout(() => {
    dispatch({ type: ERROR_MESSAGE, payload: false });
  }, timer);
};

export default {
  setLoading,
  setSuccessMessage,
  setErrorMessage,
};