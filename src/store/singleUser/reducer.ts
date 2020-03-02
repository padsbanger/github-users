import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR
} from "./actions";

export interface SingleUserReducerState {
  loading: boolean;
  singleUser: {};
  error: false;
}

export const initialState: SingleUserReducerState = {
  loading: false,
  singleUser: {},
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
        error: false
      };
    case GET_SINGLE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        user: action.payload
      };
    default:
      return state;
  }
}
