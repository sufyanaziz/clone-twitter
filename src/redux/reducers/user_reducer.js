import { SET_USER, SET_AUTH, SET_UNAUTH, LOADING_USER } from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTH:
      return {
        ...state,
        authenticated: false,
      };
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        credentials: action.payload,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
