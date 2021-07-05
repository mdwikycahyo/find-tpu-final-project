import React from "react";

export default function Header() {
  return (
    <div>
      <div
        class="
        fixed
        w-full
        flex
        items-center
        justify-between
        h-14
        text-white
        z-10
      "
      >
        <div
          class="
          flex
          items-center
          justify-start
          md:justify-center
          pl-3
          w-14
          md:w-64
          h-14
          bg-blue-800
          dark:bg-gray-800
          border-none
        "
        >
          <img
            class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
            alt="avatar"
          />
          <span class="hidden md:block">ADMIN</span>
        </div>
      </div>
    </div>
  );
}
