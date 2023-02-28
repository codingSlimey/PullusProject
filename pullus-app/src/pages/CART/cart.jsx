import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bird from '../../images/bird.svg'

import { Modal } from 'flowbite-react'

function Cart(props) {
	const navigate = useNavigate()
	let [quantity, setQuantity] = useState(1)
	const handleSubtraction = () => {
		if (quantity === 1) return
		else setQuantity((prevQuantity) => prevQuantity - 1)
	}
	const handleAddition = () => {
		setQuantity((prevQuantity) => prevQuantity + 1)
	}

	const [dialog, setDialog] = useState(false)
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
						{[...Array(5)].map((item, index) => {
							return (
								<tr
									key={index}
									className='   text-primary text-center'
								>
									<td className=' px-6 py-4 flex gap-4 items-center'>
										<IoCloseCircleOutline
											onClick={() => setDialog(true)}
											className='h-5 w-5 cursor-pointer'
										/>
										<img
											src={bird}
											alt=''
											className='shadow-xl w-16 h-16 p-2 bg-grey rounded-xl'
										/>
									</td>
									<td
										scope='row'
										className='px-6 py-4 font-medium   '
									>
										Broilers
									</td>
									<td className=' px-6 py-4'>Abuja, Nigeria</td>
									<td className=' px-6 py-4'>N200</td>
									<td className=' px-6 py-4 flex justify-center'>
										<div className='flex gap-4 items-center justify-center w-fit bg-grey px-5 py-1 rounded-lg'>
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
									</td>
									<td className=' px-6 py-4'>N100,000</td>
								</tr>
							)
						})}
					</tbody>
				</table>

				<div className='my-4 grid place-items-end items-center gap-3'>
					<div className='text-primary'>
						<div className=' font-light  text-base'>Total Price:</div>
						<div className='text-xl font-bold'>N4,000</div>
					</div>
					<div className='mt-6 flex  gap-16 '>
						<button
							onClick={() => navigate('/select-vendor')}
							className={`w-[fit] bg-custom text-[#fff] text-lg font-bold py-4 px-24 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Checkout
						</button>
					</div>
				</div>
			</div>

			<Modal
				show={dialog}
				onClose={() => setDialog(false)}
				size='md'
			>
				{/* <Modal.Header>Terms of Service</Modal.Header> */}
				<Modal.Body>
					<div className='p-4  rounded-xl bg-grey shadow-xl mb-4 '>
						<div className='flex gap-3 items-center font-normal text-primary '>
							<img
								className='h-20 w-20 rounded-2xl p-2 bg-grey'
								src={bird}
								alt=''
							/>
							<div className='text-primary grid gap-1 font-light flex-auto'>
								<div className='font-bold'>Day Old Chicks</div>
								<div className='flex items-center gap-3'>
									<span>Broilers</span>
									<span>|</span>
									<span>Qty = 500</span>
								</div>

								<div className='flex items-center justify-between'>
									<span className='font-bold'>N100,000</span>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className='mt-4 flex w-full gap-6 justify-center '>
						<button
							onClick={() => setDialog(false)}
							className={`w-[fit] bg-grey text-primary text-base font-bold py-3 px-8 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Cancel
						</button>
						<button
							onClick={() => setDialog(false)}
							className={`w-[fit] bg-custom text-[#fff] text-base font-bold py-3 px-8 flex  items-center rounded-full shadow-xl  my-auto`}
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
