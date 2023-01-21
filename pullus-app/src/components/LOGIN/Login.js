import React, { useState } from 'react';
import styles from './styles.module.css';
import lockIcon from './icons/lockIcon.png';
import axios from 'axios';

import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';
import { useNavigate } from 'react-router-dom';


export default function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({username: '', password: ''});

    console.log('Form Data =>' + formData);

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

        const url = 'https://pullusafrica.com.ng:8080/authenticate';

        axios
            .post(url,formData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
            })
    }

  return (
    <>
        <Navbar />

        <section className={styles.login}>
            <section className={styles.loginLeft}>
                <>
                    <h1>Login to Your Account</h1>
                    <p>Login using social networks</p>
                    <div className={styles.iconsDiv}>
                      
                    </div>
                </>
                <form onSubmit={handleLogin}>
                    <div className={styles.first}>
                        <img src={lockIcon} alt='lock icon' />
                        <h2>Login</h2>
                    </div>

                    <div className={styles.second}>
                        <input type={'email'} placeholder={'Email'} name='username' value={formData.username} onChange={handleFormChange} />
                        <input type={'password'} placeholder={'Password'} name='password' value={formData.password} onChange={handleFormChange}  />
                        <div>
                            <input type={'checkbox'} name={'remember'}  />
                            <label htmlFor={'remember'}>Remember me</label>
                        </div>
                        <button className={styles.loginBtn}>LOGIN</button>
                        <p>Forgot your password?</p>
                    </div>
                </form>
            </section>

            <section className={styles.loginRight}>
                <h1>New Here?</h1>
                <p>Sign up and experience the best poultry solution in Africa.</p>
                <button onClick={() => navigate('/sign-up')}>Sign up</button>
            </section>
        </section>

        <Footer />
    </>
  )
}
