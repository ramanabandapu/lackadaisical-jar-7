import {
  GET_MOBILEDATA_REQUEST,
  GET_MOBILEDATA_SUCCESS,
  GET_MOBILEDATA_FAILURE,
} from "./actionTypes";

const initialState = {
  mobileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
      case GET_MOBILEDATA_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }

      case GET_MOBILEDATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
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

      default:
        return state;
    }
};

export { reducer };