import {createSelector} from "reselect";
import { createStore } from "redux";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);