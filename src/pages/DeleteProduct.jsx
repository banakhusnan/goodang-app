import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function DeleteProduct() {
  return (
    <div>
      <button type="button" className="btn-red-md flex w-fit">
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default DeleteProduct;
