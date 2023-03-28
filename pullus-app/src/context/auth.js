import { createContext, useContext, useState } from 'react'
import { signUp } from '../api'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
	//For first signup and setting of temporary user
	const tempUserData = localStorage.getItem('tempUser')
	const [tempUser, setTempUser] = useState(
		tempUserData ? JSON.parse(tempUserData) : {}
	)

	const firstRegister = async (form) => {
		const res = await signUp(form)
		setTemporaryUserData(form)
		console.log(res)
		return res.data
	}

	const setTemporaryUserData = (data) => {
		localStorage.setItem('tempUser', JSON.stringify(data))
		setTempUser(data)
	}

	const clearTemporaryUserData = () => {
		setTempUser(null)
		localStorage.removeItem('tempUser')
	}

	// Real user
	const [user, setUser] = useState({})
	return (
		<userAuthContext.Provider value={{ user, tempUser, firstRegister }}>
			{children}
		</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext)
}
