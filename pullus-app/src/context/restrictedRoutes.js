import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RestrictedRoutes = createContext()

export function RestrictedRoutesProvider({ children }) {
	const { pathname } =  useLocation()
	

	const restrictedRoutes = useMemo(() => [
		'/market-place',
		'/farmer/my-orders',
		'/farmer/notifications',
		'/farmer/my-e-wallet',
		'/farmer/settings/security',
		'/farmer/settings/card',
		'/cart'
	], [])

	const navigate = useNavigate()
	const [showDialog, setShowDialog] = useState(false)

	useEffect(()=>{
		if(restrictedRoutes.includes(pathname)){
			setShowDialog(true)
			// Redirects back to the home page if the page is restricted 
			navigate('/')
		}

	}, [navigate, pathname, restrictedRoutes])


	const data = {
		showDialog,
		setShowDialog
	}

	return (
		<RestrictedRoutes.Provider value={{ ...data }}>
			{children}
		</RestrictedRoutes.Provider>
	)
}

export function useRestrictedRoutes() {
	return useContext(RestrictedRoutes)
}
