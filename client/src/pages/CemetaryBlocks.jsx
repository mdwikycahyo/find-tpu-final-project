import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, fetchData } from "../store/action/actionCreator";
import BodyTableCemetary from "../components/BodyTableCemetary";

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
    return <h1>Lagi loading ceunah ...</h1>;
  }

  if (error) {
    return <h1>ada error ...</h1>;
  }

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1 className="title-font font-semibold text-4xl text-center text-blue-600 mt-1 mb-6 rounded-sm">
        Cemetary Blocks
      </h1>
      <div className="mt-4 mx-12 pt-4 justify-center">
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
