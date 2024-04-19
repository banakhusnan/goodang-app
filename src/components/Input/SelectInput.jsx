import React, { forwardRef } from "react";
import ErrorMessage from "./ErrorMessage";

const Option = ({ children, value, isDisabled }) => {
  return (
    <option value={value} disabled={isDisabled}>
      {children}
    </option>
  );
};

const SelectInput = forwardRef(
  ({ children, id, name, error, ...props }, ref) => {
    const e = error ? "border-red-500 " : " ";
    return (
      <div>
        <select
          ref={ref}
          id={id}
          className={"border rounded px-2 py-2 w-full bg-white " + e}
          name={name}
          {...props}
        >
          {children}
        </select>

        <ErrorMessage message={error && error[0]} />
      </div>
    );
  }
);

SelectInput.Option = Option;

export default SelectInput;
