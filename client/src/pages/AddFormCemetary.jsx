import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { addKeeper } from "../store/action/actionCreator";
import Swal from "sweetalert2";

export default function AddFormCemetary() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    dispatch(addKeeper(data));
    Swal.fire("you added a new data");
    history.push("/cemetaryBlocks");
  };

  return (
    <div className="h-full ml-14 mb-10 md:ml-64">
      <div className=" pt-4">
        <div className=" w-11/12 bg-gray-50 shadow-md mx-auto text-center py-4 mt-2 rounded-xl">
          <h1 className=" text-gray-800 text-center py-4 font-extrabold -mt-3 text-3xl">
            Cemetary Keeper Form
          </h1>
          <div className="container py-5 max-w-4xl mx-auto text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <label>Cemetary Name</label> */}
              {errors.cemetaryName && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Cemetary Name"
                name="cemetaryName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("cemetaryName", { required: true })}
              />
              {errors.cemetaryLocation && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Cemetary Location"
                name="cemetaryLocation"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("cemetaryLocation", { required: true })}
              />
              {errors.width && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Width"
                name="width"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("width", { required: true })}
              />

              {errors.height && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Height"
                name="height"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("height", { required: true })}
              />
              {errors.latitude && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Latitude"
                name="latitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("latitude", { required: true })}
              />
              {errors.longitude && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Longitude"
                name="longitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("longitude", { required: true })}
              />
              {errors.image_url && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Image Url"
                name="image_url"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("image_url", { required: true })}
              />

              {errors.price && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("price", { required: true })}
              />
              {errors.keeperName && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Keeper Name"
                name="keeperName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperName", { required: true })}
              />
              {errors.keeperEmail && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="email"
                placeholder="Keeper Email"
                name="keeperEmail"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperEmail", { required: true })}
              />
              {errors.keeperPassword && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Keeper Password"
                name="keeperPassword"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperPassword", { required: true })}
              />
              {errors.keeperPhone && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Keeper Phone"
                name="keeperPhone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperPhone", { required: true })}
              />

              {errors.spaceLeft && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Available Space"
                name="spaceLeft"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("spaceLeft", { min: 0 })}
              />

              {errors.spaceFilled && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="number"
                placeholder="Space Filled"
                name="spaceFilled"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("spaceFilled", { required: true })}
              />
              {errors.facilities && (
                <span className="text-red-600">This field is required</span>
              )}
              <input
                type="text"
                placeholder="Facilities"
                name="facilities"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
