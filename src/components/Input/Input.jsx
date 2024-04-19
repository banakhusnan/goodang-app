import React, { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";

const Input = forwardRef(
  ({ type = "text", id, name, error = "", ...props }, ref) => {
    const e = error ? "border-red-500 " : " ";
    return (
      <div>
        <input
          ref={ref ?? ""}
          type={type}
          id={id}
          className={"border rounded px-2 py-1 w-full " + e}
          name={name}
          {...props}
        />

        <ErrorMessage message={error && error[0]} />
      </div>
    );
  }
);

export default Input;
