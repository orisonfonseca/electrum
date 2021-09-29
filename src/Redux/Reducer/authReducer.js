import {
    GET_SIGNUP_DATA,
    LOAD_USER,
    LOGOUT,
  } from '../type';
  
  const initialState = {
    signUpData: {
      data: null,
      message: '',
      success: false,
    },
    isAuthenticated: false,
    user: null,
    loading: true,
  };
  
  const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_SIGNUP_DATA:
        return {
          ...state,
          signUpData: payload,
        };
      
      case LOAD_USER:
        return {
          ...state,
          isAuthenticated: true,
          user: payload,
          loading: false,
        };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          signUpData: {
            data: null,
            message: '',
            success: false,
          },
          loading: false,
        };
  
      default:
        return { ...state };
    }
  };
  export default authReducer;