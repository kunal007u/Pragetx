import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import ReactSlider from 'react-slider';
import GetinTouchValidation from '../../Validation/GetinTouchValidation';
import { toast } from 'react-toastify';
import axios from 'axios';


const GetInTouchForm = () => {


    const handleSubmit = async (values, { resetForm }) => {
        console.log("🚀 ~ file: GetInTouchForm.jsx:13 ~ handleSubmit ~ values:", values)
        const formData = new FormData();
        // Object.keys(values).forEach(key => formData.append(key, values[key]))
        // values.files.forEach(file => (formData.append('files', file)))

        // Append form fields 
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('companyWebsite', values.companyWebsite);
        formData.append('biggestChallenge', values.biggestChallenge);
        formData.append('describeProject', values.describeProject);
        formData.append('meetingDate', values.meetingDate);
        formData.append('meetingTime', values.meetingTime);
        formData.append('serviceInterested', values.serviceInterested);
        formData.append('budget', values.budget);

        values.files.forEach(file => {
            formData.append('files', file);
        });


        // formData.append('data', JSON.stringify(values.formData));

        try {
            const response = await axios.post(`http://192.168.1.30:5004/api/web/hiring?subject=Business Analyst`, formData);

            if (response.status === 200) {
                resetForm();
                toast.success('Your form has been submitted successfully');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <section className="contact-form-main">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-2 col-md-12" />
                        <div className="col-lg-8 col-md-12">
                            <div className="contact-form-con">
                                <div className="con-head text-center">
                                    <h2>Get a Quote</h2>
                                    <h5>Please give us a call or enter your information and requirements in the below form, and our IT
                                        consulting executives will be in touch with you shortly.</h5>
                                </div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        phone: '',
                                        companyWebsite: '',
                                        biggestChallenge: '',
                                        describeProject: '',
                                        meetingDate: '',
                                        meetingTime: '',
                                        serviceInterested: [],
                                        budget: [0, 500000],
                                        files: [],

                                    }}
                                    validationSchema={GetinTouchValidation}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, values, setFieldValue, handleBlur, errors, touched }) => {
                                        const handleCheckBoxChange = (e) => {
                                            const { checked, value } = e.target;
                                            if (checked) {
                                                setFieldValue('serviceInterested', [...values.serviceInterested, value]);
                                            } else {
                                                const services = values.serviceInterested.filter(s => s !== value);
                                                setFieldValue('serviceInterested', services);
                                            }
                                        }
                                        return (
                                            <Form name="contactForm" id="contactForm" method="post" encType="multipart/form-data" >
                                                <div className="form-row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <h6>1. Basic Contact Information</h6>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>First Name <span>*</span></label>
                                                        <Field type="text" className={`form-control ${errors.name && touched.name ? "error-border" : ""} `} placeholder="First Name" name="name" id="name" />
                                                        {errors.name && touched.name && <label className="error" htmlFor="name">{errors.name}</label>}
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Your Email Address <span>*</span></label>
                                                        <Field type="text" className={`form-control ${errors.email && touched.email ? "error-border" : ""} `} placeholder="Your Email Address" name="email" id="email" />
                                                        {errors.email && touched.email && <label className="error" htmlFor="email">{errors.email}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Phone Number <span>*</span></label>
                                                        <Field type="tel" className={`form-control ${errors.phone && touched.phone ? "error-border" : ""} `} placeholder="Phone Number" name="phone" maxLength={15} id="phone" />
                                                        {errors.phone && touched.phone && <label className="error" htmlFor="phone">{errors.phone}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Company website <span>*</span></label>
                                                        <Field type="text" className={`form-control ${errors.companyWebsite && touched.companyWebsite ? "error-border" : ""} `} placeholder="Company website" name="companyWebsite" id="companyWebsite" />
                                                        {errors.companyWebsite && touched.companyWebsite && <label className="error" htmlFor="companyWebsite">{errors.companyWebsite}</label>}

                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <label>What’s your biggest business IT challenge? <span>*</span></label>
                                                        <Field type="text" className={`form-control ${errors.biggestChallenge && touched.biggestChallenge ? "error-border" : ""} `} placeholder="What’s your biggest business IT challenge?" name="biggestChallenge" id="biggestChallenge" />
                                                        {errors.biggestChallenge && touched.biggestChallenge && <label className="error" htmlFor="biggestChallenge">{errors.biggestChallenge}</label>}

                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <h6>2. How Can We Help You?</h6>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <label>Describe your project briefly <span>*</span></label>
                                                        <Field as={"textarea"} className={`form-control ${errors.describeProject && touched.describeProject ? "error-border" : ""} `} rows={3} placeholder="Describe your project briefly" name="describeProject" id="describeProject" />
                                                        {errors.describeProject && touched.describeProject && <label className="error" htmlFor="describeProject">{errors.describeProject}</label>}

                                                    </div>

                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <label className="price-label">What’s your budget?</label>
                                                        <ReactSlider
                                                            className="horizontal-slider"
                                                            name="budget"
                                                            thumbClassName="example-thumb"
                                                            trackClassName="example-track"
                                                            defaultValue={[0, 500000]}
                                                            ariaLabel={['Lower thumb', 'Upper thumb']}
                                                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                            renderThumb={(props, state) => <div {...props}><div className='react-slider-range'>${state.valueNow}</div> </div>}
                                                            minDistance={0}
                                                            min={0}
                                                            max={500000}

                                                            onAfterChange={(value) => setFieldValue('budget', value)}

                                                        />

                                                        {errors.budget && touched.budget && <label className="error" htmlFor="budget">{errors.budget}</label>}

                                                    </div>

                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <div className="input-group custom-file-button contact-us-form">
                                                            <label className="input-group-text" htmlFor="inputGroupFile">Have a file to share?</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                multiple
                                                                onChange={(event) => {
                                                                    const files = Array.from(event.target.files);
                                                                    setFieldValue('files', files);
                                                                }}
                                                            />
                                                        </div>
                                                        {errors.files && touched.files && <label className="error" htmlFor="file">{errors.files}</label>}
                                                        <span>Only Document, Image or ZIP file. Max size 8MB</span>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <h6>3. Services You Want to Sign Up For</h6>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="Custom Software Development" id="flexCheckDefault1" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                Custom Software Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="Web or Mobile Apps Development" id="flexCheckDefault" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                Web or Mobile Apps Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="Web App Development" id="flexCheckDefault2" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                                Web App Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="Mobile App Development" id="flexCheckDefault3" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                                Mobile App Development
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="Software Testing and QA" id="flexCheckDefault4" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                                Software Testing and QA
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="UI/UX Designing" id="flexCheckDefault5" name="serviceInterested[]" onChange={handleCheckBoxChange} />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                                UI/UX Designing
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <h6>4. Book your free 60 min IT consulting with our tech experts.</h6>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Meeting Date <span>*</span></label>
                                                        <Field type="date" className={`form-control ${errors.meetingDate && touched.meetingDate ? "error-border" : ""} `} placeholder="Meeting Date" name="meetingDate" id="meetingDate" />
                                                        {errors.meetingDate && touched.meetingDate && <label className="error" htmlFor="meetingDate">{errors.meetingDate}</label>}
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Meeting Time <span>*</span></label>
                                                        <Field type="time" className={`form-control ${errors.meetingTime && touched.meetingTime ? "error-border" : ""} `} placeholder="Meeting Time" name="meetingTime" id="meetingTime" />
                                                        {errors.meetingTime && touched.meetingTime && <label className="error" htmlFor="meetingTime">{errors.meetingTime}</label>}
                                                    </div>
                                                </div>
                                                <button type="submit" name="form_submit" value="submit" id="form_submit" className="btn btn-primary">Submit</button>
                                            </Form>
                                        )
                                    }
                                    }

                                </Formik>
                            </div>
                            <div className="alert alert-success alert-dismissible success" style={{ display: 'none' }}>
                                <span id="success" />
                            </div>
                            <div className="alert alert-error alert-dismissible error" style={{ display: 'none' }}>
                                <span id="error" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInTouchForm