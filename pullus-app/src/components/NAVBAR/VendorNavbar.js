import React from 'react'
import logo from '../../images/logo.png';
import styles from './styles.module.css';
import { Link, useNavigate } from 'react-router-dom';




export default function VendorNavbar() {

    const navigate = useNavigate();

  return (
    <>
        <section className={styles.navbar}>
            <img src={logo} alt='Logo image' className={styles.logo} onClick={() => navigate('/')}/>

            <nav>
                <div>
                    <i className="fa-solid fa-gauge"></i>
                    <Link to={''} style={{}}>Dashboard</Link>
                </div>
            </nav>

            <button onClick={() => navigate('/login')}>Login</button>
        </section>   
    </>
  )
}
