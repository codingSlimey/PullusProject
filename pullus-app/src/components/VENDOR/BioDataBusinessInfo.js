import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'


export default function BioDataBusinessInfo({ func }) {

  const navigate = useNavigate('');
  const [businessState, setBusinessState] = useState({businessName: '', registeredDate: '', rcNumber: '', tinNumber: ''});

  useEffect(() => {
    func(businessState)
  }, [businessState])

  const handleChange = (e) => {
    const { name, value } = e.target

    setBusinessState(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleClick = (event) => {
    event.preventDefault();
    setTimeout(navigate('/vendor/biodata/information/service-to-provide'), 2000);
  }
  
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <form>
                    <h1>Business/Company Information</h1>
                    <input type={'text'} placeholder={'Company Name'} onChange={handleChange} name={'businessName'} value={businessState.businessName} />
                    <input type={'text'} placeholder={'Registeration Date'} onChange={handleChange} name={'registeredDate'} value={businessState.registeredDate} />
                    <input type={'text'} placeholder={'RC Number'} onChange={handleChange} name={'rcNumber'} value={businessState.rcNumber} />
                    <input type={'text'} placeholder={'TIN Number'} onChange={handleChange} name={'tinNumber'} value={businessState.tinNumber} />

                    <input type={'button'} value={'Continue'} onClick={handleClick} />
                </form>
            </section>
        <Footer />
    </>
  )
}
