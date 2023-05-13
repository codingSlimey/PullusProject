import { useState } from 'react'

const useCreateNewCycleForm = () => {
	const [errors, setErrors] = useState({
		breed: '',
		// feedType: '',
		name: '',
		noOfBirds: 0,
	})

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case 'breed':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						breed: 'Breed type is required.',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						breed: '',
					}))
				}
				break
			case 'name':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						name: 'Cycle name is required.',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						name: '',
					}))
				}
				break

			case 'noOfBirds':
				if (value === 0 || value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						noOfBirds: 'Number of birds of is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						noOfBirds: '',
					}))
				}
				break

			default:
				break
		}
	}

	const validateForm = (formData) => {
		let isValid = true
		for (const [fieldName, value] of Object.entries(formData)) {
			validateField(fieldName, value)
		}
		for (const [fieldName, error] of Object.entries(errors)) {
			if (error !== '' || formData[fieldName] === '') {
				isValid = false
				break
			}
		}
		return isValid
	}

	return {
		errors,
		validateField,
		validateForm,
	}
}

export default useCreateNewCycleForm
