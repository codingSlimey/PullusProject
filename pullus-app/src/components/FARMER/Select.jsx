import React from 'react'

export default function Select(props) {
	const { name, label, id, error } = props
	return (
		<div>
			<label
				htmlFor={name}
				className='md:my-3 flex  text-primary'
			>
				{' '}
				{label}
			</label>
			<select
				{...props}
				id={id}
				className='h-12 md:h-14  px-6 text-black/60 placeholder:text-placeholder disabled:opacity-50 disabled:cursor-not-allowed mb-6 shadow-lg border border-grey bg-[#fff]  w-full rounded-full  focus:outline-none  focus:border-none '
			></select>
			{error && (
				<p className='text-[red] text-left font-light text-sm mt-1'>{error}</p>
			)}
		</div>
	)
}
