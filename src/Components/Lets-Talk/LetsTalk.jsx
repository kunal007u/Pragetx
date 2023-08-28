import React, { useRef, useState } from 'react'
import Images from '../../Images'
import './letstalk.css'
import { Formik, Field, Form } from 'formik';
import { LetsTalkFormValidation } from '../../Validation/LetsTalkFormValidation';
import countries from '../../Helper/CountryArray';
import axios from 'axios';
import { toast } from 'react-toastify';


const LetsTalk = () => {
    const fileInput = useRef(null);
    const handleSubmit = async (values, { resetForm }) => {
        // Object.keys(values).forEach(key => formData.append(key, values[key]))
        // values.files.forEach(file => (formData.append('files', file)))
        const formData = new FormData();
        const formattedContent = values.projectRequirement.replace(/\n/g, '<br>');

        const formData1 = {
            name: values.name,
            email: values.email,
            country: values.country,
            contactNumber: values.contactNumber,
            projectType: values.projectType,
            companyName: values.companyName,
            companyWebsite: values.companyWebsite,
            services: values.services,
            projectRequirement: formattedContent,
        }
        formData.append('data', JSON.stringify(formData1));


        values.files.forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await axios.post(`http://192.168.1.30:5004/api/web/talk`, formData);

            if (response.status === 200) {
                resetForm();
                fileInput.current.value = null;
                toast.success('Your form has been submitted successfully');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='lets-talk'>
            <section className="say-hello-main">
                <div className="container-fluid">
                    <div className="d-flex flex-row say-hello-con">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-detail">
                                <div className="form-img">
                                    <img src={Images.ContactUsFormImg} alt="Contact Us" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 text-left">
                            <div className="home-contact-form">
                                <h3>Let’s Talk</h3>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        country: '',
                                        contactNumber: '',
                                        projectType: "individual",
                                        companyName: '',
                                        companyWebsite: '',
                                        services: '',
                                        projectRequirement: '',
                                        files: []
                                    }}
                                    onSubmit={handleSubmit}
                                    validationSchema={LetsTalkFormValidation}
                                >

                                    {({ isSubmitting, errors, values, touched, handleChange, handleBlur, setFieldValue }) => {
                                        const handleRadioChange = e => {
                                            setFieldValue('projectType', e.target.value);
                                        }

                                        return (
                                            <Form name="applyJobForm" id="applyJobForm" method="post" encType="multipart/form-data">
                                                <div className="form-row">
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Your Name <span>*</span></label>
                                                        <Field type="text" className="form-control" placeholder="Your Name" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.name && touched.name && <label id="name-error" className="error" htmlFor="name">{errors.name}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Email Address <span>*</span></label>
                                                        <Field type="email" className="form-control" placeholder="Email Address" name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.email && touched.email && <label id="email-error" className="error" htmlFor="email">{errors.email}</label>}
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Country <span>*</span></label>
                                                        {/* <Field type="text" className="form-control" placeholder="Country" name="country" id="country" value={values.country} onChange={handleChange} onBlur={handleBlur} /> */}
                                                        <Field as="select" name="country" className="form-select" id="country" placeholder="Country" >
                                                            <option value="" disabled >----------Select----------</option>
                                                            {
                                                                countries.map((country, index) => {
                                                                    return <option key={index} value={values.country.name}>{country.name}</option>
                                                                }
                                                                )
                                                            }
                                                        </Field>
                                                        {errors.country && touched.country && <label id="email-error" className="error" htmlFor="country">{errors.country}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Contact Number <span>*</span></label>
                                                        <Field type="tel" className="form-control" placeholder="Contact Number" name="contactNumber" maxLength={15} id="alternative_number" value={values.contactNumber} onChange={handleChange} onBlur={handleBlur} />
                                                        {errors.contactNumber && touched.contactNumber && <label id="contactNumber-error" className="error" htmlFor="contactNumber">{errors.contactNumber}</label>}

                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-check form-check-inline">
                                                            <p>Project Type</p>
                                                            <div className="d-flex">
                                                                <div className="radio">
                                                                    <Field
                                                                        id="radio-1"
                                                                        type="radio"
                                                                        name="projectType"
                                                                        value="individual"
                                                                        onChange={handleRadioChange}
                                                                    />

                                                                    <label htmlFor="radio-1" className="radio-label">Individual</label>
                                                                </div>
                                                                <div className="radio">
                                                                    <Field
                                                                        id="radio-2"
                                                                        type="radio"
                                                                        name="projectType"
                                                                        value="company project"
                                                                        onChange={handleRadioChange}
                                                                    />
                                                                    <label htmlFor="radio-2" className="radio-label">Company Project</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Company Name</label>
                                                        <Field type="Hyperlink" className="form-control" placeholder="Company Name" name="companyName" id="portfolio_link" value={values.companyName} />
                                                        {errors.companyName && touched.companyName && <label id="companyName-error" className="error" htmlFor="companyName">{errors.companyName}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <label>Company Website</label>
                                                        <Field type="text" className="form-control" placeholder="Company Website" name="companyWebsite" id="coverletter" value={values.companyWebsite} />
                                                        {errors.companyWebsite && touched.companyWebsite && <label id="companyWebsite-error" className="error" htmlFor="companyWebsite">{errors.companyWebsite}</label>}

                                                    </div>
                                                    <div className="col-lg-12 col-md-12 p-1 form-field">
                                                        <label>Services <span>*</span></label>
                                                        <Field as="select" name="services" className="form-select" id="services" value={values.services}>
                                                            <option value="" disabled >----------Select----------</option>
                                                            <option value="web development">Web Development</option>
                                                            <option value="mobile app development">Mobile App Development</option>
                                                            <option value="custom software development">Custom Software Development</option>
                                                            <option value="ui/ux designing">UI/UX Designing</option>
                                                            <option value="digital marketing">Digital Marketing</option>
                                                            <option value="others">Others</option>
                                                        </Field>
                                                        {errors.services && touched.services && <label id="services-error" className="error" htmlFor="services">{errors.services}</label>}
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 p-1 form-field">
                                                        <label>Project Requirement <span>*</span></label>
                                                        <Field as='textarea' className="form-control" rows={3} name="projectRequirement" id="project_requirement" placeholder="Project Requirement" value={values.projectRequirement} />
                                                        {errors.projectRequirement && touched.projectRequirement && <label id="projectRequirement-error" className="error" htmlFor="project_requirement">{errors.projectRequirement}</label>}

                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <div className="input-group custom-file-button">
                                                            <label className="input-group-text" >Upload a Project Detail File</label>
                                                            <input
                                                                type="file"
                                                                className="form-control"
                                                                multiple
                                                                ref={fileInput}
                                                                onChange={(event) => {
                                                                    const files = Array.from(event.target.files);
                                                                    setFieldValue('files', files);
                                                                }}
                                                            />
                                                        </div>
                                                        {errors.files && touched.files && <label className="error" htmlFor="file">{errors.files}</label>}
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary" id="jobform_submit" disabled={isSubmitting}>Submit</button>
                                            </Form>
                                        )
                                    }
                                    }

                                </Formik>
                                <br />
                                <div className="alert alert-success alert-dismissible success" style={{ display: 'none' }}>
                                    <span id="success_new" />
                                </div>
                                <div className="alert alert-error alert-dismissible error" style={{ display: 'none' }}>
                                    <span id="error_new" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LetsTalk;
