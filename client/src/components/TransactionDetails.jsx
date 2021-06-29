import React from "react";

export default function TransactionDetails({ payload, setDetail }) {
  return (
    <>
      <div className="transition delay-700 duration-500 ease-in-out transform justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Transaction Details</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setDetail()}
              >
                {/* <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span> */}
              </button>
            </div>
            {/*body*/}
            <div className="relative p-4 flex-auto">
              <label className=" mb-4">Transaction ID</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={payload._id}
              />
              <label className=" mb-4">Deceased Name</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={payload.deceasedName}
              />
              <label className=" mb-4">Born Date</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={payload.bornDate}
              />
              <label className=" mb-4">Father Name</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={payload.fatherName}
              />
              <label className=" mb-4">Religion</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={payload.religion}
              />

              <label className=" mb-4">Facilities</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={payload.facility}
              />
              <label className=" mb-4">Space Location</label>
              <input
                type="text"
                name="id"
                className="shadow appearance-none  rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={payload.spaceLocation}
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end px-10 py-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setDetail()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
}
