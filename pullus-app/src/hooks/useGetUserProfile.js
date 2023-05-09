import { useEffect, useState } from 'react'
import { getMe } from '../api'
import { useUserAuth } from '../context/auth'


export default function useGetUserProfile(){
    const {  user } = useUserAuth()
    const [userData, setUserData] = useState(null)

    useEffect(() => {
		const fetchProfile = async () => {
			try {
				const res = await getMe(user.userName)
				setUserData(res.data.data.obj)
				// console.log(res.data.data.obj)
			} catch (error) {
				console.log(error)
			}
		}

		fetchProfile()
	}, [user.userName])

    return{
        userData
    }
}