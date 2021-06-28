import React, { useState } from 'react'
import { createStore } from 'redux'
import axios from 'axios'

const initialState = {
  email: '',
  password: '',
  access_token: '',
  transactions: [],
  transactionLoading: true,
  transactionError: false,
  detailKeeper: {},
  detailLoading: true,
  detailError: false,
}

// const [accessToken, setAccessToken] = useState('')

export function login(email, password) {
  console.log(email, password, ' dari login reducer')
  axios('http://18.207.141.48:3000/keeper/login', {
    method: 'POST',
    // ntar ambil dari parameter
    data: {
      email: 'tony.stork@gmail.com',
      password: 'tonystork',
    },
  }).then((response) =>
    store.dispatch({
      type: 'LOGIN',
      payload: response.data,
    })
  )
  // kasi notif di mobile
}

// 60d703835e6fba19f81c9421 change id based on logged in user
export function fetchTransaction() {
  axios('http://18.207.141.48:3000/transaction/cemetary/60d703835e6fba19f81c9421')
    .then((response) =>
      store.dispatch({
        type: 'TRANSACTION',
        payload: response.data,
      })
    )
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

export function changeStatus(access_token, status, id) {
  // coba log access token
  // console.log('access token: ', access_token, ' | status: ', status, ' | id: ', id)
  axios('http://18.207.141.48:3000/transaction/changeStatus/' + id, {
    method: 'PATCH',
    headers: { access_token },
    data: {
      status: status,
    },
  })
    .then((response) => {
      console.log(response.data)
      fetchTransaction()
    })
    .catch(console.warn)
}

export function keeperDetail(id) {
  // console.log('http://18.207.141.48:3000/keeper/' + id, 'masssukkkk')
  axios('http://18.207.141.48:3000/keeper/' + id)
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
  // console.log('access token: ', access_token, ' | data: ', data, ' | id: ', id)
  console.log(data.spaceLeft)
  let updated = {
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
  }
  console.log(updated, 'UPDATED');
  // axios('http://18.207.141.48:3000/keeper/' + id, {
  //   method: 'PUT',
  //   headers: { access_token },
  //   data: {
  //     data,
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.data)
  //     keeperDetail(id)
  //   })
  //   .catch(console.warn)
}

function reducer(state = initialState, action) {
  if (action.type === 'LOGIN') {
    // setAccessToken(action.payload.access_token)
    console.log(action.payload, '---------dari reducer')
    return { ...state, access_token: action.payload.access_token }
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
    return { ...state, detailKeeper: action.payload }
  }
  if (action.type === 'DETAIL_LOADING') {
    return { ...state, detailLoading: action.payload }
  }
  if (action.type === 'DETAIL_ERROR') {
    return { ...state, detailError: action.payload }
  }
  return state
}

const store = createStore(reducer)

export default store
