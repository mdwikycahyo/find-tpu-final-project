import { SET_TRANSACTION, SET_XENDIT } from "../actionType";

const initialState = {
    transaction: {},
    xendit: {}
}

function transactionReducer(state = initialState, action) {
    if (action.type === SET_TRANSACTION) {
        return { ...state, transaction: action.payload }
    } else if (action.type === SET_XENDIT) {
        return {...state, xendit: action.payload}
    }
    console.log(state.xendit, '<<< di reducer');
    return state
}

export default transactionReducer