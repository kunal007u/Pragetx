import React, { useState } from 'react'
import "./referralPrograms.css"
import Marquee from 'react-fast-marquee'
import Images from '../../../Images'
import Clientele from '../../../Components/Clientele/Clientele'
import StartUp from '../../../Components/StartUp/StartUp'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { ReferralProgramsValidation } from '../../../Validation/ReferralProgramsValidation'
import countries from '../../../Helper/CountryArray'



const ReferralPrograms = () => {
    const handleSubmit = async (values, { resetForm }) => {
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]))
        values.files.forEach(file => (formData.append('files', file)))

        formData.append('data', JSON.stringify(values.formData));

        // try {
        //     const response = await axios.post(`http://localhost:5004/api/web/talk`, formData);

        // if (respoonse.status === 200) {
        //     resetForm();
        // toast.success('Your form has been submitted successfully');
        // }
        // } catch (error) {
        //     console.error(error);
        // }
    }



    return (
        <>
            <Helmet>
                <title>IT Services Referral Program | IT Refer and Earn Program | PragetX</title>
            </Helmet>
            <section className="header-slider hire-developers referral-programs-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="header-top-con">
                                <h1>PragetX <span>Referral Program</span></h1>
                                <h5>Be Loyal, Earn Royalties</h5>
                                <p>Refer our IT services to your network and a group of people needing our IT expertise to scale up their business IT strengths and get exciting referring rewards and a chance to win PragetX loyalty programs and earn royalties as a part of services or discounts.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="hire-form">
                                <h3>Refer Our IT Services To Your Network</h3>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        userContactNo: '',
                                        email: '',
                                        companyName: '',
                                        userCountry: '',
                                        clientCountry: '',
                                        clientReferralName: '',
                                        clientContactNo: '',
                                        clientEmailId: '',
                                        describeYouClient: '',
                                        terms: false
                                    }}
                                    onSubmit={handleSubmit}
                                    validationSchema={ReferralProgramsValidation}
                                >

                                    {({ isSubmitting, errors, values, touched, handleChange, handleBlur, setFieldValue }) => {
                                        return (
                                            <Form name="applyJobFormSecond" id="applyJobFormSecond" method="post" encType="multipart/form-data" noValidate="novalidate">
                                                <div className="form-row">
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Your Name" name="name" id="name" />
                                                        {errors.name && touched.name && <label id="name-error" className="error" htmlFor="name">{errors.name}</label>}
                                                    </div>
                                                    
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <Field as="select" name="userCountry" id="userCountry" >
                                                            <option value="" disabled >----------Select----------</option>
                                                            {
                                                                countries.map((country, index) => {
                                                                    return <option key={index} value={values.userCountry.code}>{country.code}</option>
                                                                }
                                                                )
                                                            }

                                                        </Field>
                                                        <Field type="text" className="form-control" placeholder="Your Contact No. (with country code)" name="userContactNo" id="userContactNo" />
                                                        {errors.userContactNo && touched.userContactNo && <label id="userContactNo-error" className="error" htmlFor="phone">{errors.userContactNo}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Your Email ID" name="email" id="email_2" />
                                                        {errors.email && touched.email && <label id="email-error" className="error" htmlFor="email_2">{errors.email}</label>}

                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Your Company Name" name="companyName" id="companyName" />
                                                        {errors.companyName && touched.companyName && <label id="companyName-error" className="error" htmlFor="companyName">{errors.companyName}</label>}
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Your Client Referral Name" name="clientReferralName" id="clientReferralName" />
                                                        {errors.clientReferralName && touched.clientReferralName && <label id="clientReferralName-error" className="error" htmlFor="clientReferralName">{errors.clientReferralName}</label>}
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        {/* <Field type="text" className="form-control" placeholder="Client Contact No. (With Country Code)" name="clientContactNo" id="clientContactNo" /> */}
                                                        <Field as="select" name="clientCountry" id="clientCountry" placeholder="Country" >
                                                            <option value="" disabled ></option>
                                                            {
                                                                countries.map((country, index) => {
                                                                    return <option key={index} value={values.clientCountry.code}>{country.code}</option>
                                                                }
                                                                )
                                                            }

                                                        </Field>
                                                        <Field type="text" className="form-control" placeholder="Client Contact No. (With Country Code)" name="clientContactNo" id="clientContactNo" />
                                                        {errors.clientContactNo && touched.clientContactNo && <label id="clientContactNo-error" className="error" htmlFor="clientContactNo">{errors.clientContactNo}</label>}
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Client Email ID" name="clientEmailId" id="clientEmailId" />
                                                        {errors.clientEmailId && touched.clientEmailId && <label id="clientEmailId-error" className="error" htmlFor="clientEmailId">{errors.clientEmailId}</label>}
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <Field type="text" className="form-control" placeholder="Please describe your client and his/her referral needs" name="describeYouClient" id="describeYouClient" />
                                                        {errors.describeYouClient && touched.describeYouClient && <label id="describeYouClient-error" className="error" htmlFor="describeYouClient">{errors.describeYouClient}</label>}
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 form-field">
                                                        <div className="form-check">
                                                            <Field className="form-check-input" type="checkbox" id="flexCheckDefault" name="terms" />
                                                            <label className="form-check-label" htmlFor="flexCheckDefault" style={{ color: '#fff' }}>
                                                                I agree, with the privacy policy and terms &amp; conditions mentioned for the referral programs. I confirm that the information provided below are true and fact checked. T&amp;C Apply*.
                                                            </label>

                                                        </div>
                                                        {errors.terms && touched.terms && <label id="terms-error" className="error" htmlFor="terms">{errors.terms}</label>}
                                                    </div>

                                                </div>
                                                <button type="submit" className="btn btn-primary" id="jobform_submit_new">Submit</button>
                                            </Form>
                                        )
                                    }}
                                </Formik>
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
            <section className="client-logo-slider referral-client-logo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="client-logo-con">
                            <div className="client-logo-review marquee_text" >
                                <Marquee>
                                    <div className="client-logo-review marquee_text">
                                        <div className="r-logo1">
                                            <img src={Images.TLogo1} alt="Zen Coast University" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo2} alt="NaWee Courier" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo3} alt="Folo App" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo4} alt="ELC Tutoring" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo5} alt="Hungry Veels" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TbJ1click} alt="j1click" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.Familyhives} alt="Familyhives" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.Theintegrated} alt="Theintegrated" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.RedFoxWeb} alt="Red Fox Web Technologies" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo6} alt="Villagio" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo7} alt="Auyuvani" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo8} alt="SchoolOwls" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo10} alt="UrNest" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo11} alt="NeoGrowth" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo12} alt="Fluke" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo13} alt="Ultrapawz" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.TLogo14} alt="Nepal Government App" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.Zip42lap} alt="Zip42lap" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.EmpyrealInfotech} alt="Empyrealinfotech" />
                                        </div>

                                        <div className="r-logo1">
                                            <img src={Images.Wooqur} alt="Wooqur" />
                                        </div>

                                    </div>
                                </Marquee>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us-main soft-about-main pt-1">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>What Is A Client Referral Program?</h2>
                                    <p>A client/customer referral program is a kind of sales and marketing tactic known as
                                        word-of-mouth marketing done by company employees, loyal customers, business partners, etc., to
                                        spread awareness about our firm and business to your network as a part of our entity member.
                                        PragetX client referral program not only benefits the company but also the clients and referrals
                                        in terms of discounts on our IT services, cash prizes, winning exciting referral vouchers, and
                                        many benefits.</p>
                                    <h5>Perks of Referrals</h5>
                                    <ul>
                                        <li>1st Referral Success - 5% Commission Straight from the project value</li>
                                        <li>5th Referral Success - 8% Commission Straight from the project value and get 60 days of free
                                            dedicated IT maintenance and support services.</li>
                                        <li>10th Referral Success - Earn PragetX Loyalty - 15% Project Partnership and much more.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.ClientEferral} alt="Custom Software Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StartUp />
            <section className="about-us-main why-trust follows pb-0">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-12 col-md-12">
                                <div className="con-head" style={{ padding: 0 }}>
                                    <h2>Referral Reward Avail Terms &amp; Conditions</h2>
                                    <ul>
                                        <li>Provide correct and accurate information to avail the referral program rewards.</li>
                                        <li>Once the client referral form is filled and received, wait for 12 hours to get your referral
                                            ID, which must be shared with the client to confirm and avail the referral rewards.</li>
                                        <li>The referral ID is only valid for one referral, and for another referral, another referral
                                            ID must be requested to the PragetX Sales team by mailing at <a href="mailto:hello@pragetx.com">hello@pragetx.com</a>.</li>
                                        <li>The referral ID is valid for a particular referral period only, and must be utilized within
                                            the proposed time to become a potential candidate for the referral reward program. </li>
                                        <li>The referral program will remain null and void if the client referral and services asked by
                                            him doesn’t meet our service portfolio criteria.</li>
                                        <li>The referral reward cannot be clubbed with another offer raised by the company. </li>
                                        <li>Your personal and financial data are kept safe and confidential by PragetX and will not be
                                            used or accessed without your consent. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-best-choose-main">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con" style={{ width: '100%' }}>
                            <h2>A Good Client Referral To PragetX</h2>
                            <p>We provide our IT services to all sorts of industries, including IT sectors, manufacturing, supply
                                chain, hospitality, banking and finance, hospitals, real estate, media &amp; entertainment,
                                telecommunications, etc., and all sizes of companies, such as startups, mid-sized, and large
                                enterprises. So, all global industries and sized businesses can be our good client referrals in need
                                for dedicated IT services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-main development-approach-main pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our Best IT Services For Referrals</h2>
                                <h5>We would be happy to get referrals for all the IT services we provide from our portfolio; however,
                                    here are the selected services, we’d like to target more.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="server-listing">
                            <div className="server-listing-img">
                                <img src={Images.BestItServices} alt="Hidden Brains" />
                            </div>
                            <ul>
                                <li>
                                    <div className="server-list-cont">
                                        <div className="server-list-cont-hd">Software Development</div>
                                        <p>Custom enterprise software development, Web 3.0, Maintenance &amp; Support</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="server-list-cont">
                                        <div className="server-list-cont-hd">Web App Development</div>
                                        <p>Frond-end, Back-end, e-commerce, PWA, Maintenance &amp; Support, Consultation</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="server-list-cont">
                                        <div className="server-list-cont-hd">Mobile App Development</div>
                                        <p>Native, Hybrid, IoT/Embedded, QA &amp; Testing, API Integration, Consultation</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="server-list-cont">
                                        <div className="server-list-cont-hd">UI/UX Designing</div>
                                        <p>Consultation, Web &amp; Mobile App UI/UX, Visual Template, AR, UI/UX Testing</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="server-list-cont">
                                        <div className="server-list-cont-hd">Staff Augmentation</div>
                                        <p>Hire developers from our pool of resources. Check out our Hire Team section!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="discuss-your-project-main">
                <div className="container">
                    <div className="discuss-your-project-con">
                        <div className="discuss-left">
                            <h3>“Let PragetX Technologies LLP be your ideal IT partner delivering cutting-edge IT services at the
                                affordable rates”</h3>
                        </div>
                        <div className="discuss-btn">
                            <Link to="/contact-us" className="btn">Become A Partner <i className="fa fa-angle-right"
                                aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Clientele />
        </>
    )
}

export default ReferralPrograms