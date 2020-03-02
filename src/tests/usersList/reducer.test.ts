import { initialState, reducer } from "../../store/usersList/reducer";
import {
  GET_USERS,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR
} from "../../store/usersList/actions";

describe("store/tables/reducer", () => {
  test("should return initial state if nothing is provided", () => {
    const response = reducer(initialState, {});

    expect(response).toEqual(initialState);
  });

  test("Sets loading flag to true", () => {
    const response = reducer(initialState, { type: GET_USERS });

    expect(response.loading).toBe(true);
  });

  test("Sets error", () => {
    const response = reducer(
      { ...initialState, loading: true },
      { type: GET_USERS_LIST_ERROR }
    );

    expect(response.error).toBe(true);
    expect(response.loading).toBe(false);
  });

  test("Sets data for single user", () => {
    const response = reducer(initialState, {
      type: GET_USERS_LIST_SUCCESS,
      payload: [{ id: 1 }]
    });

    expect(response.users.length).toBe(1);
    expect(response.loading).toBeFalsy();
  });
});
