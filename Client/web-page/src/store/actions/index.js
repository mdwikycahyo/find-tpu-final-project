import { setLoading, setError, setCemetery, setTransaction, setTransactionXendit } from "../actionCreator";
import axios from 'axios'

export function FetchCemetery() {
    return (dispatch, getState) => {
        axios({
            method: 'GET',
            url: 'http://18.207.141.48:3000/keeper',
        })
            .then(result => {
                // console.log(result.data)
                //   console.log(result.data);
                dispatch(setCemetery(result.data))
            })
            .catch(err => {
                dispatch(setError(err))
            })
            .finally(_ => {
                dispatch(setLoading(false))
            })
    }
}

export function addTransaction(payload) {
    return(dispatch, getState) => {
        axios({
            method: 'POST',
            url: 'http://18.207.141.48:3000/transaction',
            data: payload
          })
            .then(result => {
                console.log(result.data);
              dispatch(setTransaction(result.data))
            })
            .catch(err => {
                dispatch(setError(err))
            })
            .finally(_=>{
                dispatch(setLoading(false))
            })
    }
}

export function addTransactionXendit(payload) {
    return(dispatch, getState) => {
        axios({
            method: 'POST',
            url: 'http://18.207.141.48:3000/xendit/createVA',
            data: payload
          })
            .then(result => {
                console.log(result, '<<<di action');
              dispatch(setTransactionXendit(result.data))
            })
            .catch(err => {
                dispatch(setError(err))
            })
            .finally(_=>{
                dispatch(setLoading(false))
            })
    }
}
