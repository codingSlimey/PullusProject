import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { UpdateFormState } from '../../../utils/setFormState'
import { useEffect, useState } from 'react'
import Select from '../../../components/FARMER/Select'
import useGetUserProfile from '../../../hooks/useGetUserProfile'
import Input from '../../../components/FARMER/Input'
import Button from '../../../components/FARMER/button'
import { editMe } from '../../../api'
import { toast } from 'react-toastify'

function EditProfile() {
	const navigate = useNavigate()

	const { userData } = useGetUserProfile()
	// console.log(userData)

	const [profile, setProfile] = useState({
		firstName: '',
		lastName: '',
		dob: '',
		phone: '',
		email: '',
		gender: '',
	})

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (userData) {
			setProfile((prevProfile) => ({
				...prevProfile,
				firstName: `${userData.firstName}`,
				lastName: `${userData.lastName}`,
				dob: userData.dob,
				phone: userData.phone,
				email: userData.email,
				gender: userData.gender,
			}))
		}
	}, [userData])

	const handleForm = (event) => {
		UpdateFormState(event.target.name, event.target.value, profile, setProfile)
	}

	const handleSubmit = async () => {
		setLoading(true)
		try {
			const res = await editMe(profile)
			setLoading(false)
			toast.success('Successfully!')
		} catch ({ response }) {
			const { data } = response
			toast.error(data.message)
			setTimeout(() => {
				setLoading(false)
			}, 5000)
		}
	}

	return (
		<div className='font-bold pb-12'>
			<div className='flex items-center'>
				<button
					onClick={() => navigate('/farmer/settings')}
					className='bg-primary py-1 px-2 rounded-lg mr-4 text-[#fff]'
				>
					<HiOutlineArrowLeft className='h-6 w-6' />
				</button>
				<div className='text-primary  my-6'>Edit profile</div>
			</div>

			<div className='md:grid md:grid-cols-2 flex flex-col  gap-x-16 mt-12'>
				<div className=''>
					<Input
						type='text'
						name='firstName'
						label='First name'
						onChange={handleForm}
						value={profile.firstName}
					/>
				</div>

				<div className=''>
					<Input
						type='text'
						name='lastName'
						label='Last name'
						onChange={handleForm}
						value={profile.lastName}
					/>
				</div>

				<div className='grid mt-3'>
					<label
						htmlFor='name'
						className='text-start text-primary flex items-start w-full'
					>
						Gender
					</label>
					<Select
						name='gender'
						onChange={handleForm}
						value={profile.gender}
						label=''
					>
						<option> Select Gender</option>
						{['male', 'female'].map((gender, index) => {
							return (
								<option
									key={index}
									value={gender}
								>
									{gender}
								</option>
							)
						})}
					</Select>
				</div>

				<div className='grid mt-3'>
					<Input
						type='date'
						name='dob'
						onChange={handleForm}
						value={profile.dob}
						placeholder='13/08/1990'
						label='Date of birth'
					/>
				</div>

				<div className='grid mt-3'>
					<Input
						type='number'
						name='phone'
						placeholder='+234 803 1111 111'
						label='phone number'
						value={profile.phone}
						onChange={handleForm}
					/>
				</div>

				<div className='grid mt-3'>
					<Input
						type='email'
						name='email'
						placeholder='anthonyadams@domain.com'
						label='Email'
						value={profile.email}
						onChange={handleForm}
					/>
				</div>
			</div>

			<div className='mt-12 flex justify-center gap-16 '>
				<Button
					loading={loading}
					action={handleSubmit}
					title='Update'
					extraClass='w-full lgmobile:w-[40%] flex justify-center tablet:w-[20%] bg-fade py-3 rounded-full shadow-xl text-[#fff] lgmobile:mt-8 lgmobile:mb-6'
				/>
			</div>
		</div>
	)
}

export default EditProfile
