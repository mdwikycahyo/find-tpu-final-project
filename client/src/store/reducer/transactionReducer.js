import {
  SHOW_TRANSACTION,
  SHOW_LOADING,
  SHOW_ERRORS,
} from "../action/actionType";
const initialState = {
  transactions: [],
  loading: false,
  errors: null,
};

function transactionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_TRANSACTION:
      return { ...state, transactions: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default transactionReducer;
