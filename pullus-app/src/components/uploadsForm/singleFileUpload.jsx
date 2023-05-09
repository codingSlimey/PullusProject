//State (Context API)
import { useUserAuth } from '../../context/auth'

//API
import { uploadFile } from '../../api'
import { useState } from 'react'

export default function SingleFileUpload({
	item,
	handleThumbnailClick,
	updateImageUrl,
	updateFile,
	updateFileThumbnail,
}) {
	const { tempUser } = useUserAuth()

	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [uploadState, setUploadState] = useState(false)

	const handleFileChange = (event, item) => {
		setError('')
		const file = event.target.files[0]

		if (file && file.size > 1000000) {
			setError('File size should be less than 1MB')
			updateFile(item.name, null)
			updateFileThumbnail(item.name, null)
			return
		}

		setError('')
		updateFile(item.name, file)

		const reader = new FileReader()
		reader.onload = () => {
			updateFileThumbnail(item.name, reader.result)
		}
		reader.readAsDataURL(file)
	}

	const handleFileUpload = async () => {
		if (item.file) {
			setError('')
			setIsLoading(true)
			const formData = new FormData()
			formData.append('file', item.file)

			try {
				const res = await uploadFile(formData, item.query, tempUser.email)
				console.log(res)
				if (res) {
					updateImageUrl(res.data, item.imageUrlName)
					setUploadState(true)
				}
				setIsLoading(false)
			} catch (error) {
				console.log(error)
				setIsLoading(false)
				setError('Error uploading file try again')
			}
		}
	}

	return (
		<div className='flex flex-row gap-4 items-center mb-6'>
			{item.thumbnail && (
				<img
					src={item.thumbnail}
					alt='thumbnail'
					className='cursor-pointer w-16 h-16 object-cover'
					onClick={() => handleThumbnailClick(item.thumbnail)}
				/>
			)}
			<div className='w-[450px] max-[560px]:w-[300px] max-[380px]:w-[280px] flex flex-col relative'>
				<button className='flex items-center justify-center mx-auto gap-4 h-14 px-6 placeholder:text-placeholder shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'>
					<p className='text-primary font-bold'>{item.label}</p>
					<p className='text-black/50'> select file </p>
				</button>
				<input
					type='file'
					onChange={(event) => handleFileChange(event, item)}
					placeholder='National Id'
					className='mx-auto opacity-0 absolute h-14 px-6 placeholder:text-placeholder  shadow-xl bg-[#fff] border-none w-full rounded-full  focus:outline-none focus:border-none'
				/>
			</div>

			{uploadState ? (
				<p className='text-green'>Uploaded</p>
			) : (
				<button
					onClick={handleFileUpload}
					disabled={!item.file}
					className={`${
						isLoading ? 'hidden' : ''
					} bg-primary disabled:bg-grey disabled:text-black/70 hover:bg-primary/50 text-white font-bold py-2 px-4 rounded`}
				>
					Upload
				</button>
			)}

			<p className='text-red-600 capitalize'> {error} </p>
			{isLoading && (
				<div className=' flex gap-3 justify-center items-center'>
					<div className='spinner'></div>
					<p className='text-green'>Uploading...</p>
				</div>
			)}
		</div>
	)
}
