import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTransaction, setLoading } from "../store/action/actionCreator";
import BodyTableTransaction from "../components/BodyTableTransaction";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(fetchTransaction());
  }, []);

  const transaction = useSelector(
    (state) => state.transactionReducer.transactions
  );
  console.log(transaction, "<<<fetch di dashboard");
  const loading = useSelector((state) => state.transactionReducer.loading);
  const errors = useSelector((state) => state.transactionReducer.errors);

  if (loading) {
    return <h1>lagi loading uy</h1>;
  }

  if (errors) {
    return <h1>errorrrrrrr</h1>;
  }

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      {/* <h1>ini dashboard</h1> */}
      {/*===STATISTIC CARD BEGIN===*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <div
          className="
            bg-blue-500
            dark:bg-gray-800
            shadow-lg
            rounded-md
            flex
            items-center
            justify-between
            p-3
            border-b-4 border-blue-600
            dark:border-gray-600
            text-white
            font-medium
            group
          "
        >
          <div
            className="
              flex
              justify-center
              items-center
              w-14
              h-14
              bg-white
              rounded-full
              transition-all
              duration-300
              transform
              group-hover:rotate-12
            "
          >
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="
                stroke-current
                text-blue-800
                dark:text-gray-800
                transform
                transition-transform
                duration-500
                ease-in-out
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">557</p>
            <p>Orders</p>
          </div>
        </div>
        <div
          className="
            bg-blue-500
            dark:bg-gray-800
            shadow-lg
            rounded-md
            flex
            items-center
            justify-between
            p-3
            border-b-4 border-blue-600
            dark:border-gray-600
            text-white
            font-medium
            group
          "
        >
          <div
            className="
              flex
              justify-center
              items-center
              w-14
              h-14
              bg-white
              rounded-full
              transition-all
              duration-300
              transform
              group-hover:rotate-12
            "
          >
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="
                stroke-current
                text-blue-800
                dark:text-gray-800
                transform
                transition-transform
                duration-500
                ease-in-out
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$11,257</p>
            <p>Sales</p>
          </div>
        </div>
        <div
          className="
            bg-blue-500
            dark:bg-gray-800
            shadow-lg
            rounded-md
            flex
            items-center
            justify-between
            p-3
            border-b-4 border-blue-600
            dark:border-gray-600
            text-white
            font-medium
            group
          "
        >
          <div
            className="
              flex
              justify-center
              items-center
              w-14
              h-14
              bg-white
              rounded-full
              transition-all
              duration-300
              transform
              group-hover:rotate-12
            "
          >
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="
                stroke-current
                text-blue-800
                dark:text-gray-800
                transform
                transition-transform
                duration-500
                ease-in-out
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">$75,257</p>
            <p>Balances</p>
          </div>
        </div>
      </div>
      {/*===STATISTIC CARD END===*/}

      {/*===CLIENT ORDER TABLE BEGIN===*/}
      <div className="mt-4 mx-4">
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
                    dark:border-gray-700
                    bg-gray-50
                    dark:text-gray-400 dark:bg-gray-800
                  "
                >
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Place</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              {transaction.map((item) => {
                return <BodyTableTransaction key={item._id} item={item} />;
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
      {/*===CLIENT ORDER TABLE END===*/}
    </div>
  );
}
