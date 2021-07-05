import React from "react";

export default function Loading() {
  return (
    <div className="h-full ml-14 mb-10 md:ml-64">
      <div className="h-screen pt-12">
        <div className="flex flex-row justify-center mt-20">
          <div className="loader"></div>
          <h1 className=" mt-36 -ml-24 text-blue-700 text-bold text-base">
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
}
