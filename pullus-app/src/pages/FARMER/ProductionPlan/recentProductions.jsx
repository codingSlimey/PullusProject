//react-icons
import { FaPlay } from 'react-icons/fa'

//React router
import { useNavigate } from 'react-router-dom'
import PlanAccordion from '../../../components/FARMER/productionPlan/PlanAccordion'

function RecentProduction(props) {
	const navigate = useNavigate()

	return (
		<div className='font-bold md:pb-12'>
			<div className='text-primary text-left my-6'>Recent Productions</div>
			<div className='flex gap-16'>
				<div className='flex w-full flex-col tablet:flex-1'>
					<PlanAccordion />

					<div className='mt-20'>
						<button
							onClick={() => navigate('/farmer/cycle-management/new-cycle')}
							className='w-full bg-fade py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'
						>
							Start a New Cycle
						</button>

						<button
							onClick={() => {
								navigate('create-production-plan')
							}}
							className='w-full flex justify-center items-center bg-[#fff] py-3 rounded-full text-primary shadow-xl my-4'
						>
							Create a New Production Plan&nbsp;&nbsp;{' '}
							<FaPlay className='mr-3 h-4 w-4' />
						</button>
					</div>
				</div>

				<div className='flex-1 tablet:block hidden'></div>
			</div>
		</div>
	)
}

export default RecentProduction
