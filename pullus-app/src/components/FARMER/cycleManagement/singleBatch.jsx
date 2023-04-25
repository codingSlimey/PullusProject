import logo from '../../../images/logo.png'

export default function SingleBatch({ item }) {
	// Function to show number of days a cycle has been active for
	function formatDays(numDays) {
		const weeks = Math.floor(numDays / 7)
		const days = numDays % 7
		if (weeks === 1) {
			return `1 week and ${days} days`
		} else if (weeks > 1) {
			return `${weeks} weeks and ${days} days`
		} else {
			return `${days} days`
		}
	}
	return (
		<div className='py-3 px-2 cursor-pointer shadow-lg rounded-lg bg-primary/10 '>
			<div className='flex items-center text-sm md:text-base font-normal text-primary gap-3 md:gap-6'>
				<img
					className='h-8 w-8'
					src={logo}
					alt=''
				/>
				<span>{item?.cycleName}</span>
				<span>|</span>
				<span>{formatDays(item?.noOfDays)}</span>
				<span>|</span>
				<span>Feed Phase</span>
			</div>
		</div>
	)
}
