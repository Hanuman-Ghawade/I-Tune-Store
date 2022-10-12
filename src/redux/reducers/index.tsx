import changeNumber from "./countReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
})

export default rootReducer;