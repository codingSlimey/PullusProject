import bird from '../../images/bird.svg'
import { BsStarHalf } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useState } from 'react'

function ProductDetail() {
	let [quantity, setQuantity] = useState(1)
	const handleSubtraction = () => {
		if (quantity === 1) return
		else setQuantity((prevQuantity) => prevQuantity - 1)
	}
	const handleAddition = () => {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}
	return (
		<div className='py-16 px-48 text-left'>
			<div className='flex gap-14'>
				<div className='bg-grey flex-1 h-[530px] shadow-2xl p-8 flex justify-center'>
					<img
						src={bird}
						alt=''
						className='object-contain object-center'
					/>
				</div>
				<div className='flex-1 text-primary'>
					<div className='font-bold'>
						<div className='text-xl'>Day Old Chicks</div>
						<div className='text-2xl my-5'>N200.00</div>
					</div>
					<div className='text-xl font-bold'>Description</div>
					<div className='my-2 w-[90%]'>
						Product description goes in here with other important details...
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						recusandae obcaecati est perspiciatis accusantium consequuntur
					</div>
					<div className='my-4 flex gap-3'>
						<span className='inline px-4 py-1 font-light rounded-2xl text-xs bg-grey'>
							96 sold
						</span>
						<BsStarHalf className='h-5 w-5' />
						<span className='text-sm'>4.5 (7 reviews)</span>
					</div>
					<div className='my-4 flex items-center gap-3'>
						<span className='inline font-bold  text-base'>Quantity</span>
						<div className='flex gap-4 items-center bg-grey px-5 py-1 rounded-lg'>
							<AiFillMinusCircle
								onClick={handleSubtraction}
								className={`w-5 h-5 cursor-pointer ${
									quantity === 1 ? 'text-[grey]' : ''
								}`}
							/>
							<span className='border-primary border px-3 rounded-md'>
								{quantity}
							</span>
							<AiFillPlusCircle
								onClick={handleAddition}
								className='w-5 h-5 cursor-pointer'
							/>
						</div>
					</div>

					<div className='my-4 flex items-center gap-3'>
						<span className='inline font-light  text-base'>Total Price:</span>
						<span className='text-xl font-bold'>N4,000</span>
					</div>

					<div className='mt-12 flex  gap-16 '>
						<button
							// onClick={() => navigate('/farmer/settings')}
							className={`w-[fit] bg-fade text-[#fff] text-lg font-bold py-4 px-24 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			<hr className='my-16' />

			<div className='text-primary'>
				<div className='text-xl mb-8 font-bold'>Reviews</div>
				<div className='grid grid-cols-3 gap-10'>
					{[...Array(3)].map((item, index) => {
						return (
							<div
								key={index}
								className='text-center grid place-items-center'
							>
								<p className='w-[80%]'>
									You guys wowed me, your deliveryand timing was just on time. I
									will definitely recomend you towhomever wants fast delivery.
								</p>
								<img
									src={bird}
									alt=''
									className='h-16 w-16 rounded-full bg-grey my-4'
								/>
								<p className='font-bold'>Hassan Usman</p>
								<p>Leo Farms Ltd.</p>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
