import { SlFrame } from 'react-icons/sl'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import useGetGraphDetails from '../../../../hooks/CycleManagement/useGetGraphDetails'
import GraphSkeleton from './GraphSkeleton'

export default function WaterIntakeGraph({ query }) {
	const { graphData, loading } = useGetGraphDetails(query)
	return (
		<>
			{!loading ? (
				<div className='shadow xl bg-white rounded-xl'>
					<div className='my-4 px-8 flex justify-between text-primary'>
						<p>Water Intake</p>
						<SlFrame className='w-5 h-5' />
					</div>
					<LineChart
						width={600}
						height={300}
						data={graphData}
						margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
					>
						<Line
							type='monotone'
							dataKey='water'
							stroke='#8884d8'
						/>
						<CartesianGrid
							stroke='#ccc'
							strokeDasharray='5 5'
						/>
						<XAxis dataKey='noOfDays' />
						<YAxis />
						<Tooltip />
					</LineChart>

					<div className='flex gap-2 mt-6 mb-2 items-center px-8'>
						<div className='h-4 w-4 bg-blue-700 rounded-full'></div>
						<div className='text-blue-700 font-medium'>Water (ml)</div>
					</div>
					<div className='bg-grey flex gap-6 justify-center items-center py-3 px-5'>
						<div className='text-center'>
							<p className='text-blue-700 text-xl'> 0 l/bird</p>
							<p className='text-[grey] text-sm'>Total water intake per bird</p>
						</div>
					</div>
				</div>
			) : (
				<GraphSkeleton />
			)}
		</>
	)
}
