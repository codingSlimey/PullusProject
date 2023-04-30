import React from 'react'
import ProgressCurve from '../../../assets/ProgressCurve.svg'
import Atm from '../../../assets/Atm.png'
import chick from '../../../images/chick.svg'
import folder from '../../../images/folder.svg'
import { BsArrowDownSquareFill } from 'react-icons/bs'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import Button from '../../../components/FARMER/button'
import Emodal from '../../../modal/EModal'
import PaymentMethod from './PaymentMethod'
import ModalComponent from '../../../components/Modal'

function FarmerWallet() {
	const [showModal, setShowModal] = React.useState(false)
	const handleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<div>
			<div className=' mx-auto md:w-1/2'>
				<div className='relative'>
					<img
						src={ProgressCurve}
						alt='ProgressCurve'
						className=' mx-auto w-auto'
					/>
					<div className='absolute top-[45%] left-1/2 text-primary transform -translate-x-1/2 -translate-y-1/2'>
						<p className='italic'> Balance </p>
						<h2 className='font-bold text-xl'> N100,000 </h2>
					</div>
				</div>
				<img
					src={Atm}
					alt='Atm'
					className='w-auto md:mx-auto'
				/>
				<div className='flex md:w-[63%] mx-auto my-10 flex-col '>
					<div className='flex items-center py-2 gap-3 md:gap-0 justify-between text-primary'>
						<h1 className='font-bold'>Transaction History </h1>
						<span>
							{' '}
							<p className='font-semibold'> sell all</p>{' '}
						</span>
					</div>
					<div className='flex flex-col gap-10 '>
						<div className='flex items-center gap-5 w-full justify-between'>
							<span className=' flex items-center gap-5 '>
								<img
									src={chick}
									alt='chick'
									className='rounded-full p-2 bg-slate-100'
								/>
								<span className='flex flex-col gap-3 text-start  '>
									<p className='text-primary font-bold'>Day Old Chicks </p>
									<p className='text-sm text-slate-500'>
										23.08.2022 <span> 10:45am</span>{' '}
									</p>
								</span>
							</span>

							<span>
								<p className='text-primary font-bold'> N100,000 </p>
								<p className='text-slate-500 flex items-center gap-1 '>
									Orders{' '}
									<span>
										{' '}
										<BsArrowUpSquareFill className='text-red-600' />{' '}
									</span>{' '}
								</p>
							</span>
						</div>
						<div className='flex items-center gap-5 w-full justify-between'>
							<span className=' flex items-center gap-5 '>
								<img
									src={folder}
									alt='chick'
									className='rounded-full p-4 bg-slate-100'
								/>
								<span className='flex flex-col gap-3 text-start  '>
									<p className='text-primary font-bold'>Top Up Wallet </p>
									<p className='text-sm text-slate-500'>
										23.08.2022 <span> 9:45am</span>{' '}
									</p>
								</span>
							</span>

							<span>
								<p className='text-primary font-bold'> N400,000 </p>
								<p className='text-slate-500 flex items-center gap-1 '>
									Top Up{' '}
									<span>
										{' '}
										<BsArrowDownSquareFill className='text-primary' />{' '}
									</span>{' '}
								</p>
							</span>
						</div>
					</div>
				</div>
				{/* {showModal && (
					<div
						className={` z-10 fixed bg-modal flex flex-col justify-center left-0 top-0 h-screen w-full`}
						onClick={closeModal}
					></div>
				)} */}

				<ModalComponent
					isOpen={showModal}
					handleClose={() => setShowModal(false)}
				>
					<div className='emodal w-full'>
						<PaymentMethod />
					</div>
				</ModalComponent>

				<div className='flex my-20 mx-auto justify-center '>
					<Button
						title={'Top Up Wallet'}
						icon={false}
						color={'fade'}
						action={handleModal}
					/>
				</div>
			</div>
		</div>
	)
}

export default FarmerWallet
