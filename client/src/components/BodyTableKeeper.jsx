import React from "react";

export default function BodyTableKeeper(props) {
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
            <div
              className="
          relative
          hidden
          w-8
          h-8
          mr-3
          rounded-full
          md:block
        "
            >
              <img
                className="object-cover w-full h-full rounded-full"
                src="https://randomuser.me/api/portraits/lego/7.jpg"
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">{props.keeper.keeperName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {props.keeper.keeperEmail}
              </p>
            </div>
          </div>
        </td>

        <td className="px-4 py-3 text-xs">
          <span
            className="
        px-2
        py-1
        font-semibold
        leading-tight
        
      "
          >
            {props.keeper.cemetaryName}
          </span>
        </td>
        <td className="px-4 py-3 text-xs">
          <span
            className="
        px-2
        py-1
        font-semibold
        leading-tight
        
      "
          >
            {props.keeper.keeperPhone}
          </span>
        </td>
      </tr>
    </tbody>
  );
}
