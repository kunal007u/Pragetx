
import { Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import "../../Pages/Careers/careers.css"
import axios from 'axios';
import { CareersFormValidation } from '../../Validation/CareersFormValidation';
import { toast } from 'react-toastify';


const SrHRGeneralist = ({ jobId }) => {

    const fileInput = useRef(null);
    const handleSubmit = async (values, { resetForm }) => {

        const formData = new FormData();
        const formData1 = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            alternativeNumber: values.alternativeNumber,
            portfolioLink: values.portfolioLink,
            coverLetter: values.coverLetter,
            workPrefer: values.workPrefer,
            workPreferDetail: values.workPreferDetail,
        }

        formData.append('data', JSON.stringify(formData1));
        formData.append('file', values.file);

        try {
            const response = await axios.post(`http://192.168.1.30:5004/api/web/hiring?subject=Sr. HR Generalist `, formData);

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
                                        <h3>Sr. HR Generalist</h3>
                                        <p>Ahmedabad</p>
                                        <h4>Job Overview:</h4>
                                        <ul>
                                            <li>We are a Software Development and Digital Marketing Company based in Ahmedabad. We are a team of 11 and are growing gradually. Looking for an HR Generalist who can recruit new talent as per company’s requirement. Ensure efficient operations &amp; perform the company's daily tasks as well as be able to work on company’s policy, documents, SOP etc. If you are very versatile in nature, like to grow and learn new things everyday, then PragetX is the right place for you.</li>
                                        </ul>
                                        {/* <h4>Company Description</h4>
                                            <ul>
                                                <li>PragetX is an upcoming leader in providing emerging and digital IT solutions in India,
                                                    with another acting branch in the USA. We are a team of ambitious, creative, and proactive
                                                    software engineers and branding managers who have delivered 54+ projects for global
                                                    clients successfully. Seeing the positive market response for the company, we are now
                                                    expanding our network with many new exciting openings and recruiting talents who are
                                                    passionate about their job roles and eager to explore new opportunities with this growing
                                                    IT firm.</li>
                                            </ul> */}
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
                                            <li>Taking multiple interviews in a week, technical as well as non-technical. Even on weekends if necessary or required sometimes.</li>
                                            <li>Should have knowledge of the core IT field and should be able to ask relevant questions to candidates as we are looking to build a large team from here on.</li>
                                            <li>Perform pre/post interview activities like orientations, selecting, screening, interviewing, finalizing, onboarding procedures etc.</li>
                                            <li>Review and select resumes during hiring processes and update database</li>
                                            <li>Process documentation and prepare reports relating to performance evaluations</li>
                                            <li>Design workplace policies i.e SOP, employee attendance and punctuality etc.</li>
                                            <li>Ensure smooth operations on a regular basis e.g. attendance, employee performance, benefits, pay-roll salary, record of new-staff etc.</li>
                                            <li>Should be acquainted with different platforms of hiring like Naukri, Indeed, LinkedIn, Apna etc. to source right candidates within time period as required for company</li>
                                            <li>Should be able to handle some of the administrative tasks required for a founder/co-founder etc. HR will be the top most important face of the company, so will be responsible to maintain the right and healthy culture in company</li>
                                        </ul>
                                        <h4>Skill Required</h4>
                                        <ul>
                                            <li>Efficient HR administration and people management skills</li>
                                            <li>Excellent record keeping skills</li>
                                            <li>Knowledge of HR functions</li>
                                            <li>Excellent written and verbal communication skills</li>
                                            <li>Computer literacy with capability in email, MS office and related HR software</li>
                                            <li>Meticulous attention to detail</li>
                                            <li>Good research skil</li>
                                        </ul>
                                        <h4>Personal characteristics</h4>
                                        <ul>
                                            <li>Loves his/her work</li>
                                            <li>Persuasive</li>
                                            <li>Adaptability and Flexibility</li>
                                            <li>Listening</li>
                                            <li>Insightful and Intuitive</li>
                                        </ul>
                                        <h4>Qualification</h4>
                                        <ul>
                                            <li>Min. bachelor's degree in IT domain/Human Resources/ or related.</li>
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
                                                coverLetter: '',
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
                                                                <Field type="text" className="form-control" placeholder="Cover Letter" name="coverLetter" id="coverletter_2" value={values.coverLetter} onChange={handleChange} onBlur={handleBlur} />

                                                                {errors.coverLetter && touched.coverLetter && <label className="error" htmlFor="coverletter_2">{errors.coverLetter}</label>}

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

export default SrHRGeneralist
