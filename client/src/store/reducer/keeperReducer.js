import {
  SHOW_KEEPER,
  SHOW_KEEPER_DETAIL,
  SHOW_ERRORS,
  SHOW_LOADING,
} from "../action/actionType";

const initilState = {
  keepers: [],
  keeper: {},
  loading: false,
  errors: null,
};

function keeperReducer(state = initilState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_KEEPER:
      return { ...state, keepers: payload };
    case SHOW_KEEPER_DETAIL:
      return { ...state, keeper: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERRORS:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default keeperReducer;
