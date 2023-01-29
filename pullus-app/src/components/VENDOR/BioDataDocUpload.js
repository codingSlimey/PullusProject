import React, { useState } from 'react'
import Footer from '../FOOTER/Footer'
import Navbar from '../NAVBAR/Navbar'
import styles from './styles.module.css'
import Dropzone from 'react-dropzone'
import axios from 'axios'

export default function BioDataDocUpload() {

    const [profPicState, setProfPicState] = useState('')
    const [cacState, setCacState] = useState('')
    const [nationalIdState, setNationalIdState] = useState('')

    // FUNCTION TO HANDLE ALL DOCUMENTS UPLOAD
    const handleDocSubmit = () => {
        uploadNationalId();
        uploadCacImg();
        uploadProfilePicture();
    }

    // FUNCTION TO HANDLE PROFILE PICTURE UPLOAD
    const uploadCacImg = () => {
        const params = new URLSearchParams({ email: 'superslimeysl@gmail.com' }).toString();
        const url = 'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/imagesUpload/cacImage/upload' + '?' + params;
        const config = {
            headers:{
                "Content-type": "multipart/form-data"
            }
        }
        const formData = new FormData();
        formData.append("file", cacState);
        console.log('FormData =>' + JSON.stringify(formData))

        axios
            .post(url, formData, config)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    // FUNCTION TO HANDLE NATIONAL ID UPLOAD
    const uploadNationalId = () => {
        const params = new URLSearchParams({ email: 'superslimeysl@gmail.com' }).toString();
        const url = 'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/imagesUpload/nationalId/upload' + '?' + params;
        const config = {
            headers:{
                "Content-type": "multipart/form-data"
            }
        }
        const formData = new FormData();
        formData.append("file", nationalIdState);
        console.log('FormData =>' + JSON.stringify(formData))

        axios
            .post(url, formData, config)
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    // FUNCTION TO HANDLE PROFILE PICTURE UPLOAD
    const uploadProfilePicture = () => {
        const params = new URLSearchParams({ email: 'superslimeysl@gmail.com' }).toString();
        const url = 'https://pullusafrica.com.ng:8080/apis/v1/pullus/signup/imagesUpload/profilePicture/upload' + '?' + params;
        const config = {
            headers:{
                "Content-type": "multipart/form-data"
            }
        }
        const formData = new FormData();
        formData.append("file", profPicState);
        console.log('FormData =>' + JSON.stringify(formData))

        axios
            .post(url, formData, config)
            .then((response)=>{
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }


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

                    <input type={'button'} value={'Continue'} onClick={handleDocSubmit} />
                </section>
            </section>
        <Footer />
    </>
  )
}
