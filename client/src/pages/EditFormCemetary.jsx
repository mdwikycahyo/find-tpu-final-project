import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import {
  setLoading,
  fetchKeeperById,
  editCemetary,
} from "../store/action/actionCreator";
import Loading from "../pages/Loading";
import Error from "./Error";
import Swal from "sweetalert2";

export default function EditFormCemetary() {
  const dispatch = useDispatch();
  const history = useHistory();

  let { id } = useParams();
  console.log(id);
  const initData = useSelector((state) => state.keeperReducer.keeper);
  // console.log(initData, "<<data di form");
  const loading = useSelector((state) => state.keeperReducer.loading);
  const errors = useSelector((state) => state.keeperReducer.errors);

  useEffect(() => {
    console.log("di use Effect");
    // console.log(initData, cemetary);
    dispatch(setLoading(true));
    dispatch(fetchKeeperById(id));
  }, [id]);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {},
  });

  useEffect(() => {
    // console.log("use effect ke2");
    // console.log(initData);
    setValue("cemetaryName", initData.cemetaryName);
    setValue("cemetaryLocation", initData.cemetaryLocation);
    setValue("width", initData.width);
    setValue("height", initData.height);
    setValue("latitude", initData.latitude);
    setValue("longitude", initData.longitude);
    setValue("image_url", initData.image_url);
    setValue("price", initData.price);
    setValue("keeperName", initData.keeperName);
    setValue("keeperEmail", initData.keeperEmail);
    setValue("keeperPhone", initData.keeperPhone);
    setValue("keeperPassword", initData.keeperPassword);
    setValue("spaceLeft", initData.spaceLeft);
    setValue("spaceFilled", initData.spaceFilled);
    setValue("facilities", initData.facilities);
  }, [initData]);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data.facilities));
    // console.log(data.facilities);
    dispatch(editCemetary(data, id));
    Swal.fire("this item has been edit");
    history.push("/cemetaryBlocks");
  };

  if (loading) {
    return <Loading />;
  }

  if (errors) {
    return <Error />;
  }

  return (
    <div className="h-full ml-14 mb-10 md:ml-64">
      <div className="pt-4">
        <div className=" w-11/12 bg-gray-50 shadow-md mx-auto text-center py-4 mt-2 rounded-xl">
          <h1 className=" text-gray-800 text-center py-4 font-extrabold -mt-3 text-3xl">
            Cemetary Edit Form
          </h1>
          <div className="container py-5 max-w-4xl mx-auto text-left">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className=" mb-4 text-blue-500 font-semibold">
                Cemetary Name
              </label>
              <input
                type="text"
                placeholder="Cemetary Name"
                name="cemetaryName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("cemetaryName", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Cemetary Location
              </label>
              <input
                type="text"
                placeholder="Cemetary Location"
                name="cemetaryLocation"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("cemetaryLocation", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">Width</label>
              <input
                type="number"
                placeholder="Width"
                name="width"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("width", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Height
              </label>
              <input
                type="number"
                placeholder="Height"
                name="height"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("height", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Latitude
              </label>
              <input
                type="text"
                placeholder="Latitude"
                name="latitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("latitude", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Longitude
              </label>
              <input
                type="text"
                placeholder="Longitude"
                name="longitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("longitude", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Image Url
              </label>
              <input
                type="text"
                placeholder="Image Url"
                name="image_url"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("image_url", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("price", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Keeper Name
              </label>
              <input
                type="text"
                placeholder="Keeper Name"
                name="keeperName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperName", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Keeper Phone
              </label>
              <input
                type="text"
                placeholder="Keeper Phone"
                name="keeperPhone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("keeperPhone", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Available Space
              </label>
              <input
                type="number"
                placeholder="Available Space"
                name="spaceLeft"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("spaceLeft", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Space Filled
              </label>
              <input
                type="number"
                placeholder="Space Filled"
                name="spaceFilled"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("spaceFilled", { required: true })}
              />
              <label className=" mb-4 text-blue-500 font-semibold">
                Facilities
              </label>
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
