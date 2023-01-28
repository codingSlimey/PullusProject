import React, { useState } from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function ServiceToProvide() {

    const [serviceToProvide, setServiceToProvide] = useState({venderServiceType: ''})

    console.log(serviceToProvide)

    const getSelectedService = (event) => {
        let option = event.target;
        setServiceToProvide(prev => {
            return {
                ...prev,
                venderServiceType: option.innerText,
            }
        })
        return option.innerText;
    }

  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <h1>Choose a service to proceed</h1>
                <section className={styles.first}>
                    <div onClick={getSelectedService}>Input Supplier</div>
                    <div onClick={getSelectedService}>Insurance Provider</div>
                    <div onClick={getSelectedService}>Extension Service</div>
                    <div onClick={getSelectedService}>Veterinary Service</div>
                    <div onClick={getSelectedService}>Financial Service</div>
                    <input type={'button'} value={'Continue'} />
                </section>

            </section>
        <Footer />
    </>
  )
}
