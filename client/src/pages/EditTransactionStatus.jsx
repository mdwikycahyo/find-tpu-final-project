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
    <>
      <div className="transition delay-700 duration-500 ease-in-out transform justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Transaction Status</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setModal()}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 flex-auto">
              <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
                <label className=" mb-4">Transaction ID</label>
                <input
                  type="text"
                  name="id"
                  className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  defaultValue={payload._id}
                  {...register("id")}
                />

                <label className="mb-4">Status</label>
                <select
                  name="status"
                  className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("status")}
                >
                  <option defaultChecked={payload.status} selected disabled>
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
            {/*footer*/}
            <div className="flex items-center justify-end px-10 py-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
