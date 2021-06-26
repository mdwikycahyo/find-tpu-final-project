import axios from "axios";
import {
  SHOW_KEEPER,
  SHOW_KEEPER_DETAIL,
  SHOW_CEMETARY,
  SHOW_LOADING,
  SHOW_ERRORS,
} from "./actionType";

export function setKeepers(payload) {
  return {
    type: SHOW_KEEPER,
    payload,
  };
}

export function setKeeperDetails(payload) {
  return {
    type: SHOW_KEEPER_DETAIL,
    payload,
  };
}

export function setCemetaries(payload) {
  return {
    type: SHOW_CEMETARY,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setErrors(payload) {
  return {
    type: SHOW_ERRORS,
    payload,
  };
}

export function fetchData() {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://18.207.141.48:3000/keeper",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(({ data }) => {
        console.log(data, "<<<fetch");
        dispatch(setKeepers(data));
        dispatch(setCemetaries(data));
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function fetchKeeperById(id) {
  console.log(id, "<<<di creator");
  return (dispatch) => {
    axios({
      method: "GET",
      url: `http://18.207.141.48:3000/keeper/${id}`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(setKeeperDetails(data));
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function addKeeper(data) {
  console.log(data, "<<<input data di creator");
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://18.207.141.48:3000/keeper",
      headers: {
        access_token: localStorage.access_token,
      },
      data: {
        keeperName: data.name,
        keeperEmail: data.email,
        keeperPhone: data.phone,
        keeperPassword: data.password,
      },
    })
      .then(() => {
        console.log("berhasil");
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
