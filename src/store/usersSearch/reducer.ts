import {
  SEARCH_USERS,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_ERROR
} from "../usersSearch/actions";
import { User } from "../types/User";

export interface UserSearchReducerState {
  search: string;
  loading: boolean;
  searchResults: User[];
}

export const initialState: UserSearchReducerState = {
  search: "",
  loading: false,
  searchResults: []
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        loading: true,
        search: action.payload
      };
    case SEARCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        searchResults: action.payload.items
      };
    case SEARCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
