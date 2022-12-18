import axios from "axios";
import {
  GET_MOBILEDATA_REQUEST,
  GET_MOBILEDATA_SUCCESS,
  GET_MOBILEDATA_FAILURE,
} from "./actionTypes";

const getMobileData = () => (dispatch) => {
  dispatch({ type: GET_MOBILEDATA_REQUEST });

  return axios
    .get("https://exuberant-pantsuit-bat.cyclic.app/mobiles")
    .then((res) => {
      return dispatch({
        type: GET_MOBILEDATA_SUCCESS,
        payload: res.data,
      });
    })
      .catch((err) => {
          dispatch({ type: GET_MOBILEDATA_FAILURE });
          console.log(err)
      });
};

export { getMobileData };