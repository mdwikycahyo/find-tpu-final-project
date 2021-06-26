import { SHOW_CEMETARY, SHOW_LOADING, SHOW_ERRORS } from "../action/actionType";
const initialState = {
  cemetaries: [],
  loading: false,
  errors: null,
};

function cemetaryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_CEMETARY:
      return { ...state, cemetaries: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default cemetaryReducer;
