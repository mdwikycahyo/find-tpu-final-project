import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLoading, fetchData } from "../store/action/actionCreator";
import { useHistory } from "react-router";
import BodyTableKeeper from "../components/BodyTableKeeper";

export default function CemetaryKeeper() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchData());
  }, []);

  const keeper = useSelector((state) => state.cemetaryReducer.cemetaries);
  console.log(keeper, "<<<di table keeper");
  const loading = useSelector((state) => state.cemetaryReducer.loading);
  const error = useSelector((state) => state.cemetaryReducer.errors);

  if (loading) {
    return <h1>Lagi loading ceunah ....</h1>;
  }

  if (error) {
    return <h1>ada error ...</h1>;
  }

  function toAddForm() {
    // console.log("aku di klik yeay/");
    history.push("/cemetaryKeeper/add");
  }

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1 className="title-font font-semibold text-4xl text-center text-blue-600 mt-1 rounded-sm">
        Cemetary Keepers
      </h1>
      <button
        className="hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 mr-2"
        onClick={toAddForm}
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
      <div className="mt-4 mx-2">
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
                  mr-4
                "
                >
                  <th className="px-4 py-3">Name</th>

                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              {keeper.map((keeper) => {
                return <BodyTableKeeper key={keeper._id} keeper={keeper} />;
              })}
            </table>
          </div>
          <div
            className="
              grid
              px-4
              py-3
              text-xs
              font-semibold
              tracking-wide
              text-gray-500
              uppercase
              border-t
              dark:border-gray-700
              bg-gray-50
              sm:grid-cols-9
              dark:text-gray-400 dark:bg-gray-800
            "
          >
            <span className="flex items-center col-span-3">
              Showing 21-30 of 100
            </span>
            <span className="col-span-2"></span>
            {/*===PAGINATION===*/}
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md rounded-l-lg
                        focus:outline-none focus:shadow-outline-purple
                      "
                      aria-label="Previous"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        text-white
                        dark:text-gray-800
                        transition-colors
                        duration-150
                        bg-blue-600
                        dark:bg-gray-100
                        border border-r-0 border-blue-600
                        dark:border-gray-100
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      3
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      4
                    </button>
                  </li>
                  <li>
                    <span className="px-3 py-1">...</span>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      8
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md
                        focus:outline-none focus:shadow-outline-purple
                      "
                    >
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      className="
                        px-3
                        py-1
                        rounded-md rounded-r-lg
                        focus:outline-none focus:shadow-outline-purple
                      "
                      aria-label="Next"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
