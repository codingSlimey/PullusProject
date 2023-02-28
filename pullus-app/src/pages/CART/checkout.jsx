import successImg from '../../images/success.svg'
import bird from '../../images/bird.svg'

import {  Modal } from 'flowbite-react'

import { ImLocation } from 'react-icons/im'
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react'

function Checkout(props) {
	const [addressDialog, setAddressDialog] = useState(false)
	const [shippingDialog, setShippingDialog] = useState(false)
	const [success, setSuccess] = useState(false)
	return (
		<div className='px-36 py-10 text-left text-primary'>
			<h1 className='  text-2xl font-bold mt-6 mb-16'>Checkout</h1>
			<div className='flex gap-10'>
				<div className='flex-1'>
					<h5 className='  font-bold mb-6'>Order List</h5>

					<div className='grid gap-4'>
						{[...Array(5)].map((item, index) => {
							return (
								<div
									key={index}
									className='p-4  rounded-xl bg-grey shadow-xl mb-4 '
								>
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

											<div className='flex items-center gap-2 '>
												<span>Abuja, Nigeria</span>
												<span>|</span>
												<span className='font-bold'>N100,000</span>
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>

				<div className='flex-1'>
					<h5 className='  font-bold mb-6'>Shipping Address</h5>

					<div className='px-4 py-6  rounded-xl bg-white shadow-xl mb-6 '>
						<div className='flex justify-between pr-8 items-center font-normal text-primary '>
							<div className='flex gap-3 items-center'>
								<div className='p-1 bg-primary rounded-full border-4 border-grey text-[#fff]'>
									<ImLocation className='h-5 w-5' />
								</div>
								<div className='text-primary grid gap-1 font-light flex-auto'>
									<div className='font-bold gap-6 flex items-center'>
										<p>Home</p>
										<div>
											<span className='inline font-light px-4 py-1 rounded-2xl text-xs bg-grey'>
												Default
											</span>
										</div>
									</div>
									<div className='text-sm'>
										67 Balogun Street, Off Ogbagi road
									</div>
								</div>
							</div>

							<FiEdit
								onClick={() => setAddressDialog(true)}
								className='h-5 w-5 cursor-pointer'
							/>
						</div>
					</div>

					<h5 className='  font-bold mt-10 mb-4'>Choose Shipping </h5>

					<div className='px-4 py-6  rounded-xl bg-white shadow-xl mb-6 '>
						<div className='flex justify-between pr-8 items-center font-normal text-primary '>
							<div className='flex gap-3 items-center'>
								<div className='p-1 bg-primary rounded-full border-4 border-grey text-[#fff]'>
									<ImLocation className='h-5 w-5' />
								</div>
								<div className='text-primary grid gap-1 font-light flex-auto'>
									<div className='font-bold gap-6 flex items-center'>
										<p>Normal</p>
										<span>|</span> <p>N3,000</p>
									</div>
									<div className='text-sm'>Arrival Date: 23/09/2022</div>
								</div>
							</div>

							<FiEdit
								onClick={() => setShippingDialog(true)}
								className='h-5 w-5 cursor-pointer'
							/>
						</div>
					</div>

					<hr className='my-14' />

					<div className='bg-grey py-6 px-10 grid gap-4 rounded-xl'>
						<div className='flex justify-between'>
							<span>Amount</span>
							<span className='font-bold'>N269,000</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping</span>
							<span className='font-bold'>-</span>
						</div>
						<hr className='my-1 border-primary/50' />
						<div className='flex justify-between'>
							<span>Total</span>
							<span className='font-bold'>-</span>
						</div>
					</div>

					<div className='mt-12 w-full flex  gap-16 '>
						<button
							onClick={() => setSuccess(true)}
							className={`w-full bg-fade text-[#fff] text-lg font-bold py-4  flex justify-center  items-center rounded-full shadow-xl  my-auto`}
						>
							Checkout
						</button>
					</div>
				</div>
			</div>

			<Modal
				show={addressDialog}
				onClose={() => setAddressDialog(false)}
				size='lg'
				className='modal'
			>
				<Modal.Header>Choose Address</Modal.Header>
				<Modal.Body>
					{[...Array(3)].map((item, index) => {
						return (
							<div
								key={index}
								className='px-2 py-6  rounded-xl bg-white shadow-xl mb-6'
							>
								<div className='flex justify-between pr-2 items-center font-normal text-primary '>
									<div className='flex gap-3 items-center'>
										<div className='p-1 bg-primary rounded-full border-4 border-grey text-[#fff]'>
											<ImLocation className='h-5 w-5' />
										</div>
										<div className='text-primary grid gap-1 font-light flex-auto'>
											<div className='font-bold gap-6 flex items-center'>
												<p>Home</p>
												<div>
													<span className='inline font-light px-4 py-1 rounded-2xl text-xs bg-grey'>
														Default
													</span>
												</div>
											</div>
											<div className=''>67 Balogun Street, Off Ogbagi road</div>
										</div>
									</div>

									<input
										type='radio'
										name=''
										id=''
										className='text-primary border-2 border-primary'
									/>
								</div>
							</div>
						)
					})}
				</Modal.Body>
				<Modal.Footer>
					<div className='mt-4 grid w-full gap-6 justify-center '>
						<button
							onClick={() => setAddressDialog(false)}
							className={`w-[fit] bg-grey text-primary text-base font-bold py-3 px-8 flex  items-center justify-center rounded-full shadow-xl  my-auto`}
						>
							Add New Address
						</button>
						<button
							onClick={() => setAddressDialog(false)}
							className={`w-[fit] bg-fade text-[#fff] text-base font-bold py-3 px-8 flex  items-center justify-center rounded-full shadow-xl  my-auto`}
						>
							Apply
						</button>
					</div>
				</Modal.Footer>
			</Modal>

			<Modal
				show={shippingDialog}
				onClose={() => setShippingDialog(false)}
				size='md'
			>
				<Modal.Header className='text-primary'>Type of Shipping</Modal.Header>
				<Modal.Body>
					{[...Array(3)].map((item, index) => {
						return (
							<div
								key={index}
								className='px-4 py-6  rounded-xl bg-white shadow-xl mb-4 '
							>
								<div className='flex justify-between pr-2 items-center font-normal text-primary '>
									<div className='flex gap-3 items-center'>
										<div className='p-1 bg-primary rounded-full border-4 border-grey text-[#fff]'>
											<ImLocation className='h-5 w-5' />
										</div>
										<div className='text-primary grid gap-1 font-light flex-auto'>
											<div className='font-bold gap-6 flex items-center'>
												<p>Normal</p>
												<span>|</span> <p>N3,000</p>
											</div>
											<div className='text-sm'>Arrival Date: 23/09/2022</div>
										</div>
									</div>

									<input
										type='radio'
										name=''
										id=''
										className='text-primary border-2 border-primary'
									/>
								</div>
							</div>
						)
					})}
				</Modal.Body>
				<Modal.Footer>
					<div className='mt-4 flex w-full gap-6 justify-center '>
						<button
							onClick={() => setShippingDialog(false)}
							className={`w-[fit] bg-fade text-[#fff] text-base font-bold py-3 px-8 flex  items-center rounded-full shadow-xl  my-auto`}
						>
							Apply
						</button>
					</div>
				</Modal.Footer>
			</Modal>

			<Modal
				show={success}
				onClose={() => setSuccess(false)}
				size='sm'
				className='success-modal'
			>
				{/* <Modal.Header className='text-primary'>Type of Shipping</Modal.Header> */}
				<Modal.Body>
					<div className='px-4 py-6   grid place-items-center bg-white  mb-4 '>
						<img
							src={successImg}
							alt=''
							className='bg-[white]'
						/>
					</div>
					<h5 className='text-primary text-center font-bold text-xl my-2'>
						Order Successful!
					</h5>
					<p className='text-primary text-center'>
						You have successfully made an order
					</p>
					<div className='mt-4 grid w-full gap-6 justify-center '>
						<button
							onClick={() => setSuccess(false)}
							className={`w-full bg-fade text-[#fff] text-base font-bold py-3 px-8 flex justify-center  items-center rounded-full shadow-xl  my-auto`}
						>
							View Dashboard
						</button>
						<button
							onClick={() => setSuccess(false)}
							className={`w-full bg-grey text-primary text-base font-bold py-3 px-8 flex  items-center justify-center rounded-full shadow-xl  my-auto`}
						>
							View E-Receipt
						</button>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
				</Modal.Footer> */}
			</Modal>
		</div>
	)
}

export default Checkout
