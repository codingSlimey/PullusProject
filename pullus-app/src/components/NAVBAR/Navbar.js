import React from 'react';
import logo from '../../images/logo.png';
import styles from './styles.module.css';

export default function Navbar() {
  return (
    <>
        <section className={styles.navbar}>
            <img src={logo} alt='Logo image' className={styles.logo} />

            <button>Login</button>
        </section>
    </>
  )
}
