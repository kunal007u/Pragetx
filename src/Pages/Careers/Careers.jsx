import React, { useEffect, useState } from 'react'
import "./careers.css"
import { Helmet } from 'react-helmet'
import Images from '../../Images'
import EthicalCareer from '../../Components/EthicalCareer/EthicalCareer'
import StartUp from '../../Components/StartUp/StartUp'
import axios from 'axios'
import BusinessDevelopmentExecutive from '../../Components/CareersForm/BusinessDevelopmentExecutive'
import SrFlutterDeveloper from '../../Components/CareersForm/SrFlutterDeveloper'
import SrHRGeneralist from '../../Components/CareersForm/SrHRGeneralist'
import BusinessAnalyst from '../../Components/CareersForm/BusinessAnalyst'




const Careers = () => {


    return (
        <>
            <Helmet>
                <title>Career Opportunities at PragetX | IT Jobs in Ahmedabad</title>
            </Helmet>

            <section className="header-top-slider career-top-slider">
                <div className="career-video-bg video">
                    {/* <video autoplay="autoplay" class="career-video" width="100%" height="100%">
                  <source src="career-top.mp4" type="video/mp4">
              </video> */}
                    {/* <iframe src="career-top.mp4" style="with:100%;height: 100%;" controls="0" autoplay="1" allowfullscreen=""></iframe>  */}
                    {/* <iframe width="100%" id="dice-frame" height="100%" src="career-top.mp4" frameborder="1" allowfullscreen=""></iframe> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Team That Everyone <br />Wants to <span>Be Part of</span></h1>
                            <a href="#hire-main" className="btn" >Join Our Visionary Team <i className="fa fa-angle-right" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-best-choose-main">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con">
                            <h2>Why Work With PragetX?</h2>
                            <p>At PragetX, we ensure that our team has a great balance between personal and corporate life. Being a
                                thriving IT firm, we give priority to people with a startup mindset, a positive attitude towards
                                learning new things, higher grasping power, creativity, focus, passion, and most importantly, team
                                player quality. We value quality work delivery within the promised timeline.</p>
                        </div>
                    </div>
                    <div className="ethical-career-main">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="ethical-career-box">
                                    <div className="ethical-img">
                                        <img src={Images.EthicalImg} alt="Accelerate Your Career" />
                                    </div>
                                    <div className="ethical-career-con">
                                        <h4>Accelerate Your Career with PragetX</h4>
                                        <p>Continuous learning, analytical skills, and following the company’s mission, vision, and
                                            values at the workplace would help your/any goal-oriented personality build an ethical
                                            career.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="culture-work-box">
                                    <div className="culture-work-img">
                                        <img src={Images.CultureWorkImg} alt="Best Culture and Work Environment" />
                                    </div>
                                    <div className="ethical-career-con">
                                        <h4>Best Culture and Work Environment</h4>
                                        <p>We like to motivate our team in every difficult phase, giving them the confidence to 'Just Do
                                            It!', and bring out their creativity, like a friend, mentor, or well-wisher would do. This
                                            culture at PragetX makes it a great place to work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EthicalCareer />
            <section className="work-life-main perks-of-work pt-1">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Our Work Ethics</h2>
                        <h5>Positive work values, ethics, and attitude towards dealing with clients and project difficulties <br />define PragetX as your ideal IT team</h5>
                    </div>
                    <div className="work-life">
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.ClientsNumberOne} alt="5 Working Days a Week" />
                                    <span>Clients Number One</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PositiveAttitude} alt="Flexible Work" />
                                    <span>Keep Positive Attitude</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.FollowLeader} alt="Experienced Team" />
                                    <span>Follow Team Leader</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.OpenSuggestions} alt="Diversify Culture" />
                                    <span>Always Open to Suggestions</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.MoralHumility} alt="Embracing Change" />
                                    <span>Moral Humility</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.RememberGoals} alt="Referral Programs" />
                                    <span>Remember Company's Goal</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PreparedChallenges} alt="Valid Paid Leaves" />
                                    <span>Be Prepared For Challenges</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.StayFocused} alt="Work as a Team" />
                                    <span>Always Be Focused</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.BeYourself} alt="Value Suggestions" />
                                    <span>Be Yourself</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StartUp />
            <section className="work-life-main perks-of-work">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Perks of Working With PragetX</h2>
                        <h5>At PragetX, we stand by our mantra "You Grow, We Grow". Here employees are considered an important
                            <br />family member and each action aim to improve their knowledge. Work with us and gather <br />the
                            life-changing knowledge you need to thrive in this industry.</h5>
                    </div>
                    <div className="work-life">
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc1} alt="5 Working Days a Week" />
                                    <span>5 Working Days a Week</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc2} alt="Flexible Work" />
                                    <span>Flexible Work</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc3} alt="Experienced Team" />
                                    <span>Experienced Team</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc4} alt="Diversify Culture" />
                                    <span>Diversify Culture</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc5} alt="Embracing Change" />
                                    <span>Embracing Change</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc6} alt="Referral Programs" />
                                    <span>Referral Programs</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc8} alt="Valid Paid Leaves" />
                                    <span>Valid Paid Leaves</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc7} alt="Work as a Team" />
                                    <span>Work as a Team</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc9} alt="Value Suggestions" />
                                    <span>Value Suggestions</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc10} alt="Skill Matters Most" />
                                    <span>Skill Matters Most</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc11} alt="Build Future Career" />
                                    <span>Build Future Career</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-life-box">
                                    <img src={Images.PWorkIc12} alt="Goodies and Gifts" />
                                    <span>Goodies and Gifts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="insights-main pt-1">
                <div className="con-head text-center">
                    <h2>Insights</h2>
                    <h5>PragetX team is passionate about delivering excellence and <br />committed to helping clients scale to new heights</h5>
                </div>
                <ul className="cb-slideshow">
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                    <li><span>&nbsp;</span></li>
                </ul>
            </section>

            <section className="we-are-hiring-main" id="hire-main">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>We're Hiring!</h2>
                        <h5>We at Pragetx are looking for skillful and talented tech geniuses and creative personalities to be a
                            part of <br />this evolving and scaling team of visionary leaders who can bring value to this company
                            <br />that has successfully delivered 45+ projects within a shorter time.</h5>
                    </div>
                    <div className="we-are-hiring">
                        <div className="row gy-5">


                            <div className="col-lg-4 col-md-6">
                                <div className="hiring-box">
                                    <h5>Business Development Executiver</h5>
                                    <p><span>Experience:</span> 1+ years</p>
                                    <p><span>Location:</span> Ahmedabad</p>
                                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#hire-modal1">Apply Now</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="hiring-box">
                                    <h5>Sr. Flutter Developer</h5>
                                    <p><span>Experience:</span> 2-4 years</p>
                                    <p><span>Location:</span> Ahmedabad</p>
                                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#hire-modal2">Apply Now</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="hiring-box">
                                    <h5>Sr. HR Generalist</h5>
                                    <p><span>Experience:</span> 1+ years</p>
                                    <p><span>Location:</span> Ahmedabad</p>
                                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#hire-modal3">Apply Now</a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="hiring-box">
                                    <h5>Business Analyst</h5>
                                    <p><span>Experience:</span> 2+ years</p>
                                    <p><span>Location:</span> Ahmedabad</p>
                                    <a href="#" className="btn" data-bs-toggle="modal" data-bs-target="#hire-modal4" >Apply Now</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-our-office-main pt-1">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Our Offices</h2>
                        {/* <h5>We provide cutting edge web and mobile app solutions</h5> */}
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.TimeSquare} alt="Corporate Office" />
                                </div>
                                <div className="office-con">
                                    <h5>Corporate Office</h5>
                                    <p>16, Ground floor, Time Square 1, Thaltej-Silaj Road, Thaltej, Ahmedabad, Gujarat 380059</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.ElanzaCrest} alt="Registered Office" />
                                </div>
                                <div className="office-con">
                                    <h5>Registered Office</h5>
                                    <p>501, Pride-410, Nr. Zebar School, B/H Copper Stone, Thaltej, Ahmedabad, Gujarat 380059</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.USOffice} alt="US Office" />
                                </div>
                                <div className="office-con">
                                    <h5>US Office</h5>
                                    <p>PO Box 531 Centerville ga <br />31028</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.UKOffice} alt="UK Office" />
                                </div>
                                <div className="office-con">
                                    <h5>UK Office</h5>
                                    <p>379 New Chester Road, Birkenhead, <br />Liverpool UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <BusinessDevelopmentExecutive jobId={"hire-modal1"} />
            <SrFlutterDeveloper jobId={"hire-modal2"} />
            <SrHRGeneralist jobId={"hire-modal3"} />
            <BusinessAnalyst jobId={"hire-modal4"} />


        </>
    )
}

export default Careers