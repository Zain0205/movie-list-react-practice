import React from "react";

export default function Button({children, type, onClick}) {
  return (
    <>
      <button className="bg-gray-200 hover:bg-gray-300 rounded-sm px-3 py-1" type={type} onClick={onClick}>
        {children}
      </button>
    </>
  )

}
