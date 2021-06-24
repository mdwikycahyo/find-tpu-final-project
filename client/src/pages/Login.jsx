import React from "react";
import { useState } from "react";

export default function Login() {
  const [loginInput, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginChange = (event) => {
    const { value, name } = event.target;
    const _loginInput = { ...setLogin, [name]: value };
    console.log(_loginInput);
    setLogin(_loginInput);
  };
  const loginSubmit = (event) => {
    event.preventDefault();
    alert(event);
  };
  return (
    <div>
      <h1>ini login page</h1>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-600 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
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
                  className=" bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
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
