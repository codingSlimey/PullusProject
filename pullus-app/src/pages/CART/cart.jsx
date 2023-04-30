import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import bird from '../../images/bird.svg'
import { Modal } from 'flowbite-react'

import { useCart } from '../../context/cart'
import useScreenWidth from '../../hooks/useScreenWidth'
import MobileSingleCart from '../../components/cart/MobileSingleCartItem'
import CartTable from '../../components/cart/CartTable'

export default function Cart() {
	const navigate = useNavigate()
	const screenWidth = useScreenWidth()
	const { items, total, removeFromCart } = useCart()

	const [dialog, setDialog] = useState(false)
	const [itemForDelete, setItemForDelete] = useState(null)

	const openDeleteDialog = (item) => {
		setDialog(true)
		setItemForDelete(item)
	}

	const closeDeleteDialog = () => {
		setDialog(false)
		setItemForDelete(null)
	}

	const deleteSingleCartItem = (item) => {
		removeFromCart(item)
		closeDeleteDialog()
	}

	return (
		<div className='h-full font-bold pb-12 px-5 md:px-10 laptop:px-36'>
			<div className='flex items-center'>
				<div className='text-primary  my-2 laptop:my-6 text-2xl'>Cart</div>
			</div>

			{screenWidth > 830 ? (
				<CartTable openDeleteDialog={openDeleteDialog} />
			) : (
				<>
					{items.map((item, index) => {
						return (
							<MobileSingleCart
								key={index}
								openDeleteDialog={openDeleteDialog}
								product={item}
							/>
						)
					})}
				</>
			)}

			<div className='my-4 grid place-items-end items-center gap-3'>
				<div className='text-primary'>
					<div className=' font-light  text-base'>Total Price:</div>
					<div className='text-xl font-bold'>N{total}</div>
				</div>
				<div className='mt-6 flex max-md:w-full '>
					<button
						onClick={() => navigate('/checkout')}
						className={`w-full md:w-[fit] bg-fade text-[#fff] text-lg font-bold py-3 md:py-4 px-24 flex justify-center items-center rounded-full shadow-xl  my-auto`}
					>
						Checkout
					</button>
				</div>
			</div>

			<Modal
				show={dialog}
				onClose={closeDeleteDialog}
				size='md'
			>
				<Modal.Body>
					<div className='p-4  rounded-xl bg-grey shadow-xl mb-4 '>
						<div className='flex gap-3 items-center font-normal text-primary '>
							<img
								className='h-20 w-20 rounded-2xl p-2 bg-grey'
								src={bird}
								alt=''
							/>
							<div className='text-primary grid gap-1 font-light flex-auto'>
								<div className='font-bold'>{itemForDelete?.name}</div>
								<div className='flex items-center gap-3'>
									<span>Broilers</span>
									<span>|</span>
									<span>Qty = {itemForDelete?.quantity}</span>
								</div>

								<div className='flex items-center justify-between'>
									<span className='font-bold'>N{itemForDelete?.price}</span>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className='mt-4 flex w-full gap-6 justify-center '>
						<button
							onClick={closeDeleteDialog}
							className={`w-[fit] bg-grey text-primary text-base font-bold py-3 px-8 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Cancel
						</button>
						<button
							onClick={() => deleteSingleCartItem(itemForDelete)}
							className={`w-[fit] bg-fade text-[#fff] text-base font-bold py-3 px-8 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Yes, Remove
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
