import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import admin from "../assets/login.svg";
import Swal from "sweetalert2";
import axios from "axios";

export default function Login() {
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
    // console.log(loginInput);
    axios({
      method: "POST",
      url: "http://18.207.141.48:3000/admin/login",
      data: {
        email: loginInput.email,
        password: loginInput.password,
      },
    })
      .then(({ data }) => {
        // console.log({ data });
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
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  return (
    <div>
      <div className="min-w-screen min-h-screen BG-IMG flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-blue-100 py-10 px-10">
              <img src={admin} alt="admin" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
                <p>Enter your information to login</p>
              </div>
              <form onSubmit={loginSubmit}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label for="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        value={loginInput.email}
                        onChange={loginChange}
                        name="email"
                        required
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label for="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={loginInput.password}
                        onChange={loginChange}
                        required
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      // onSubmit={(event) => loginSubmit(event)}
                      className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
