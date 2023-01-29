import React from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'


export default function BioDataBusinessInfo() {
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <form>
                    <h1>Business/Company Information</h1>
                    <input type={'text'} placeholder={'Company Name'} name={''} value={''} />
                    <input type={'text'} placeholder={'Registeration Date'} name={''} value={''} />
                    <input type={'text'} placeholder={'RC Number'} name={''} value={''} />
                    <input type={'text'} placeholder={'TIN Number'} name={''} value={''} />

                    <input type={'button'} value={'Continue'} name={''} />
                </form>
            </section>
        <Footer />
    </>
  )
}
