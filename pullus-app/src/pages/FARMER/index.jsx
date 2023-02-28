import {  Route, Routes,  NavLink } from 'react-router-dom'
import { Tabs } from '../../components/FARMER/tabs'

import MyCycle from './CycleManagement/myCycle'
import AddData from './CycleManagement/addData'
import NewCycle from './CycleManagement/newCycle'

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

function Farmer() {
	// const location = useLocation()
	// const navigate = useNavigate()
	// const [currentTab, setCurrentTab] = useState('cycle-management')

	const tabs = Tabs

	return (
		<div className='px-40 py-8 relative'>
			<nav className='sticky bg-white w-full top-0 pt-4 z-10 left-0'>
				<ul className='mx-none'>
					<li className='flex justify-center flex-wrap w-full gap-10 text-center place-content-center'>
						{tabs.map((item, index) => {
							return (

								<NavLink key={index} to={`/farmer/${item.replaceAll(' ', '-').toLowerCase()}`}
								 className={`py-3 px-10  w-[20%] rounded-full font-semibold shadow-xl `} style={({isActive})=> isActive? {background: "#307C31" , color:"#fff"} : {color : "#307c31"} } >  {item} </NavLink>
								// <Link
								// 	key={index}
								// 	to={`/farmer/${item.replaceAll(' ', '-').toLowerCase()}`}
								// 	// onClick={() =>
								// 	// 	setCurrentTab(item.name.replaceAll(' ', '-').toLowerCase())
								// 	// }
								// 	className={`py-3 px-10  w-[20%] rounded-full font-semibold shadow-xl ${
								// 		location.pathname.includes(
								// 			item.replaceAll(' ', '-').toLowerCase()
								// 		) ||
								// 		item.toLowerCase().includes(location.pathname.split('-')[1])
								// 			? // item.name.replaceAll(' ', '-').toLowerCase() === currentTab
								// 			  'bg-primary text-[#fff]'
								// 			: 'text-primary'
								// 	}`}
								// >
								// 	{item}
								// </Link>
							)
						})}
					</li>
				</ul>
				<hr className='my-12 border-[1.5px] rounded-full' />
			</nav>

			<Routes>
				{/* Cylce management  */}
				<Route
					path='/cycle-management/*'
					element={<MyCycle />}
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
					path='/production-plan/create-production-plan/summary'
					element={<Summary />}
				/>
				<Route
					path='/production-plan/create-production-plan/summary/production-schedule'
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
			</Routes>
		</div>
	)
}

export default Farmer
