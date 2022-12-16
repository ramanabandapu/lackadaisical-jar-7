import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
  } from "./actionTypes";
  
  const loginRequestAction = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  
  const loginSuccessAction = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload,
    };
  };
  
  const loginFailureAction = () => {
    return {
      type: LOGIN_FAILURE,
    };
  };
  
  const logoutAction = () => {
    return {
      type: LOGOUT,
    };
  };
  
  export {
    loginFailureAction,
    loginRequestAction,
    loginSuccessAction,
    logoutAction,
  };
  