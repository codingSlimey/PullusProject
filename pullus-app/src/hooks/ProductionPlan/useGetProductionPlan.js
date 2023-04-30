import { useEffect, useState } from 'react'
import { getSingleProductionPlan, totalFeedCalculator } from '../../api'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
export default function useGetProductionPlan(){

    const [summary, setSummary] = useState(null)
	const [skeleton, setSkeleton] = useState(false)

    const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const paramValue = queryParams.get('plan')

    useEffect(() => {
		const fetchData = async () => {
			setSkeleton(true)
			try {
				const {
					data: {
						data: { obj: res1 },
					},
				} = await getSingleProductionPlan(paramValue)

				if (res1) {
					const valueToBeCalc = {
						durationOfProductionInWeeks: res1.durationOfProductionInWeeks,
						noOfBirds: res1.noOfBirds,
					}
					const {
						data: {
							data: { obj: res2 },
						},
					} = await totalFeedCalculator(valueToBeCalc)
					setSummary({
						...res1,
						...res2,
					})
					setSkeleton(false)
				}
			} catch (error) {
				const {
					response: { status },
				} = error
				if (status === 500) {
					toast.error('Error fetching the summary')
				}
				setTimeout(() => {
					setSkeleton(false)
				}, 5000)
			}
		}

		if (paramValue) {
			fetchData()
		}
	}, [paramValue])

    return {
        paramValue,
        summary,
        skeleton,
    }
}