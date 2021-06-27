import React from 'react'
import { createStore } from 'redux'
import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  access_token: '',
}

export function login(email, password) {
  axios('http://18.207.141.48:3000/keeper/login', {
    method: 'POST',
    // ntar ambil dari parameter
    data: {
      email:"tony.stork@gmail.com",
      password:"tonystork"}
  })
    .then((response) => store.dispatch({
      type: 'LOGIN',
      payload: response.data
    }))
    // kasi notif di mobile
    .catch(console.warn)
}

function reducer(state = initialState, action) {
  if (action.type === 'LOGIN') {
    console.log({...state, access_token: action.payload.access_token}, '---------dari reducer')
    return {...state, access_token: action.payload.access_token}
  }
  return state
}

const store = createStore(reducer)

export default store
