import React from 'react'
import { Helmet } from 'react-helmet'
import "./elctutorial.css"
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const ElcTutorial = () => {
    return (
        <>
            <Helmet>
                <title>A UK-based E-Learning WordPress Website Development Project | PragetX</title>
            </Helmet>

            <section className="header-top-slider elc-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>ELC Tutorial</h1>
                            <h2>An UK-based <span>E-Learning</span> WordPress Website Development Project</h2>
                            <h5>A case study on ELC Online - a UK-based e-learning WordPress Website Development Solution that provides rewarding learning experiences to students. Here, students can receive a reward after they complete an assignment or course, which can be utilized to purchase books and references available on the website.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.ElcProduct} alt="ELC Tutorial" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About ELC Tutorial</h2>
                            <p>ELC Tutorial stands for the Every Lesson Counts Tutorial, which is an e-learning website based in the UK. It specializes in providing tutoring education for 11+ entrance tests, St. Anselm's tests, and Upton Hall tests, along with Maths and English tuition classes for 3-6-year-old kids and GCSEs. Parents can come to the client's website, learn about the courses this agency is providing, and book a consultation slot with the tutor. Once all is finalized, the tutor will have a live hour of teaching per week, booster homework, and live booster lessons on Sunday.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Education, E-Learning</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>WordPress Website Development</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>1 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>13 Hrs / 1 month</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>WordPress</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CElcLogo} alt="About ELC Tutorial" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>The ELC Tutorial Website Requirement</h2>
                                <div className="case-about-img">
                                    <img src={Images.ElcImg1} alt="About ELC Tutorial" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.ElcImg2} alt="About ELC Tutorial" />
                                </div>
                                <p>The client is based in the UK. He was already having an ELC tutorial website developed in Wix. But he wanted us to build another website on WordPress, which could provide a general information representation of his tutoring services. We can say this new website development is his service portfolio site, which is linked to his previous website.</p>
                            </div>
                            <div className="case-about-box">
                                <p>He wanted us to add new features to the website - once a student completes any course on the website, he/she would be rewarded with some e-coins, which could be used to claim new study materials from the website.</p>
                                <div className="case-about-img">
                                    <img src={Images.ElcImg3} alt="About ELC Tutorial" />
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
                            <p>We gathered and understood the client's requirements clearly and aligned our highly experienced (5+ years) WordPress developer for this project. He did some research to implement those two unique features in the client's WordPress website. He came up with the solution and started to build the website after getting approval from the client for the WordPress website development roadmap. </p>
                            <p>Our WordPress developer developed the exact website the client wanted with four header points:</p>
                            <ul>
                                <li>All Courses - showing online courses</li>
                                <li>Our Services - linked to the main ELC tutorial website</li>
                                <li>ELC Homework - Student login is required to access the homework section.</li>
                                <li>Sign In -  to get personal account details and manage the account</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-app-screen">
                <img src={Images.ElcTutoringBanner} alt="About ELC Tutorial" />
            </section>


            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>ELC Online Website Features</h2>
                            <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br />functionalities for the ELC Online Website.</p>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.CourseCompletionRewards} alt="Course Completion Rewards" />
                                                </div>
                                                <h4>Course Completion Rewards</h4>
                                                <p>Whenever a student completes a course, he/she would be rewarded with virtual coins, which he/she could use to buy course materials.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.MainWebsiteLinking} alt="Main Website Linking" />
                                                </div>
                                                <h4>Main Website Linking</h4>
                                                <p>Whenever an ELC online website visitor clicks on, "Our Services", they will be redirected to the main website. </p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.OnlineHomeworkWindow} alt="Online Homework Window" />
                                                </div>
                                                <h4>Online Homework Window</h4>
                                                <p>This section keeps the record of all homework completed to date, along with awaiting one with deadlines.</p>
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
                        <p>After the COVID-19 pandemic crisis, every business approach has changed along with kids' education. The ELC tutoring website represents the exact example of that change, which is helping students pursuing primary and secondary education to continue to learning approach by providing online tutoring services. The total development time for this website took around 352 Hrs, but it indeed paid off.</p>
                        <p>Using ELC online tutoring services, parents can ensure the growth of their children and their education standards, even in situations like the COVID-19 pandemic. </p>
                    </div>
                </div>
            </section>
            <LetsTalk />

        </>
    )
}

export default ElcTutorial