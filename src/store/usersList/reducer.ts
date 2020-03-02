import {
  GET_USERS,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR
} from "./actions";

export interface UsersListReducerState {
  loading: boolean;
  users: [];
  error: false;
  since: number;
}

export const initialState: UsersListReducerState = {
  loading: false,
  users: [],
  since: 0,
  error: false
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      };
    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload],
        since: 0,
        error: false
      };
    case GET_USERS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
