import { createHttpClient } from "../createHttpClient";
import { Dispatch } from "redux";

export const SEARCH_USERS = "SEARCH_USERS";
export const SEARCH_USERS_SUCCESS = "SEARCH_USERS_SUCCESS";
export const SEARCH_USERS_ERROR = "SEARCH_USERS_ERROR";

export function searchUsers(search: string) {
  return (dispatch: Dispatch, getState: Function): any => {
    const http = createHttpClient();
    dispatch({
      type: SEARCH_USERS,
      payload: search
    });
    return http
      .get(`search/users?q=${search}`)
      .then(({ data }) => {
        return dispatch({
          type: SEARCH_USERS_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        return dispatch({
          type: SEARCH_USERS_ERROR,
          payload: error
        });
      });
  };
}
