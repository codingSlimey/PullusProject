import React from 'react'

export default function Input(props) {
	const { name, label, extraClass, error } = props
	return (
		<>
			{label && (
				<label
					htmlFor={name}
					className=' my-3 text-start text-primary flex items-start w-full'
				>
					{label}
				</label>
			)}
			{/* <input type={type} placeholder={placelholder} name={name}/> */}
			<input
				{...props}
				className={`"h-14 py-4 md:py-5 px-6 text-black/60  placeholder:text-placeholder disabled:opacity-50 disabled:cursor-not-allowed mb-6 shadow-lg border border-grey bg-[#fff]  w-full rounded-full  focus:outline-none  focus:border-none " ${extraClass}`}
			/>
			{error && <p className='text-[red] font-light text-sm mt-1'>{error}</p>}
		</>
	)
}
