import {Epic} from "redux-observable";
import {filter, map} from 'rxjs/operators';
import {ActionType, isActionOf} from 'typesafe-actions';

import * as actions from "../actions";

import {RootState} from "../reducers";

type Action = ActionType<typeof actions>;

const loginEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.loginAction)),
        map(() => actions.loggedInAction("asd"))
    );

export default [
    loginEpic,
];
