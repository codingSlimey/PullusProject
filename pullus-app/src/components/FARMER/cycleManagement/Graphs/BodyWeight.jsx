import { SlFrame } from 'react-icons/sl'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import useGetGraphDetails from '../../../../hooks/CycleManagement/useGetGraphDetails'
import GraphSkeleton from './GraphSkeleton'

export default function BodyWeightGraph({ query }) {
	const { graphData, loading } = useGetGraphDetails(query)
	return (
		<>
			{!loading ? (
				<div className='shadow xl bg-white rounded-xl'>
					<div className='my-4 px-8 flex justify-between text-primary'>
						<p>Body Weight</p>
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
							dataKey='bodyWeight'
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
						<div className='h-4 w-4 bg-red-400 rounded-full'></div>
						<div className='text-red-400 font-medium'>Body Weight</div>
					</div>
					<div className='bg-grey flex gap-6 justify-center items-center py-3 px-5'>
						<div className='text-center'>
							<p className='text-red-400 text-xl'>N/A kg</p>
							<p className='text-[grey] text-sm'>
								Estimated total Weight of flocks
							</p>
						</div>
					</div>
				</div>
			) : (
				<GraphSkeleton />
			)}
		</>
	)
}