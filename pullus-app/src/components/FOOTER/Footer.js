import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
	const footerLinks = ['About', 'Help', 'Terms & Conditions', 'Privacy Policy']
	return (
		<div className='border-t border-grey bg-white text-primary h-fit'>
			<div className='max-width h-20 w-full generalPadding flex justify-between items-center'>
				<div className='font-medium'>
					<p>&#169; Pullus Africa 2022</p>
				</div>

				<div className='font-bold flex '>
					{footerLinks.map((item, index) => {
						return (
							<Link
								key={index}
								to={'/'}
								className={`${
									index === 0 ? 'pr-4' : 'border-l-2 border-primary/80 px-4'
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
