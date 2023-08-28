import React from 'react'
import "./internshipTraining.css"
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import EthicalCareer from '../../../Components/EthicalCareer/EthicalCareer'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const InternshipTraining = () => {
    return (

        <>
            <Helmet>
                <title>IT Internship & Training Programs | PragetX</title>
            </Helmet>

            <section className="header-top-slider internship-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="header-top-con">
                                <h1>PragetX <span>Internship &amp; Training</span> Program</h1>
                                <h5>Today’s Student is Tomorrow’s Potential Leader</h5>
                                <p>Embrace yourself to work in the leading-edge technological world with an evolving firm that has the potential to kick-start your career as an IT professional.</p>
                                <Link to="/contact-us" className="btn">Apply Now <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientLogoSlider />
            <section className="why-best-choose-main partner-main">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con" style={{ width: '100%' }}>
                            <h2>Internship &amp; Training Experience at PragetX</h2>
                            <p>Jump-start your career as a developer, marketer, and designer with the PragetX Internship program with the training opportunity to get trained with an experienced IT team. A well-researched, well-planned, and free-of-cost IT training program for just-graduated students who have the enthusiasm to take a productive approach and kick-start their IT industry journey with hands-on experience in working on clients’ projects.</p>
                            <p>As a PragetX intern, you’ll not only gain experience in working on live clients’ projects but also develop skills to deal with business challenges, brainstorm and figure out new approaches to development, and most importantly, establish better communication &amp; collaboration with the team members.</p>
                            <p>Thrive in the IT industry with PragetX as you lead the way while bringing out the best of you with necessary skill development for the industry.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us-main why-trust best-fit technical-expertise who-you-are">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h4>Who You Are?</h4>
                                    <p>You must be a student currently pursuing your college education in IT, Computer Science, or relevant streams. You’re a college graduate with a relevant degree and skills to work in the IT sector. Likewise, you’re looking for a head start on your career as a web or mobile app developer. Then the PragetX internship program is solely made for you to experience the real industry workload with free IT certification courses. Explore today!</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h4>What You Will Do At PragetX?</h4>
                                    <p>The internship and training program at PragetX is carefully designed by considering industry requirements. This program ensures that you’ll get trained with experts, work side-by-side with the developers' team, learn IT communication & collaboration tactics to retain clients, problem-solving mindset, and much more. Give your eagerness a chance and enroll in the PragetX internship and training program today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us-main why-trust follows">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.InternShipTraining} alt="Custom Software Development Company" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Intern Eligibility Criteria</h2>
                                    <ul>
                                        <li>Education qualification: BE/ME (IT, CE, or CS), BSc./MSc. (Computer), or relative IT degree<br />
                                            <ol>
                                                <li>A university student (about to graduate)</li>
                                                <li>A university graduate</li>
                                            </ol>
                                        </li>
                                        <li>Worked on personal or college IT projects.</li>
                                        <li>Basic knowledge of tools &amp; technologies that you’ll be dealing with throughout your career as a developer.</li>
                                        <li>Professional communication and collaboration skills to discuss projects or give suggestions to team members.</li>
                                        <li>Adaptive to learning new things and exploring new opportunities (Proactive Research &amp; Development Skills)</li>
                                        <li>Having a problem-solving mindset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <EthicalCareer />
            <section className="work-life-main perks-of-work">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Why Should IT Students Choose PragetX As Your Internship?</h2>
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

            <section className="ai-ml-we-work pb-0 pt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Hiring Process at PragetX</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AppScreening} alt="Application Screening" />
                                    </div>
                                    <h5>Application Screening</h5>
                                    <p>Submit your interview application online with your resume or email it to <Link to="mailto:hello@pragetx.com">hello@pragetx.com</Link>.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.HrInterview} alt="HR Interview Round" />
                                    </div>
                                    <h5>HR Interview Round</h5>
                                    <p>Once we get your resume, HR will screen your CV and call you for a basic introduction interview.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.PersonalRound} alt="Personal Interview" />
                                    </div>
                                    <h5>Personal Interview</h5>
                                    <p>Once you clear your HR round, the PI round will be arranged with the technical person for further interview.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ExperAssess} alt="Experiential Assessment" />
                                    </div>
                                    <h5>Experiential Assessment</h5>
                                    <p>If the technical interviewer agree with your PI, he will share a small technical assignment with you with deadline.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Negotiation} alt="Negotiation" />
                                    </div>
                                    <h5>Negotiation</h5>
                                    <p>Once you deliver the assessment and meet the company criteria, the salary negotiation round will come.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Offer} alt="Offer" />
                                    </div>
                                    <h5>Offer</h5>
                                    <p>After the salary agreement of both parties, the offer letter will be shared with you with the joining date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-key-features interns-main pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Testimonials of Interns</h2>
                            {/* <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br>functionalities for the ELC Online Website.</p> */}
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Parth} alt="Parth Patel - ReactJS Developer" />
                                                </div>
                                                <h4>Parth Patel - ReactJS Developer</h4>
                                                <h6><b>A Great Place to Work for Freshers</b></h6>
                                                <p>Staff is Friendly, Flexible Timings, 5 days working. Deadlines are very strict so need to buck up, which is also good to improve our working speed.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Pramod} alt="Pramod Pipaliya - Data Scientist" />
                                                </div>
                                                <h4>Pramod Pipaliya - Data Scientist</h4>
                                                <h6><b>Excellent Work Place</b></h6>
                                                <p>Nice place to Work. All Members are friendly and co-ordinate with each other for 5 day's working, Supportive, Friendly, Career growth, so no downside for my review.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Sagar} alt="Sagar Patel - NodeJS Developer" />
                                                </div>
                                                <h4>Sagar Patel - NodeJS Developer</h4>
                                                <h6><b>Proud of PragetX and Team</b></h6>
                                                <p>Good job with good work, so I have no problem....in company.....working with team with enjoyment.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Rugved} alt="Rugved Patel - ReactJS Developer" />
                                                </div>
                                                <h4>Rugved Patel - ReactJS Developer</h4>
                                                <h6><b>Family environment, great place to work</b></h6>
                                                <p>No Unfair Company Policies, On-Time Salary, Family Environment, you will get overtime if you have to work on weekends, Paid Leave, and flexible timing. Startup companies need fast learners.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clientele />
            <LetsTalk />
        </>
    )
}

export default InternshipTraining