import { SlFrame } from 'react-icons/sl'

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
		<div className='grid grid-cols-2 gap-14'>
			<div>
				<div className='grid grid-cols-3 gap-6'>
					{[...Array(6)].map((item, index) => {
						return (
							<div
								key={index}
								className='h-[120px] flex flex-col justify-center items-center bg-grey shadow-xl rounded-xl text-primary'
							>
								<span className='text-sm font-light'>Alive Birds</span>
								<span className='text-xl font-bold'>995</span>
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
		</div>
	)
}

export default Analysis
