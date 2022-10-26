import React from 'react'
import styles from './styles.module.css'
import Navbar from '../NAVBAR/Navbar'
import Footer from '../FOOTER/Footer'
import chatIcon from './icons/chatIcon.png';
import envelopeIcon from './icons/envelopeIcon.png';

export default function ForgotPassword() {
  return (
    <>
        <Navbar />
        <section className={styles.forgotPassword}>
            <div className={styles.forgot}>
              <h1>Forgot Password</h1>
              <p>How would you like to use to reset password?</p>
              <div className={styles.forgotBox}>
                <div className={styles.iconBox}>
                  <img src={chatIcon} alt='Chat Icon' className={styles.forgotBoxIcon} />
                </div>
                <div className={styles.forgotBoxInner}>
                  <span>via SMS</span>
                  <p>+234 *** *** **94</p>
                </div>
              </div>
              <div className={styles.forgotBox}>
                <div className={styles.iconBox}>
                  <img src={envelopeIcon} alt='Envelope Icon' className={styles.forgotBoxIcon} />
                </div>
                <div className={styles.forgotBoxInner}>
                  <span>via Email</span>
                  <p>jo******@outlook.com</p>
                </div>
              </div>
            </div>
        </section>
        <Footer />
    </>
  )
}
