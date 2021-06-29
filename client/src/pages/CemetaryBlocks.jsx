import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, fetchData } from "../store/action/actionCreator";
import BodyTableCemetary from "../components/BodyTableCemetary";
import Loading from "./Loading";

export default function CemetaryBlocks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchData());
  }, []);

  const cemetary = useSelector((state) => state.cemetaryReducer.cemetaries);
  console.log(cemetary, "<<<di table cemetary");
  const loading = useSelector((state) => state.cemetaryReducer.loading);
  const error = useSelector((state) => state.cemetaryReducer.errors);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>ada error ...</h1>;
  }

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1 className="title-font font-semibold text-4xl text-center text-blue-600 mt-1 rounded-sm">
        Cemetary Blocks
      </h1>
      <div className="mx-12">
        <button
          className="hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2"
          // onClick={toAddForm}
        >
          <svg
            className="group-hover:text-blue-600 text-blue-500 mr-2"
            width="12"
            height="20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
            />
          </svg>
          New
        </button>
      </div>
      <div className="mt-4 mx-12 justify-center">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className=" w-full">
              <thead>
                <tr
                  className="
                  text-xs
                  font-semibold
                  tracking-wide
                  text-left text-gray-500
                  uppercase
                  border-b
                  dark:border-gray-900
                  bg-gray-50
                  dark:text-gray-400 dark:bg-gray-800
                "
                >
                  <th className="px-4 py-3">Cemetary</th>
                  <th className="px-4 py-3">Available Space</th>
                  <th className="py-4 px-3">Space Filled</th>
                  <th className="px-4 py-3">Facilities</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              {cemetary.map((cemetary) => {
                return (
                  <BodyTableCemetary key={cemetary._id} cemetary={cemetary} />
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
