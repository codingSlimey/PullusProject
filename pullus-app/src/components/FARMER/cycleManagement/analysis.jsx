import { useLocation, useNavigate } from 'react-router-dom'
import { Analytics } from '../../../constants/redundantKeys'
import BodyWeightGraph from './Graphs/BodyWeight'
import FeedIntakeGraph from './Graphs/FeedIntake'
import MortalityGraph from './Graphs/Mortality'
import WaterIntakeGraph from './Graphs/WaterIntake'
import { useEffect, useState } from 'react'
import { getSingleCycleInfo } from '../../../api'
import { toast } from 'react-toastify'

function Analysis() {
	const analysisGraphs = [
		{
			name: 'Feed Intake',
			queryURL: 'getGraphDataFeedIntake',
			component: FeedIntakeGraph,
		},
		{
			name: 'Mortality',
			queryURL: 'getGraphDataMortality',
			component: MortalityGraph,
		},
		{
			name: 'Body Weight',
			queryURL: 'getGraphDataBodyWeight',
			component: BodyWeightGraph,
		},
		{
			name: 'Water Intake',
			queryURL: 'getGraphDataWater',
			component: WaterIntakeGraph,
		},
	]

	const location = useLocation()
	const [detailsSkeleton, setDetailsSkeleton] = useState(false)
	const [activeDetails, setActiveDetails] = useState(null)

	const queryParams = new URLSearchParams(location.search)

	// Get the value of a specific query parameter
	const paramValue = queryParams.get('cycle')
	// console.log(paramValue)

	useEffect(() => {
		if (paramValue) {
			const fetchData = async () => {
				setDetailsSkeleton(true)
				setActiveDetails(null)
				try {
					const res = await getSingleCycleInfo(paramValue)
					setActiveDetails(res?.data?.data?.obj)
					console.log(res?.data?.data?.obj)
					setDetailsSkeleton(false)
				} catch ({ response }) {
					const { data } = response
					toast.error(data.message)
					setTimeout(() => {
						setDetailsSkeleton(false)
					}, 5000)
				}
			}

			fetchData()
		}
	}, [location, paramValue])

	return (
		<div className='grid grid-cols-2 max-[750px]:grid-cols-1  gap-12 text-left tablet:gap-8 xl:gap-14'>
			<div>
				<div className='grid grid-cols-2 mobile:grid-cols-3 gap-4 tablet:gap-6'>
					{Analytics.map((item, index) => {
						return (
							<div
								key={index}
								className='h-[120px] flex flex-col justify-center items-center bg-grey shadow-xl rounded-xl text-primary'
							>
								<span className='text-sm font-light'>{item.title} </span>
								<span className='text-xl font-bold'>{item.stats} </span>
							</div>
						)
					})}
				</div>
			</div>

			{analysisGraphs.map((graph, index) => {
				return (
					<div key={index}>
						<graph.component query={graph.queryURL} />
					</div>
				)
			})}

			{/* <div className='shadow xl bg-white rounded-xl'>
				<div className='my-4 px-8 flex justify-between text-primary'>
					<p>Egg Production </p>
					<SlFrame className='w-5 h-5' />
				</div>
				<LineChart
					width={600}
					height={300}
					data={data}
					margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
				>
					<Line
						type='monotone'
						dataKey='uv'
						stroke='#8884d8'
					/>
					<CartesianGrid
						stroke='#ccc'
						strokeDasharray='5 5'
					/>
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
				</LineChart>

				<div className='flex gap-2 mt-6 mb-2 items-center px-8'>
					<div className='h-4 w-4 bg-purple-800 rounded-full'></div>
					<div className='text-purple-800 font-medium'>Water (ml) </div>
				</div>
				<div className='bg-grey grid grid-cols-3 gap-6 justify-between items-center py-3 px-20'>
					<div className='text-center'>
						<p className='text-purple-800 text-xl'>0</p>
						<p className='text-[grey] text-sm'>Good eggs</p>
					</div>
					<div className='text-[grey] mx-14 text-3xl'>|</div>
					<div className='text-center'>
						<p className='text-purple-800 text-xl'>0 </p>
						<p className='text-[grey] text-sm'>Damaged</p>
					</div>
					<div className='text-center'>
						<p className='text-purple-800 text-xl'>0.00</p>
						<p className='text-[grey] text-sm'>Eggs Per Bird</p>
					</div>

					<div className='text-[grey] mx-14 text-3xl'>|</div>

					<div className='text-center'>
						<p className='text-purple-800 text-xl'>0%</p>
						<p className='text-[grey] text-sm'>Damaged %</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Analysis
