import { createHttpClient } from "../createHttpClient";
import { Dispatch } from "redux";

export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";
export const GET_SINGLE_USER_ERROR = "GET_SINGLE_USER_ERROR";
export const CLEAR_SINGLE_USER = "CLEAR_SINGLE_USER";

export function getSingleUser(userId: string) {
  return (dispatch: Dispatch, getState: Function): any => {
    const http = createHttpClient();
    dispatch({
      type: GET_SINGLE_USER
    });
    return http
      .get(`/users/${userId}`)
      .then(({ data }) => {
        console.log(data);
        return dispatch({
          type: GET_SINGLE_USER_SUCCESS,
          payload: data
        });
      })
      .catch(error => {
        return dispatch({
          type: GET_SINGLE_USER_ERROR,
          payload: error
        });
      });
  };
}

export function clearSingleUser() {
  return {
    type: CLEAR_SINGLE_USER
  };
}
