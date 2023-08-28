
import { Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import "../../Pages/Careers/careers.css"
import axios from 'axios';
import { CareersFormValidation } from '../../Validation/CareersFormValidation';
import { toast } from 'react-toastify';

const BusinessAnalyst = ({ jobId }) => {
    const fileInput = useRef(null);
    const handleSubmit = async (values, { resetForm }) => {
        const formData = new FormData();

        // Append form values to formData using object shorthand notation
        formData.append('data', JSON.stringify(values));
        formData.append('file', values.file);

        try {
            // Create an instance of axios with base URL
            const api = axios.create({
                baseURL: 'http://192.168.1.30:5004/api/web/hiring',
            });

            // Make the API call using the axios instance
            const response = await api.post('?subject=Business Analyst', formData);

            if (response.status === 200) {
                resetForm();
                fileInput.current.value = null;
                toast.success('Your form has been submitted successfully');
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (


        <div className="modal fade hire-modal-main" id={jobId} tabIndex={-1} aria-labelledby="hire-modal2" style={{ display: 'none' }} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="hire-modal">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="hire-modal-con">
                                        <h3>Business Analyst</h3>
                                        <p>Ahmedabad</p>
                                        <h4>Company Description</h4>
                                        <ul>
                                            <li>As a Business Analyst at PragetX, you will do an analysis of the requirement and decrypt it to the simplest form to help the developers build it successfully and discuss it with the technical team for the estimation and clarify technical doubts.Also, getting clients feedback, follow-up etc. for all services offerings prior and after job completion.</li>
                                        </ul>
                                        {/* <h4>Why PragetX is a good fit for your career?</h4>
                              <ul>
                                  <li>5-days working</li>
                                  <li>Flexible working hours</li>
                                  <li>Valid Paid leaves</li>
                                  <li>Diversify work culture</li>
                                  <li>A perfect balance between private and corporate lives</li>
                                  <li>Value for new ideas and suggestions</li>
                                  <li>Incentives and promotion according to work</li>
                                  <li>Employee centric organization</li>
                                  <li>Rewarding and recognizing Employees</li>
                              </ul> */}

                                        <h4>Responsibilities</h4>
                                        <ul>
                                            <li>Understand the client requirement over emails, calls & in-person meetings and create conceptual prototypes, scope of work and mock-ups.</li>
                                            <li>Prepare visual diagrams & wire-frames for ease of understanding.</li>
                                            <li>Offer advice / suggestions to customers from technical and functional aspects based on experiences.</li>
                                            <li>Bidding on different platforms like Upwork, Fiverr etc.</li>
                                            <li>Communicating and collaborating proactively with team to analyze information needs and functional requirements and delivering use cases and Interface designs as and when required.</li>
                                            <li>Understand Software Applications developed and provide demonstrations to clients.</li>
                                            <li>Interact with the technical team for requirement analysis and estimations, clarify their doubts.</li>

                                        </ul>
                                        <h4>Skills Required</h4>
                                        <ul>
                                            <li>Understanding the Business Objective.</li>
                                            <li>Analytical and Critical Thinking.</li>
                                            <li>Communication and Interpersonal Skills.</li>
                                            <li>Negotiation, Cost-Benefit and Risk Analysis.</li>
                                            <li>Decision-Making Skills.</li>
                                            <li>Programming Languages.</li>
                                            <li>Creation of Reports and Dashboards.</li>
                                            <li>Database and SQL.</li>
                                            <li>Familiar with SRS, Flowcharts, Various kinds of diagrams like UML, DFD, Class diagrams etc..</li>
                                        </ul>
                                        <h4>Qualification</h4>
                                        <ul>
                                            <li>BCA/MCA, B.Sc. (IT), B.Tech/B.E. in CE/IT, BBA/MBA etc.</li>
                                            <li>Prior software engineering experience as a software-engineer/coder/programmer and/or BA only in IT company</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="hire-modal-from">
                                        <h3>Apply For Job:</h3>
                                        <Formik
                                            initialValues={{
                                                name: '',
                                                email: '',
                                                phone: '',
                                                alternativeNumber: '',
                                                portfolioLink: '',
                                                coverletter: '',
                                                workPrefer: "yes",
                                                workPreferDetail: '',
                                                file: null,

                                            }}
                                            onSubmit={handleSubmit}
                                            validationSchema={CareersFormValidation}
                                        >
                                            {({ isSubmitting, errors, values, touched, handleChange, handleBlur, setFieldValue }) => {
                                                const handleRadioChange = e => setFieldValue('workPrefer', e.target.value);
                                                return (
                                                    <Form name="applyJobFormSecond" id="applyJobFormSecond2" method="post" encType="multipart/form-data" noValidate="novalidate">

                                                        <div className="form-row">

                                                            <div className="col-lg-6 col-md-12 form-field">
                                                                <Field type="text" className="form-control" placeholder="Your Name" name="name" id="name_2" value={values.name} onChange={handleChange} onBlur={handleBlur} />

                                                                {errors.name && touched.name && <label className="error" htmlFor="name_2">{errors.name}</label>}
                                                            </div>
                                                            <div className="col-lg-6 col-md-12 form-field">

                                                                <Field type="text" className="form-control" placeholder="Email Address" name="email" id="email_2" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                                                {errors.email && touched.email && <label className="error" htmlFor="email_2">{errors.email}</label>}
                                                            </div>
                                                            <div className="col-lg-6 col-md-12 form-field">
                                                                <Field type="text" className="form-control" placeholder="Contact Number" name="phone" id="phone_2" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                                                                {errors.phone && touched.phone && <label className="error" htmlFor="phone_2">{errors.phone}</label>}

                                                            </div>
                                                            <div className="col-lg-6 col-md-12 form-field">
                                                                <Field type="text" className="form-control" placeholder="Alternative Contact Number" name="alternativeNumber" id="alternativeNumber_2" value={values.alternativeNumber} onChange={handleChange} onBlur={handleBlur} />
                                                                {errors.alternativeNumber && touched.alternativeNumber && <label className="error" htmlFor="alternativeNumber_2">{errors.alternativeNumber}</label>}
                                                            </div>

                                                            <div className="col-lg-6 col-md-12 form-field">
                                                                <Field type="text" className="form-control" placeholder="Please Share Your Portfolio Hyperlink" name="portfolioLink" id="portfolioLink" value={values.portfolioLink} onChange={handleChange} onBlur={handleBlur} />
                                                                <span style={{ color: '#fff', fontSize: 12 }}>(Git/Dribble/Behance/Pinterest/Blog/Medium)</span>
                                                                {errors.portfolioLink && touched.portfolioLink && <label className="error" htmlFor="portfolioLink">{errors.portfolioLink}</label>}

                                                            </div>
                                                            <div className="col-lg-6 col-md-12 form-field cover-field">
                                                                <Field type="text" className="form-control" placeholder="Cover Letter" name="coverletter" id="coverletter_2" value={values.coverletter} onChange={handleChange} onBlur={handleBlur} />

                                                                {errors.coverletter && touched.coverletter && <label className="error" htmlFor="coverletter_2">{errors.coverletter}</label>}

                                                            </div>
                                                            <div className="col-lg-12 col-md-12 form-field">
                                                                <div className="input-group custom-file-button">
                                                                    <label className="input-group-text" htmlFor="FieldGroupFile_bde">Upload Your CV/Resume</label>
                                                                    {/* <Field type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} id="FieldGroupFile_bde" name="file" value={values.file} onBlur={handleBlur} />
                                                                     */}
                                                                    <input
                                                                        ref={fileInput}
                                                                        type="file"
                                                                        className="form-control"
                                                                        onChange={(event) => {
                                                                            setFieldValue('file', event.target.files[0]);
                                                                        }}
                                                                    />
                                                                </div>
                                                                {errors.file && touched.file && <label className="error" htmlFor="file">{errors.file}</label>}
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="form-check form-check-inline">
                                                                    <p>Will you be able to work both as Remote and in-person if required?</p>
                                                                    <div className="d-flex">
                                                                        <div className="radio">
                                                                            <Field
                                                                                type="radio"
                                                                                id="radio-3"
                                                                                name="workPrefer"
                                                                                value="yes"
                                                                                onChange={handleRadioChange}


                                                                            />
                                                                            <label htmlFor="radio-3" className="radio-label">Yes</label>
                                                                        </div>
                                                                        <div className="radio">
                                                                            <Field
                                                                                type="radio"
                                                                                id="radio-4"
                                                                                name="workPrefer"
                                                                                value="no"
                                                                                onChange={handleRadioChange}


                                                                            />
                                                                            <label htmlFor="radio-4" className="radio-label">No</label>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            {/* <Field type="hidden" name="applied_for" defaultValue="Business Development Executive" /> */}
                                                            <div className="col-lg-12 col-md-12">
                                                                <Field type="text" className="form-control" name="workPreferDetail" placeholder="If selects no, then please mention any one: remote or in-person" />
                                                                {/* {errors.workPreferDetail && <label  className="error" for="name_2">{errors.workPreferDetail}</label>} */}
                                                            </div>
                                                        </div>


                                                        <button type="submit" className='btn' disabled={isSubmitting}>
                                                            Submit Job Application
                                                        </button>
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
    )
}

export default BusinessAnalyst
