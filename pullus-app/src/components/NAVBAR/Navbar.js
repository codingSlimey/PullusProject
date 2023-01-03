import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './styles.module.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
        <section className={styles.navbar}>
            <img src={logo} alt='Logo image' className={styles.logo} />

            <button onClick={() => navigate('/login')}>Login</button>
        </section>
    </>
  )
}
