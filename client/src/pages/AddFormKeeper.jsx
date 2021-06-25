import React from "react";
import { useState } from "react";

export default function AddFormKeeper() {
  const [loginInput, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const formChange = (event) => {
    const { value, name } = event.target;
    const _loginInput = { ...setLogin, [name]: value };
    console.log(_loginInput);
    setLogin(_loginInput);
  };
  const formSubmit = (event) => {
    event.preventDefault();
    alert(event);
  };
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Cemetary Keeper Form
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.name}
                onChange={formChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.email}
                onChange={formChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.password}
                onChange={formChange}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.phone}
                onChange={formChange}
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
