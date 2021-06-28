import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

export default function Register() {
  const history = useHistory();
  const [registInput, setRegist] = useState({
    email: "",
    password: "",
  });

  const registChange = (event) => {
    setRegist({ ...registInput, [event.target.name]: event.target.value });
    console.log(registInput, "<<input");
  };

  const registSubmit = (event) => {
    event.prevenDefault();
    console.log(registInput);
  };
  return (
    <div>
      <h1>ini register page</h1>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Register
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={registSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={registInput.email}
                onChange={registChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={registInput.password}
                onChange={registChange}
              />

              {/* <input
                type="text"
                placeholder="Role"
                name="role"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={registInput.role}
                onChange={registChange}
              /> */}

              <div className="flex items-center justify-between">
                <button
                  className=" bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
