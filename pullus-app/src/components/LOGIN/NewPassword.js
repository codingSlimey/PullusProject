import React, { useState } from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import styles from './styles.module.css'

export default function NewPassword() {

    const [newPassword, setNewPassword] = useState({password: ''});
    const [confirmation, setConfirmation] = useState({confirmPassword: ''});

    console.log(newPassword);

    function handleChange(event){
        const {name, value} = event.target;

        setNewPassword(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        if(newPassword.password === confirmation.confirmPassword){
            console.log("Submit form after confirming password.");
        }
    }

  return (
    <>
        <Navbar />

        <section className={styles.forgotPassword}>
            <form className={styles.newPasswordForm}>
                <h2>Enter Your New Password</h2>

                <input type={'password'} placeholder={'New Password'} name={'password'} onChange={handleChange} value={newPassword.password} />
                <input type={'password'} placeholder={'Confirm Password'} className={styles.confirm} name={'confirmPassword'} onChange={(event) => {setConfirmation(prev => {const {name, value} = event.target; return {...prev,[name]:value}})}} />

                <button onClick={handleSubmit}>Continue</button>
            </form>
        </section>

        <Footer />
    </>
  )
}
