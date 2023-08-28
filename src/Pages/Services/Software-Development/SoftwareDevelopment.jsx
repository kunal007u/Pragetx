import React from 'react';
import './softwaredevelopment.css'
import ClientLogoSlider from './../../../Components/Client-Logo-Slider/ClientLogoSlider';
import Images from '../../../Images';
import DiscussProject from './../../../Components/Discuss-Project/DiscussProject';
import TeamTagLine from './../../../Components/Team-tag-line/TeamTagLine';
import Industries from './../../../Components/Industries/Industries';
import TechnologyWork from './../../../Components/Technology-work/TechnologyWork';
import StartUp from './../../../Components/StartUp/StartUp';
import Clientele from './../../../Components/Clientele/Clientele';
import LetsTalk from './../../../Components/Lets-Talk/LetsTalk';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap';

const SoftwareDevelopment = () => {
    return (
        <>
            <Helmet>
                <title>Top Custom Software Development Company in India | PragetX</title>
            </Helmet>
            <div className='software-development'>

                <section className="header-top-slider software-top-slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="header-top-con">
                                    <h1>Custom <span>Software</span> Development</h1>
                                    <h5>
                                        PragetX Technologies LLP offers a wide range of software
                                        development services that can help your organization develop
                                        custom on-demand software, web apps, and mobile apps. Our team
                                        of experienced dedicated software development team can create
                                        top-class features and functionalities that are specific to your
                                        organization's needs. Contact us today to get started.
                                    </h5>
                                    <Link to="/contact-us" className="btn">Let’s Discuss Project <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>

                <ClientLogoSlider />

                <section className="why-best-choose-main pt-0 mt-1">
                    <div className="container">
                        <div className="row">
                            <div className="why-best-choose-con" style={{ width: '100%' }}>
                                <h2>Customization Is What Your Business Needs</h2>
                                <p>
                                    Are you a business providing unique services in the market, need
                                    your industry-specific software solution, or some creative
                                    development idea in mind? Then the custom software development
                                    solution is what your business needs to accelerate your business
                                    processes. At PragetX, we provide a range of bespoke software
                                    development services that can help your organization cater to
                                    specific needs. We have a team of experienced developers who can
                                    create a custom solution tailored to your business, and we'll work
                                    with you every step of the way to ensure that the final product
                                    meets your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us-main soft-about-main pt-0">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h2>How Much a Custom Software Development Can Cost?</h2>
                                        <p>
                                            Custom software development is specifically designed to meet
                                            particular requirements, either of a company or an individual.
                                            Because of its varying requirements and development
                                            approaches, it is hard to find a particular budget for custom
                                            software development.
                                        </p>
                                        <p>
                                            In this age of IT and continuous evolution, don’t let your
                                            budget stop you from being innovative in providing digital
                                            services to your customers.
                                        </p>
                                        <p>
                                            <b>Here are the factors affecting the custom software
                                                development budget:</b>
                                        </p>
                                        <ul>
                                            <li>Software development and serving motive</li>
                                            <li>
                                                Software supportability (Mobile devices, Web-only,
                                                Desktop-specific, Hybrid)
                                            </li>
                                            <li>Data migration requirements</li>
                                            <li>Software size and algorithm processing complexities</li>
                                            <li>UI/UX design type</li>
                                            <li>Integration requirements</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.SoftImage1} alt="Custom Software Development" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DiscussProject />

                <section className="ai-ml-services software-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Custom Software Development Solutions</h2>
                                    <h5>
                                        Hire our developers to build a custom application that meets
                                        your business goals to transition your business processes to
                                        online platforms.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="ai-services-main">
                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.CustomSoftwareDevelopment} alt="Custom Software Development" />
                                        </div>
                                        <h5>Custom Software Development</h5>
                                        <p>
                                            Helping businesses with unique requirements to turn their
                                            vision into a real software project
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.EnterpriseSoftwareDevelopment} alt="Enterprise Software Development" />
                                        </div>
                                        <h5>Enterprise Software Development</h5>
                                        <p>
                                            Helping enterprises manage difficult processes, like ERP, CMS,
                                            HRMS, &amp; Asset management.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.CloneAppDevelopment} alt="Clone App Development" />
                                        </div>
                                        <h5>On-Demand/ Clone App Development</h5>
                                        <p>
                                            Providing on-demand/clone app development solutions, meeting
                                            your unique requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.NFTPlatformDevelopment} alt="NFT Platform Development" />
                                        </div>
                                        <h5>NFT Platform Development</h5>
                                        <p>
                                            Helping NFT enthusiasts create &amp; launch custom NFT marketplace
                                            solutions with many features.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.UIUXDesigning} alt="UI/UX Designing" />
                                        </div>
                                        <h5>UI/UX Designing</h5>
                                        <p>
                                            Providing unique &amp; highly responsive UI/UX design solutions
                                            that perfectly meet your requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.ApplicationMaintenanceQAServices} alt="Application Maintenance & QA Services" />
                                        </div>
                                        <h5>App Maintenance &amp; QA Services</h5>
                                        <p>
                                            Hire dedicated QA testers from PragetX for your Web, Desktop,
                                            Android, and iOS applications.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.ApplicationMigrationSolutions} alt="Application Migration Solutions" />
                                        </div>
                                        <h5>App Migration Solutions</h5>
                                        <p>
                                            Transition on-premises applications to the cloud to make them
                                            a part of modern IT solutions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.SoftwareDevelopmentConsultation} alt="Software Development Consultation" />
                                        </div>
                                        <h5>Software Development Consultation</h5>
                                        <p>
                                            Software development guidance for businesses seeking
                                            information to develop their dream projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DedicatedHelpDeskSupport} alt="Dedicated Help Desk Support" />
                                        </div>
                                        <h5>Dedicated Help Desk Support</h5>
                                        <p>
                                            Fixing technical issues in business software solutions for
                                            better online services' resilience.
                                        </p>
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
                                        <img src={Images.SoftImage2} alt="Custom Software Development Company" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h2>
                                            Why Trust PragetX As Your Custom Software Development Company?
                                        </h2>
                                        <ul>
                                            <li>
                                                Experts advise for selecting technology stacks &amp;
                                                architectures
                                            </li>
                                            <li>Precision in software architecture</li>
                                            <li>Goal-driven intuitive UI/UX designing</li>
                                            <li>High application reliability and resilience</li>
                                            <li>Your Clients Are Our Clients, We Care Equally</li>
                                            <li>Flexible, More Convenient and Budget-Friendly</li>
                                            <li>
                                                Meet your unique business requirements for software
                                                development
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TeamTagLine />

                <Industries />

                <section className="ai-ml-we-work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Our Custom Software Development Approach</h2>
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
                                        <h5>Understanding Requirements</h5>
                                        <p>
                                            Our team of sales executives and business analysts will
                                            analyze the project requirements to devise the best solution.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.UIUX} alt="UI/UX" />
                                        </div>
                                        <h5>UI/UX</h5>
                                        <p>
                                            We design an interactive UI/UX for the software development
                                            project that meets the user expectation levels.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.Development} alt="Development" />
                                        </div>
                                        <h5>Development</h5>
                                        <p>
                                            Developers at PragetX maintain the cognitive engagement with
                                            clients to ensure that their expected results are met.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.QATesting} alt="QA & Testing" />
                                        </div>
                                        <h5>QA &amp; Testing</h5>
                                        <p>
                                            We apply all necessary QA practices and testing algorithms to
                                            find and resolve potential software bugs and exceptions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.ContinuousDevelopment} alt="Deployment" />
                                        </div>
                                        <h5>Deployment</h5>
                                        <p>
                                            Once all changes and bugs are fixed, we deploy the software to
                                            the respected client's servers for their use.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.BackSupport} alt="Back-Support" />
                                        </div>
                                        <h5>Back-Support</h5>
                                        <p>
                                            Our work doesn’t end with project delivery, we provide
                                            dedicated back support to software till the agreed duration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ClientTeleMap scrollTarget={6200} />

                <TechnologyWork />

                <StartUp />

                <Clientele />

                <LetsTalk />

            </div >
        </>
    )
}

export default SoftwareDevelopment
