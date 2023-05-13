import { useRestrictedRoutes } from '../context/restrictedRoutes'
import ModalComponent from '../components/Modal'
import thankYou from '../images/thankYou.svg'

export default function BlockedMessage() {
    const {showDialog, setShowDialog} = useRestrictedRoutes()
    const closeModal = ()=>{
      setShowDialog(!showDialog)
    }
  return (
    <div>
      <ModalComponent isOpen={showDialog} handleClose={closeModal} specificWidth='w-[80%] md:w-[50%]'>
      <div className=' py-5 rounded-2xl w-fit mx-auto text-center'>
						<div className='px-4 py-6   grid place-items-center bg-white  mb-4 '>
							<img
								src={thankYou}
								alt='Successful sign up'
								className='bg-[white]'
							/>
						</div>
						<p className='mobile:text-lg text-primary font-medium'>We apologize, but this feature is currently unavailable. We are working on implementing it and will notify you when it becomes available. Thank you for your patience.</p>
						<div className='mt-4 grid w-full gap-6 justify-center '>
							<button
								onClick={closeModal}
								className={`w-full bg-fade text-[#fff] text-base font-bold py-3 px-8 flex justify-center  items-center rounded-full shadow-xl  my-auto`}
							>
								Close
							</button>
						</div>
					</div>

      </ModalComponent>
    </div>
  )
}
