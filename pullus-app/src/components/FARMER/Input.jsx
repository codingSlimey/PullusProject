import React from "react";

export default function Input(props) {
  const { name, label, action, } = props;
  return (
    <>
    { label &&
      <label htmlFor={name} className=" my-3 text-start text-primary">
        {label}{" "}
      </label>

    }
      {/* <input type={type} placeholder={placelholder} name={name}/> */}
      <input
        {...props}
        onChange={action}
        className="h-14 px-6 placeholder:text-placeholder mb-6 shadow-lg border border-grey bg-[#fff]  w-full rounded-full  focus:outline-none  focus:border-none "
      />
    </>
  );
}
