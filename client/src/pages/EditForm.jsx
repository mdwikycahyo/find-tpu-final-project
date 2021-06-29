import React from "react";
import { useParams } from "react-router";

export default function EditForm() {
  let { id } = useParams();
  console.log(id, "<<<di table cemetary");
  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>ini edit firm</h1>
    </div>
  );
}
