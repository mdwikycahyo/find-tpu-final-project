import React from "react";
import { useState } from "react";

export default function AddForm() {
  const [loginInput, setLogin] = useState({
    place: "",
    address: "",
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
    <div>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Product Form
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="Place"
                name="place"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.place}
                onChange={formChange}
              />

              <input
                type="text"
                placeholder="Address"
                name="address"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={loginInput.address}
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
