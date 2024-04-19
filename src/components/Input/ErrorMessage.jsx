import React from "react";

function ErrorMessage({ message }) {
  return (
    <div>
      <span className="text-sm text-red-600">{message}</span>
    </div>
  );
}

export default ErrorMessage;
