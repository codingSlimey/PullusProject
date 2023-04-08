import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
export default function CartFloatingButton() {
	return (
		<Link
			to={'/cart'}
			className='fixed bottom-4 right-4'
		>
			<button className='bg-fade hover:bg-fade/90 text-white font-bold p-5 rounded-full'>
				<HiOutlineShoppingCart className='h-7 w-7' />
			</button>

			<div className='h-6 w-6 flex justify-center rounded-full bg-grey text-primary font-bold text-lg absolute top-1 right-2'>
				3
			</div>
		</Link>
	)
}
