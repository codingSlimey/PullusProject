import React, { useState } from 'react'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import styles from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import lockIcon from './lockIcon.png';


export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({username: '', password: ''});

  const handleFormChange = (event) => {
    const {name, value} = event.target;
      setFormData((prev) => {
        return {
          ...prev,
          [name] : value
        }
      })
  }

  const handleSignUp = (event) => {
    event.preventDefault();

    const url = '';
  }

  return (
    <>
        <Navbar />
            <section className={styles.signup}>
              <section className={styles.signUpLeft}>
                  <>
                      <h1>Create Your Account</h1>
                      <p>Sign up using social networks</p>
                      <div className={styles.iconsDiv}>
                        
                      </div>
                  </>
                  <form onSubmit={handleSignUp}>
                      <div className={styles.first}>
                          <img src={lockIcon} alt='lock icon' />
                          <h2>Sign Up</h2>
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

              <section className={styles.signUpRight}>
                  <h1>Have an account?</h1>
                  <p>Login to experience the best poultry solution in Africa.</p>
                  <button onClick={() => navigate('/login')}>Login</button>
              </section>
            </section>
        <Footer />
    </>
  )
}
