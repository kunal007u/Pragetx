import React, { useEffect, useRef, useState } from 'react';
import './hireiosappdevelopers.css';
import ClientLogoSlider from './../../../Components/Client-Logo-Slider/ClientLogoSlider';
import Images from '../../../Images';
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine';
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap';
import StartUp from '../../../Components/StartUp/StartUp';
import Clientele from '../../../Components/Clientele/Clientele';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HireDevelopersForm from '../../../Components/HireDevelopersForm/HireDevelopersForm';

const HireIOSAppDevelopers = () => {
    return (
        <div className='hire-ios-app-developers'>

            <section className="header-slider hire-ios-top hire-developers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="header-top-con">
                                <h1>Hire Dedicated <br /><span>iOS</span> Developers</h1>
                                <h5>
                                    Hire top, well-experienced, and reliable remote iOS developers
                                    for your iOS mobile app development projects that India has to
                                    offer. At PragetX, we have a pre-vetted team of experienced iOS
                                    developers who deliver the most creative iOS app development
                                    solutions prior to the fixed deadline with precision.
                                </h5>
                                <ul>
                                    <li>NDA Protected</li>
                                    <li>End-to-end solutions</li>
                                    <li>Agile process development</li>
                                    <li>100% on-time delivery</li>
                                    <li>Guaranteed Clearance on Stores</li>
                                    <li>
                                        Part-Time Hiring, Full-Time Hiring, Hourly Hiring
                                        <b>@$15/hour*</b>
                                    </li>
                                </ul>
                                <Link to="/" className="btn">Get A Rate Card Now
                                    <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <HireDevelopersForm />
                        </div>
                    </div>
                </div >
            </section>

            <ClientLogoSlider />

            <section className="we-are-tag-line hire-tag-line">
                <div className="container">
                    <div className="row">
                        <div className="we-are-tag-line-con">
                            <h2>
                                You're not just recruiting a developer, you're recruiting a leader
                            </h2>
                            <h4>
                                At PragetX, such is the commitment &amp; responsibilities our
                                teammates are trained to take while onboarding to your company for
                                any dedicated work
                            </h4>
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
                                    <h2>Why Hire Dedicated iOS Developers?</h2>
                                    <p>
                                        With the growing market competition in the IT sector, every IT
                                        company provides experienced and creative dedicated IT
                                        resources, but what clients actually need is quality,
                                        precision, and most importantly, the best prices. And that’s
                                        where PragetX comes to your rescue.
                                    </p>
                                    <p>
                                        Hire iOS Developers from the PragetX Technologies LLP to save
                                        your iOS app development costs by 50% compared to the market
                                        prices without compromising quality or the development speed.
                                        We have a team of proficient and dedicated iOS developers with
                                        varying skills who will fit into your app development criteria
                                        and help you upgrade your iOS app development plan with the
                                        next-level capabilities.
                                    </p>
                                    <p>
                                        Needing an iOS developer to work as per your time zone? Want
                                        to partner with PragetX for dedicated iOS developers based on
                                        different contracts, such as B2B and B2C categories? You’re
                                        all set for it! Keep presenting your demands, and we will work
                                        accordingly. Because at PragetX, we put our clients’ demands
                                        at the center of our values.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.IOSAboutImg} alt="Custom Software Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-best-choose-main pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con">
                            <h2>Your Ideal Team of iOS Developers</h2>
                            <p>
                                At PragetX, we have a pool of expert iOS developers keen to work
                                on your dream iOS app <br />development projects and deliver
                                satisfactory outputs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-us-main why-trust best-fit technical-expertise">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h4>Technical Expertise of Our iOS Developers</h4>
                                        <ul>
                                            <li>Programming Languages: Objective-C, Swift, Swift UI</li>
                                            <li>Cocoa Touch Classes</li>
                                            <li>Core Data/Local Database Integrations</li>
                                            <li>Third-party integrations</li>
                                            <li>API integrations - Web services</li>
                                            <li>
                                                Feature API Integrations - iBeacon, Wi-Fi, Bluetooth, GPS
                                            </li>
                                            <li>Push Notification Integration</li>
                                            <li>Payment Gateway Integration</li>
                                            <li>Firebase integration</li>
                                            <li>AR Kit Integration</li>
                                            <li>MVC &amp; MVVM based development</li>
                                            <li>Audio/Video streaming apps</li>
                                            <li>Follows Apple Human Interface Guidelines</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h4>What You’ll Get From PragetX?</h4>
                                        <p>
                                            Get the best breed of iOS development solutions and services
                                            from the PragetX:
                                        </p>
                                        <ul>
                                            <li>Eye-catchy and responsive iOS app UI/UX</li>
                                            <li>Secure, scalable, and reliable iOS apps</li>
                                            <li>Effective SDK/API integrations with iOS apps</li>
                                            <li>Cognitive collaboration and communication</li>
                                            <li>Fewer project failure risks</li>
                                            <li>Better customer experience and satisfaction</li>
                                            <li>Flexible budget</li>
                                            <li>On-time delivery</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 text-center">
                                    <Link to="https://calendly.com/pragetx" className="btn">Book A Call Today
                                        <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                <h2>Hire Dedicated iOS Developers from PragetX</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IOSAppDevelopementConsultants} alt="Custom Software Development" />
                                    </div>
                                    <h5>iOS App Development Consultants</h5>
                                    <p>
                                        We understand how important your business processes are and
                                        what kind of iOS application you need to improve your business
                                        processes. Consult our iOS developers to get your cutting-edge
                                        business-oriented iOS App development solution today!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CustomIOSAppDevelopers} alt="Enterprise Software Development" />
                                    </div>
                                    <h5>Custom iOS App Developers</h5>
                                    <p>
                                        A team of well-experienced iOS developers is at your service
                                        to implement your objective-oriented and future-rich iOS
                                        mobile application that can help you ease your business
                                        working procedures with top-notch application performance and
                                        user experience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IOSAppUiUxDesigners} alt="Clone App Development" />
                                    </div>
                                    <h5>iOS App UI/UX Designers</h5>
                                    <p>
                                        An app that not only performs well but also has an attractive
                                        and intuitive UI/UX is called the cherry on the top. Design
                                        the aesthetic UI/UX for your mission-critical iOS app solution
                                        to provide your users with the next-level user experience.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IOSAppUpgradeAndMigrationEngineers} alt="NFT Platform Development" />
                                    </div>
                                    <h5>iOS App Upgrade and Migration Engineers</h5>
                                    <p>
                                        Refactor and migrate your mission-critical mobile application
                                        to the iOS platform to work compatibility. Refactor iOS
                                        applications to work smoothly in different environments, like
                                        Cloud platforms - AWS, Azure, and GCP.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IOSAppTestingEngineers} alt="UI/UX Designing" />
                                    </div>
                                    <h5>iOS App Testing Engineers</h5>
                                    <p>
                                        No matter for what industry, your iOS mobile app is developed
                                        - precision defines the statistics of conversion rates.
                                        Leverage us to assess, test, and fix your app loopholes so
                                        that you never miss a chance of conversion opportunity.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IOSAppSupportEngineers} alt="Application Maintenance & QA Services" />
                                    </div>
                                    <h5>iOS App Support Engineers</h5>
                                    <p>
                                        Get an extended 7-day free, dedicated iOS app support for your
                                        business-oriented mobile application to ensure its
                                        cutting-edge performance. Extend your contract to maintain
                                        your iOS app performance with the latest implementations.
                                    </p>
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
                                    <h2>
                                        The PragetX - iOS Developers Staff Augmentation Advantages
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Skip Sourcing, Beat Talent Crunch, Save Time</span>
                                                <p>
                                                    Access to a pool of experienced, dedicated iOS
                                                    developers for hire in less time by adopting modern and
                                                    quick sourcing &amp; hiring processes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Say No to Pre and Post-Hiring Responsibilities</span>
                                                <p>
                                                    When outsourced, the whole iOS talent hiring process to
                                                    the professional and dedicated HR team, why worry? We
                                                    have you covered!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Always Get Your Beta Ready</span>
                                                <p>
                                                    The shortlisted profiles aren’t meeting your iOS app
                                                    development requirements? Don’t worry! We have a beta
                                                    list of pre-vetted iOS developers ready for you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Absolute Confidentiality Agreement</span>
                                                <p>
                                                    We understand that you don’t want to disclose your
                                                    collaboration with us. That’s completely fine! Get the
                                                    absolute partnership integrity with PragetX.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Utmost Transparency</span>
                                                <p>
                                                    Be updated with the development approach and progress of
                                                    your iOS app development. Transparency at the PragetX is
                                                    a must that we follow.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Save on Salary</span>
                                                <p>
                                                    The dedicated iOS developers’ hiring cost at PragetX is
                                                    quite budget-friendly and will help you save up to 50%
                                                    on employee salary with top-notch IT services.
                                                </p>
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
                            <h3>
                                PragetX = Your ideal IT partner providing innovative iOS
                                development services and solutions!
                            </h3>
                        </div>
                        <div className="discuss-btn">
                            <Link to="/become-partner" className="btn">Become A Partner
                                <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={6100} />

            <section className="ai-ml-we-work hiring-process-main">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>4-Step Easy iOS Developer Hiring Process</h2>
                                    <h5>
                                        A simple 4-step easy hiring process to hire your ideal-fit
                                        dedicated iOS developer while ensuring time and
                                        cost-effectiveness.
                                    </h5>
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
                                        <p>Share Your iOS App Development Requirements</p>
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
                                        <p>Hire the right-fit iOS Developer for the project</p>
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
                                <h2>Our App Development Processes</h2>
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
                                        analyze the project requirements to devise the best iOS
                                        solution.
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
                                        We design an interactive UI/UX for the iOS app development
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
                                        Programming the iOS app with the technology stack asked by the
                                        client or suggested to the client for better responsiveness.
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
                                        Apply all necessary QA practices and testing algorithms to
                                        find and resolve potential iOS app bugs and exceptions.
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
                                        Once all changes and bugs are fixed, we deploy the iOS to the
                                        App Store or client’s server for their use.
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
                                        dedicated free back support to software till the agreed
                                        duration.
                                    </p>
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

export default HireIOSAppDevelopers
