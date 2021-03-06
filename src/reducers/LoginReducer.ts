import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export interface LoginState {
  readonly user?: string;
  readonly sessionToken?: string;
}

const initialState = {
};

export const loginReducer = (state: LoginState = initialState, action: Action): LoginState => {

  switch (action.type) {

    case getType(actions.loginAction):
      return {
        ...state, user: action.payload.user
      };

    case getType(actions.loggedInAction):
      return {
        ...state, sessionToken: action.payload.sessionToken
      };

    default:
      return state;
  }
};
