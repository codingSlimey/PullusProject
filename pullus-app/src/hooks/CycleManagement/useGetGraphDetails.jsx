import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getGraphData } from '../../api'
import { toast } from 'react-toastify'

export default function useGetGraphDetails(queryURL) {
	const location = useLocation()
	const [graphData, setGraphData] = useState(null)
	const [loading, setLoading] = useState(false)

	const queryParams = new URLSearchParams(location.search)
	// Get the value of a specific query parameter
	const paramValue = queryParams.get('cycle')

	useEffect(() => {
		if (paramValue) {
			const fetchData = async () => {
				setLoading(true)
				try {
					const res = await getGraphData(queryURL, paramValue)
					// console.log(res.data.data.obj)
					const sortedData = res.data.data.obj.sort(
						(a, b) => a.noOfDays - b.noOfDays
					)
					setGraphData(sortedData)
					setLoading(false)
				} catch (error) {
					console.log(error)
					// const { data } = response
					toast.error(`Error fetching ${queryURL}. Refresh!`)
					setTimeout(() => {
						setLoading(false)
					}, 5000)
				}
			}

			fetchData()
		}
	}, [location, paramValue, queryURL])

	return {
		graphData,
		loading,
	}
}
