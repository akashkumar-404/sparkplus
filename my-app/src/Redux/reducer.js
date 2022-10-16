
import {
    DELETE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCESS,
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCESS,
    PATCH_USER_FAILURE,
    PATCH_USER_REQUEST,
    PATCH_USER_SUCESS,
    POST_USER_FAILURE,
    POST_USER_REQUEST,
    POST_USER_SUCESS,
  } from "./actionTypes";
  
  const init = {
    user: [],
    isLoading: false,
    isError: false,
  };
  const AppReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_USER_REQUEST:
        return { ...state, isLoading: true };
      case GET_USER_SUCESS:
        return { ...state, user: payload, isLoading: false, isError: false };
      case GET_USER_FAILURE:
        return { ...state, isError: true, isLoading: false };
      case POST_USER_REQUEST:
        return { ...state, isLoading: true };
      case POST_USER_SUCESS:
        const data = [...state.user, payload];
        return { ...state, user: data, isLoading: false, isError: false };
      case POST_USER_FAILURE:
        return { ...state, isError: true, isLoading: false };
      case DELETE_USER_REQUEST:
        return { ...state, isLoading: true };
      case DELETE_USER_SUCESS:
        return {
          ...state,
          user: state.user.filter((ele) => ele.id !== payload),
          isLoading: false,
          isError: false,
        };
      case DELETE_USER_FAILURE:
        return { ...state, isError: true, isLoading: false };
  
      case PATCH_USER_REQUEST:
        return { ...state, isLoading: true };
      case PATCH_USER_SUCESS:
        const patch = state.user.map((ele) => {
          if (ele.id == payload.id) {
            return { ...ele, status: payload.status };
          }
          return ele;
        });
        return { ...state, user: patch, isLoading: false, isError: false };
      case PATCH_USER_FAILURE:
        return { ...state, isError: true, isLoading: false };
      default:
        return state;
    }
  };
  
  export default AppReducer;
  