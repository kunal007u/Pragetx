import React from 'react'
import "./webAppDevelopment.css"

import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject'
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine'
import Industries from '../../../Components/Industries/Industries'
import TechnologyWork from '../../../Components/Technology-work/TechnologyWork'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import StartUp from '../../../Components/StartUp/StartUp'
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';



const WebAppDevelopment = () => {

    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Top Custom Web App Development Company | PragetX</title>
            </Helmet>
            <section className="header-top-slider web-app-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1>Custom <span>Web</span> Application <br />Development Company</h1>
                                <h5>Leverage the best website developers at PragetX to help your business create your online presence with an exceptionally designed and structured website. Looking for a company to outsource your web app development project? Leverage us to be your offshore web app development services provider.</h5>
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
                                    <h2>One-Stop Solution For All Your Web Development Needs</h2>
                                    <p>Be it a portfolio website or online services providing web apps, the effectiveness of web
                                        platform development is necessary for every industry ranging from healthcare, finance, and
                                        banking to hospitality. Website developers at PragetX ensure your requirements are met from
                                        front-end, and back-end to testing and maintenance of your Open-Source, API, CRM, Responsive or
                                        Progressive web apps. We ensure you get the best using the most-demanded frameworks and
                                        libraries.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.WebImage} alt="Web Development" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">

                                    <div className="number-c count percent" ><CountUp end={isVisible ? 85 : 0} duration={3} />%</div>
                                    <div className="number-l">People consider website testimonials as trust factors</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 73 : 0} duration={3} />%</div>
                                    <div className="number-l">Businesses invest in web designing as a brand differentiator</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 94 : 0} duration={3} />%</div>
                                    <div className="number-l">Users buy from a website due to its better UI/UX</div>
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
                                <h2>Custom Web Application Offerings</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CustomWebApp} alt="Custom Web App Development" />
                                    </div>
                                    <h5>Custom Web App Development</h5>
                                    <p>Get a feature-rich, highly responsive, scalable, robust, and secure custom web app solution
                                        developed on your choice of the technology stack.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.FrontEndWeb} alt="Front-End Web App Development" />
                                    </div>
                                    <h5>Front-End Web App Development</h5>
                                    <p>Give your online presence a modern touch by developing your single page application designed in
                                        React and Angular like a powerful technology stack.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BackEndWeb} alt="Back-End Web App Development" />
                                    </div>
                                    <h5>Back-End Web App Development</h5>
                                    <p>Get a robust web app back-end solution architectured to run powerful features at speed and scale
                                        at ease without any security concerns.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SaasWebApp} alt="SaaS Web App Development" />
                                    </div>
                                    <h5>SaaS Web App Development</h5>
                                    <p>Leverage us to build you a multi-tenant web solution that provides your users with a robust,
                                        faster, and interruption-free website surfing experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.EnterpriseSol} alt="Enterprise Solutions" />
                                    </div>
                                    <h5>Enterprise Solutions</h5>
                                    <p>Get a custom enterprise web development, CRM, ERP software, and end-to-end enterprise system
                                        integration to ensure the power working of your organization.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ECommerceWeb} alt="E-Commerce Web App Development" />
                                    </div>
                                    <h5>E-Commerce Web App Development</h5>
                                    <p>Owning an offline retail business, but want to take your business online? Build your online
                                        store using e-commerce store creation platforms like Shopify, Magento, etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WordpressDev} alt="WordPress Development" />
                                    </div>
                                    <h5>WordPress Development</h5>
                                    <p>Transform your business services online and spread its awareness through content marketing
                                        approaches by developing your WordPress website.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.PWADev} alt="Progressive Web Applications Development" />
                                    </div>
                                    <h5>PWA Development</h5>
                                    <p>Build your dream web application, which gives you a rich native-mobile app-like experience on
                                        all platforms without any interruption or performance compromise.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ApiDev} alt="API Development & Integration" />
                                    </div>
                                    <h5>API Development &amp; Integration</h5>
                                    <p>Seamlessly develop, customize, and integrate business-critical features and functionalities in
                                        your web app solutions to create a wide-scope application for your users.</p>
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
                                    <h2>Why Should PragetX Be Your First Choice?</h2>
                                    <p>A list of factors that defines PragetX as your one-stop-destination to get all you want in your
                                        ideal web app bundle.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Develop B2B/B2C Web Apps As Per Your Business Needs.</span>
                                                <p>From a static single page to a dynamic multipage responsive site, we help you build the
                                                    best B2B and B2C web app as per your requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Better Front-End Framework Implementation.</span>
                                                <p>With the AngularJS framework, get a more engaging UI/UX interface to make it more
                                                    appealing for your target audience and for smooth functioning of websites, Java and
                                                    NodeJS frameworks are our prime options to store and fetch data safely.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Now, Get All Your CMS Development Hassle-Free.</span>
                                                <p>With the help of our experienced team, we help you design and develop your online
                                                    stores and websites for business on various platforms like Shopify, WordPress, Wix,
                                                    Squarespace, WooCommerce, Drupal, Joomla, Magento and much more.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Embed Modern Features</span>
                                                <p>Developers at PragetX also have wide experience in implementing modern web features,
                                                    like recommendation engine providing personalized user experience, intelligent
                                                    chatbots, real-time monitoring &amp; tracking features, sorted, tagged &amp; categorized
                                                    photos, and centralized controlling features.</p>
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
            <ClientTeleMap scrollTarget={6400} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />
        </>
    )
}

export default WebAppDevelopment