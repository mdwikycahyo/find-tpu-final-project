import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, fetchData } from "../store/action/actionCreator";
import BodyTableKeeper from "../components/BodyTableKeeper";
import Loading from "./Loading";
import Error from "./Error";

export default function CemetaryKeeper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchData());
  }, []);

  const keeper = useSelector((state) => state.keeperReducer.keepers);
  console.log(keeper, "<<<di table keeper");
  const loading = useSelector((state) => state.keeperReducer.loading);
  const error = useSelector((state) => state.keeperReducer.errors);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="h-full ml-14 mb-10 md:ml-64 ">
      <h1 className="title-font font-semibold text-4xl text-center text-blue-600 mt-1 mb-4 rounded-sm">
        Cemetary Keepers
      </h1>

      <div className="mt-4 mx-12 justify-center">
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
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
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Cemetary</th>
                  <th className="px-4 py-3">Phone</th>
                </tr>
              </thead>

              {keeper.map((keeper) => {
                return <BodyTableKeeper key={keeper._id} keeper={keeper} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
