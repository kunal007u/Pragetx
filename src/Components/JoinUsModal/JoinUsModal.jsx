import React, { useEffect, useRef } from 'react'
import * as Yup from 'yup';
import "./joinusmodal.css"
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { toast } from 'react-toastify';
import axios from 'axios';

const JoinUsModal = ({ setIsOpen, isOpen }) => {


    const handleSubmit = async (values, { resetForm }) => {
        console.log("🚀 ~ file: JoinUsModal.jsx:13 ~ handleSubmit ~ values:", values)

        const formData = new FormData();
        const formData1 = {
            email: values.email,
        }

        formData.append('data', JSON.stringify(formData1));
        try {
            const response = await axios.post(`http://192.168.1.30:5004/api/web/subscribe`, values.email);
            if (response.status === 200) {
                resetForm();
                toast.success('You successfully subscribed to our newsletter');
            }
        } catch (error) {
            console.error(error);
        }
    }

    const joinUsValidation = Yup.object().shape({
        email: Yup.string()
            .required('Please enter your email')
            .email('Invalid email format')
            .max(100, 'Email can be at most 100 characters'),
    })

    const JoinUsModalRef = useRef(null)

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenModal', true);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (JoinUsModalRef.current && !JoinUsModalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [setIsOpen]);

    return (
        <>
            <div className={`modal help-modal fade ${isOpen ? "show" : ""}`} id="onload" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" ref={JoinUsModalRef}>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="close-btn" onClick={() => handleClose()}>
                                <button className={`btn-close`} />
                            </div>
                            <div className="exitPopupContent">
                                <div className="row text-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        {/* <input type="radio" id="test1" name="colorRadio" value="one" data-gaconnector-tracked="true"> */}
                                        <label htmlFor="test1">Become a partner</label>
                                        <div className="one box">
                                            <Link to="/become-partner" className="btn">Apply now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        {/* <input type="radio" id="test2" name="colorRadio" value="two" data-gaconnector-tracked="true"> */}
                                        <label htmlFor="test2">Looking for job?</label>
                                        <div className="two box">
                                            <Link to="/careers" className="btn">Apply now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        {/* <input type="radio" id="test3" name="colorRadio" value="three" data-gaconnector-tracked="true"> */}
                                        <label htmlFor="test3">Inquiry for project</label>
                                        <div className="three box">
                                            <Link to="/contact-us" className="btn">Apply now</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="subscribe-form-main">
                                            {/* <input type="radio" id="test4" name="colorRadio" value="for" data-gaconnector-tracked="true"> */}
                                            <h5>Join us to know problems Web3.0 is solving around the world</h5>
                                            <label htmlFor="test4">Keep up to date with latest blogs/articles from our experts</label>
                                            <div className="for box">
                                                <Formik
                                                    initialValues={{
                                                        email: '',
                                                    }}
                                                    onSubmit={handleSubmit}
                                                    validationSchema={joinUsValidation}
                                                >
                                                    {({ errors, touched, isSubmitting }) => {
                                                        return (
                                                            <Form name="modelForm" id="applyJobForm" method="post" encType="multipart/form-data">
                                                                <div className="modal-input-group">
                                                                    <div className='modal-form-email'>
                                                                        <Field type="email" className="form-control" placeholder="Email address" aria-label="Email address" aria-describedby="button-addon2" name="email" id="email" />
                                                                        {errors.email && touched.email && <label className="error" htmlFor="email">{errors.email}</label>}
                                                                    </div>

                                                                    <button type="submit" className="btn" id="modelForm_submit" disabled={isSubmitting}>
                                                                        Subscribe now
                                                                    </button>
                                                                </div>
                                                                <div className="alert alert-success alert-dismissible success" style={{ display: 'none' }}>
                                                                    <span id="model_success_id" />
                                                                </div>
                                                            </Form>
                                                        )
                                                    }
                                                    }
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default JoinUsModal