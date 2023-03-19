import axios from 'axios'

const API = axios.create({ baseURL: 'https://pullusafrica.com.ng:8080' })


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
export const signUp = (form) => API.post('/apis/v1/pullus/signup/new/FirstSignupRequest', form)
// export const signUp = (form) => API.post('/auth/register', form)
