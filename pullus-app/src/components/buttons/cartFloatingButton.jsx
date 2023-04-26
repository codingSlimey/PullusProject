import { HiOutlineShoppingCart } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../../context/cart'
export default function CartFloatingButton() {
	const [showButton, setShowButton] = useState(false)

	const { pathname } = useLocation()
	const { items } = useCart()

	useEffect(() => {
		const routeForFixed = ['/market-place', '/product']
		const checkRouteName = () => {
			const isRouteFixed = routeForFixed.some((route) =>
				pathname.startsWith(route)
			)
			setShowButton(isRouteFixed)
		}

		checkRouteName()
	}, [pathname])

	if (!showButton || items.length === 0) return
	return (
		<Link
			to={'/cart'}
			className='fixed bottom-4 right-4 md:hidden z-50'
		>
			<button className=' bg-primary/30 text-primary font-bold p-5 rounded-full'>
				<HiOutlineShoppingCart className='h-7 w-7' />
			</button>

			<div className='h-6 w-6 flex justify-center items-center rounded-full bg-primary text-white font-bold text-lg absolute top-1 right-2'>
				{items.length}
			</div>
		</Link>
	)
}
