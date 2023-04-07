import Button from '../../components/FARMER/button'

import React, { useState } from 'react'
import SingleFileUpload from '../../components/uploadsForm/singleFileUpload'

const FileUpload = () => {
	const [files, setFiles] = useState([
		{
			name: 'file1',
			file: null,
			thumbnail: null,
			query: 'nationalId',
			imageUrlName: 'nationalIDUrl',
			label: 'National Id Card',
		},
		{
			name: 'file2',
			file: null,
			thumbnail: null,
			query: 'cacImage',
			imageUrlName: 'cacUrl',
			label: 'CAC Certificate',
		},
		{
			name: 'file3',
			file: null,
			thumbnail: null,
			query: 'profilePicture',
			imageUrlName: 'profilePicUrl',
			label: 'Profile Picture',
		},
	])

	const [showModal, setShowModal] = useState(false)
	const [modalImage, setModalImage] = useState(null)
	const [imagesUrl, setImagesUrl] = useState({
		nationalIDUrl: '',
		cacUrl: '',
		profilePicUrl: '',
	})

	const updateImageUrl = (data, imageUrlName) => {
		setImagesUrl({ ...imagesUrl, [imageUrlName]: data })
	}

	const handleFileChange = (event, item) => {
		const file = event.target.files[0]
		updateFile(item.name, file)

		const reader = new FileReader()
		reader.onload = () => {
			updateFileThumbnail(item.name, reader.result)
		}
		reader.readAsDataURL(file)
	}

	const updateFileThumbnail = (fileName, thumbnail) => {
		setFiles((prevState) => {
			const updatedFiles = prevState.map((file) => {
				if (file.name === fileName) {
					return { ...file, thumbnail }
				} else {
					return file
				}
			})
			return updatedFiles
		})
	}

	const updateFile = (fileName, fileItem) => {
		setFiles((prevState) => {
			const updatedFiles = prevState.map((file) => {
				if (file.name === fileName) {
					return { ...file, file: fileItem }
				} else {
					return file
				}
			})
			return updatedFiles
		})
	}

	const handleFinalSubmit = () => {
		// Implement your upload logic here
		// You can access the files using the files object
		console.log(imagesUrl)
	}

	const handleThumbnailClick = (thumbnail) => {
		setModalImage(thumbnail)
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
		setModalImage(null)
	}

	return (
		<>
			<div className='py-10 font-bold h-full flex'>
				<div className='m-auto max-w-[800px] px-10'>
					<h1 className='text-primary text-xl my-5'>Document Upload</h1>

					<div className='mx-auto flex flex-col gap-4 justify-center items-center my-10 '>
						{files.map((item, index) => {
							return (
								<SingleFileUpload
									key={index}
									item={item}
									handleFileChange={handleFileChange}
									handleThumbnailClick={handleThumbnailClick}
									updateImageUrl={updateImageUrl}
								/>
							)
						})}
					</div>
					<div className='flex justify-center items-center'>
						<Button
							color={`fade`}
							title='Select Your Application'
							icon={true}
							action={handleFinalSubmit}
						/>
					</div>
				</div>
			</div>

			{showModal && (
				<div className='fixed z-40 inset-0 overflow-y-auto'>
					<div className='flex items-center justify-center min-h-screen'>
						<div className='fixed inset-0 bg-black opacity-30'></div>
						<div className='bg-white p-8 z-20 rounded-lg shadow-lg'>
							<button
								onClick={handleCloseModal}
								className='absolute top-0 right-0 mt-4 mr-4 bg-primary rounded-full p-2 text-white hover:text-gray-800 focus:outline-none'
							>
								<svg
									className='h-6 w-6 fill-current'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
								>
									<path
										className='heroicon-ui'
										d='M6.41 7.41a1.5 1.5 0 0 1 2.12 0L12 9.88l3.47-3.47a1.5 1.5 0 0 1 2.12 2.12L14.12 12l3.47 3.47a1.5 1.5 0 0 1-2.12 2.12L12 14.12l-3.47 3.47a1.5 1.5 0 0 1-2.12-2.12L9.88 12 6.41 8.53a1.5 1.5 0 0 1 0-2.12z'
									/>
								</svg>
							</button>
							<img
								src={modalImage}
								alt='modal'
							/>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default FileUpload
