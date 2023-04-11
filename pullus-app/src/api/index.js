import axios from 'axios'

const API = axios.create({
	baseURL: 'https://pullusafrica.com.ng:8080',
})

// Add the 'Access-Control-Allow-Origin' header to the Axios instance
API.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// To attach authorization headers when making each request
API.interceptors.request.use((req) => {
	if (localStorage.getItem('user')) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem('user')).jwtToken
		}`
	}
	return req
})

// authentication
export const signUp = (form) => API.post('/apis/v1/pullus/signup/new/FirstSignupRequest', form)
export const completeSignUp = (form) => API.post('/apis/v1/pullus/signup/new/SecondSignupRequest', form)
export const checkBvn = (data) => API.post('/apis/v1/pullus/signup/bvnCheck', data)
export const getStates = () => API.get('/apis/v1/pullus/signup/statesAndLga')
export const login = (form)=> API.post('/authenticate', form)


//File upload
export const uploadFile = (data,query,email) => API.post(`/apis/v1/pullus/signup/imagesUpload/${query}/upload?email=${email}`, data)
