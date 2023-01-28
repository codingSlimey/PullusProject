import React, { useState } from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function BioData() {

    const [biodata, setBiodata] = useState({firstName: '', middleName: '', email: '', phoneNumber: '', nin: '', });
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <h1>Bio Data</h1>
                <form>
                    <input type={'text'} placeholder={'First Name'} name={''} value={''} />
                    <input type={'text'} placeholder={'Last Name'} name={''} value={''} />
                    <input type={'text'} placeholder={'Email'} name={''} value={''} />
                    <input type={'tel'} placeholder={'Phone Number'} name={''} value={''} />
                    <input type={'text'} placeholder={'NIN Number'} name={''} value={''} />

                    <input type={'button'} value={'Continue'} name={''} />
                </form>
            </section>
        <Footer />
    </>
  )
}
