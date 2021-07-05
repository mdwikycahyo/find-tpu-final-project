import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { masa } from "masa";
import { deleteTransaction } from "../store/action/actionCreator";
import EditTransactionStatus from "../pages/EditTransactionStatus";
import TransactionDetails from "./TransactionDetails";

export default function BodyTableTransaction(props) {
  const [isModal, setModal] = useState(false);
  const [isDetail, setDetail] = useState(false);
  const dispatch = useDispatch();

  function toDeleteTransaction(id) {
    console.log(id, "<<<id transaction");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete this item",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTransaction(id));
        Swal.fire("this item success to delete");
      }
    });
  }

  function dateFormat(date) {
    return masa(date).format("[hari] dddd, [tanggal] D MMMM YYYY"); // hari Minggu, tanggal 15 November 2020
  }

  function priceFormat(money) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(money);
  }

  function wichColor(status) {
    if (status === "done") {
      return "text-green-700 bg-green-100";
    } else if (status === "canceled") {
      return "text-red-700 bg-red-100";
    } else if (status === "waiting") {
      return "text-yellow-700 bg-yellow-100";
    } else if (status === "pending") {
      return "text-blue-700 bg-blue-100";
    }
  }

  return (
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      <tr
        className="
				bg-gray-50
				dark:bg-gray-800
				hover:bg-gray-100
				dark:hover:bg-gray-900
				text-gray-700
				dark:text-gray-400
			"
      >
        <td className="px-4 py-3">
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold">{props.item.payerName}</p>
              {/* <p className="text-xs text-gray-600 dark:text-gray-400">
                {timeTracker()}
              </p> */}
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-sm">
          <span
            className="
        px-2
        py-1 font-medium
        leading-tight
        
      "
          >
            {props.item.cemetaryName}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          <span
            className="
        px-2
        py-1 font-medium
        leading-tight
        
      "
          >
            {dateFormat(props.item.burialDate)}
          </span>
        </td>
        <td className="px-4 py-3 text-xs">
          <span
            className={`px-2
              py-1
              font-semibold
              leading-tight
              ${wichColor(props.item.status)}
              rounded-full
              dark:bg-green-700 dark:text-green-100`}
          >
            {props.item.status}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          <span
            className="
        px-2
        py-1
        font-semibold
        leading-tight
        
      "
          >
            {props.item.phoneNumber}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">
          <span
            className="
        px-2
        py-1 font-medium
        leading-tight
        
      "
          >
            {priceFormat(props.item.price)}
          </span>
        </td>
        <td className="px-4 py-3 text-center">
          <div className="flex items-center">
            <button
              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              type="submit"
              onClick={() => setModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button
              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              type="submit"
              onClick={() => setDetail(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            <button
              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              type="submit"
              onClick={() => toDeleteTransaction(props.item._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {isModal ? (
        <EditTransactionStatus
          payload={props.item}
          setModal={() => {
            setModal(!isModal);
          }}
        />
      ) : null}

      {isDetail ? (
        <TransactionDetails
          payload={props.item}
          setDetail={() => setDetail(!isDetail)}
        />
      ) : null}
    </tbody>
  );
}
