import { AiOutlineClose } from 'react-icons/ai'

export default function ModalComponent({
	isOpen,
	handleClose,
	children,
	specificWidth,
}) {
	return (
		<>
			{isOpen && (
				<div
					className={` z-40 fixed bg-modal left-0 top-0 h-screen flex flex-col items-center justify-center w-full`}
					onClick={handleClose}
				>
					<div
						onClick={handleClose}
						className='bg-white cursor-pointer rounded-full p-1 absolute right-2 top-1'
					>
						<AiOutlineClose className='text-primary text-2xl' />
					</div>
					<div
						onClick={(e) => e.stopPropagation()}
						className={`bg-white px-8 py-5 max-h-[85%] overflow-auto rounded-2xl ${
							specificWidth ? specificWidth : 'w-full'
						}  max-w-[80%]`}
					>
						{children}
					</div>
				</div>
			)}
		</>
	)
}
