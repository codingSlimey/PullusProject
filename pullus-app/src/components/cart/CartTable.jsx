import { useCart } from '../../context/cart'
import SingleCartItem from './SingleCartItem'

export default function CartTable({ openDeleteDialog }) {
	const { items } = useCart()

	return (
		<div className='mt-8 max-md:hidden'>
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
		</div>
	)
}
