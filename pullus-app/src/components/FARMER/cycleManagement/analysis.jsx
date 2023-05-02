import { SlFrame } from 'react-icons/sl'
import { Analytics } from '../../../constants/redundantKeys'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

function Analysis(props) {
	const data = [
		{ name: ' A', uv: 400, pv: 2400, amt: 2400 },
		{ name: ' B', uv: 150, pv: 2000, amt: 2000 },
		{ name: ' C', uv: 200, pv: 1800, amt: 1800 },
		{ name: ' D', uv: 300, pv: 1900, amt: 1900 },
		{ name: ' E', uv: 100, pv: 2000, amt: 2000 },
	]

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

			<div className='shadow xl bg-white rounded-xl'>
				<div className='my-4 px-8 flex justify-between text-primary'>
					<p>Feed Intake</p>
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
					<div className='h-4 w-4 bg-primary rounded-full'></div>
					<div className='text-primary font-medium'>Feed</div>
				</div>
				<div className='bg-grey flex gap-6 justify-center items-center py-3 px-5'>
					<div className='text-center'>
						<p className='text-primary text-xl'>0 kg/bird</p>
						<p className='text-[grey] text-sm'>Total feed intake per bird</p>
					</div>
					<div className='text-[grey] text-3xl'>|</div>
					<div className='text-center'>
						<p className='text-primary text-xl'>0 </p>
						<p className='text-[grey] text-sm'>Feed Conversion Ratio</p>
					</div>
				</div>
			</div>

			<div className='shadow xl bg-white rounded-xl'>
				<div className='my-4 px-8 flex justify-between text-primary'>
					<p>Mortality</p>
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

			<div className='shadow xl bg-white rounded-xl'>
				<div className='my-4 px-8 flex justify-between text-primary'>
					<p>Body Weight</p>
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
					<div className='h-4 w-4 bg-red-400 rounded-full'></div>
					<div className='text-red-400 font-medium'>Body Weight</div>
				</div>
				<div className='bg-grey flex gap-6 justify-center items-center py-3 px-5'>
					<div className='text-center'>
						<p className='text-red-400 text-xl'>N/A kg</p>
						<p className='text-[grey] text-sm'>Estimated total Weight of flocks</p>
					</div>
					
				</div>
			</div>

			<div className='shadow xl bg-white rounded-xl'>
				<div className='my-4 px-8 flex justify-between text-primary'>
					<p>Water Intake</p>
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

			<div className='shadow xl bg-white rounded-xl'>
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
			</div>
		</div>
	)
}

export default Analysis
