import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  CLEAR_SINGLE_USER,
  getSingleUser,
  clearSingleUser
} from "../../store/singleUser/actions";

const http = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("store/singleUser/actions", () => {
  test("Should return single user from endpoint", async () => {
    const store = mockStore({});
    http.onGet(`/users/1`).reply(200, { id: 1 });

    await store.dispatch(getSingleUser("1"));
    const actions = store.getActions();

    expect(actions[0].type).toBe(GET_SINGLE_USER);
    expect(actions[1].type).toBe(GET_SINGLE_USER_SUCCESS);
  });

  test("Should return error if  api call fails ", async () => {
    const store = mockStore({});
    http.onGet(`/users/1`).reply(500, { id: 1 });

    await store.dispatch(getSingleUser("1"));
    const actions = store.getActions();

    expect(actions[0].type).toBe(GET_SINGLE_USER);
    expect(actions[1].type).toBe(GET_SINGLE_USER_ERROR);
  });

  test("Should return action for clearing all favs ", async () => {
    const store = mockStore({});

    await store.dispatch(clearSingleUser());
    const actions = store.getActions();

    expect(actions[0].type).toBe(CLEAR_SINGLE_USER);
  });
});
