import { useState } from 'react'

export default function Paginator({ itemsPerPage, totalItems, paginate }) {
	const [activePage, setActivePage] = useState(1)

	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	const handleClick = (number) => {
		setActivePage(number)
		paginate(number)
	}

	const handleNextPage = () => {
		if (activePage < pageNumbers.length) {
			setActivePage(activePage + 1)
			paginate(activePage + 1)
		}
	}

	const handlePrevPage = () => {
		if (activePage > 1) {
			setActivePage(activePage - 1)
			paginate(activePage - 1)
		}
	}

	return (
		<nav className='flex justify-center'>
			<ul className='flex'>
				<li>
					<button
						onClick={handlePrevPage}
						className='bg-gray-200 px-3 py-1 font-semibold rounded-r-none mx-1'
					>
						{'<'}
					</button>
				</li>
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => handleClick(number)}
							className={`${
								activePage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
							} px-3 py-1 font-semibold rounded mx-1`}
						>
							{number}
						</button>
					</li>
				))}
				<li>
					<button
						onClick={handleNextPage}
						className='bg-gray-200 px-3 py-1 font-semibold rounded-l-none mx-1'
					>
						{'>'}
					</button>
				</li>
			</ul>
		</nav>
	)
}
