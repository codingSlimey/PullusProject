import {  Link } from 'react-router-dom'
import Button from '../../components/FARMER/button'
import '../../App.css'
import bird from '../../images/bird.svg'
import { BsStarHalf } from 'react-icons/bs'
import { Pagination } from 'flowbite-react'
import useScreenWidth from '../../hooks/screenWidth'

import MobileMarketPlace from './MobileMarketPlace'

function MarketPlace(props) {
	const screenWidth = useScreenWidth()
	
	const sidebarCategories = [
		'Feeds',
		'Turkeys',
		'Chicks',
		'Loans',
		'Veterinary',
		'Insurance',
	]
	return (
		<div className='font-bold px-4  md:pb-12'>
			<div className='flex items-center my-4 justify-center gap-4'>
				<input
					type='text'
					placeholder='Search'
					className='h-12 w-[350px] border-none bg-grey rounded-xl shadow-lg placeholder:text-primary placeholder:font-light'
				/>
				<Button
					title={'Search'}
					icon={false}
					color={'fade'}
				/>
			</div>
			{screenWidth > 800 ?  (

			<div className='flex px-16  gap-14 mt-12'>
				<div className=' w-[18vw]'>
					<div className='text-primary font-bold text-left text-2xl mb-6'>
						Popular Products
					</div>
					<div className='flex gap-6'>
						{[...Array(2)].map((item, index) => {
							return (
								<div
									key={index}
									className='rounded-xl flex-1 bg-white  mb-4 '
								>
									<img
										src={bird}
										alt='bird'
										className='flex gap-3 items-center bg-grey font-normal text-primary shadow-xl h-[130px] rounded-2xl'
									></img>
									<div className='text-primary text-left grid gap-[0.15rem] text-sm mt-3'>
										<div className='font-bold'>Day Old Chicks</div>
										<div className='flex items-center gap-3'>
											<span>N 500.00</span>
										</div>
									</div>
								</div>
							)
						})}
					</div>

					<div className='text-primary font-bold text-left text-2xl my-6'>
						Categories
					</div>
					{sidebarCategories.map((item, index) => {
						return (
							<div
								key={index}
								className='mb-2 text-left font-normal text-primary'
							>
								{item}
							</div>
						)
					})}

					<div className='text-primary font-bold text-left text-2xl my-6'>
						Recently Viewed
					</div>
					<div className='flex gap-6'>
						{[...Array(2)].map((item, index) => {
							return (
								<div
									key={index}
									className='rounded-xl flex-1 bg-white  mb-4 '
								>
									<img
										src={bird}
										alt='bird'
										className='flex gap-3 items-center bg-grey font-normal text-primary shadow-xl h-[130px] rounded-2xl'
									></img>
									<div className='text-primary text-left grid gap-[0.15rem] text-sm mt-3'>
										<Link
											to={'/product-detail'}
											className='font-bold'
										>
											Day Old Chicks
										</Link>
										<div className='flex items-center gap-3'>
											<span>N 500.00</span>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>

				<div className='flex-1 '>
					<div className='text-primary font-bold text-left text-2xl mb-6'>
						All Products
					</div>
					<div className='market-place'>
						{[...Array(10)].map((item, index) => {
							return (
								<div
									key={index}
									className='rounded-xl bg-white  mb-4 '
								>
									<img
										src={bird}
										alt='bird'
										className='flex gap-3 items-center bg-grey font-normal text-primary shadow-xl h-[230px] rounded-2xl'
									></img>
									<div className='text-primary text-left grid gap-1 mt-3'>
										<Link
											to={'/product-detail'}
											className='font-bold'
										>
											Day Old Chicks
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
											<span>N 500.00</span>
										</div>
									</div>
								</div>
							)
						})}
					</div>
					<div className='flex justify-end'>
						<Pagination
							currentPage={1}
							totalPages={100}
							//   onPageChange={onPageChange}
							className='my-6'
						/>
					</div>
				</div>
			</div>
			) : ( 
				<MobileMarketPlace />
			)}
		</div>
	)
}

export default MarketPlace
