const {SET_LOADING, SET_ERROR, SET_CEMETERY, SET_TRANSACTION, SET_XENDIT} = require('./actionType')

export function setLoading(input) {
    return{
        type: SET_LOADING,
        payload: input
    }
}

export function setError(input) {
    return {
        type: SET_ERROR,
        payload: input
    }
}

export function setCemetery(input) {
    return {
        type: SET_CEMETERY,
        payload: input
    }
}

export function setTransaction(input) {
    return {
        type: SET_TRANSACTION,
        payload: input
    }
}

export function setTransactionXendit(input) {
    return {
        type: SET_XENDIT,
        payload: input
    }
}