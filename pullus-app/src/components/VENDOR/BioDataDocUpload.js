import React, { useState } from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'
import Dropzone from 'react-dropzone'

export default function BioDataDocUpload() {

    // CONVERT UPLOADS TO MULTIPART LIKE IN nextpaths INDIVIDUAL.JS
    
    const [profPicState, setProfPicState] = useState('')
    const [cacState, setCacState] = useState('')
    const [nationalIdState, setNationalIdState] = useState('')
  return (
    <>
        <Navbar />
            <section className={styles.biodata}>
                <section className={styles.second}>
                    <h1>Upload these documents</h1>
                    <div className={styles.inner}>
                        <h2>National ID Card</h2>

                        <Dropzone onDrop={acceptedFiles => setNationalIdState(acceptedFiles[0])}>
                            {({getRootProps, getInputProps, isDragActive}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? <p>'Drop file here</p> :
                                        <p>Drag 'n' drop file, or click here to upload</p>}
                                    </div>
                                    </section>
                                )}
                        </Dropzone>
                    </div>
                    <div className={styles.inner}>
                        <h2>CAC</h2>

                        <Dropzone onDrop={acceptedFiles => setCacState(acceptedFiles[0])}>
                            {({getRootProps, getInputProps, isDragActive}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? <p>'Drop file here</p> :
                                        <p>Drag 'n' drop file, or click here to upload</p>}
                                    </div>
                                    </section>
                                )}
                        </Dropzone>
                    </div>
                    <div className={styles.inner}>
                        <h2>Profile Photo</h2>

                        <Dropzone onDrop={acceptedFiles => setProfPicState(acceptedFiles[0])}>
                            {({getRootProps, getInputProps, isDragActive}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? <p>'Drop image here</p> :
                                        <p>Drag 'n' Drop file, or click here to upload</p>}
                                    </div>
                                    </section>
                                )}
                        </Dropzone>
                    </div>

                    <input type={'button'} value={'Continue'} />
                </section>
            </section>
        <Footer />
    </>
  )
}
