import { Routes, Route, useLocation } from 'react-router-dom'
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
import SelectVendor from './pages/CART/selectVendor'
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

// State (Context API )
import { UserAuthContextProvider } from './context/auth'

function App() {
	const [fixedFooterState, setFixedFooterState] = useState(false)

	const {pathname} = useLocation()

	useEffect(()=>{
		const routeForFixed = [
			'/',
			'/login',
			'/sign-up',
			'/forgot-password',
			'/reset-password',
			'/new-password',
			'/onboarding'
		]
		const checkRouteName = () => {
			const isRouteFixed = routeForFixed.includes(pathname);
			setFixedFooterState(isRouteFixed);
		  };
		
		  checkRouteName();
	},[pathname])
	return (
    <UserAuthContextProvider>
		<main className={`App ${fixedFooterState ? 'h-screen overflow-auto ' : 'h-fit justify-between'} flex flex-col `}>
			<Navbar />
			<div className={`${fixedFooterState ? ' overflow-auto flex-1':'h-fit '}  mt-24`}>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/sign-up'
						element={<Signup />}
					/>
					<Route
						path='/forgot-password'
						element={<ForgotPassword />}
					/>
					<Route
						path='/reset-password'
						element={<ResetPassword />}
					/>
					<Route
						path='/new-password'
						element={<NewPassword />}
					/>
					<Route
						path='/privacy'
						element={<Privacy />}
					/>
					{/* <Route
						path='/vendor/biodata/information'
						element={<BioData func={getBiodata} />}
					/>
					<Route
						path='/vendor/biodata/information/address'
						element={<BioDataAddress func={getAddressData} />}
					/>
					<Route
						path='/vendor/biodata/information/business'
						element={<BioDataBusinessInfo func={getBusinessInfo} />}
					/>
					<Route
						path='/vendor/biodata/information/service-to-provide'
						element={<ServiceToProvide func={getSelectedService} />}
					/>
					<Route
						path='/vendor/biodata/information/documents-upload'
						element={<BioDataDocUpload func={print} />}
					/> */}
					<Route
						path='/farmer/*'
						element={<Farmer />}
					/>
					<Route
						path='/market-place'
						element={<MarketPlace />}
					/>
					<Route
						path='/product-detail'
						element={<ProductDetail />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='/select-vendor'
						element={<SelectVendor />}
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
						element={<EnterPin />}
					/>
					<Route
						path='/onboarding/biodata'
						element={<BuyerBioData />}
					/>
					<Route
						path='/onboarding/address'
						element={<BuyerAdress />}
					/>
					<Route
						path='/onboarding/business-info'
						element={<BusinessInfo />}
					/>
					<Route
						path='/onboarding/document-upload'
						element={<DocumentUpload />}
					/>
				</Routes>
			</div>
			<Footer />
		</main>
    </UserAuthContextProvider>
	)
}

export default App
