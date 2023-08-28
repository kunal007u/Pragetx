import React from 'react'
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import "./ayuvani.css"
import { Link } from 'react-router-dom'

const Ayuvani = () => {
    return (
        <>
            <Helmet>
                <title>Ayuvani - Online Medical Consulting App Case Study | PragetX</title>
            </Helmet>
            <section className="header-top-slider ayuvani-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Ayuvani</h1>
                            <h2>A Hybrid Online <span>Homeopathic Doctor Consulting</span> and Medicine Buying Mobile App</h2>
                            <h5>A case study on Ayuvani, an online Homeopathic and Ayurvedic doctors’ consulting and medicine buying services providing a mobile application development project built using the Flutter framework. It provides medical consultation to patients at the comfort of home with understandable and easy to use UI/UX designs.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.TAyuvaniApp} alt="Ayuvani" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Ayuvani</h2>
                            <p>Nowadays, people are using online platforms for all kinds of services, from buying clothes and groceries online to making train and flight reservations. Along with them, many new mobile app concepts are also coming to the market, in which consulting doctors online was the greatest development in the medical and IT sector. With such an idea, our client came to us with a requirement to create an app using which patients can consult the best ayurvedic and homeopathic doctors registered in the application. Not just that, this app also provides a facility for patients to order homeopathic and ayurvedic medicines online.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Healthcare</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Hybrid Mobile App Development</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>4 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Development Time</h5>
                                    <p>-</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CAyuvaniLogo} alt="About Ayuvani" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>Ayuvani App Development Requirements</h2>
                                <div className="case-about-img">
                                    <img src={Images.AyuvaniImg3} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.AyuvaniImg2} alt="Nepal Government Project" />
                                </div>
                                <p>After the COVID-19 pandemic, many people have a fear of even visiting the hospital for even a smaller cause. And for some people, it is hard to get the best doctors, like homeopathic and ayurvedic doctors in their regions. Considering all such scenarios, our client came to us with a mobile app development project to consult ayurvedic doctors online and buy ayurvedic medicines online as prescribed by the doctor.</p>
                            </div>
                            <div className="case-about-box">
                                <div className="client-con-row">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <h5>Doctors Panel</h5>
                                            <p>From which, doctors can register their profile, verify their degrees, medical practice licenses, and certifications, add their pictures, and update their case studies.</p>
                                            <h5>Patients Panel</h5>
                                            <p>Patients can create their profiles and add their medical history and allergies, for doctors and this app to better suggest medicines based on that.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="case-about-img">
                                    <img src={Images.AyuvaniImg1} alt="Nepal Government Project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-case-solution">
                <div className="container">
                    <div className="row">
                        <div className="case-solution-con">
                            <h2>Our Development Approach</h2>
                            <p>We gathered, analyzed, and understood the client's requirements. The client wanted to build an app for both Android and iOS devices within a certain budget. So, we suggested developing a cross-platform or hybrid mobile app using Flutter and a whole app development roadmap.</p>
                            <p>Once confirmation was received for the development approach from the client, we aligned our trusted senior Flutter Developers with 4+ years of experience in similar developments. He suggested some additional functionalities, like login options like using OTP or Password and ID, two options for treatment selection type, body constitution analysis, featured doctors’ profile browsing and their profile updates, and some quick links. We approved our suggestions from the client’s end, built this application and delivered this cutting-edge Ayuvani Mobile Application to the client in just a few months as two flutter developers were working on it together.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-app-screen">
                <img src={Images.AyuvaniAppScreen} alt="Ayuvani Application Development" />
            </section>

            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Special Features We Implemented on Ayuvani</h2>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AInAppOnlineMedicalStoreIc} alt="Search Filters" />
                                                </div>
                                                <h4>In-App Online Medical Store</h4>
                                                <p>Whenever medicines are prescribed to the patient, they can directly visit this in-app medical store to buy medicines at the best cost and get them delivered to their location quickly.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AAutoInvoicingIc} alt="Add Instructions" />
                                                </div>
                                                <h4>Auto-Invoicing</h4>
                                                <p>Based on the appointment set with the doctor and his/her consultation fees, the auto-invoice is generated with an attached payment link through which the patient can pay effortlessly.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AHealthcareFeedsIc} alt="Apply Promo Codes" />
                                                </div>
                                                <h4>Healthcare Feeds</h4>
                                                <p>This feature allows doctors to share their success stories and latest medical news with the patients and fellow doctors to keep everyone updated on what they are up to.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AMedicineFiltersBasedOnHeathRecordIc} alt="Choose Payment Options" />
                                                </div>
                                                <h4>Medicine Filters Based on Heath Record</h4>
                                                <p>Different people have different allergies and different cures. And considering their health record, this filter feature automatically filters medicines based on patients’ health records.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="results-main">
                <div className="container">
                    <div className="row">
                        <h2>Outcomes</h2>
                        <p>Developing a hybrid mobile app with some automatic functionalities wasn’t an easy task for our developers. They faced many difficulties and errors, but gladly, their research skills and smart working approaches paid off. And we were able to deliver the seamlessly working Ayuvani mobile application to our client, which met their expectations and objectives.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>
    )
}

export default Ayuvani