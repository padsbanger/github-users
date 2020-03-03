import { combineReducers } from "redux";
import {
  reducer as singleUserReducer,
  SingleUserReducerState
} from "./singleUser/reducer";
import {
  reducer as usersListReducer,
  UsersListReducerState
} from "./usersList/reducer";
import {
  reducer as usersSearchReducer,
  UserSearchReducerState
} from "./usersSearch/reducer";

export default combineReducers({
  usersList: usersListReducer,
  usersSearch: usersSearchReducer,
  singleUser: singleUserReducer
});

export interface State {
  singleUser: SingleUserReducerState;
  usersList: UsersListReducerState;
  usersSearch: UserSearchReducerState;
}
