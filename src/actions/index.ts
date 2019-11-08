import { createAction } from "typesafe-actions";

import {
  LOGIN,
  LOGGED_IN,
  LOADED,
} from "../constants";

export const loginAction = createAction(LOGIN, resolve => (user: string, password: string) => resolve({ user, password }));

export const loggedInAction = createAction(LOGGED_IN, resolve => (sessionToken: string) => resolve({ sessionToken }));

export const loadedAction = createAction(LOADED);
