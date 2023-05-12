import { useState } from 'react'

const useOnboardingBioDataForm = () => {
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		middleName: '',
		email: '',
		phoneNumber: '',
		dob: '',
		gender: '',
		bvn: '',
	})

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case 'firstName':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						firstName: 'First name is required.',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						firstName: '',
					}))
				}
				break
			case 'lastName':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						lastName: 'Surname is required.',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						lastName: '',
					}))
				}
				break

			case 'email':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						email: 'Email address of is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						email: '',
					}))
				}
				break
			case 'phoneNumber':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						phoneNumber: 'Phone number is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }))
				}
				break

			case 'dob':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						dob: 'Date of Birth is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, dob: '' }))
				}
				break

			case 'gender':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						gender: 'Gender selection is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, gender: '' }))
				}
				break

			case 'bvn':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						bvn: 'BVN  is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, bvn: '' }))
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

export default useOnboardingBioDataForm
