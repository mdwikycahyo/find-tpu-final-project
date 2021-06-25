import React from "react";
import { useParams } from "react-router";

export default function EditFormKeeper() {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>ini edit form</h1>
    </div>
  );
}
