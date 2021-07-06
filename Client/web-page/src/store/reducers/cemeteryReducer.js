import { SET_ERROR, SET_LOADING, SET_CEMETERY } from "../actionType";


const initialState = {
    cemetery: [],
    isLoading: true,
    error: null
}

function cemeteryReducer(state = initialState, action) {
    if (action.type === SET_LOADING) {
        return { ...state, isLoading: action.payload }
    } else if (action.type === SET_ERROR) {
        return { ...state, error: action.payload }
    } else if (action.type === SET_CEMETERY) {
        return { ...state, cemetery: action.payload }
    }
    return state
}

export default cemeteryReducer