import React from 'react'
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import "./keepcoolrecs.css"
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'
const Keepcoolrecs = () => {
    return (
        <>
            <Helmet>
                <title>KeepCoolRecs - iOS Image Recognition Mobile App Development | PragetX</title>
            </Helmet>
            <section className="header-top-slider keepcoolrecs-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>KeepCoolRecs</h1>
                            <h2>An <span>Image Recognition</span> iOS Mobile App Development</h2>
                            <h5>A case study on KeepCoolRecs - an Image Recognition Mobile Application project that helps our client get the percentage of green color from the things that are in the box to find and fix manufacturing errors of those things and fix other industrial manufacturing errors.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.CKeepCoolRecsTop} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Manufacturing</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Native iOS Mobile App Development</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>3 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Development Time</h5>
                                    <p>5 days</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Swift 5, Core data framework, Image Recognition Tool</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.KeepCoolRecsLogo} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>Client’s Requirement</h2>
                                <p>The client was from Germany and wanted a dedicated iOS mobile application for his industrial use to find the percentage of green color from the things he put in the dark box. So, his requirements were for us to implement:</p>
                                <div className="case-about-img">
                                    <img src={Images.CKeepCoolRecsImg1} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.CKeepCoolRecsImg2} alt="Nepal Government Project" />
                                </div>
                                <ul>
                                    <li>App must have access to the camera</li>
                                    <li>When the object is detected, the camera must take 10 (variable) shots/image click in a single click. (1 Sec = 1 Image Shot)</li>
                                    <li>Item compare and measure functionality</li>
                                    <li>Manual settings for image recognition application:</li>
                                </ul>
                            </div>
                            <div className="case-about-box">
                                <ul>
                                    <li>Set Lightening Duration</li>
                                    <li>Set Measuring Time</li>
                                    <li>Set Tolerance</li>
                                    <li>Set Tolerance Range</li>
                                </ul>
                                <div className="case-about-img">
                                    <img src={Images.CKeepCoolRecsImg3} alt="Nepal Government Project" />
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
                            <h2>KeepCoolRecs Development Approach</h2>
                            <p>The concept of KeepCoolRecs was quite interesting, as we had to use the image processing and recognition techniques and tools to complete the application. With being excited about working on this project, there were also some concerns as we were sure to face challenges in implementing image recognition functionality. But still, we took the risk and took the project with the confidence of having great problem-solving skills.</p>
                            <p>We aligned our proficient iOS developer with 7+ years of vast experience in the field to work on this project. He was pretty confident of completing this project within a week, which truly exclaimed our client. The project started, and he faced a little difficulty in getting the percentage of the green colour, but he did some research on solving such a challenge and luckily was able to implement that solution using his logical skills. And confidently, he delivered the KeepCoolRecs - iOS mobile app within 5 days. With this solution, the client was extremely happy, and that’s all -being an IT services providing company, what else do we need?</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="case-app-screen">
                <img src={Images.CKeepCoolRecsBanner} alt="Sofiqe" />
            </section>

            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Special Features of KeepCoolRecs</h2>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.KCRMultipleImageShots} alt="Search Filters" />
                                                </div>
                                                <h4>Multiple Image Shots</h4>
                                                <p>This is the best feature of the KeepCoolRecs, which we implemented. When the user clicks on the click picture icon, it will click multiple shots (as set priorly) on a 1 shot per sec basis.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.KCRGraphicalRepresentation} alt="Add Instructions" />
                                                </div>
                                                <h4>Graphical Representation</h4>
                                                <p>After image shots are taken, it converts them into graphs showing the percentage of green color based on the light reflection percentage.</p>
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
                    <div className="row text-center">
                        <h2>Results</h2>
                        <p>In the end, we were able to deliver this project to the client before his assumed timeline with a better quality and precision rate of around 95%, and as far as it is above 90% precision rate in the image recognition solution, it is considered a good one.</p>
                    </div>
                </div>
            </section>
            <LetsTalk />

        </>
    )
}

export default Keepcoolrecs