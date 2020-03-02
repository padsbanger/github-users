import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  GET_USERS,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_ERROR,
  getUsers
} from "../../store/usersList/actions";

const http = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("store/singleUser/actions", () => {
  test("Should return users list from endpoint", async () => {
    const store = mockStore({ usersList: { users: [] } });
    http.onGet(`/users?since=0`).reply(200, [{ id: 1 }]);

    await store.dispatch(getUsers());
    const actions = store.getActions();

    expect(actions[0].type).toBe(GET_USERS);
    expect(actions[1].type).toBe(GET_USERS_LIST_SUCCESS);
  });

  test("Should return error while getting users list", async () => {
    const store = mockStore({ usersList: { users: [] } });
    http.onGet(`/users?since=0`).reply(403);

    await store.dispatch(getUsers());
    const actions = store.getActions();

    expect(actions[0].type).toBe(GET_USERS);
    expect(actions[1].type).toBe(GET_USERS_LIST_ERROR);
  });
});
