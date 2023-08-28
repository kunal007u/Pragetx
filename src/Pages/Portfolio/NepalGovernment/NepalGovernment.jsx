import React from 'react'
import "./nepalgovernment.css"
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const NepalGovernment = () => {
    return (
        <>
            <Helmet>
                <title>Nepal Govt. Project Case Study| Flutter Solution | PragetX</title>
            </Helmet>

            <section className="header-top-slider nepali-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Nepal Government Project</h1>
                            <h2><span>Municipal Corporation</span> Online Portal - A Hybrid Mobile App Development Solution</h2>
                            <h5>A case study on the one municipal corporation hybrid mobile app development project that we have done for the Nepal Government in Flutter. This application provides an online medium for citizens of Nepal to file complaints to their local corporators for instant solutions to keep their local area sustainable.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.TNepaliApp} alt="Nepal Government App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Corporation App</h2>
                            <p>The Hanumannagar Municipal Corporation app was developed to ease the ease for local citizens to file reports for the problems they are facing due to insufficient work of the corporation. Using this application, citizens can find the contact information of the corporation officers, ward officers, etc. Citizens can register their profile in the application for corporation references. They can also fill out forms for their different problems and issues. In short, this application is an easy way to reach out to corporations to embrace citizenship awareness and empowerment for better city functioning.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel nepal-government-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Government &amp; Public Sector</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Hybrid Mobile App - Flutter</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>5 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>1 months</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CNepaliLogo} alt="About Corporation App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>The Nepal Government Project Requirement</h2>
                                <div className="case-about-img">
                                    <img src={Images.NepaliImg3} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.NepaliImg2} alt="Nepal Government Project" />
                                </div>
                                <p>They wanted us to develop this municipal corporation mobile application with cross-platform functionalities, which can be used on both iOS and Android mobile devices. They are required to implement two portals: one for admins and another for citizens, with functionalities for profile creation, profile updates, and forms, all accessible from the single home page.</p>
                            </div>
                            <div className="case-about-box">
                                <p>Spreading awareness of better citizenship is necessary for every government, and the Nepal government had the vision to provide their citizens with an online platform to easily reach out to them. Therefore, their technical representative came to us after reading positive reviews about PragetX's work from Google Reviews.</p>
                                <div className="case-about-img">
                                    <img src={Images.NepaliImg1} alt="Nepal Government Project" />
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
                            <h2>Our Solution</h2>
                            <p>We listened to all the requirements that the client conveyed to us. After a deep requirement analysis, we came up with a solution to develop the application in a Flutter tool using the DART programming language and a proven project delivery timeline. Once we received approval from the client’s end, we started to figure out the right profile to align for this development.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.NepaliAppScreen} alt="Nepal Government App" />
            </section>

            <section class="our-case-solution">
                <div class="container">
                    <div class="row">
                        <div class="case-solution-con">
                            <h2>Development Approach</h2>
                            <p>We already had approved the mobile app development approach from the client's end, but the only thing left was to align the right development team for the implementation as it was a huge and reputed project (Government & Public Sector). After countless resumes and in-house team analysis, we created a development team of 4 members for this project: one was the technical team leader with 10+ years of industry experience, and three flutter developers with 3-7 years of industry experience.</p>
                            <p>Each team member has great problem-solving skills, professionalism, and impressive communication skills with clients, which is our star company policy. As the flutter library codes and directories keep changing all the time, it was quite challenging for a team to maintain the application's working condition. They had to check the libraries each and every day.</p>
                            <p>Luckily, despite all hurdles, their positive working attitude and calm nature came as a great help and helped us deliver the project before the given deadline with perfection.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-key-features pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Specific Features</h2>
                        </div>
                        <div className="case-key-box">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Citizen Panel</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Corporation Panel</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.ProfileCreation} alt="Profile Creation and Edits" />
                                                </div>
                                                <h4>Profile Creation and Edits</h4>
                                                <p>User–friendly profile registration and edit forms in the native language that any naive user can fill out without any hurdles.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.EasyAccessCorpInfoSvg} alt="Easy to access corporation information" />
                                                </div>
                                                <h4>Easy to access corporation information</h4>
                                                <p>As we have used the native language, any user can easily understand in which tab they can find which information.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.ImportantNoticesSvg} alt="Important Notices" />
                                                </div>
                                                <h4>Important Notices</h4>
                                                <p>The latest news about the corporation's new projects and circulars can be found here. Users will also get a pop-up on updates done on this page.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.FormsSvg} alt="Forms" />
                                                </div>
                                                <h4>Forms</h4>
                                                <p>Citizens can fill out different forms for different requirements, such as filing complaints, suggestions, problem reporting, survey forms, etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.ProfileCreation} alt="Profile Creation" />
                                                </div>
                                                <h4>Profile Creation</h4>
                                                <p>Corporation officers of Nepal have to register their profiles in the app, which must be verified by their unique identification numbers.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NotifAlerts} alt="Notification on each form availability" />
                                                </div>
                                                <h4>Notification on each form availability</h4>
                                                <p>Whenever citizens of Nepal fill out forms available in the application, their form submission notification will pop up in those officers' applications.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NoticeBoardSvg} alt="Notice Board" />
                                                </div>
                                                <h4>Notice Board</h4>
                                                <p>All control of the notice board content will be in the hands of corporate officers, along with application image updates.</p>
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
                        <h2>Results</h2>
                        <p>This mobile application is very important for all Nepal corporators' offices and citizens to ensure the better functionality of their government and public sector, which this application indeed provided to them. This application is not available on the play store or application store as they wanted to keep it limited to their region only. But soon, the Nepal government is planning to keep this mobile application on public platforms.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>
    )
}

export default NepalGovernment