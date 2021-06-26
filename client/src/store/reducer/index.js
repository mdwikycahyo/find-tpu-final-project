import { combineReducers } from "redux";

import keeperReducer from "./keeperReducer";
import cemetaryReducer from "./cemetaryReducer";

const reducer = combineReducers({
  keeperReducer,
  cemetaryReducer,
});

export default reducer;
