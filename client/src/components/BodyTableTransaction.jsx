import React from "react";

export default function BodyTableTransaction(props) {
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
              //   onClick={() => toEdit(props.keeper._id)}
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
              class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              //   onClick={() => toDelete(props.keeper._id)}
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
    </tbody>
  );
}