import axios from 'axios'

const API = axios.create({
	baseURL: 'https://pullusafrica.com.ng:8080/apis/v1/pullus',
})

// Add the 'Access-Control-Allow-Origin' header to the Axios instance
API.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// To attach authorization headers when making each request
API.interceptors.request.use((req) => {
	if (localStorage.getItem('user')) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem('user')).token
		}`
	}
	return req
})

// authentication
export const signUp = (form) => API.post('/signup/new/FirstSignupRequest', form)
export const checkBvn = (data) => API.post('/signup/new/bvnCheck', data)
export const getStates = () => API.post('/signup/new/statesAndLga')
// export const checkEmail = () => API.get(`/signup/checkEmailStatus/${'tobiikupolati33@gmail.com'}`)
// export const signUp = (form) => API.post('/auth/register', form)
