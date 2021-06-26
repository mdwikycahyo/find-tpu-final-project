import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

export default function Login() {
  //http://18.207.141.48:3000/admin/login
  const history = useHistory();
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginChange = (event) => {
    setLogin({ ...loginInput, [event.target.name]: event.target.value });
    // console.log(loginInput, "<<<<input");
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    // alert(console.log("aku di klik yeay"));
    axios({
      method: "POST",
      url: "http://18.207.141.48:3000/admin/login",
      data: {
        email: loginInput.email,
        password: loginInput.password,
      },
    })
      .then(({ data }) => {
        console.log({ data });
        localStorage.setItem("access_token", data.access_token);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login success!",
        });
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>ini login page</h1>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Login
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={loginSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.email}
                onChange={loginChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.password}
                onChange={loginChange}
              />

              <div className="flex items-center justify-between">
                <button
                  className=" bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
