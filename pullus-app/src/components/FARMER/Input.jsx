import React from 'react'

export default function Input(props) {
	const { name, label, extraClass } = props
	return (
		<>
			{label && (
				<label
					htmlFor={name}
					className=' my-3 text-primary'
				>
					{label}
				</label>
			)}
			{/* <input type={type} placeholder={placelholder} name={name}/> */}
			<input
				{...props}
				className={`"h-12 md:h-14 px-6 text-black/60 placeholder:text-placeholder disabled:opacity-50 disabled:cursor-not-allowed mb-6 shadow-lg border border-grey bg-[#fff]  w-full rounded-full outline-none  focus:outline-none  focus:border-grey " ${extraClass}`}
			/>
		</>
	)
}
