import {
    LOADING,
    SUCCESS_MESSAGE,
    ERROR_MESSAGE,
  } from '../type';
  
  const initialState = {
    isLoading: false,
    isSuccess: false,
    successMessage: '',
    errorMessage: '',
  };
  
  const loadingReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case LOADING:
        return {
          ...state,
          isLoading: payload.isLoading,
          isSuccess: payload.isSuccess,
        };
      case SUCCESS_MESSAGE:
        return {
          ...state,
          successMessage: payload,
        };
      case ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: payload,
        };
      default:
        return { ...state };
    }
  };
  export default loadingReducer;