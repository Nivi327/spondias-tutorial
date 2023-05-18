import React, { useState } from 'react';
import axios from 'axios';

const Contactus = () => {
    const [contactDetail, newContactDetail] = useState({name: "", email: "", number: "", message: ""});
    const [error, setError] = useState("");


    const updateName = (e) => {
        if (e.target.value.length === 0) {
            setError("Please Provide a valid name")
            return
        }
        newContactDetail(prevDetail => { return { ...prevDetail, name: e.target.value } });
        setError("");
    }

    const updateEmail = (e) => {
        e.preventDefault();
        if (String(e.target.value).includes('@')) {
            newContactDetail(prevDetail => { return { ...prevDetail, email: e.target.value } });
            setError("");
        }
        else {
            setError("Please Provide a valid Email");
            return
        }
    }

    const updateNumber = (e) => {
        if (e.target.value.length < 10 || e.target.value.length > 20) {
            setError("Please Provide a valid phone number");
            return
        }
        newContactDetail(prevDetail => { return { ...prevDetail, number: e.target.value } });
        setError("")
    }

    const updateMessage = (e) => {
        newContactDetail(prevDetail => { return { ...prevDetail, message: e.target.value } });
    }

    const reset = () => {
        setTimeout(() => {
            newContactDetail(prevDetail => {
                axios.post('https://jsonplaceholder.typicode.com/contacts', {
                    name: contactDetail.name,
                    email: contactDetail.email,
                    number: contactDetail.number,
                    message: contactDetail.message,
                }).then(result => {
                    console.log(result);
                }).catch(err => {
                    console.log(err);
                })
                return {message: '', name: '', number: '', email: ''}
            })  
        }, 1000);
    }

    return (
        <>
            <section className="py-4 bg-info">

                <div className="container">
                    <div className="row">

                        <div className="col-md-4 my-auto">
                            <h4> Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end"> Home / Contact Us
                            </h6>
                        </div>
                    </div>

                </div>
            </section >
            <section className='section'>
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6>Contact Form</h6>
                                    <hr />
                                    {error.length === 0 ? "" : <div className='form-group'>
                                        <strong className='text-danger fs-6'>{error}</strong>
                                    </div>}
                                    <form>
                                        <div className='form-group'>
                                            <label for="">Full Name</label>
                                            <input type='text' className='form-control' placeholder='Enter Full Name' onChange={updateName} value={contactDetail.name} name='name' />
                                        </div>
                                        <div className='form-group'>
                                            <label for="">Phone Number</label>
                                            <input type='text' className='form-control' placeholder='Enter Phone Number' onChange={updateNumber} value={contactDetail.number} name='number' />
                                        </div>
                                        <div className='form-group'>
                                            <label for="">Email Address</label>
                                            <input type='text' className='form-control' placeholder='Enter You Email' onChange={updateEmail} value={contactDetail.email} name='email' />
                                        </div>
                                        <div className='form-group'>
                                            <label for="">Message</label>
                                            <textarea rows="3" className='form-control' placeholder='Type Your Message..' onChange={updateMessage} value={contactDetail.message} name='message'></textarea>
                                        </div>
                                        <div className='form-group py-3'>
                                            <a className={`btn btn-primary shadow w-100 ${error ? 'disabled': ''}`} href={`mailto:nivasbodapati.abc@gmail.com?
                                            &Subject=A message form the Spondias Website
                                            &body=name:${contactDetail.name}, \n Message: ${contactDetail.message}
                                            `} onClick={() => reset()}>Send Message</a>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-md-6 border-start'>
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className='underline'></div>
                                    <p>
                                        #XXX, Byrathi, Bangalore Karnataka - 56XXXX, India
                                    </p>
                                    <p>Phone: +91 88XXXXXXXX</p>
                                    <p>Email:email@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus;