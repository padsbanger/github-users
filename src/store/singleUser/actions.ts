import { createHttpClient } from "../createHttpClient";
import { Dispatch } from "redux";

export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";
export const GET_SINGLE_USER_ERROR = "GET_SINGLE_USER_ERROR";

export function getSingleUser(userId: string) {
  return (dispatch: Dispatch, getState: Function): any => {
    const http = createHttpClient();
    dispatch({
      type: GET_SINGLE_USER
    });
    return http
      .get(`/users/${userId}`)
      .then(({ data }) => {
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
