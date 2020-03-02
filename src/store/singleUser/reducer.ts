import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  CLEAR_SINGLE_USER
} from "./actions";

export interface SingleUserReducerState {
  loading: boolean;
  user: any;
  error: false;
}

export const initialState: SingleUserReducerState = {
  loading: true,
  user: null,
  error: false
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return {
        ...state,
        loading: true
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload
      };
    case GET_SINGLE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    case CLEAR_SINGLE_USER:
      return {
        ...state,
        loading: true,
        user: null
      };
    default:
      return state;
  }
}
