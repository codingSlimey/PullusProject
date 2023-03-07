import React from 'react'

export default function Select(props) {
    const {name, label , id}= props
  return (
    <div>
      <label htmlFor={name } className='md:mb-3 flex  text-primary' > {label}</label>
      <select {...props} id={id} className='h-14 px-6 placeholder:text-placeholder text-primary font-normal md:mb-6 shadow-xl bg-[#fff] border-none outline-none w-full rounded-full  focus:outline-none focus:border-none ' ></select>
    </div>
  )
}
