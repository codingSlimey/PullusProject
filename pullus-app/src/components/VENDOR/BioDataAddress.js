import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'


export default function BioDataAddress({ func }) {

  const navigate = useNavigate('');
  const [addressState, setAddressState] = useState({country: '', city: '', state: '', zipCode: '', town: '' })

  useEffect(() => {
    func(addressState)
  }, [addressState])

  // FUNCTION TO HANDLE FORM CHANGE & SAVE VALUE IN STATE
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressState(prev => {
      return {
        ...prev,
        [name]:value
      }
    })
  }

  // FUNCTION TO HANDLE CLICK & NAVIGATE TO NEXT FORM PAGE
  const handleClick = (e) => {
    e.preventDefault();
    setTimeout(navigate('/vendor/biodata/information/business'), 2000);
}

  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <form>
                  <h1 className={styles.addy}>Address</h1>
                    <input type={'text'} placeholder={'Country'} onChange={handleChange} name={'country'} value={addressState.country} />
                    <input type={'text'} placeholder={'State'} onChange={handleChange} name={'state'} value={addressState.state} />
                    <input type={'text'} placeholder={'City'} onChange={handleChange} name={'city'} value={addressState.city} />
                    <input type={'text'} placeholder={'Town'} onChange={handleChange} name={'town'} value={addressState.town} />
                    <input type={'text'} placeholder={'ZIP Code'} onChange={handleChange} name={'zipCode'} value={addressState.zipCode} />

                    <input type={'button'} value={'Continue'} onClick={handleClick} />
                </form>
            </section>
        <Footer />
    </>
  )
}
