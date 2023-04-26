import bird from '../../images/bird.svg'
import { BsStarHalf } from 'react-icons/bs'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import products from '../../constants/dummyProducts'
import { FaPlay } from 'react-icons/fa'

import { useCart } from '../../context/cart'
import VendorProfile from '../FARMER/MyOrders/vendorProfile'

function ProductDetail() {
	const { addToCart, increaseQuantity, decreaseQuantity, items } = useCart()
	let [quantity, setQuantity] = useState(1)
	const [showModal, setShowModal] = useState(false)

	const [singleProduct, setSingleProduct] = useState(null)
	const { pathname } = useLocation()
	useEffect(() => {
		const productName = pathname.split('product/')[1]
		products.forEach((item) => {
			if (item.name === productName) {
				setSingleProduct(item)
			} else {
				return
			}
		})
		if (items) {
			for (let i = 0; i < items.length; i++) {
				if (items[i].name === productName) {
					setQuantity(items[i].quantity)
				}
			}
		}
	}, [pathname, items, quantity])
	return (
		<div className='py-5 md:py-16 px-10 laptop:px-48 text-left'>
			<div className='max-md:flex-col flex gap-14'>
				<div className=' md:flex-1 w-full h-[350px] md:h-[530px] shadow-lg rounded-md '>
					<img
						src={bird}
						alt='product'
						className='object-contain object-center h-full w-full'
					/>
				</div>
				<div className='max-md:mt-8 md:flex-1 text-primary'>
					<div className='font-bold'>
						<div className='text-xl'>{singleProduct?.name}</div>
						<div className='text-2xl my-5'>N{singleProduct?.price}.00</div>
					</div>
					<div className='text-xl font-bold'>Description</div>
					<div className='my-2 md:w-[90%]'>
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

					<button
						onClick={() => setShowModal(true)}
						className={`w-fit bg-[#fff] text-primary font-semibold text-lg flex gap-3  items-center`}
					>
						View vendor profile here
						<FaPlay className=' h-4 w-4' />
					</button>

					<div className='my-4 flex items-center gap-3'>
						<span className='inline font-bold  text-base'>Quantity</span>
						<div className='flex gap-4 items-center bg-grey px-5 py-1 rounded-lg'>
							<button
								disabled={quantity === 1}
								onClick={() => decreaseQuantity(singleProduct)}
							>
								<AiFillMinusCircle
									className={`w-5 h-5 cursor-pointer ${
										quantity === 1 ? 'text-[grey]' : ''
									}`}
								/>
							</button>
							<span className='border-primary border px-3 rounded-md'>
								{quantity}
							</span>
							<button onClick={() => increaseQuantity(singleProduct)}>
								<AiFillPlusCircle className='w-5 h-5 cursor-pointer' />
							</button>
						</div>
					</div>

					<div className='my-4 flex items-center gap-3'>
						<span className='inline font-light  text-base'>Total Price:</span>
						<span className='text-xl font-bold'>
							N{quantity * singleProduct?.price}
						</span>
					</div>

					<div className='mt-12 flex'>
						<button
							onClick={() => addToCart(singleProduct)}
							className={`w-full md:w-[fit] bg-fade text-[#fff] text-lg font-bold py-3 tablet:py-4 px-24 flex justify-center  items-center rounded-full shadow-xl  my-auto`}
						>
							Add to Cart
						</button>
					</div>
				</div>
			</div>

			<hr className='my-16' />

			<div className='text-primary'>
				<div className='text-xl mb-3 xmd:mb-8 font-bold'>Reviews</div>
				<div className='grid grid-cols-1 xmd:grid-cols-3 gap-4 md:gap-10'>
					{[...Array(3)].map((item, index) => {
						return (
							<div
								key={index}
								className='xmd:text-center grid xmd:place-items-center px-2'
							>
								<p className='max-[600px]:w-full w-[70%] xmd:w-full laptop:w-[80%]'>
									You guys wowed me, your deliveryand timing was just on time. I
									will definitely recomend you towhomever wants fast delivery.
								</p>
								<img
									src={bird}
									alt=''
									className='h-16 w-16 rounded-full bg-grey my-2 xmd:my-4'
								/>
								<p className='font-bold'>Hassan Usman</p>
								<p>Leo Farms Ltd.</p>
								{index !== 2 && (
									<hr className='xmd:hidden border-primary/70 my-4' />
								)}
							</div>
						)
					})}
				</div>
			</div>

			{showModal && (
				<div
					className={` z-40 fixed bg-modal left-0 top-0 h-screen flex flex-col items-center justify-center w-full`}
					onClick={() => setShowModal(false)}
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className='bg-white px-8 py-5 rounded-2xl w-fit'
					>
						<VendorProfile />
					</div>
				</div>
			)}
		</div>
	)
}

export default ProductDetail
