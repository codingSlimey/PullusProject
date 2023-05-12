import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useUserAuth } from '../context/auth'

export default function BlockedMessage() {
    const {setIsBlockedRoute, isblockedRoute} = useUserAuth()
    const closeMessage = () => {
        setIsBlockedRoute(false)
    } 
  return (
    <div>
        {isblockedRoute &&
        <div className="absolute z-50 w-full h-full inset-0 bg-modal " >
              <div className="bg-white rounded-2xl opacity-100 flex md:w-1/2 mx-10 md:mx-auto  my-28 py-10 px-10  justify-center relative items-center" >
              <FaTimes onClick={closeMessage} className="absolute top-3 right-10 text-2xl text-gray-500 cursor-pointer hover:text-gray-700" />
				<h1>opps sorry Feature not currently Available </h1>
				</div>
			</div>
}
    </div>
  )
}
