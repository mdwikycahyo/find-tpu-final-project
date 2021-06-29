import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { deleteCemetary } from "../store/action/actionCreator";
import Swal from "sweetalert2";

export default function BodyTableCemetary(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function toEditCemetary(id) {
    // console.log(id, "<<cemetary");
    history.push(`/cemetaryBlocks/edit/${id}`);
  }

  function toDeleteCemetary(id) {
    console.log(id, "<<aku di delete");
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
        dispatch(deleteCemetary(id));
        Swal.fire("this item success to delete");
      }
    });
  }

  return (
    <tbody className="bg-white dark:divide-gray-700 dark:bg-gray-800">
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
                src={props.cemetary.image_url}
                alt=""
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></div>
            </div>
            <div>
              <p className="font-semibold">{props.cemetary.cemetaryName}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {props.cemetary.cemetaryLocation}
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
            {props.cemetary.spaceLeft}
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
            {props.cemetary.spaceFilled}
          </span>
        </td>
        <td className="px-4 py-3 text-xs">
          <ul
            className="
          px-2
          py-1
          font-semibold
          leading-tight
          
        "
          >
            {props.cemetary.facilities.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
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
            Rp. {props.cemetary.price}
          </span>
        </td>
        <td className="px-4 py-3 text-center">
          <div className="flex item-center">
            <button
              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
              type="submit"
              onClick={() => toEditCemetary(props.cemetary._id)}
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
              type="submit"
              onClick={() => toDeleteCemetary(props.cemetary._id)}
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
