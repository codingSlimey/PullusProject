import React from 'react';
import styles from './styles.module.css';
import lockIcon from './icons/lockIcon.png';

import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';


export default function Login() {
  return (
    <>
        <Navbar />

        <section className={styles.login}>
            <form>
                <div className={styles.first}>
                    <img src={lockIcon} alt='lock icon' />
                    <h2>Login</h2>
                </div>

                <div className={styles.second}>
                    <input type={'email'} placeholder={'Email'} />
                    <input type={'password'} placeholder={'Password'} />
                    <div>
                        <input type={'checkbox'} name={'remember'}  />
                        <label htmlFor={'remember'}>Remember me</label>
                    </div>
                    <button className={styles.loginBtn}>LOGIN</button>
                    <p>Forgot your password?</p>
                    <p>Don't have an account? <a href='#'>Signup</a> </p>
                </div>

            </form>
        </section>

        <Footer />
    </>
  )
}
