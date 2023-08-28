import React from 'react'
import "./mobileAppDevelopment.css"
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject'
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine'
import Industries from '../../../Components/Industries/Industries'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import TechnologyWork from '../../../Components/Technology-work/TechnologyWork'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import StartUp from '../../../Components/StartUp/StartUp'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'

const MobileAppDevelopment = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Top Custom Mobile App Development Company in India | PragetX</title>
            </Helmet>
            <section className="header-top-slider mobile-app-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1>Native &amp; Hybrid <span>Mobile App</span> <br />Development Company</h1>
                                <h5>In a digital world, where users prefer mobile phones to manage all their work, through which what they actually want is intuitive user experiences, faster responses, and high-end cybersecurity. At PragetX, we follow a customer-centric business model, aiming to meet clients' application development requirements by aligning the best Android, iOS, flutter, and react developers in their mobile app development projects.</h5>
                                <Link to="/contact-us" className="btn">Let’s Discuss Project <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
            </section>
            <ClientLogoSlider />
            <section className="about-us-main nft-dec-con">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>The Best Mobile App Development Services</h2>
                                    <p>Whether you're a business initializing online services or an individual planning to build online services, mobile application development is an ideal solution to stand competitive in this mobile-first world.</p>
                                    <p>Seeing the criticality of mobile app-based services, we at PragetX are proud to announce that we provide both native and hybrid or cross-platform mobile app development services for all categories and industries out there. To date, we have worked on many unique and on-demand mobile app development projects for many sectors, including government &amp; public sectors, healthcare, e-commerce, astrology, logistics, finance, etc. With these projects, we ensured to provide our customers with magnificent app development ideas and suggestions to improve their online services.</p>
                                    <p>At PragetX, we have a pool of proficient mobile app developers who can build competent Java, Kotlin, Swift, Flutter, React, and many other technologies stack-based mobile apps as per your demands within a flexible timeline and budget.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.MobiImg} alt="The Best Mobile App Development Services" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 653.91 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">Market Growth from 2021-2025</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 20.65 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">Market Growth Rate from 2021-2025 - CAGR</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 20.45 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">2021 Mobile application development rate</div>
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
                                <h2>Our App Development Services Bring Exceptional Experiences</h2>
                                <h5>Provide your customers with innovative, engaging online service surfing experiences with a mobile application developed by our proficient app developers without compromising any features or functionalities.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.NativeApp} alt="Native App Development" />
                                    </div>
                                    <h5>Native App Development</h5>
                                    <p>Building mobile apps to run on Android and iOS platforms seamlessly. Use Java, Kotlin, Swift, etc., native app development technology stacks to inherit native app nature for better resilience.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.HybridApp} alt="Hybrid App Development" />
                                    </div>
                                    <h5>Hybrid App Development</h5>
                                    <p>Hire our Flutter, React Native, or Xamarin developers to develop your dream mobile applications and make them run on both Android and iOS mobile devices seamlessly with single code file sharing.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotApp} alt="IoT App Development" />
                                    </div>
                                    <h5>IoT App Development</h5>
                                    <p>Have a space equipped with IoT devices or need personalized wearables mobile app solution? Get a customized mobile app solution implemented with your choice of features &amp; technology stacks.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.PWADev} alt="Progressive Web App (PWA) Development" />
                                    </div>
                                    <h5>Progressive Web App (PWA) Development</h5>
                                    <p>Get a seamless mobile app user experience across all platforms as identical to a native application. PWAs build by PragetX provide a better user experience, offline application browsing, data analysis, etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudApp} alt="Cloud-based App Development" />
                                    </div>
                                    <h5>Cloud-based App Development</h5>
                                    <p>When transitioning workloads and data to the cloud platforms, then why not business-critical apps? Refactor your business-critical mobile app according to a cloud platform and make it work on it.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ApiInt} alt="API Integration Services" />
                                    </div>
                                    <h5>API Integration Services</h5>
                                    <p>Hire our expert android and iOS native and cross-platform mobile app developers to integrate your business-critical services in your enterprise mobile app to expand its use cases for office employees.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.EnterpriseApp} alt="Enterprise App Development" />
                                    </div>
                                    <h5>Enterprise App Development</h5>
                                    <p>Hire our proficient mobile app developers to build your custom enterprise-oriented mobile app with your choice of features, functionalities, and technology stacks, to make it more reliable.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.Consultation} alt="Mobile App Development Consultation" />
                                    </div>
                                    <h5>Mobile App Development Consultation</h5>
                                    <p>Have a rough idea of developing a mobile application, but need final touches to make it more clear? Consult our expert app developers to get the right fit solution to your requirements with a budget-friendly quotation.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.UIUXSolution} alt="UI/UX Designing Solution" />
                                    </div>
                                    <h5>UI/UX Designing Solution</h5>
                                    <p>Our UI/UX designers deliver eye-catchy user interfaces with top-notch responsiveness, resulting in both higher user retention and conversion rates. Leverage us to showcase our creativity on your project.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.QaTestSupport} alt="QA & Testing" />
                                    </div>
                                    <h5>QA &amp; Testing</h5>
                                    <p>Be it a native or cross-platform mobile application developed for any industry - precision defines the statistics of conversion rates. Leverage us to assess, test, and fix your app loopholes for solution reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-main">
                <div className="container">
                    <div className="client-con-row">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="top-features">
                                    <h2>PragetX Trust Factors As the Best Mobile App Development Company</h2>
                                    <p>A list of factors that defines PragetX as your one-stop-destination to get all you want in your ideal mobile app bundle.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Next-Level App Customizations.</span>
                                                <p>Be it android, iOS, native, hybrid, progressive, wearables, or any cross-platform app, we help you develop, customize, and optimize any app with an efficient, niche-specific, secure, seamless interface.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Right-Toning Roadmapping.</span>
                                                <p>Our team of developers first visualize your app design before engaging in development of an attractive and easy to use interface with eye-catchy graphics and providing secure, uninterrupted services for better app development.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Cutting-Edge Flexibility.</span>
                                                <p>Development of native mobile apps faces a crisis of limited reach, for which our developers provide cross-platform apps by launching the same mobile app on multiple platforms, enhancing productivity, and engaging a large audience base in the market.</p>
                                            </div>
                                        </div>
                                    </div>
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
                                <h2>Our Web App Development Approach</h2>
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
                                    <p>Our team of sales executives and business analysts will analyze the project requirements to
                                        devise the best solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UIUX} alt="UI/UX" />
                                    </div>
                                    <h5>UI/UX</h5>
                                    <p>We design an interactive UI/UX for the software development project that meets the user
                                        expectation levels.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Development} alt="Development" />
                                    </div>
                                    <h5>Development</h5>
                                    <p>Developers at PragetX maintain the cognitive engagement with clients to ensure that their
                                        expected results are met.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.QATesting} alt="QA & Testing" />
                                    </div>
                                    <h5>QA &amp; Testing</h5>
                                    <p>We apply all necessary QA practices and testing algorithms to find and resolve potential
                                        software bugs and exceptions.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ContinuousDevelopment} alt="Deployment" />
                                    </div>
                                    <h5>Deployment</h5>
                                    <p>Once all changes and bugs are fixed, we deploy the software to the respected client's servers
                                        for their use.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.BackSupport} alt="Back-Support" />
                                    </div>
                                    <h5>Back-Support</h5>
                                    <p>Our work doesn’t end with project delivery, we provide dedicated back support to software till
                                        the agreed duration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientTeleMap scrollTarget={6800} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />

        </>
    )
}

export default MobileAppDevelopment