import axios from "axios";
import {
  GET_MOBILEDATA_REQUEST,
  GET_MOBILEDATA_SUCCESS,
  GET_MOBILEDATA_FAILURE,
  GET_CARDATA_REQUEST,
  GET_CARDATA_SUCCESS,
  GET_CARDATA_FAILURE,
  GET_BIKEDATA_REQUEST,
  GET_BIKEDATA_SUCCESS,
  GET_BIKEDATA_FAILURE,
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
      console.log(err);
    });
};

const getCarData = () => (dispatch) => {
  dispatch({ type: GET_CARDATA_REQUEST });

  return axios
    .get("https://exuberant-pantsuit-bat.cyclic.app/cars")
    .then((res) => {
      return dispatch({
        type: GET_CARDATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_CARDATA_FAILURE });
      console.log(err);
    });
};

const getBikeData = () => (dispatch) => {
  dispatch({ type: GET_BIKEDATA_REQUEST });

  return axios
    .get("https://exuberant-pantsuit-bat.cyclic.app/bikes")
    .then((res) => {
      return dispatch({
        type: GET_BIKEDATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: GET_BIKEDATA_FAILURE });
      console.log(err);
    });
};

export { getMobileData, getCarData, getBikeData };
