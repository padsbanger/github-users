import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  CLEAR_SINGLE_USER
} from "./actions";
import { User } from "../types/User";

export interface SingleUserReducerState {
  loading: boolean;
  user: User | null;
  error: string | null;
}

export const initialState: SingleUserReducerState = {
  loading: true,
  user: null,
  error: null
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
        error: null,
        user: action.payload
      };
    case GET_SINGLE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
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
