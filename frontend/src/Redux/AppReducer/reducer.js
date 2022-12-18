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

const initialState = {
  mobileData: [],
  carData: [],
  bikeData:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    // -----mobile data--------

    case GET_MOBILEDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError:false,
      };
    }

    case GET_MOBILEDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        mobileData: payload,
      };
    }

    case GET_MOBILEDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // -------car data--------------

    case GET_CARDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_CARDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        carData: payload,
      };
    }

    case GET_CARDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // ---------bike data--------

    case GET_BIKEDATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_BIKEDATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        bikeData: payload,
      };
    }

    case GET_BIKEDATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};

export { reducer };