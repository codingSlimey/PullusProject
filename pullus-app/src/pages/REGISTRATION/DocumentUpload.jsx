// import Button from '../../components/FARMER/button'
import { Modal } from 'flowbite-react'
import successImg from '../../images/success.svg'
import { keys } from '../../constants/redundantKeys'

import React, { useState, useEffect } from 'react'
import SingleFileUpload from '../../components/uploadsForm/singleFileUpload'

import { useNavigate } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
//State (Context API)
import { useUserAuth } from '../../context/auth'

//api
import { completeSignUp } from '../../api'

const FileUpload = () => {
	const navigate = useNavigate()
	const [success, setSuccess] = useState(false)
	const [isloading, setIsloading] = useState(false)
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

	const { tempUser, setTemporaryUserData, clearTemporaryUserData } =
		useUserAuth()
	const [showModal, setShowModal] = useState(false)
	const [modalImage, setModalImage] = useState(null)
	const [isdisabled, setIsdisabled] = useState(true)

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

	useEffect(() => {
		if (
			!imagesUrl.nationalIDUrl ||
			!imagesUrl.profilePicUrl ||
			!imagesUrl.cacUrl
		) {
			setIsdisabled(true)
			// return;
		} else {
			setIsdisabled(false)
			// return;
		}
	}, [imagesUrl])

	const handleFinalSubmit = async () => {
		// Implement your upload logic here
		// You can access the files using the files object
		setIsloading(true)
		const data = { ...keys, ...tempUser, ...imagesUrl }
		setTemporaryUserData(data)
		console.log(data)
		console.log(tempUser)
		try {
			const res = await completeSignUp(data)
			console.log(res)
			setIsloading(false)
			setSuccess(true)
			clearTemporaryUserData()
		} catch (error) {
			console.log(error)
			setTimeout(() => {
				setIsloading(false)
			}, 5000)
		}
	}

	const handleNavigateToLogin = () => {
		navigate('/login')
		setSuccess(false)
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

					<div className='flex justify-center'>
						<button
							disabled={isdisabled}
							onClick={handleFinalSubmit}
							className={`text-xs w-fit  py-4 px-10 flex items-center ${
								isdisabled
									? 'disabled:cursor-not-allowed bg-grey filter text-black/40'
									: 'bg-fade text-white'
							}   md:text-base rounded-full shadow-xl  my-auto`}
						>
							Continue
							<FaPlay className='ml-3 h-4 w-4' />
						</button>
					</div>
					{isloading && (
						<div className='isloading'>
							<div className='spinner-bg'></div>
						</div>
					)}
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

			<Modal
				show={success}
				onClose={() => setSuccess(false)}
				size='sm'
				className='success-modal'
			>
				{/* <Modal.Header className='text-primary'>Type of Shipping</Modal.Header> */}
				<Modal.Body>
					<div className='px-4 py-6   grid place-items-center bg-white  mb-4 '>
						<img
							src={successImg}
							alt=''
							className='bg-[white]'
						/>
					</div>
					<h5 className='text-primary text-center font-bold text-xl my-2'>
						Signup Successful!
					</h5>
					<p className='text-primary text-center'>
						You have completed your onboarding process. Please check your mail
						inbox and click on the confirmation link to continue.
					</p>
					<div className='mt-4 grid w-full gap-6 justify-center '>
						{/* <button
							onClick={() => setSuccess(false)}
							className={`w-full bg-fade text-[#fff] text-base font-bold py-3 px-8 flex justify-center  items-center rounded-full shadow-xl  my-auto`}
						>
							Watch a demo video
						</button> */}
						<button
							onClick={handleNavigateToLogin}
							className={`w-full bg-grey text-primary text-base font-bold py-3 px-8 flex  items-center justify-center rounded-full shadow-xl  my-auto`}
						>
							Login
						</button>
					</div>
				</Modal.Body>
				{/* <Modal.Footer>
				</Modal.Footer> */}
			</Modal>
		</>
	)
}
export default FileUpload
