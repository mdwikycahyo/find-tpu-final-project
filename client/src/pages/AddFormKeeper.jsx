import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addKeeper } from "../store/action/actionCreator";
import Swal from "sweetalert2";

export default function AddFormKeeper() {
  const dispatch = useDispatch();
  const [keeperInput, setKeeperInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const inputChange = (event) => {
    setKeeperInput({ ...keeperInput, [event.target.name]: event.target.value });
    console.log(keeperInput, "chnge");
  };

  const inputSubmit = (event) => {
    event.prefentDefault();
    // console.log(inputChange, "<<<input form");
    console.log(keeperInput, "<<<inputSubmit");
    dispatch(addKeeper(keeperInput));
  };

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Cemetary Keeper Form
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={inputSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeperInput.name}
                onChange={inputChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeperInput.email}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeperInput.password}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeperInput.phone}
                onChange={inputChange}
              />
              <div className="flex items-center justify-between">
                <button
                  className=" bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
