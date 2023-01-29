import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function ServiceToProvide({ func }) {

    const navigate = useNavigate('');
    const [serviceToProvide, setServiceToProvide] = useState({venderServiceType: ''});

    useEffect(() => {
        func(serviceToProvide)
    }, [serviceToProvide]);

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

    const handleClick = (e) => {
        e.preventDefault();
        setTimeout(navigate('/vendor/biodata/information/documents-upload'), 2000);
    }

  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <section className={styles.first}>
                    <h1>Choose a service to proceed</h1>

                    <div onClick={getSelectedService}>Input Supplier</div>
                    <div onClick={getSelectedService}>Insurance Provider</div>
                    <div onClick={getSelectedService}>Extension Service</div>
                    <div onClick={getSelectedService}>Veterinary Service</div>
                    <div onClick={getSelectedService}>Financial Service</div>
                    <input type={'button'} value={'Continue'} onClick={handleClick} />
                </section>

            </section>
        <Footer />
    </>
  )
}
