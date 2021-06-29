import axios from "axios";
import {
  SHOW_KEEPER,
  SHOW_KEEPER_DETAIL,
  SHOW_CEMETARY,
  SHOW_TRANSACTION,
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

export function setTransactions(payload) {
  return {
    type: SHOW_TRANSACTION,
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

export function fetchTransaction() {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://18.207.141.48:3000/transaction",
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(setTransactions(data));
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
        cemetaryName: data.cemetaryName,
        cemetaryLocation: data.cemetaryLocation,
        width: data.width,
        height: data.height,
        latitude: data.latitude,
        longitude: data.longitude,
        image_url: [data.image_url],
        price: data.price,
        keeperName: data.keeperName,
        keeperEmail: data.keeperEmail,
        keeperPassword: data.keeperPassword,
        keeperPhone: data.keeperPhone,
        spaceLeft: data.spaceLeft,
        spaceFilled: data.spaceFilled,
        facilities: data.facilities.split(","),
      },
    })
      .then(() => {
        console.log("berhasil");
        dispatch(setCemetaries(data));
        dispatch(fetchData());
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function editStatus(data) {
  console.log(data, "<<<status di creator");
  return (dispatch) => {
    axios({
      method: "PATCH",
      url: `http://18.207.141.48:3000/transaction/changeStatus/${data.id}`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: {
        status: data.status,
      },
    })
      .then(() => {
        console.log("berhasil");
        dispatch(fetchTransaction());
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function editCemetary(data, id) {
  console.log(data, "di edit creator");
  console.log(id, "di edit creator");
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `http://18.207.141.48:3000/keeper/${id}`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: {
        cemetaryName: data.cemetaryName,
        cemetaryLocation: data.cemetaryLocation,
        width: data.width,
        height: data.height,
        latitude: data.latitude,
        longitude: data.longitude,
        image_url: [data.image_url],
        price: data.price,
        keeperName: data.keeperName,
        keeperEmail: data.keeperEmail,
        keeperPassword: data.keeperPassword,
        keeperPhone: data.keeperPhone,
        spaceLeft: data.spaceLeft,
        spaceFilled: data.spaceFilled,
        facilities: data.facilities.split(","),
      },
    })
      .then(() => {
        console.log("berhasil yeaye");
        dispatch(fetchData());
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function deleteCemetary(id) {
  console.log(id, "<<di creator delete");
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `http://18.207.141.48:3000/keeper/${id}`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(() => {
        console.log("berhasil yeayy");
        dispatch(fetchData());
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}

export function deleteTransaction(id) {
  console.log(id, "<<<di delete creator");
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `http://18.207.141.48:3000/transaction/${id}`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then(() => {
        console.log("berhasil yeay!!");
        dispatch(fetchData());
      })
      .catch((err) => {
        dispatch(setErrors(err));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
}
