import { accessData, saveData } from "../../Utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const initState = {
  // isAuth: accessData("token") ? true : false,
  isAuth: accessData("isAuth") || false,
  isAuthLoading: false,
  token: accessData("token") || null,
  name: accessData("name") || null,
};
// console.log(initState.isAuth)
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      saveData("token", action.payload.token);
      saveData("name", action.payload.name);
      saveData("isAuth", true);
      return {
        ...state,
        isAuthLoading: false,
        isAuth: true,
        token: action.payload.token,
        name: action.payload.name,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuthLoading: false,
        isAuth: false,
      };
    }
    case LOGOUT: {
      saveData("token", null);
      saveData("isAuth", false);
      saveData("name", null);
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default:
      return state;
  }
};
