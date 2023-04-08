import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import bird from '../../images/bird.svg'
// import { useState,useEffect } from 'react'
import { useCart } from '../../context/cart'
export default function SingleCartItem({ openDeleteDialog, product }) {
	const { increaseQuantity, decreaseQuantity } = useCart()
	return (
		<tr className='   text-primary text-center'>
			<td className=' px-6 py-4 flex gap-4 items-center'>
				<IoCloseCircleOutline
					onClick={() => openDeleteDialog(product)}
					className='h-5 w-5 cursor-pointer'
				/>
				<img
					src={bird}
					alt=''
					className='shadow-xl w-16 h-16 p-2 bg-grey rounded-xl'
				/>
			</td>
			<td className='px-6 py-4 font-medium'>{product?.name}</td>
			<td className=' px-6 py-4'>Abuja, Nigeria</td>
			<td className=' px-6 py-4'>N{product?.price}</td>
			<td className=' px-6 py-4 flex justify-center'>
				<div className='flex gap-4 items-center justify-center w-fit bg-grey px-5 py-1 rounded-lg'>
					<button
						disabled={product?.quantity === 1}
						onClick={() => decreaseQuantity(product)}
					>
						<AiFillMinusCircle
							className={`w-5 h-5 cursor-pointer ${
								product?.quantity === 1 ? 'text-[grey]' : ''
							}`}
						/>
					</button>
					<span className='border-primary border px-3 rounded-md'>
						{product?.quantity}
					</span>
					<button onClick={() => increaseQuantity(product)}>
						<AiFillPlusCircle className='w-5 h-5 cursor-pointer' />
					</button>
				</div>
			</td>
			<td className=' px-6 py-4'>N{product?.quantity * product?.price}</td>
		</tr>
	)
}
