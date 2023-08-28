import React from 'react'
import { Helmet } from 'react-helmet'
import "./scrapbook.css"
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const Scrapbook = () => {
    return (
        <>
            <Helmet>
                <title>Scrapbook - Online E-Assignment Sharing Application Development | PragetX</title>
            </Helmet>
            <section className="header-top-slider scrapbook-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Scrapbook</h1>
                            <h2>Native iOS <span>School Time Photo Gallery</span> Mobile App Development Solution</h2>
                            <h5>A case study on Scrapbook, an iOS mobile application that enables users to fill out their school time memories based on awards, photos, hobbies, etc., in the application connected to the iCloud storage system to access it whenever they feel nostalgic about their school time.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.CScrapbookTop} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Scrapbook</h2>
                            <p>Scrapbook is a mobile application purposely built for people who love to keep records of their school time journey based on grades, awards, artwork, photos, sports, etc. This app is for everyone, students, parents, teachers, etc. It allows them to add all these records, which are saved on the iCloud, so they can revisit their old memories whenever they feel nostalgic about old times, using any device and from anywhere they want to.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Education</p>
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
                                    <p>Ongoing</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Swift and iCloud Database</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.ScrapbookLogo} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>Scrapbook Project Requirements</h2>
                                <div className="case-about-img">
                                    <img src={Images.CScrapbookImg3} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.CScrapbookImg2} alt="Nepal Government Project" />
                                </div>
                                <p>During the COVID-19 lockdown situation, everyone had tried new things, revisited old memories, and did many other things, as they were with their family all the time and having work from home settlements. So, considering that situation, our client - who is a teacher from the USA and had an idea to build an application like this and reached out to us through one of the job posting portals.</p>
                            </div>
                            <div className="case-about-box">
                                <p>When we first interacted with the client, he told us what he wanted to implement in his application. Being a business entity, we put our point for him that this application has fewer chances of generating revenue. The thing is, he is not even interested in generating revenues. In addition, he said that this app is for those people who take care of their old-time memories and want to relive and re-enjoy those good moments, which did make a point to us, and we agreed to work on this project.</p>
                                <div className="case-about-img">
                                    <img src={Images.CScrapbookImg1} alt="Nepal Government Project" />
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
                            <p>After having a couple of meetings with the client, one thing we knew that this is iOS application development project is not that difficult, but a lengthy one as it's each page is having form filling activities. Keeping all difficulties aside, we aligned our smartest iOS developer for this project with 5+ years of experience in the field.</p>
                            <p>After getting all the requirements from the client and business analysis team, our iOS developer gave an estimation or app development roadmap to complete the project in a couple of phases to make the development faster. He used Swift - an iOS mobile application development programming language, to build a compelling Scrapbook app that users want to visit again and again without any security and performance concerns.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.CScrapbookBanner} alt="Sofiqe" />
            </section>


            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>App Feature</h2>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.SbGradeBasedEntryIc} alt="Search Filters" />
                                                </div>
                                                <h4>Grade-based Entry</h4>
                                                <p>Once the profile is set up, users can select their grade type from Kindergarten to Grade 13 and add their memories with details like date, time, and notes.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.SbStoryListIc} alt="Add Instructions" />
                                                </div>
                                                <h4>Story List</h4>
                                                <p>Whenever a user adds memories to the grade directory, they can see a list of stories and memories they have entered with briefs like image, date, and time.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.SbListingInfoIc} alt="Add Instructions" />
                                                </div>
                                                <h4>Listing Info</h4>
                                                <p>It is like a dashboard of all the details users entered into the application grade-wise. So, after adding and saving each info, users can see that entry in the list.</p>
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
                        <p>The final product delivered to the client was satisfactory for the client, as we met all the requirements he wanted us to implement. The app is currently used by the client as his own record book. Soon, he will make this Scrapbook app public for global people’s usage.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>
    )
}

export default Scrapbook