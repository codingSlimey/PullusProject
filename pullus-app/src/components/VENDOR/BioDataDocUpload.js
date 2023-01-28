import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function BioDataDocUpload() {
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <h1>Upload these documents</h1>

                <section className={styles.second}>
                    <div className={styles.inner}>
                        <h2>National ID Card</h2>

                    </div>
                    <div className={styles.inner}>
                        <h2>CAC</h2>

                    </div>
                    <div className={styles.inner}>
                        <h2>Profile Photo</h2>

                    </div>
                </section>
            </section>
        <Footer />
    </>
  )
}
