
import { Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import "../../Pages/Careers/careers.css"
import axios from 'axios';
import { CareersFormValidation } from '../../Validation/CareersFormValidation';
import { toast } from 'react-toastify';


const BusinessDevelopmentExecutive = ({ jobId }) => {
    const fileInput = useRef(null);
    const handleSubmit = async (values, { resetForm }) => {
        console.log("🚀 ~ file: BusinessDevelopmentExecutive.jsx:13 ~ handleSubmit ~ values:", values)

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
            const response = await axios.post(`http://192.168.1.30:5004/api/web/hiring?subject=Business Development Executive`, formData);

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
                                        <h3>Business Development Executive</h3>
                                        <p>Ahmedabad</p>
                                        <h4>Company Description</h4>
                                        <ul>
                                            <li>PragetX is an upcoming leader in providing emerging and digital IT solutions in India, with another acting branch in the USA. We are a team of ambitious, creative, and proactive software engineers and branding managers who have delivered 54+ projects for global clients successfully. Seeing the positive market response for the company, we are now expanding our network with many new exciting openings and recruiting talents who are passionate about their job roles and eager to explore new opportunities with this growing IT firm.</li>
                                        </ul>
                                        <h4>Job Overview</h4>
                                        <ul>
                                            <li>We are looking for someone who is resilient and strong in communication with a background in computer science and possesses at least all the basic knowledge of the IT industry with a minimum of 1+ years experience. BDE will be an integral part of the company core team. He/She will be responsible for driving the company sales by sourcing new clients and also by offering and extending continuous software services for longer duration to existing clients. Need to attend virtual networking events based in the US, UK etc. to attract and retain more clients. Also, getting clients feedback, follow-up etc. for all services offerings prior and after job completion.</li>
                                        </ul>
                                        <h4>Responsibilities</h4>
                                        <ul>
                                            <li>Familiarizing yourself with all services company is offering</li>
                                            <li>Research client business referrals in different industries</li>
                                            <li>Networking with clients to generate more leads</li>
                                            <li>Bidding on different platforms like Upwork, Fiverr etc.</li>
                                            <li>Overseeing sales process to attract new clients</li>
                                            <li>Maintaining relationships with clients</li>
                                            <li>Managing company business profiles</li>
                                            <li>Preparing and delivering pitches to clients</li>
                                            <li>Negotiating with clients to attract most attractive price</li>
                                            <li>Crafting business proposals and contracts to draw more revenue</li>
                                        </ul>
                                        <h4>Skills Required</h4>
                                        <ul>
                                            <li>Minimum 1+ years of consistent experience as BDE in IT industry</li>
                                            <li>MS Office</li>
                                            <li>Networking & Negotiating</li>
                                            <li>Excellent Communication</li>
                                            <li>Handling Team</li>
                                            <li>Building Relationship with Clients</li>
                                            <li>Listening and Problem-Solving</li>
                                            <li>Research, Strategy and Googling</li>
                                            <li>Knowledge of basic productive tools and general Software</li>
                                            <li>Loves his/her work</li>
                                            <li>Persuasive and Tech Savvy</li>
                                            <li>Adaptability and Flexibility</li>
                                            <li>Listening</li>
                                            <li>Insightful and Intuitive</li>
                                        </ul>
                                        <h4>Qualification</h4>
                                        <ul>
                                            <li>Any Bachelor’s Degree (degree in Marketing, business administration or similar is preferable)</li>
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
        </div >
    )
}

export default BusinessDevelopmentExecutive
