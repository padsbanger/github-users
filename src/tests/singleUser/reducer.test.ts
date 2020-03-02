import { initialState, reducer } from "../../store/singleUser/reducer";
import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  CLEAR_SINGLE_USER
} from "../../store/singleUser/actions";

describe("store/tables/reducer", () => {
  test("should return initial state if nothing is provided", () => {
    const response = reducer(initialState, {});

    expect(response).toEqual(initialState);
  });

  test("Sets loading flag to true", () => {
    const response = reducer(initialState, { type: GET_SINGLE_USER });

    expect(response.loading).toBe(true);
  });

  test("Sets loading flag to false", () => {
    const response = reducer(
      { ...initialState, loading: true },
      { type: GET_SINGLE_USER_ERROR, payload: "Error" }
    );

    expect(response.loading).toBe(false);
    expect(response.error).toBe("Error");
  });

  test("Sets data for single user", () => {
    const response = reducer(initialState, {
      type: GET_SINGLE_USER_SUCCESS,
      payload: { id: 1 }
    });

    expect(response.user.id).toBe(1);
    expect(response.error).toBe(null);
    expect(response.loading).toBeFalsy();
  });

  test("Should clear current downloaded user", () => {
    const response = reducer(
      { ...initialState, user: { id: 1 } },
      {
        type: CLEAR_SINGLE_USER
      }
    );

    expect(response.user).toBe(null);
  });
});
