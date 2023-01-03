import React from 'react';
import styles from './styles.module.css';
import homeImg from '../../images/homeImg.png';

import Navbar from '../NAVBAR/Navbar';
import Footer from '../FOOTER/Footer';

export default function Home() {
  return (
    <>
        <Navbar />

        <main className={styles.home}>
            <section className={styles.boxOne}>
                <h1>Welcome to PULLUS</h1>

                <p>We connect poultry farmers to quality Input, Services, Market & Finance.</p>

                <p>Begin your journey as a</p>

                <div className={styles.btnDiv}>
                    <button>BUYER</button>
                    <p>OR</p>
                    <button>VENDOR</button>
                </div>
            </section>

            {/* <section className={styles.boxTwo}>
                <img src={homeImg} alt='An image of a poultry' />
            </section> */}
        </main>

        <Footer />
    </>
  )
}
