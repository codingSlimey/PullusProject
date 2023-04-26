import React from 'react'
import { Link } from 'react-router-dom'
import bird from '../../images/bird.svg'
import Discount from '../../images/Discount.svg'
import chicklogo from '../../images/chicklogo.svg'
import cycle from '../../images/cycle.svg'
import shield from '../../images/shield.svg'
import Activity from '../../images/Activity.svg'
import forward from '../../images/forward.svg'
import { BsStarHalf } from 'react-icons/bs'

import products from '../../constants/dummyProducts'

function MobileMarketPlace() {
	const icon = [
		{
			src: Discount,
			alt: 'Discount',
			text: 'Feed',
		},
		{
			src: chicklogo,
			alt: 'chicklogo',
			text: 'Chicks',
		},
		{
			src: cycle,
			alt: 'cycle',
			text: 'Loans',
		},
		{
			src: shield,
			alt: 'shield',
			text: 'vets',
		},
		{
			src: Activity,
			alt: 'Activity',
			text: 'Insurance',
		},
	]
	return (
		<div>
			<div className='flex text-primary justify-between font-medium text-sm'>
				<span>Popular Product</span>
				<span>see all</span>
			</div>
			<div className='rounded-2xl my-5 bg-grey p-5 '>
				<div className='flex items-center text-primary '>
					<div className='text-start'>
						<h1 className='text-4xl font-bold'>N200</h1>
						<p className='font-semibold'>Day Old Chick</p>
						<p className='font-normal text-sm'>
							This is so far going to be the best offer you may ever get
						</p>
					</div>
					<div>
						<img
							src={bird}
							className=''
							alt='bird'
						/>
					</div>
				</div>
				<div className='flex gap-1  mt-3 justify-center items-center'>
					{[...Array(7)].map((item, index) => {
						return (
							<div
								key={index}
								className='w-1 h-1 rounded-full bg-slate-400'
							>
								{' '}
							</div>
						)
					})}
				</div>
			</div>
			<div className='flex items-center text-primary font-medium gap-5 justify-center'>
				{icon.map((item, index) => {
					return (
						<div
							key={index}
							className='flex flex-col items-center justify-center'
						>
							<img
								className=' w-16 h-16 p-3 rounded-full bg-grey'
								src={item.src}
								alt={item.alt}
							/>
							<p>{item.text}</p>
						</div>
					)
				})}
			</div>
			<div className='flex text-primary justify-between py-7'>
				<h1> Most Popular </h1>
				<img
					src={forward}
					alt='forward'
				/>
			</div>
			<div className='flex mx-auto gap-3 hide-scrollbars overflow-x-auto'>
				<h1 className='border-2 border-primary px-3 py-2 text-primary font-medium hover:bg-primary hover:text-white rounded-3xl'>
					All
				</h1>
				{icon.map((item, index) => {
					return (
						<div
							key={index}
							className='border-2 border-primary py-2 px-3 rounded-3xl text-primary font-medium hover:bg-primary hover:text-white '
						>
							{item.text}
						</div>
					)
				})}
			</div>
			<div className='my-10 grid grid-cols-2 gap-4'>
				{products.map((item, index) => {
					return (
						<div
							key={index}
							className='rounded-xl bg-white  mb-4 '
						>
							<img
								src={bird}
								alt='bird'
								className='flex gap-3 items-center bg-grey font-normal text-primary shadow-xl h-[230px] rounded-2xl'
							/>
							<div className='text-primary text-left grid gap-1 mt-3'>
								<Link
									to={`/product/${item.name}`}
									className='font-bold'
								>
									{item.name}
								</Link>
								<div className='flex gap-3 font-light text-sm items-center'>
									<div className='flex gap-2 items-center'>
										<BsStarHalf className='h-5 w-5' />
										<span>4.5</span>
									</div>

									<span className='inline px-4 py-1 font-light rounded-2xl text-xs bg-grey'>
										45,000 sold
									</span>
								</div>
								<div className='flex items-center gap-3'>
									<span>N {item.price}.00</span>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MobileMarketPlace
