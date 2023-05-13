import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	const footerLinks = ['About', 'Help', 'Terms & Conditions', 'Privacy Policy']
	return (
		<div className='border-t border-grey bg-white text-primary h-fit'>
			<div className='max-width py-2 max-w-full h-fit md:h-20 w-full generalPadding flex flex-col md:flex-row justify-between items-center'>
				<div className=' py-4 md:py-0 md:pr-4  font-medium'>
					<p>&#169; Pullus Africa {new Date().getFullYear()}</p>
				</div>

				<div className='font-bold flex items-center'>
					{footerLinks.map((item, index) => {
						return (
							<Link
								key={index}
								to={'/'}
								className={`${
									index === 0 ? 'lgmobile:pr-4 pr-2' : ' text-sm md:text-base border-l-2 whitespace-nowrap border-primary/80 px-1 lgmobile:px-2'
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
