import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import {
  setLoading,
  fetchKeeperById,
  editCemetary,
} from "../store/action/actionCreator";
import Loading from "./Loading";
import Swal from "sweetalert2";

export default function EditFormCemetary() {
  const dispatch = useDispatch();
  const history = useHistory();

  let { id } = useParams();
  const initData = useSelector((state) => state.keeperReducer.keeper);
  console.log(
    initData._id,
    "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< data di form"
  );

  const [cemetary, setCemetary] = useState({
    cemetaryName: "",
    cemetaryLocation: "",
    width: "",
    height: "",
    latitude: "",
    longitude: "",
    image_url: "",
    price: "",
    keeperName: "",
    keeperEmail: "",
    keeperPassword: "",
    keeperPhone: "",
    spaceLeft: "",
    spaceFilled: "",
    facilities: "",
  });

  const editChange = (event) => {
    setCemetary({ ...cemetary, [event.target.name]: event.target.value });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    dispatch(editCemetary(data, id));
    Swal.fire("this item has been edit");
    history.push("/cemetaryBlocks");
  };
  // console.log(id);

  useEffect(() => {
    // dispatch(setLoading(true))
    dispatch(fetchKeeperById(id));
  }, []);
  useEffect(() => {
    setCemetary({
      ...cemetary,
      cemetaryName: initData.cemetaryName,
      cemetaryLocation: initData.cemetaryLocation,
      width: initData.width,
      height: initData.height,
      latitude: initData.latitude,
      longitude: initData.longitude,
      image_url: initData.image_url,
      price: initData.price,
      keeperName: initData.keeperName,
      keeperEmail: initData.keeperEmail,
      keeperPassword: initData.keeperPassword,
      keeperPhone: initData.keeperPhone,
      spaceLeft: initData.spaceLeft,
      spaceFilled: initData.spaceFilled,
      facilities: initData.facilities,
    });
  }, [initData._id]);

  return initData._id ? (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>ini edit form</h1>
      <div className="pt-11">
        <div className="max-w-lg max-w-xs bg-gray-50 shadow-md rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
          <h1 className=" text-gray-800 text-center font-extrabold -mt-3 text-3xl">
            Cemetary Edit Form
          </h1>
          <div className="container py-5 max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Cemetary Name</label>
              <input
                type="text"
                placeholder="Cemetary Name"
                name="cemetaryName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.cemetaryName}
                {...register("cemetaryName", { required: true })}
              />

              <input
                type="text"
                placeholder="Cemetary Location"
                name="cemetaryLocation"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.cemetaryLocation}
                {...register("cemetaryLocation", { required: true })}
              />

              <input
                type="number"
                placeholder="Width"
                name="width"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.width}
                {...register("width", { required: true })}
              />

              <label>Height</label>
              <input
                type="number"
                placeholder="Height"
                name="height"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.height}
                {...register("height", { required: true })}
              />

              <input
                type="text"
                placeholder="Latitude"
                name="latitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.latitude}
                {...register("latitude", { required: true })}
              />

              <input
                type="text"
                placeholder="Longitude"
                name="longitude"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.longitude}
                {...register("longitude", { required: true })}
              />

              <input
                type="text"
                placeholder="Image Url"
                name="image_url"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.image_url}
                {...register("image_url", { required: true })}
              />

              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.price}
                {...register("price", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Name"
                name="keeperName"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.keeperName}
                {...register("keeperName", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Email"
                name="keeperEmail"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.keeperEmail}
                {...register("keeperEmail", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Password"
                name="keeperPassword"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.keeperPassword}
                {...register("keeperPassword", { required: true })}
              />

              <input
                type="text"
                placeholder="Keeper Phone"
                name="keeperPhone"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.keeperPhone}
                {...register("keeperPhone", { required: true })}
              />

              <label>Available Space</label>
              <input
                type="number"
                placeholder="Available Space"
                name="spaceLeft"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.spaceLeft}
                {...register("spaceLeft", { required: true })}
              />

              <label>Filled Space</label>
              <input
                type="number"
                placeholder="Space Filled"
                name="spaceFilled"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.spaceFilled}
                {...register("spaceFilled", { required: true })}
              />

              <input
                type="text"
                placeholder="Facilities"
                name="facilities"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={cemetary.facilities}
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
  ) : (
    // <h1>LOADDDDDIING</h1>
    <Loading />
  );
}
