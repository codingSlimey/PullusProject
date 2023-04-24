import { createContext, useContext, useState } from 'react'
import { signUp,login } from '../api'
import { useNavigate } from 'react-router-dom'


const userAuthContext = createContext()

export function UserAuthContextProvider({ children }) {
	const navigate = useNavigate()
	const [isLogin, setIsLogin] = useState(false)
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
		setTempUser({})
		localStorage.removeItem('tempUser')
	}

	// Real user
	const userData = localStorage.getItem('user')
	const [user, setUser] = useState(
		userData ? JSON.parse(userData) : {}
	)
	const userLogin = async (form) =>{
		const res = await login(form)
		localStorage.setItem('user', JSON.stringify(res.data))
		setUser(res.data)
		if(user.jwtToken){
		setIsLogin(true)
		console.log(isLogin);
		}
		return res.data
	}

	const userLogout = ()=>{
		setUser(null)
		localStorage.removeItem('user')
		setIsLogin(false)
		console.log('logout');
		navigate('/login')
		console.log(isLogin)
	}

	const data = {
		userLogout,
		user, tempUser, setTemporaryUserData, firstRegister,userLogin, isLogin
	}

	return (
		<userAuthContext.Provider
			value={{...data}}
		>
			{children}
		</userAuthContext.Provider>
	)
}

export function useUserAuth() {
	return useContext(userAuthContext)
}
