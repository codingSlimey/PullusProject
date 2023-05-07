import { Routes, Route, useLocation,  Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Home from './components/HOME/Home'
import Login from './pages/AUTH/Login'
import Signup from './pages/AUTH/Signup'
import Privacy from './components/PRIVACY/Privacy'
import NewPassword from './components/LOGIN/NewPassword'
import ResetPassword from './components/LOGIN/ResetPassword'
import ForgotPassword from './components/LOGIN/ForgotPassword'

//Farmer//
import Farmer from './pages/FARMER'

import MarketPlace from './pages/MARKET/marketPlace'
import ProductDetail from './pages/MARKET/productDetail'
import Cart from './pages/CART/cart'
import Checkout from './pages/CART/checkout'

// wallet
import TopUpWallet from './pages/FARMER/MyEwallet/TopUpWallet'
import PaymentMethod from './pages/FARMER/MyEwallet/PaymentMethod'

//Buyers
import BuyerBioData from './pages/REGISTRATION/BuyerBioData'
import BuyerAdress from './pages/REGISTRATION/BuyerAdress'
import BusinessInfo from './pages/REGISTRATION/BusinessInfo'

import EnterPin from './pages/FARMER/MyEwallet/EnterPin'
import DocumentUpload from './pages/REGISTRATION/DocumentUpload'
import Navbar from './components/NAVBAR/Navbar'
import Footer from './components/FOOTER/Footer'
import CartFloatingButton from './components/buttons/cartFloatingButton'

// State (Context API )
import { UserAuthContextProvider } from './context/auth'
import { CartProvider } from './context/cart'

import {ToastContainer} from 'react-toastify'
import ScrollToTop from './hooks/useScrollToTop'


function App() {
	const user = localStorage.getItem('user')
	const [fixedFooterState, setFixedFooterState] = useState(false)
	
	const { pathname } = useLocation()
	
	useEffect(() => {
		const routeForFixed = [
			'/',
			'/forgot-password',
			'/reset-password',
			'/new-password',
			'/onboarding/biodata',
			'/onboarding/address',
			'/onboarding/business-info',
			'/onboarding/document-upload',
		]
		const checkRouteName = () => {
			const isRouteFixed = routeForFixed.includes(pathname)
			setFixedFooterState(isRouteFixed)
		}

		checkRouteName()
	}, [pathname])
	return (
		<UserAuthContextProvider>
			<CartProvider>
				<main
					className={`App  flex flex-col `}
				>	
			<ToastContainer/>

					<Navbar />
					<div
					// 
						className={`mt-20 md:mt-24`}
					>	
					<ScrollToTop />
						<Routes>

							{/* //Unauthenticated Routes // */}
							<Route
								path='/'
								// element={<Home />}
								element={ !user ? <Home /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/login'
								// element={<Login />}
								element={ !user ? <Login /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/signup'
								// element={<Signup />}
								element={ !user ? <Signup /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/forgot-password'
								// element={<ForgotPassword />}
								element={ !user ? <ForgotPassword /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/reset-password'
								// element={<ResetPassword />}
								element={ !user ? <ResetPassword /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/new-password'
								element={<NewPassword />}
							/>
							<Route
								path='/privacy'
								element={<Privacy />}
							/>
							{/* /////////////////////////// */}
						
							{/* //Authenticated Routes // */}
							<Route
								path='/farmer/*'
								// element={ <Farmer /> }
								element={user ? <Farmer /> :  <Navigate to='/login' replace />}
							/>
							<Route
								path='/market-place'
								element={
									// <ProtectedRoute>
										<MarketPlace />
									// </ProtectedRoute>
								}
							/>
							<Route
								path='/product/:product'
								element={<ProductDetail />}
							/>
							<Route
								path='/cart'
								element={<Cart />}
							/>
							
							<Route
								path='/checkout'
								element={<Checkout />}
							/>
							<Route
								path='top-up-wallet'
								element={<TopUpWallet />}
							/>
							<Route
								path='/payment-method'
								element={<PaymentMethod />}
							/>
							<Route
								path='/enter-pin'
								element={ <EnterPin />}
							/>
							<Route
								path='/onboarding/biodata'
								element={ !user ? <BuyerBioData /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/onboarding/address'
								element={ !user ? 
								<BuyerAdress /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
	
							<Route
								path='/onboarding/business-info'
								element={ !user ? 
								<BusinessInfo />: <Navigate to='/farmer/cycle-management' replace />}
							/>
							<Route
								path='/onboarding/document-upload'
								element={ !user ? <DocumentUpload /> : <Navigate to='/farmer/cycle-management' replace />}
							/>
							{/* /////////////////////////// */}
						</Routes>
					</div>
					<CartFloatingButton />
					<Footer />
				</main>
			</CartProvider>
		</UserAuthContextProvider>
	)
}

export default App
