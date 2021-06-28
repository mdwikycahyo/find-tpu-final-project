import { combineReducers } from "redux";

import keeperReducer from "./keeperReducer";
import cemetaryReducer from "./cemetaryReducer";
import transactionReducer from "./transactionReducer";

const reducer = combineReducers({
  keeperReducer,
  cemetaryReducer,
  transactionReducer,
});

export default reducer;
