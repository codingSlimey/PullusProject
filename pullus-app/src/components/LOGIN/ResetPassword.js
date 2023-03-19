import React, { useState } from 'react'
import styles from './styles.module.css'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'

export default function ResetPassword() {
	const [data, setData] = useState({ code: '' })

	console.log(data)

	function handleChange(event) {
		const { name, value } = event.target

		setData((prev) => {
			return {
				...prev,
				[name]: value,
			}
		})
	}

	return (
		<>
			<section className={styles.forgotPassword}>
				<div className={styles.reset}>
					<h1>Reset Password</h1>

					<p>
						A code has been sent to your registered mobile number/email address{' '}
						{'+234 *** *** **54/Br********@outlook.com'}
					</p>

					<form>
						<input
							type={'text'}
							placeholder={'123-456-789'}
							className={styles.resetCodeInp}
							name={'code'}
							value={data.code}
							onChange={handleChange}
						/>

						<button>Continue</button>
					</form>
				</div>
			</section>
		</>
	)
}
