import React from 'react'
import { Tabs } from '../../components/FARMER/tabs'
import { NavLink } from 'react-router-dom'
import {IoClose} from "react-icons/io5"
import avatar from '../../images/avatar.svg'
import Select from '../../components/FARMER/Select'
import {GiCycle} from 'react-icons/gi'
import {MdOutlineBorderColor} from "react-icons/md"
import {BiWallet} from "react-icons/bi"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiFillSetting} from "react-icons/ai"
import {IoLogInOutline} from "react-icons/io5"

export default function MobileSideBar({  toggleMobileSideBar, showMobileSideBar, setShowMobileSideBar}) {
    const handleToggle = () => {
        setShowMobileSideBar(!showMobileSideBar)
    }
    const icon =[
        {icon1: <GiCycle/>, name: "Cycle Management"},
        {icon1: <BiWallet/>, name: "My E-wallet"},
        {icon1: <MdOutlineBorderColor/>, name: "Production Plan"},
        {icon1: <IoIosNotificationsOutline/>, name: "My Orders"},
        {icon1: <AiFillSetting/>, name: "Settings"},
        {icon1: <IoLogInOutline/>, name: "Logout"},
    ]
  return (
<div className={` fixed -top-3 right-0  left-0 w-full  h-screen overflow-y-scroll   bg-green z-30 transition-all duration-300 ease-in-out transform ${showMobileSideBar? "translate-x-0": "-translate-x-full"} `} >         
  <div onClick={handleToggle} className='flex text-4xl   font-bold text-white my-3 mx-1 justify-end'>
                            <IoClose className='hover:animate-spin' />
                     </div>
                     <div className='flex flex-col  gap-2 ' >
                        <img src={avatar} alt="avatar" className='w-40 h-40 mx-auto rounded-full'/>
                        <h1 className='text-center text-white font-bold text-xl'>Mary Doe</h1>
                        <h1 className='text-center text-white font-bold text-xl' >N100,000 </h1>
                     </div>
                        
                     <h1 className='text-white mx-4 text-start mt-6'  >Primary Currency </h1>
                        <hr className='text-black my-2 mx-4' />
                        <div className='mx-6 my-5' >
                        <Select>
                            <option value="Naira">NGN</option>
                            <option value="Dollar">USD</option>
                            <option value="Pounds">GBP</option>
                        </Select>
                        </div>
                        
                        
				<ul className='flex flex-col gap-3'>
						{Tabs.map((item, index) => {
                            
							return (
								<div className='text-white text-start px-5 font-semibold ' >
									<NavLink key={index} to={`/farmer/${item.replaceAll(' ', '-').toLowerCase()}`}>  {item} </NavLink>
								</div>
							)
						})}
					</ul>
					</div>
  )
}
