import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import bird from '../../images/bird.svg'
import { useCart } from '../../context/cart'
export default function MobileSingleCart({ openDeleteDialog, product }) {
	const { increaseQuantity, decreaseQuantity } = useCart()
	return (
		<div className='w-full md:hidden'>
			<div className='flex gap-4 w-full relative'>
				<IoCloseCircleOutline
					onClick={() => openDeleteDialog(product)}
					className='text-2xl mobile:text-3xl absolute top-1 right-1 text-primary'
				/>
				<img
					src={bird}
					alt='cart item'
					className='shadow-xl mobile:w-32 h-32 w-24  bg-grey rounded-xl'
				/>
				<div className='flex flex-col  flex-wrap w-full h-fit text-primary text-left gap-1 pr-5'>
					<p className=' font-medium text-lg'>{product?.name}</p>
					<p className='font-medium '>
						{' '}
						<span className='font-light'>location:</span> Abuja, Nigeria
					</p>
					<p className=''>
						{' '}
						<span className='font-light'>Price:</span> N{product?.price}
					</p>
					<p className=''>
						<span className='font-light'>Subtotal:</span> N
						{product?.quantity * product?.price}
					</p>
				</div>
			</div>
			<div className='flex gap-3 text-primary w-full justify-between items-center'>
				<div></div>

				<div className='flex  gap-4 items-center justify-center w-fit bg-grey px-5 py-1 rounded-lg'>
					<button
						disabled={product?.quantity === 1}
						onClick={() => decreaseQuantity(product)}
					>
						<AiFillMinusCircle
							className={`w-5 h-5 cursor-pointer ${
								product?.quantity === 1 ? 'text-[grey]' : ''
							} `}
						/>
					</button>
					<span className='border-primary border px-3 rounded-md'>
						{product?.quantity}
					</span>
					<button onClick={() => increaseQuantity(product)}>
						<AiFillPlusCircle className='w-5 h-5 cursor-pointer' />
					</button>
				</div>
			</div>

			<hr className='border-primary/30 mt-3' />
		</div>
	)
}
