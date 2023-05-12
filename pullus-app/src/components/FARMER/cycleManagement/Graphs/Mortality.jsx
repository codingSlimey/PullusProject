import { SlFrame } from 'react-icons/sl'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import useGetGraphDetails from '../../../../hooks/CycleManagement/useGetGraphDetails'
import GraphSkeleton from './GraphSkeleton'

export default function MortalityGraph({ query }) {
	const { graphData, loading } = useGetGraphDetails(query)
	return (
		<>
			{!loading ? (
				<div className='shadow xl bg-white rounded-xl'>
					<div className='my-4 px-8 flex justify-between text-primary'>
						<p>Mortality</p>
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
							dataKey='mortality'
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
						<div className='h-4 w-4 bg-black rounded-full'></div>
						<div className='text-black font-medium'>Cumulative Mortality %</div>
					</div>
					<div className='bg-grey items-center justify-between flex gap-6  py-3 px-8'>
						<div className='text-center'>
							<p className='font-bold text-xl'>1000</p>
							<p className='text-[grey] text-sm'>Birds Alive</p>
						</div>
						<div className='text-[grey] text-3xl'>|</div>
						<div className='text-center'>
							<p className='text-primary text-xl'>0 </p>
							<p className='text-[grey] text-sm'>Dead Birds</p>
						</div>
						<div className='text-[grey] text-3xl'>|</div>
						<div className='text-center'>
							<p className='text-primary text-xl'>0 </p>
							<p className='text-[grey] text-sm'>Sold Birds</p>
						</div>
					</div>
				</div>
			) : (
				<GraphSkeleton />
			)}
		</>
	)
}
