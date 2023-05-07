import axios from 'axios'

const API = axios.create({
	baseURL: 'https://pullusafrica.com.ng:8080',
})

// Add the 'Access-Control-Allow-Origin' header to the Axios instance
API.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// To attach authorization headers when making each request
API.interceptors.request.use((req) => {
	if (localStorage.getItem('user')) {
		// const { jwtToken } = JSON.parse(localStorage.getItem('user'))
		// req.headers.authorization = `Bearer ${jwtToken}`
		// if (req.method === 'OPTIONS') {
		// req.headers['X-Access-Token'] = jwtToken
		// }
			req.headers.authorization = `Bearer ${
			  JSON.parse(localStorage.getItem('user')).jwtToken
			}`
		  }
		  if (req.method === 'OPTIONS') {
			req.headers['Access-Control-Request-Headers'] = 'authorization'
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

// cycleManagement 
export const createNewCycle = (data)=> API.post('/apis/v1/pullus/cycleManagement/createCycleManagement', data )
export const getMyCycles = (isActive)=> API.get(`/apis/v1/pullus/cycleManagement/getFarmerCycles?isActive=${isActive}&limit=10&offset=0`)
export const getSingleCycleInfo = (name)=> API.get(`/apis/v1/pullus/cycleManagement/getFarmerCycleManagementGeneralInfo?name=${name}`)
export const addDataToSingleCycle = (data)=> API.post(`/apis/v1/pullus/cycleManagement/addCycleManagementData`, data)

//Production Plan
export const createProductionPlan = (data)=> API.post('/apis/v1/pullus/productionPlan/createProductionPlan', data )
export const getSingleProductionPlan = (name)=> API.get(`/apis/v1/pullus/productionPlan/getProductionPlan?name=${name}` )
export const totalFeedCalculator = (data)=> API.post(`/apis/v1/pullus/productionPlan/getTotalFeedCalc`, data )
export const getAllProductionPlan = ()=> API.get(`/apis/v1/pullus/productionPlan/getProductionPlans?&limit=10&offset=0&name=p`)

//User
export const getMe = (email)=> API.put(`/apis/v1/pullus/signup/profile/user/getProfile?userName=${email}`)