import { useState } from 'react'

const useOnboardingAddressForm = () => {
	const [errors, setErrors] = useState({
		latitude: '',
		longitude: '',
		businessAddress: '',
		state: '',
		lga: '',
	})

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case 'latitude':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						latitude: 'Latitude is required. Try capturing location again',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						latitude: '',
					}))
				}
				break
			case 'longitude':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						longitude: 'Longitude is required. Try capturing location again',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						longitude: '',
					}))
				}
				break

			case 'state':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						state: 'State of is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						state: '',
					}))
				}
				break
			case 'lga':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						lga: 'LGA selection is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, lga: '' }))
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

export default useOnboardingAddressForm
