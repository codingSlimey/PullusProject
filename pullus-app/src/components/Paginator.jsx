import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function Paginator({
	itemsPerPage,
	totalItems,
	paginate,
	currentPage,
}) {
	const pageNumbers = []
	const maxButtons = 5
	const maxLeft = currentPage - Math.floor(maxButtons / 2)
	const maxRight = currentPage + Math.floor(maxButtons / 2)

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		if (
			i === 1 ||
			i === Math.ceil(totalItems / itemsPerPage) ||
			(i >= maxLeft && i <= maxRight)
		) {
			pageNumbers.push(i)
		} else if (
			(i === maxLeft - 1 && i > 1) ||
			(i === maxRight + 1 && i < Math.ceil(totalItems / itemsPerPage))
		) {
			pageNumbers.push('...')
		}
	}

	const handleClick = (number) => {
		if (pageNumbers.includes(number)) {
			paginate(number)
		}
	}

	const handleNextPage = () => {
		if (currentPage < pageNumbers.length) {
			paginate(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			paginate(currentPage - 1)
		}
	}

	return (
		<nav className='flex justify-center'>
			<ul className='flex items-center'>
				<button
					onClick={handlePrevPage}
					className={`rounded-full p-1  mx-2 ${
						currentPage === 1 ? 'bg-primary/10' : 'bg-primary text-white'
					}`}
				>
					<BiChevronLeft className='text-2xl' />
				</button>
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => handleClick(number)}
							className={`${
								currentPage === number ? 'bg-primary text-white' : 'bg-gray-200'
							} px-3 py-1 font-semibold rounded mx-1`}
						>
							{number}
						</button>
					</li>
				))}
				<button
					onClick={handleNextPage}
					className={` ${
						currentPage === pageNumbers.length
							? 'bg-primary/10'
							: 'bg-primary text-white'
					} rounded-full p-1  mx-2`}
				>
					<BiChevronRight className='text-2xl' />
				</button>
			</ul>
		</nav>
	)
}
