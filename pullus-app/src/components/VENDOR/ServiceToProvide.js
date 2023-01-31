import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'

export default function ServiceToProvide({ func }) {

    const navigate = useNavigate('');
    const [serviceToProvide, setServiceToProvide] = useState({vendorServiceType: ''});
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [color, setColor] = useState('#307C31');

    useEffect(() => {
        func(serviceToProvide)
    }, [serviceToProvide]);

    const getSelectedService = (event) => {
        let option = event.target;
        setColor(color === '#307C31' ? 'white' : '#307C31');
        setBackgroundColor(backgroundColor === 'white' ? '#307C31' : 'white');
        setServiceToProvide(prev => {
            return {
                ...prev,
                vendorServiceType: option.innerText,
            }
        })
        console.log(option)
        return (
            <div onClick={getSelectedService} style={{backgroundColor}}>
                {option.innerText}
            </div>
        )
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
