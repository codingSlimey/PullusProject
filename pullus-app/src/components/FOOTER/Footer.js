import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	const footerLinks = ['About', 'Help', 'Terms & Conditions', 'Privacy Policy']
	return (
		<div className='border-t border-grey bg-white text-primary h-fit'>
			<div className='max-width py-2 max-w-full h-20 w-full generalPadding flex flex-col md:flex-row justify-between items-center'>
				<div className=' py-4 md:py-0 md:pr-4  font-medium'>
					<p>&#169; Pullus Africa 2022</p>
				</div>

				<div className='font-bold flex '>
					{footerLinks.map((item, index) => {
						return (
							<Link
								key={index}
								to={'/'}
								className={`${
									index === 0 ? 'pr-4' : ' text-sm md:text-base border-l-2 border-primary/80  px-4'
								}`}
							>
								{item}
							</Link>
						)
					})}
				</div>
			</div>
		</div>
	)
}
