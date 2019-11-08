import {combineEpics} from "redux-observable";

import loginEpic from "./LoginEpic";

const epics = combineEpics(
    ...loginEpic,
);

export default epics;
