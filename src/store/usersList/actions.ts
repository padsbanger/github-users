import { createHttpClient } from "../createHttpClient";
import { Dispatch } from "redux";

export const GET_USERS = "GET_USERS";
export const GET_USERS_LIST_SUCCESS = "GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_ERROR = "GET_USERS_LIST_ERROR";

export function getUsers() {
  return (dispatch: Dispatch, getState: Function): any => {
    const http = createHttpClient();
    dispatch({
      type: GET_USERS
    });
    const users = getState().usersList.users;
    const lastUser = users[users.length - 1];
    const since = lastUser ? lastUser.id : 0;
    return http
      .get(`/users?since=${since}`)
      .then(({ data }) => {
        return dispatch({
          type: GET_USERS_LIST_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        return dispatch({
          type: GET_USERS_LIST_ERROR,
          payload: error
        });
      });
  };
}
