import React, { useState } from 'react';
import styles from './styles.module.css';
import lockIcon from './icons/lockIcon.png';

import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';


export default function Login() {

    const [formData, setFormData] = useState({email: '', password: ''});

    console.log(formData);

    // FUNCTION TO CONTROL LOGIN FORM INPUTS
    function handleFormChange(event) {
        const {name, value} = event.target

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    // FUNCTION TO HANDLE LOGIN
    function handleLogin(event) {
        event.preventDefault();


    }

  return (
    <>
        <Navbar />

        <section className={styles.login}>
            <form onSubmit={handleLogin}>
                <div className={styles.first}>
                    <img src={lockIcon} alt='lock icon' />
                    <h2>Login</h2>
                </div>

                <div className={styles.second}>
                    <input type={'email'} placeholder={'Email'} name='email' value={formData.email} onChange={handleFormChange} />
                    <input type={'password'} placeholder={'Password'} name='password' value={formData.password} onChange={handleFormChange}  />
                    <div>
                        <input type={'checkbox'} name={'remember'}  />
                        <label htmlFor={'remember'}>Remember me</label>
                    </div>
                    <button className={styles.loginBtn}>LOGIN</button>
                    <p>Forgot your password?</p>
                    {/* <p>Don't have an account? <a href='#'>Signup</a> </p> */}
                </div>

            </form>

            <section className={styles.loginRight}>
                <h1>New Here?</h1>
                <p>Sign up and experience the best poultry solution in Africa.</p>
                <button>Sign up</button>
            </section>
        </section>

        <Footer />
    </>
  )
}
