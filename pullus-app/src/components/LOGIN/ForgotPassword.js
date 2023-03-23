import React from 'react'
import styles from './styles.module.css'
import chatIcon from './icons/chatIcon.png'
import envelopeIcon from './icons/envelopeIcon.png'
import Button from '../FARMER/button'
import EModal from '../../modal/EModal'
import ResetPassword from './ResetPassword'

export default function ForgotPassword() {
	const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = (event) => {
    if (!event.target.closest(".emodal")) {
      setShowModal(false);
    }
  };
	return (
		<>
			<section className={styles.forgotPassword}>
				<div className={styles.forgot}>
					<h1>Forgot Password</h1>
					<p>How would you like to use to reset password?</p>
					<div className={styles.forgotBox}>
						<div className={styles.iconBox}>
							<img
								src={chatIcon}
								alt='Chat Icon'
								className={styles.forgotBoxIcon}
							/>
						</div>
						<div className={styles.forgotBoxInner}>
							<span>via SMS</span>
							<p>+234 *** *** **94</p>
						</div>
					</div>
					<div className={styles.forgotBox}>
						<div className={styles.iconBox}>
							<img
								src={envelopeIcon}
								alt='Envelope Icon'
								className={styles.forgotBoxIcon}
							/>
						</div>
						<div className={styles.forgotBoxInner}>
							<span>via Email</span>
							<p>Br******@outlook.com</p>
						</div>
					</div>
            {showModal && (
					<div className={` z-10 fixed bg-modal left-0 top-0 h-screen  w-full  `} onClick={closeModal} >
						<div className='emodal'>
						<EModal modalProps={<ResetPassword/>} />
						</div>

			</div>
			)}
					<div className=' my-10 -mx-10' > 
						<Button
						action={handleModal}
						color={'fade'}
						title={'Continue'}
						extraClass={
							'font-bold text-xl text-center w-full  justify-center items-center'
						}
						
						/>
						
						
					</div>					
				</div>
			</section>
		</>
	)
}
