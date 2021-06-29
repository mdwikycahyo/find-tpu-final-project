import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import EditTransactionStatus from "../pages/EditTransactionStatus";

export default function BodyTableTransaction(props) {
  // const history = useHistory();

  const [isModal, setModal] = useState(false);

  // function toEditStatus(data) {
  //   let id = data._id;
  //   history.push(`/dashboard/editTransaction/${id}`);
  // }

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
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {props.item.phoneNumber}
              </p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-sm">{props.item.cemetaryName}</td>
        <td className="px-4 py-3 text-xs">
          <span
            className="
            px-2
            py-1
            font-semibold
            leading-tight
            text-green-700
            bg-green-100
            rounded-full
            dark:bg-green-700 dark:text-green-100
            "
          >
            {props.item.status}
          </span>
        </td>
        <td className="px-4 py-3 text-sm">{props.item.burialDate}</td>
        <td className="px-4 py-3 text-sm">{props.item.price}</td>
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
    </tbody>
  );
}
