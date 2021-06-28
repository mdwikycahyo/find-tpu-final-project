import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addKeeper } from "../store/action/actionCreator";
import Swal from "sweetalert2";

export default function AddFormKeeper() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    dispatch(addKeeper(data));

    Swal.fire("you added a new data");
  };

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Cemetary Keeper Form
          </h1>
          <div className="container py-5 max-w-md mx-auto text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Cemetary Name</label>
              <input
                type="text"
                placeholder="Cemetary Name"
                name="cemetaryName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.cemetaryName}
                // onChange={inputChange}
                {...register("cemetaryName", { required: true })}
              />
              <input
                type="text"
                placeholder="Cemetary Location"
                name="cemetaryLocation"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.cemetaryLocation}
                // onChange={inputChange}
                {...register("cemetaryLocation", { required: true })}
              />
              <input
                type="number"
                placeholder="Width"
                name="width"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.width}
                // onChange={inputChange}
                {...register("width", { required: true })}
              />
              <label>Height</label>
              <input
                type="number"
                placeholder="Height"
                name="height"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.height}
                // onChange={inputChange}
                {...register("height", { required: true })}
              />
              <input
                type="text"
                placeholder="Latitude"
                name="latitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.latitude}
                // onChange={inputChange}
                {...register("latitude", { required: true })}
              />
              <input
                type="text"
                placeholder="Longitude"
                name="longitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.longitude}
                // onChange={inputChange}
                {...register("longitude", { required: true })}
              />
              <input
                type="text"
                placeholder="Image Url"
                name="image_url"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.image_url}
                // onChange={inputChange}
                {...register("image_url", { required: true })}
              />
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.price}
                // onChange={inputChange}
                {...register("price", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Name"
                name="keeperName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.keeperName}
                // onChange={inputChange}
                {...register("keeperName", { required: true })}
              />
              <input
                type="text"
                placeholder="Keeper Email"
                name="keeperEmail"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.keeperEmail}
                // onChange={inputChange}
                {...register("keeperEmail", { required: true })}
              />
              <input
                type="text"
                placeholder="Keeper Password"
                name="keeperPassword"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.keeperPassword}
                // onChange={inputChange}
                {...register("keeperPassword", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Phone"
                name="keeperPhone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.keeperPhone}
                // onChange={inputChange}
                {...register("keeperPhone", { required: true })}
              />
              <label>Available Space</label>
              <input
                type="number"
                placeholder="Available Space"
                name="spaceLeft"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.spaceLeft}
                // onChange={inputChange}
                {...register("spaceLeft", { required: true })}
              />
              <label>Filled Space</label>
              <input
                type="number"
                placeholder="Space Filled"
                name="spaceFilled"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.spaceFilled}
                // onChange={inputChange}
                {...register("spaceFilled", { required: true })}
              />
              <input
                type="text"
                placeholder="Facilities"
                name="facilities"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // value={keeperInput.facilities}
                // onChange={inputChange}
                {...register("facilities", { required: true })}
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
