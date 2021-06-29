import React from "react";
import { useDispatch } from "react-redux";
import { editStatus } from "../store/action/actionCreator";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function EditTransactionStatus({ payload, setModal }) {
  const dispatch = useDispatch();
  // console.log(payload);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    dispatch(editStatus(data));
    Swal.fire("status transaction has been changed");
  };

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      {/* <h1>ini patch id {id}</h1> */}
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Transaction Status
          </h1>
          {/* <p>{JSON.stringify(payload)}</p> */}
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                defaultValue={payload._id}
                {...register("id")}
              />
              <select {...register("status")}>
                <option defaultChecked={payload.status} disabled>
                  {payload.status}
                </option>
                <option value="done">done</option>
                <option value="waiting">waiting</option>
                <option value="pending">pending</option>
                <option value="canceled">canceled</option>
              </select>
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
