/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import './hireuiuxdeveloper.css';
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider';
import Images from '../../../Images';
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine';
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap';
import Clientele from '../../../Components/Clientele/Clientele';
import StartUp from '../../../Components/StartUp/StartUp';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HireDevelopersForm from '../../../Components/HireDevelopersForm/HireDevelopersForm';

const HireUIUXDeveloper = () => {
    return (
        <div className='hire-ui-ux-developer'>

            <Helmet>
                <title>Hire the best Web and Mobile UI UX Designers | Dedicated UI UX Consultants | PragetX</title>
            </Helmet>

            <section className="header-slider hire-ui-ux-top hire-developers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="header-top-con">
                                <h1>Hire Dedicated <br /><span>UI/UX</span> Designers</h1>
                                <h5>Creating well thought, arranged, designed, and made responsive UI/UX designs of your web or mobile application that can help businesses improve their online visitor retention rate leading to better leads and thus better business revenue. Hire 3 - 9+ years experienced, dedicated UI/UX designers to imprint their creativity into your web and mobile UI/UX designing project.</h5>
                                <ul>
                                    <li>NDA Protected</li>
                                    <li>End-to-end solutions</li>
                                    <li>Agile process development</li>
                                    <li>100% on-time delivery</li>
                                    <li>Guaranteed Clearance on Stores</li>
                                    <li>Part-Time Hiring, Full-Time Hiring, Hourly Hiring <b>@$15/hour*</b></li>
                                </ul>
                                <Link to="#" className="btn">Get A Rate Card Now <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <HireDevelopersForm />
                        </div>
                    </div>
                </div>
            </section>

            <ClientLogoSlider />

            <section className="we-are-tag-line hire-tag-line">
                <div className="container">
                    <div className="row">
                        <div className="we-are-tag-line-con">
                            <h2>You're not just recruiting a developer, you're recruiting a leader</h2>
                            <h4>At PragetX, such is the commitment &amp; responsibilities our teammates are trained to take while onboarding to your company for any dedicated work</h4>
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
                                    <h2>Why Hire Dedicated UI/UX Designers?</h2>
                                    <p>Who doesn’t love to enjoy good company, especially when they come to your website or mobile app to get some information and buy something! Speaking of which, you being a knowledge-sharing or e-commerce platform-based business must leverage your users with attractive and engaging user experiences through the most responsive and aesthetic UI/UX designs. The well-planned and designed UI not only increases your use-retention rate but also leads to exceptional brand awareness.</p>
                                    <p>That’s where PragetX comes to play an essential role in providing a pool of extremely passionate and experienced team of UI/UX designers - in working with graphics, motions, event and industry-leading, and state-of-the-art UI designs, levitating your brand awareness to the next parallel.</p>
                                    {/* <a href="#" className="btn">Know More <i className="fa fa-angle-right" aria-hidden="true"></i></a> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.UIUXAboutImg} alt="Custom Software Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-best-choose-main pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con" style={{ width: '100%' }}>
                            <h2>Your Ideal Team of UI/UX Designers</h2>
                        </div>
                    </div>
                </div>
                <div className="about-us-main why-trust best-fit technical-expertise">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h4>Technical Expertise of Our UI/UX Designers</h4>
                                        <ul>
                                            <li>A pool of 3-9+ Years of experience having UI/UX designers</li>
                                            <li>Proficiency in tools and technologies: Figma, Sketch, Adobe XD, Adobe Photoshop, Adobe Illustrator, Bootstrap, HTML5, XHTML, and CSS.</li>
                                            <li>Hands-on experience in designing UI/UX designs for different industrial projects (Web and App) in different languages.</li>
                                            <li>Flexible technical and designing skills to meet your IT project UI/UX design perspective and expectations.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h4>What You’ll Get From PragetX?</h4>
                                        <p>Get the best breed of UI/UX designing solutions and services from PragetX:</p>
                                        <ul>
                                            <li>Eye-catchy and responsive app UI/UX</li>
                                            <li>Cognitive collaboration and communication</li>
                                            <li>Fewer project failure risks</li>
                                            <li>Better customer experience and satisfaction</li>
                                            <li>Flexible budget</li>
                                            <li>On-time delivery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 text-center">
                                    <Link to="https://calendly.com/pragetx" className="btn">Book A Call Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ai-ml-services software-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Hire Dedicated UI/UX Designers from PragetX</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.UIUXConsultants} alt="Custom Software Development" />
                                    </div>
                                    <h5>UI UX Consultants</h5>
                                    <p>Want to build your unique brand awareness from through specific brand palette selection and logo designing to the most responsive UI/UX designing for your business-critical software applications? Consult our expert UI/UX designers today!</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WebUIUXDesigners} alt="Enterprise Software Development" />
                                    </div>
                                    <h5>Web UI UX Designers</h5>
                                    <p>Every brand is unique, and websites from the start are the faces of the brands, providing their business and service offerings’ information. Hire our creative UI/UX designers to elegantly and technically design your web UI/UX for better user retention.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.MobileAppUIUXDesigners} alt="Clone App Development" />
                                    </div>
                                    <h5>Mobile App UI UX Designers</h5>
                                    <p>Give your purposeful mobile application a touch of creativity and aesthetic-look to let users enjoy your app surfing experience. Hire our UI/UX designers today by trusting their creative approaches and ideas to make your mobile app a modern touch.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WireframePrototypeDesigners} alt="NFT Platform Development" />
                                    </div>
                                    <h5>Wireframe and Prototype Designers</h5>
                                    <p>Hire our highly experienced, intelligent, and research-first approaching UI/UX designers to craft your raw web or mobile app development ideas into the creative, well-planned, and well-arranged wireframe, prototype, and MVP design models.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.UIInteractionDesigners} alt="UI/UX Designing" />
                                    </div>
                                    <h5>UI Interaction Designers</h5>
                                    <p>Turn your well-crafted user interface into the most responsive and engaging one by hiring the best UI/UX designers from PragetX who understand the requirement of clean and engaging UI - CSS that provides users with the best-in-class app surfing experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.LogoDesigners} alt="Application Maintenance & QA Services" />
                                    </div>
                                    <h5>Logo Designers</h5>
                                    <p>Empower your brand with the strongest and most obvious identity, which is by designing a well-sounded logo that loudly speaks for your brand and business services. Hire our intelligent and highly experienced logo designers and graphic designers today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TeamTagLine />

            <section className="core-values-main">
                <div className="container">
                    <div className="client-con-row">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="top-features">
                                    <h2>The PragetX - UI UX Designer Staff Augmentation Advantages</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Skip Sourcing, Beat Talent Crunch, Save Time</span>
                                                <p>Access to a pool of experienced, dedicated UI/UX Designers for hire in less time by adopting modern and quick sourcing &amp; hiring processes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Say No to Pre and Post-Hiring Responsibilities</span>
                                                <p>When outsourcing the whole UI/UX talent hiring process to the professional and dedicated HR team, why worry? We have you covered!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Always Get Your Beta Ready</span>
                                                <p>The shortlisted profiles aren’t meeting your UI/UX profile requirements? Don’t worry! We have a beta list of pre-vetted UI/UX Designers ready for you.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Absolute Confidentiality Agreement</span>
                                                <p>We understand that you don’t want to disclose your collaboration with us. That’s completely fine! Get the absolute partnership integrity with PragetX.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Utmost Transparency</span>
                                                <p>Be updated with the development approach and progress of your UI/UX Designing. Transparency at PragetX is a must that we follow.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Save on Salary</span>
                                                <p>The dedicated UI/UX Designers’ hiring cost at PragetX is quite budget-friendly and will help you save up to 50% on employee salary with top-notch IT services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="discuss-your-project-main">
                <div className="container">
                    <div className="discuss-your-project-con">
                        <div className="discuss-left">
                            <h3>Leverage PragetX Technologies LLP to be your extended web and mobile app development team, playing a key role in your business’s growth.</h3>
                        </div>
                        <div className="discuss-btn">
                            <Link to="/become-partner" className="btn">Become A Partner <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={5900} />

            <section className="ai-ml-we-work hiring-process-main">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>4-Step Easy UI/UX Designers Hiring Process</h2>
                                    <h5>A simple 4-step easy hiring process to hire your ideal-fit dedicated UI/UX Designers while ensuring time and cost-effectiveness.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="hiring-process">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="process-box">
                                        <div className="process-ic">
                                            <img src={Images.HProcessUnderstandingRequirements} alt="Understanding Requirements" />
                                        </div>
                                        <p>Share Your UI/UX Design Requirements</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="process-box">
                                        <div className="process-ic">
                                            <img src={Images.HProcessUIUX} alt="UI/UX" />
                                        </div>
                                        <p>We’ll shortlist the most ideal talent</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="process-box">
                                        <div className="process-ic">
                                            <img src={Images.HProcessDevelopment} alt="Development" />
                                        </div>
                                        <p>Hire the right-fit UI/UX Designers for the project</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="process-box">
                                        <div className="process-ic">
                                            <img src={Images.HProcessQATesting} alt="QA & Testing" />
                                        </div>
                                        <p>Onboard the talent &amp; Start the innovations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StartUp />

            <section className="ai-ml-we-work">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our UI/UX Design and Development Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UnderstandingRequirements} alt="Understanding Requirements" />
                                    </div>
                                    <h5>Analysis &amp; Brainstorming</h5>
                                    <p>Gathering and analyzing clients’ requirements with the current technology and market trends to come up with quality design ideas.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UIUX} alt="UI/UX" />
                                    </div>
                                    <h5>Architecting</h5>
                                    <p>For user-friendly UI/UX design, it is compulsory to figure out and put the right element in the right place for users to better understand application usability.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Development} alt="Development" />
                                    </div>
                                    <h5>Wireframing &amp; Prototyping</h5>
                                    <p>A detailed design flow representation of application elements helps clients understand how the IT software project development flow would go.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.QATesting} alt="QA & Testing" />
                                    </div>
                                    <h5>Visualization</h5>
                                    <p>Designing UI/UX elements by considering all factors, such as branding considerations, audience type, users’ liking areas, and measures to get more clicks and conversions.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ContinuousDevelopment} alt="Deployment" />
                                    </div>
                                    <h5>UI Development:</h5>
                                    <p>Aligning business objectives with a UI design project to ensure that your web and mobile app UI/UX design and different advertising templates presents your brand.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.BackSupport} alt="Back-Support" />
                                    </div>
                                    <h5>Responsiveness Testing</h5>
                                    <p>Coding UI/UX designs in such a way that it clearly works as it suppose to do and testing it with all possible conditions to check the responsiveness of the product testing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clientele />

        </div>

    )
}

export default HireUIUXDeveloper
