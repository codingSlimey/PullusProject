import React from 'react'
import Button from '../../components/FARMER/button'

function DocumentUpload() {
	return (
		<div className='py-10 font-bold h-full flex'>
			<div className='m-auto max-w-[800px] px-10'>
				<h1 className='text-primary text-xl my-5'>Document UpLoad</h1>
				<div className='mx-auto flex flex-col justify-center items-center my-10 '>
					<div className='w-[450px] max-[560px]:w-[300px] max-[380px]:w-[280px] mx-auto flex flex-col relative'>
						<button className='flex items-center mx-auto gap-3 h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<p className='text-primary font-bold'>Nationl ID Card</p>{' '}
							<p className='text-primary'> select file </p>{' '}
						</button>
						<input
							type='file'
							placeholder='National Id'
							className='mx-auto opacity-0 absolute h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'
						/>
					</div>
					<div className='w-[450px] max-[560px]:w-[300px] max-[380px]:w-[280px] mx-auto flex flex-col relative'>
						<button className='flex items-center  mx-auto gap-3 h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
							<p className='text-primary font-bold'>Profile Photo</p>{' '}
							<p className='text-primary'> select file </p>{' '}
						</button>
						<input
							type='file'
							placeholder='National Id'
							className='mx-auto opacity-0 absolute h-14 px-6 placeholder:text-placeholder mb-6 shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'
						/>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<Button
						color={`fade`}
						title='Select Your Application'
						icon={true}
					/>
				</div>
			</div>
		</div>
	)
}

export default DocumentUpload
