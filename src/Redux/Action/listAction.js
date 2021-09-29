import axios from "axios";
import baseUrl from "../../Config/baseUrl";
//import setAxiosHeader from '../../utils/setAxiosHeader';
//import setAccessToken from '../../utils/setAccessToken';
import { GET_LIST_ITEMS, ADD_LIST_ITEMS } from "../type";
import {
  setLoading,
  setSuccessMessage,
  setErrorMessage,
} from "./loadingAction";

const getListItems = (pageNo) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}?page=${pageNo}`);
    dispatch({ type: GET_LIST_ITEMS, payload: res.data });
  } catch (error) {
    dispatch(setErrorMessage(`Something went wrong`))
}
};

const addListItems = (data) => async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}`, data)
      dispatch(setSuccessMessage(`${res.status}: User successfully Added`))
    } catch (error) {
        dispatch(setErrorMessage(`Something went wrong`))
    }
  };

  const editListItems = (id,data) => async (dispatch) => {
    try {
      const res = await axios.patch(`${baseUrl}/${{id}}`, data)
      dispatch(setSuccessMessage(`${res.status}: User updated `))
    } catch (error) {
        dispatch(setErrorMessage(`Something went wrong`))
    }
  };

export default {
    getListItems,
    addListItems,
    editListItems,
};
