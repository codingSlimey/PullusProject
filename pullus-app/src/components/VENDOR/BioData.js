import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function BioData({ func }) {

    const navigate = useNavigate('')
    const [biodata, setBiodata] = useState({firstName: '', middleName: '', email: '', phoneNumber: '', nin: '' });

    useEffect(() => {
        func(biodata)
    },[biodata])

    const handleChange = (event) => {
        const { name, value } = event.target
        setBiodata(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault();
        setTimeout(navigate('/vendor/biodata/information/address'), 2000);
    }

    // console.log(biodata)
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <form>
                    <h1>Bio Data</h1>

                    <input type={'text'} placeholder={'First Name'} name={'firstName'} value={biodata.firstName} onChange={handleChange} />
                    <input type={'text'} placeholder={'Last Name'} name={'middleName'} value={biodata.middleName} onChange={handleChange} />
                    <input type={'text'} placeholder={'Email'} name={'email'} value={biodata.email} onChange={handleChange} />
                    <input type={'tel'} placeholder={'Phone Number'} name={'phoneNumber'} value={biodata.phoneNumber} onChange={handleChange} />
                    <input type={'text'} placeholder={'NIN Number'} name={'nin'} value={biodata.nin} onChange={handleChange} />

                    <input type={'button'} value={'Continue'} onClick={handleClick} />
                </form>
            </section>
        <Footer />
    </>
  )
}
