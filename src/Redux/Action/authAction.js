import axios from 'axios';
//import setAxiosHeader from '../../utils/setAxiosHeader';
//import setAccessToken from '../../utils/setAccessToken';
import {
  GET_SIGNUP_DATA,
  LOAD_USER,
  LOGOUT,
} from '../type';
import { setLoading, setSuccessMessage, setErrorMessage} from './loadingAction';

const register = (data) => async (dispatch) => {
   // dispatch(setLoading({ isLoading: true, isSuccess: false })); To be done for API calls only, no need here...
   if(localStorage.getItem('userData')){
       var oldData = JSON.parse(localStorage.getItem('userData'));
       let flag = oldData.filter(el =>{return el.email === data.email})
       if(flag.length > 0){
        dispatch(setErrorMessage('User with this email Already Exists'))
       }
       else{
        oldData.push(data)
        localStorage.setItem('userData', JSON.stringify(oldData));
        dispatch(setSuccessMessage('Registered Successfully!'));
       }
       
   }
   else{
    const newData = [data];
    localStorage.setItem('userData', JSON.stringify(newData));
    dispatch(setSuccessMessage('Registered Successfully!'));
   }
   
};

const logout = (history) => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: LOGOUT });
  history.push('/');
};

const login = (data, history) => async (dispatch) => {

  const tempData = JSON.parse(localStorage.getItem('userData'));
  const userData = await tempData.filter(el => { return el.email === data.email })
  if(userData.length > 0) {
    if(userData[0].password === data.password) {
      dispatch({ type: LOAD_USER, payload: userData });
      localStorage.setItem('token', JSON.stringify(userData));
      //history.push('/list')
      dispatch(setSuccessMessage('logged Successfully!'))
    }
    else{
      dispatch(setErrorMessage('Incorrect Password'))
    }
  }else{
    dispatch(setErrorMessage('Please Register'))
  }
  
};

export const loginSuccess = (data) => async (dispatch) => {
      dispatch({ type: LOAD_USER, payload: data });
  }
  

export default {
  register,
  login,
  logout,
  loginSuccess
};