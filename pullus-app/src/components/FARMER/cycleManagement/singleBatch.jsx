import logo from '../../../images/logo.png'

export default function SingleBatch() {
	return (
		<div className='py-3 px-2  shadow-lg rounded-lg bg-primary/10 my-4'>
			<div className='flex items-center text-sm md:text-base font-normal text-primary gap-3 md:gap-6'>
				<img
					className='h-8 w-8'
					src={logo}
					alt=''
				/>
				<span>Batch 1</span>
				<span>|</span>
				<span>1 weeks</span>
				<span>|</span>
				<span>Feed Type</span>
			</div>
		</div>
	)
}
