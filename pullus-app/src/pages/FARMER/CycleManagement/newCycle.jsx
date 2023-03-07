import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import Input from '../../../components/FARMER/Input'

const inputData=[
	{
		placeholder: "Cycle 1",
		label:"Start a New Cycle",
		type:"text"
	},
	{
		placeholder:'9/12/2022',
		label:"Date (at day one old)",
		type:'text'
	},
	{
		placeholder:"Broilers",
		label:"Breed",
		type:'type'
	},
	{
		placeholder: '12,000',
		label:'Number of Bird',
		type:"number"
	}
]

function NewCycle(props) {
	const navigate = useNavigate()
	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/cycle-management')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Start a New Cycle</div>
			</div>

			<div className='flex gap-16 mt-12'>
				<div className='   md:flex-1'>
					<div className='flex flex-col md:grid'>
						{inputData.map((data, i)=> {
							return(
								<Input type={data.type} placeholder={data.placeholder} label={data.label}/>
							)
						})}
					</div>
				
				</div>

				<div className='flex-1'></div>
			</div>

			<div className='mt-8 '>
				<button className='w-[30%] bg-fade py-3 rounded-full shadow-xl text-[#fff] mt-8 mb-6'>
					Start Cycle
				</button>
			</div>
		</div>
	)
}

export default NewCycle
