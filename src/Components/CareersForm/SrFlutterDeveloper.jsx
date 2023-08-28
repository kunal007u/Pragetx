
import { Field, Form, Formik } from 'formik';
import "../../Pages/Careers/careers.css"
import axios from 'axios';
import { CareersFormValidation } from '../../Validation/CareersFormValidation';
import { toast } from 'react-toastify';
import { useRef } from 'react';


const SrFlutterDeveloper = ({ jobId }) => {
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
            const response = await axios.post(`http://192.168.1.30:5004/api/web/hiring?subject=Sr. Flutter Developer`, formData);

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
                                        <h3>Sr. Flutter Developer</h3>
                                        <p>Ahmedabad</p>
                                        <h4>Company Description</h4>
                                        <ul>
                                            <li>PragetX is an upcoming leader in providing emerging and digital IT solutions in India, with another acting branch in the USA. We are a team of ambitious, creative, and proactive software engineers and branding managers who have delivered 54+ projects for global clients successfully. Seeing the positive market response for the company, we are now expanding our network with many new exciting openings and recruiting talents who are passionate about their job roles and eager to explore new opportunities with this growing IT firm.</li>
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
                                        <h4>Job Overview</h4>
                                        <ul>
                                            <li>Want to be a part of the fastest growing company? Then you are just one click away to be part of PragetX Technologies. We are currently looking for Flutter mobile application developers who will be joining a team of Software engineers at our Ahmedabad Head-Office. The ideal candidate will be responsible for developing high-quality mobile applications. They will also be responsible for designing and implementing testable and scalable code. </li>
                                        </ul>
                                        <h4>Responsibilities</h4>
                                        <ul>
                                            <li>Design &amp; implement new app modules based on the product requirements using Flutter framework</li>
                                            <li>Maintain existing codebases</li>
                                            <li>Build reusable code and libraries for future use</li>
                                            <li>Integrate user-interfaces elements developed by other developers</li>
                                            <li>Build user interfaces designed by UI/UX designers</li>
                                            <li>Integration of data storage solutions</li>
                                            <li>Integrate various APIs from third parties</li>
                                            <li>Debug existing apps components, fix issues and avoid regressions</li>
                                            <li>Collaborate closely with the teams of UI/UX designers, and other developers and optimize  application for maximum speed and scalability</li>
                                            <li>Follow the company guidelines and best practices</li>
                                            <li>Work with outside data sources and APIs.</li>
                                            <li>Worked on Dart.js</li>
                                            <li>Unit-test code for robustness, including edge cases, usability, and general reliability</li>
                                            <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li>
                                            <li>Analyze and maintain existing software applications</li>
                                            <li>Design highly scalable, testable code</li>
                                            <li>Discover and fix programming bugs</li>
                                            <li>Flutter Developer well versed with Frontend, Backend, DBMS &amp; Cloud.</li>
                                            <li>Responsible for handling junior developers</li>
                                        </ul>
                                        <h4>Skill Required</h4>
                                        <ul>
                                            <li>Proven experience in Android Development.</li>
                                            <li>Experience with third-party libraries and APIs.</li>
                                            <li>Good knowledge of Firebase and databases (MySQL, SQLite)</li>
                                            <li>Excellent knowledge of Google APIs, Payment gateway integrations, real-time communication like audio/video call and chat using Agora, Twilio, Firebase, WebSocket etc..</li>
                                            <li>Excellent knowledge of state management like GetX, setState</li>
                                            <li>Able to design and implement fully white labeled applications in Flutter</li>
                                            <li>Must be passionate about writing clean, efficient, and maintainable code.</li>
                                            <li>Excellent communication and teamwork skills.</li>
                                            <li>Knowledge on play-store and app store publishing.</li>
                                            <li>Knowledge of (and excitement for) Flutter</li>
                                            <li>Experience in Android and/or iOS development</li>
                                            <li>Have published at least one original Android app</li>
                                        </ul>
                                        <h4>Qualification</h4>
                                        <ul>
                                            <li>B. Tech, B.E, BCA/MCA, BS/MS,  degree in Computer Science, Engineering or a related</li>
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

export default SrFlutterDeveloper
