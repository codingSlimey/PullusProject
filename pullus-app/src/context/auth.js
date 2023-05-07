import { createContext, useContext, useState } from 'react'
import { signUp, login } from '../api'
import { useNavigate } from 'react-router-dom'

const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
	const navigate = useNavigate()
	
	//For first signup and setting of temporary user
	const tempUserData = localStorage.getItem('tempUser')
	const [tempUser, setTempUser] = useState(
		tempUserData ? JSON.parse(tempUserData) : {}
	)
	const firstRegister = async (form) => {
		const res = await signUp(form)
		setTemporaryUserData({ email: form.email, pin: form.password })
		return res.data
	}

	const setTemporaryUserData = (data) => {
		localStorage.setItem('tempUser', JSON.stringify(data))
		setTempUser(data)
		// console.log(tempUser)
	}

	const clearTemporaryUserData = () => {
		localStorage.removeItem('tempUser')
		setTempUser({})
	}

	// Real user
	const userData = localStorage.getItem('user')
	const [user, setUser] = useState(userData ? JSON.parse(userData) : {})
	const userLogin = async (form) => {
		const res = await login(form)
		localStorage.setItem('user', JSON.stringify(res.data))
		setUser(res.data)
		return res.data
	}

	const userLogout = () => {
		console.log('logout')
		setUser(null)
		localStorage.removeItem('user')
		navigate('/login')
	}

	const data = {
		userLogout,
		user,
		tempUser,
		setTemporaryUserData,
		clearTemporaryUserData,
		firstRegister,
		userLogin,
	}

	return (
		<userAuthContext.Provider value={{ ...data }}>
			{children}
		</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext)
}
