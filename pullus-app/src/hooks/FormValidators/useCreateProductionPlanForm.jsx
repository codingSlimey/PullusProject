import { useState } from 'react'

const useCreateProductionPlanForm = () => {
	const [errors, setErrors] = useState({
		poultryType: '',
		startDate: '',
		noOfBirds: '',
		durationOfProductionInWeeks: '',
		docBrand: '',
		feedBrand: '',
		name: '',
	})

	const validateField = (fieldName, value) => {
		switch (fieldName) {
			case 'poultryType':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						poultryType: 'Poultry type is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						poultryType: '',
					}))
				}
				break
			case 'noOfBirds':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						noOfBirds: 'Number of is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						noOfBirds: '',
					}))
				}
				break
			case 'startDate':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						startDate: 'Start date is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						startDate: '',
					}))
				}
				break
			case 'durationOfProductionInWeeks':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						durationOfProductionInWeeks: 'Duration is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						durationOfProductionInWeeks: '',
					}))
				}
				break
			case 'docBrand':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						docBrand: 'Doc Brand is required',
					}))
				} else {
					setErrors((prevErrors) => ({ ...prevErrors, docBrand: '' }))
				}
				break
			case 'feedBrand':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						feedBrand: 'Feed Brand is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						feedBrand: '',
					}))
				}
				break
			case 'name':
				if (value === '') {
					setErrors((prevErrors) => ({
						...prevErrors,
						name: 'Production plan name is required',
					}))
				} else {
					setErrors((prevErrors) => ({
						...prevErrors,
						name: '',
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

export default useCreateProductionPlanForm
