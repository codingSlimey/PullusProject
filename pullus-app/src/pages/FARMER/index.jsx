import { Route, Routes, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { Tabs } from '../../components/FARMER/tabs'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import MobileSideBar from './MobileSideBar'

import MyCycle from './CycleManagement/myCycle'
import AddData from './CycleManagement/addData'
import NewCycle from './CycleManagement/newCycle'
import MobileDetailsPage from './CycleManagement/mobileDetailsPage'

import RecentProduction from './ProductionPlan/recentProductions'
import CreateProductionPlan from './ProductionPlan/createProductionPlan'
import Summary from './ProductionPlan/summary'
import ProductionSchedule from './ProductionPlan/productionSchedule'

import OrderDasboard from './MyOrders/orderDashboard'
import TrackOrder from './MyOrders/trackOrders'
import VendorProfile from './MyOrders/vendorProfile'

import SettingsDashboard from './Settings/settingsDashboard'
import EditProfile from './Settings/editProfile'
import AddressDetails from './Settings/addressDetails'
import NewAddress from './Settings/newAddress'
import Card from './Settings/card'
import AddCard from './Settings/addCard'
import Security from './Settings/security'

// E-wallet imports
import FarmerWallet from './MyEwallet/FarmerWallet'

// notifacation
import Notification from './Notification/Notification'

function Farmer() {
	// const [showMobileSideBar, setShowMobileSideBar] = useState(false)
	// const toggleMobileSideBar = () => {
	// 	setShowMobileSideBar(!showMobileSideBar)
	// }

	const tabs = Tabs

	return (
		<>
			<div className=' pb-3 px-6 mobile:px-10 lg:px-20 xl:px-40 tablet:pb-8 w-full  max-w-full '>
				<nav className='  sticky top-24 mt-3 bg-white tablet:w-full pt-4 tablet:pb-3 z-10 left-0 hidden tablet:flex tablet:flex-col justify-center'>
					<div className='hidden tablet:block'>
						<ul className='mx-none hidden tablet:block'>
							<li className='flex justify-center flex-wrap w-full gap-10 text-center place-content-center'>
								{tabs.map((item, index) => {
									return (
										<NavLink
											key={index}
											to={`/farmer/${item.replaceAll(' ', '-').toLowerCase()}`}
											className={`py-3 px-10 flex justify-center items-center text-center tablet:text-sm lg:text-base   w-[20%] rounded-full font-semibold shadow-xl `}
											style={({ isActive }) =>
												isActive
													? { background: '#307C31', color: '#fff' }
													: { color: '#307c31' }
											}
										>
											{item}
										</NavLink>
									)
								})}
							</li>
						</ul>
					</div>
					<hr className='mt-8 border-[1.5px] rounded-full' />
				</nav>
				{/* <MobileSideBar
					showMobileSideBar={showMobileSideBar}
					setShowMobileSideBar={setShowMobileSideBar}
					toggleMobileSideBar={toggleMobileSideBar}
				/>

				<div className='tablet:hidden  w-full flex justify-end '>
					<GiHamburgerMenu
						onClick={toggleMobileSideBar}
						className='tablet:hidden   text-primary text-3xl'
					/>
				</div> */}

				<Routes>
					{/* Cylce management  */}
					<Route
						path='/cycle-management/*'
						element={<MyCycle />}
					/>
					<Route
						path='/cycle-management/batch/detail'
						element={<MobileDetailsPage />}
					/>
					<Route
						path='/cycle-management/add-data'
						element={<AddData />}
					/>
					<Route
						path='/cycle-management/new-cycle'
						element={<NewCycle />}
					/>

					{/* Production plan */}
					<Route
						path='/production-plan'
						element={<RecentProduction />}
					/>
					<Route
						path='/production-plan/create-production-plan'
						element={<CreateProductionPlan />}
					/>
					<Route
						path='/production-plan/summary'
						element={<Summary />}
					/>
					<Route
						path='/production-plan/production-schedule'
						element={<ProductionSchedule />}
					/>

					{/* My orders */}
					<Route
						path='/my-orders'
						element={<OrderDasboard />}
					/>
					<Route
						path='/track-order'
						element={<TrackOrder />}
					/>
					<Route
						path='/track-order/vendor-profile'
						element={<VendorProfile />}
					/>

					{/* Settings  */}
					<Route
						path='/settings'
						element={<SettingsDashboard />}
					/>
					<Route
						path='/settings/edit-profile'
						element={<EditProfile />}
					/>
					<Route
						path='/settings/address'
						element={<AddressDetails />}
					/>
					<Route
						path='/settings/address/new-address'
						element={<NewAddress />}
					/>
					<Route
						path='/settings/card'
						element={<Card />}
					/>
					<Route
						path='/settings/card/add-card'
						element={<AddCard />}
					/>
					<Route
						path='/settings/security'
						element={<Security />}
					/>
					{/* E-wallet route */}
					<Route
						path='/my-e-wallet'
						element={<FarmerWallet />}
					/>
					{/* notification */}
					<Route
						path='/notifications'
						element={<Notification />}
					/>
				</Routes>
			</div>
		</>
	)
}

export default Farmer
