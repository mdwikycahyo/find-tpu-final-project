import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, fetchKeeperById } from "../store/action/actionCreator";
// import Loading from "./Loading";

export default function EditFormKeeper() {
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchKeeperById(id));
  }, []);

  const initData = useSelector((state) => state.keeperReducer.keeper);
  console.log(initData, "<<data di form");

  const [keeper, setKeeper] = useState({
    name: initData.keeperName,
    email: initData.keeperEmail,
    password: initData.keeperPassword,
    phone: initData.keeperPhone,
  });

  // const [editInput, setEdit] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  // });

  const editChange = (event) => {
    setKeeper({ ...keeper, [event.target.name]: event.target.value });
  };

  const editSubmit = (event) => {
    event.preventDefault();
    // console.log(editInput);
  };

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>ini edit form</h1>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Cemetary Keeper Form
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={editSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                // defaultValue={initData.keeperName}
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeper.name}
                onChange={editChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeper.email}
                onChange={editChange}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeper.password}
                onChange={editChange}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={keeper.phone}
                onChange={editChange}
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
