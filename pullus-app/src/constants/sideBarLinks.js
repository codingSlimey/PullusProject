import { GiCycle } from 'react-icons/gi'
import { MdOutlineBorderColor } from 'react-icons/md'
import { BiWallet } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai'
import { IoLogInOutline } from 'react-icons/io5'
const tabs = [
    { icon: <GiCycle className='h-6 w-6' />, name: 'Cycle Management' },
    { icon: <BiWallet className='h-6 w-6' />, name: 'My E-wallet' },
    {
        icon: <MdOutlineBorderColor className='h-6 w-6' />,
        name: 'Production Plan',
    },
    {
        icon: <IoIosNotificationsOutline className='h-6 w-6' />,
        name: 'My Orders',
    },
    { icon: <AiFillSetting className='h-6 w-6' />, name: 'Settings' },
    { icon: <IoLogInOutline className='h-6 w-6' />, name: 'Logout' },
]

export default tabs