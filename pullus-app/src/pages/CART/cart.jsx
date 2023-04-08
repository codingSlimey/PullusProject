import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import bird from '../../images/bird.svg'
import { Modal } from 'flowbite-react'
import SingleCartItem from '../../components/cart/SingleCartItem'

import { useCart } from '../../context/cart'

function Cart() {
	const navigate = useNavigate()
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
		<div className='font-bold pb-12 px-36'>
			<div className='flex items-center'>
				<div className='text-primary  my-6 text-2xl'>Cart</div>
			</div>

			<div className='mt-8'>
				<table className='w-full text-sm text-left  border-b border-grey'>
					<thead className='  capitalize text-lg bg-grey text-primary border border-[white]'>
						<tr className='text-center'>
							<th
								scope='col'
								className='px-6 py-3'
							></th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								Product
							</th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								Location
							</th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								Price
							</th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								Quantity
							</th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								Subtotal
							</th>
						</tr>
					</thead>

					<tbody className=''>
						{items.map((item, index) => {
							return (
								<SingleCartItem
									key={index}
									openDeleteDialog={openDeleteDialog}
									product={item}
								/>
							)
						})}
					</tbody>
				</table>

				<div className='my-4 grid place-items-end items-center gap-3'>
					<div className='text-primary'>
						<div className=' font-light  text-base'>Total Price:</div>
						<div className='text-xl font-bold'>N{total}</div>
					</div>
					<div className='mt-6 flex  gap-16 '>
						<button
							onClick={() => navigate('/checkout')}
							className={`w-[fit] bg-fade text-[#fff] text-lg font-bold py-4 px-24 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Checkout
						</button>
					</div>
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

export default Cart
