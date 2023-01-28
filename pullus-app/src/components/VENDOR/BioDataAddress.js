import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'


export default function BioDataAddress() {
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <h1>Address</h1>
                <form>
                    <input type={'text'} placeholder={'Country'} />
                    <input type={'text'} placeholder={'State'} />
                    <input type={'text'} placeholder={'City'} />
                    <input type={'tel'} placeholder={'Town'} />
                    <input type={'text'} placeholder={'ZIP Code'} />

                    <input type={'button'} value={'Continue'} />
                </form>
            </section>
        <Footer />
    </>
  )
}
