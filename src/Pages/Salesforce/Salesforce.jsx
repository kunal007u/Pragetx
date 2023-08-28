import React from 'react'
import "./salesforce.css"
import { Helmet } from 'react-helmet'
import ClientTeleMap from '../../Components/ClientTeleMap/ClientTeleMap'
import Images from '../../Images'
import { Link } from 'react-router-dom'
import ClientLogoSlider from '../../Components/Client-Logo-Slider/ClientLogoSlider'
import DiscussProject from '../../Components/Discuss-Project/DiscussProject'
import TeamTagLine from '../../Components/Team-tag-line/TeamTagLine'
import Industries from '../../Components/Industries/Industries'
import TechnologyWork from '../../Components/Technology-work/TechnologyWork'
import StartUp from '../../Components/StartUp/StartUp'
import Clientele from '../../Components/Clientele/Clientele'
import LetsTalk from '../../Components/Lets-Talk/LetsTalk'
import useIntersectionObserver from '../../Helper/useIntersectionObserver'
import CountUp from 'react-countup';

const Salesforce = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Best Salesforce Development Company in India | Salesforce Development Services | PragetX</title>
            </Helmet>
            <section className="header-top-slider salesforce-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1><span>Salesforce</span> Development Services</h1>
                                <h5>Looking for the best Salesforce software development company in India? Hire the best dedicated Salesforce developers from PragetX to convert your Salesforce investment into a considerable profit. Salesforce developers at PragetX have vast expertise in working with Salesforce software solutions, providing the best of the breed services and solutions by following Salesforce development best practices.</h5>
                                <Link to="/contact-us" className="btn">Consult Our Salesforce Experts <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>Elevate Your Customer Experience With Salesforce</h2>
                                    <p>In the past few years, Salesforce has made many remarkable changes in its solutions, such as CRM solutions to provide a unified platform for employees, customers, and services providers to connect for better working efficiency. As Salesforce provides an essential set of software products elevating companies' productivity, we at PragetX understand the importance of these solutions and their unique applications for distinct business needs.</p>
                                    <p>Seeing different industries' varying requirements, the proficient Salesforce developers at PragetX came up with the customization option. We believe that for businesses prioritizing Salesforce solutions over others and not being able to take complete advantage of such solutions, they don’t need to completely alter the Salesforce solutions or build a completely new solution, when they have an option to customize them based on specific and high-priority needs. Leverage PragetX to provide the quick and best customized Salesforce solutions that meet your business needs and objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.SalesforceImg} alt="The Best Mobile App Development Services" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 19.5 : 0} duration={3} dacimal={1} />+</div>
                                    <div className="number-l">of Global CRM market share is claimed by Salesforce</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 91 : 0} duration={3} />M</div>
                                    <div className="number-l">Salesforce Apps Are Installed Globally</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 150 : 0} duration={3} />K+</div>
                                    <div className="number-l">of Salesforce Active Users</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 100 : 0} duration={3} />+</div>
                                    <div className="number-l">Countries Trusts Salesforce CRM</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 1.2 : 0} duration={3} />T</div>
                                    <div className="number-l">Expected Salesforce global revenue to rise by 2025</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ?  30 : 0} duration={3} />%</div>
                                    <div className="number-l">of Salesforce Users are from professional service industry</div>
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
                                <h2>Our Salesforce App Development Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceConsulting} alt="Custom Software Development" />
                                    </div>
                                    <h5>Salesforce Consulting</h5>
                                    <p>Consult our proficient Salesforce developers who will listen to your requirements and help you implement such promptly at the best prices.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceIntegration} alt="Enterprise Software Development" />
                                    </div>
                                    <h5>Salesforce Integration</h5>
                                    <p>Integrate your third-party data and applications with your Salesforce development solution to meet your excessive business objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceImplementation} alt="Clone App Development" />
                                    </div>
                                    <h5>Salesforce Implementation</h5>
                                    <p>Hire our Salesforce software product implementation experts to implement Salesforce solutions into your business software application with ease.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceMigration} alt="NFT Platform Development" />
                                    </div>
                                    <h5>Salesforce Migration</h5>
                                    <p>Migrate your existing business data saved in on-premises data storage or cloud storage systems to Salesforce smoothly without losing any data.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceCustomization} alt="UI/UX Designing" />
                                    </div>
                                    <h5>Salesforce Customization Solutions</h5>
                                    <p>Providing a range of Salesforce solution customization services that meet your diverse business requirements and help your business achieve growth.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceAppDev} alt="Application Maintenance & QA Services" />
                                    </div>
                                    <h5>Salesforce App Development</h5>
                                    <p>Delivering Salesforce development services tailored specifically for your distinct business needs and improved business efficiency.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceCloud} alt="Application Migration Solutions" />
                                    </div>
                                    <h5>Salesforce Cloud Services</h5>
                                    <p>An experienced team of Salesforce developers who are at your service to meet your cloud services needs, such as cloud app development, migration, automation, etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceOptimization} alt="Software Development Consultation" />
                                    </div>
                                    <h5>Salesforce Optimization Services</h5>
                                    <p>We help businesses make the most out of the Salesforce software solutions by providing them with the Salesforce optimization best practices and optimized Salesforce solutions.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SalesforceSupport} alt="Dedicated Help Desk Support" />
                                    </div>
                                    <h5>Salesforce Support and Maintenance</h5>
                                    <p>Already have a Salesforce solution for your business or bought Salesforce services from us? The Best-in-class Salesforce maintenance &amp; support package with 7-days free trial.</p>
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
                                    <h2>PragetX = Your Salesforce Services Destination</h2>
                                    <p>A list of factors that defines PragetX as your one-stop-destination to get all you want in your ideal customized Salesforce services’ bundle.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Time Saving &amp; Cost Effective Salesforce Services</span>
                                                <p>Delivering better, improved, and proven Salesforce customized solutions at the best cost that meet your business goals and optimize your business performance.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Commitment to Supportability</span>
                                                <p>Bought Salesforce solutions/services from PragetX? Get committed 7-days free support for your Salesforce solution after the delivery for your satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Defined Success</span>
                                                <p>Salesforce solutions/services delivered by experts at PragetX are implemented with the Salesforce development best practices by considering all factors.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Cognitive Optimization</span>
                                                <p>Every IT build needs optimizations and updates at a certain time. Buy a comprehensive Salesforce support and maintenance plan from PragetX to ensure its excellent performance.</p>
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
                                <h2>Our Salesforce Development Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Analysis} alt="Understanding Requirements" />
                                    </div>
                                    <h5>Discovery &amp; Brainstorming</h5>
                                    <p>Analyzing and understanding requirements gathered from the client to plan the custom Salesforce solution development roadmap with rapid ideation.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UiDev} alt="UI/UX" />
                                    </div>
                                    <h5>Designing &amp; Developing</h5>
                                    <p>Committing to the Salesforce development roadmap to design the most attractive solution layout and coding it into an effective Salesforce solution the way client wants.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.QATesting} alt="Development" />
                                    </div>
                                    <h5>QA &amp; Testing</h5>
                                    <p>We apply all necessary QA practices and testing algorithms to find and resolve potential Salesforce software bugs and exceptions for better solution performance.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.SalesforceBackSupport} alt="QA & Testing" />
                                    </div>
                                    <h5>Support</h5>
                                    <p>Providing 7-days of free dedicated support to the clients after delivering the Salesforce solution to make amendments as the clients ask us to meet their satisfactory levels.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.SalesforceLaunch} alt="Deployment" />
                                    </div>
                                    <h5>Launch</h5>
                                    <p>Once the final Salesforce solution amendments are done, we run the solution under countless performance measures to ensure its quality to launch it into the public domain.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.SalesforceMaintenanceSupport} alt="Maintenance-Support" />
                                    </div>
                                    <h5>Maintenance</h5>
                                    <p>Our work doesn’t end with project delivery. We provide dedicated back support and maintenance to the Salesforce software till the agreed duration for its performance effectiveness. </p>
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

export default Salesforce