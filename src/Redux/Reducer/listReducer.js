import { GET_LIST_ITEMS } from "../type";

const initialState = {
  list: null,
};

const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LIST_ITEMS:
      return {
        ...state,
        list: payload.data,
      };

    default:
      return { ...state };
  }
};
export default listReducer;
