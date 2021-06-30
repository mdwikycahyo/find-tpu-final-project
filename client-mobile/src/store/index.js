import React, { useState } from 'react'
import { createStore } from 'redux'
import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  access_token: '',
  currentID: false,

  transactions: [],
  transactionLoading: true,
  transactionError: false,

  detailKeeper: {},
  detailLoading: true,
  detailError: false,

  proceedLoading: true,

  transactionById: {},
  transactionByIdLoading: true,
  transactionByIdError: false,
}



export function login(email, password) {
  axios('http://18.207.141.48:3000/keeper/login', {
    method: 'POST',
    // ntar ambil dari parameter
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: 'mortred@gmail.com',
      password: 'mortred',
    },
  })
    .then((response) => {
      console.log(response.data)
      store.dispatch({
        type: 'LOGIN',
        payload: response.data,
      })
    })
    .catch((err) => console.log(err))
  // kasi notif di mobile
}

// 60d703835e6fba19f81c9421 change id based on logged in user
export function fetchTransaction(id, access_token) {
  console.log(id, '<--- fetch all transaction');
  axios('http://18.207.141.48:3000/transaction/cemetary/' + id, {
    method: 'GET',
    headers: { access_token },
  })
    .then((response) => {
      // console.log(response, '-----------dari store')
      store.dispatch({
        type: 'TRANSACTION',
        payload: response.data,
      })
    })
    .catch(() =>
      store.dispatch({
        type: 'TRANSACTION_ERROR',
        payload: true,
      })
    )
    .finally(() =>
      store.dispatch({
        type: 'TRANSACTION_LOADING',
        payload: false,
      })
    )
}

export function fetchTransactionByID(id, access_token) {
  // console.log(id,' masukkk');
  axios('http://18.207.141.48:3000/transaction/' + id, {
    method: 'GET',
    headers: { access_token },
  })
    .then((response) =>
      store.dispatch({
        type: 'TRANSACTION_BY_ID',
        payload: response.data,
      })
    )
    .catch(() =>
      store.dispatch({
        type: 'TRANSACTION_BY_ID_ERROR',
        payload: true,
      })
    )
    .finally(() =>
      store.dispatch({
        type: 'TRANSACTION_BY_ID_LOADING',
        payload: false,
      })
    )
}

export function changeStatus(access_token, status, id, keeperID) {
  // if status done -> hit nodemailer
  axios('http://18.207.141.48:3000/transaction/changeStatus/' + id, {
    method: 'PATCH',
    headers: { access_token },
    data: {
      status: status,
    },
  })
    .then((response) => {
      console.log(response.data)
      // fetchTransaction(keeperID, access_token)
    })
    .catch(console.warn)
}

export function keeperDetail(id) {
  // console.log('http://18.207.141.48:3000/keeper/' + id, 'masssukkkk')
  axios('http://18.207.141.48:3000/admin/' + id, {
    method: 'GET',
    headers: { access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGFkZWRkZDM1NTEyMzIzNDNlYzYyMCIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI1MDE3NDQyfQ.olbeq7rmcuoB2tarN8QXRY5jl07foJzBQOl4vdXZHoQ' },
  })
    .then((response) =>
      store.dispatch({
        type: 'DETAIL_KEEPER',
        payload: response.data,
      })
    )
    .catch(() =>
      store.dispatch({
        type: 'DETAIL_ERROR',
        payload: true,
      })
    )
    .finally(() =>
      store.dispatch({
        type: 'DETAIL_LOADING',
        payload: false,
      })
    )
}

export function updateKeeper(access_token, id, data) {
  axios('http://18.207.141.48:3000/keeper/' + id, {
    method: 'PUT',
    headers: { access_token},
    data: {
      cemetaryName: data.cemetaryName,
      cemetaryLocation: data.cemetaryLocation,
      width: data.width,
      height: data.height,
      cemetaryType: data.cemetaryType,
      latitude: data.latitude,
      longitude: data.longitude,
      image_url: data.image_url,
      price: data.price,
      keeperName: data.keeperName,
      keeperEmail: data.keeperEmail,
      keeperPassword: data.keeperPassword,
      keeperPhone: data.keeperPhone,
      spaceLeft: data.spaceLeft,
      spaceFilled: data.spaceFilled,
      facilities: data.facilities,
    },
  })
    .then((response) => {
      console.log(response.data)
      keeperDetail(id)
    })
    .catch(() => console.log('error gaish'))
}

function reducer(state = initialState, action) {
  if (action.type === 'LOGIN') {
    // console.log(action.payload)
    return { ...state, access_token: action.payload.access_token, currentID: action.payload.id }
  }

  if (action.type === 'TRANSACTION') {
    return { ...state, transactions: action.payload }
  }
  if (action.type === 'TRANSACTION_LOADING') {
    return { ...state, transactionLoading: action.payload }
  }
  if (action.type === 'TRANSACTION_ERROR') {
    return { ...state, transactionError: action.payload }
  }

  if (action.type === 'DETAIL_KEEPER') {
    // console.log(action.payload);
    return { ...state, detailKeeper: action.payload }
  }
  if (action.type === 'DETAIL_LOADING') {
    return { ...state, detailLoading: action.payload }
  }
  if (action.type === 'DETAIL_ERROR') {
    return { ...state, detailError: action.payload }
  }

  if (action.type === 'TRANSACTION_BY_ID') {
    return { ...state, transactionById: action.payload }
  }
  if (action.type === 'TRANSACTION_BY_ID_LOADING') {
    return { ...state, transactionByIdLoading: action.payload }
  }
  if (action.type === 'TRANSACTION_BY_ID_ERROR') {
    return { ...state, transactionByIdError: action.payload }
  }
  return state
}

const store = createStore(reducer)

export default store
