import React from 'react'
import "./enterpriseitsolution.css"
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import BecomePartner from '../../Company/Become-Partner/BecomePartner'
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

const EnterPriseItSolution = () => {
    const [targetRef, isVisible] = useIntersectionObserver();
    return (
        <>
            <Helmet>
                <title>Top Enterprise IT Services Provider Company in India | PragetX</title>
            </Helmet>
            <section className="header-top-slider enterprise-services-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1><span>Enterprise IT Services</span> <br />and Solutions</h1>
                                <h5>Helping startups, SMBs, and enterprises to craft their industry and business-specific custom software solutions along with managed IT services to ensure their ease of work, competitiveness, and better revenues. Have any business-oriented projects for us? Let us know how we can serve you to simplify your workload.</h5>
                                <Link to="/contact-us" className="btn">Inquiry Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>Simplify Your Enterprise Workflow Today!</h2>
                                    <p>With rapidly evolving market competition, startups, SMBs, and large enterprises are accelerating their processes to roll out new services in the market, generate more revenue, and secure their competitive edge. In the practice of being competitive, they sometimes miss out on little inconveniences popping up inside their organizations, which might seem granular at the start, but over time such can lead them to consequences. Therefore, businesses working smart and hard to secure a competitive edge need the backbone to ensure their backend business processes, which PragetX can become.</p>
                                    <p>With an aim to help businesses ease their organizational processes, PragetX provides a range of managed IT services to startups, SMBs, and Enterprises of all kinds of industries.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.EnterImg} alt="Simplify Your Enterprise Workflow Today" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">

                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 78.4 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">ERP Software Market Reach by 2026</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 8 : 0} duration={3} />%</div>
                                    <div className="number-l">of CAGR by 2027</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 50 : 0} duration={3} />%</div>
                                    <div className="number-l">of companies will acquire ERP software soon</div>
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
                                <h2>Our Enterprise IT Services and Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ITConsulting} alt="Custom Software Development" />
                                    </div>
                                    <h5>Enterprise IT Consulting</h5>
                                    <p>Whether you're a startup or large enterprise, we understand your change in requirements for your business-specific software solution and provide the cutting-edge business management solutions at the best prices.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.B2BSolutions} alt="Enterprise Software Development" />
                                    </div>
                                    <h5>B2B Solutions</h5>
                                    <p>Collaborate with PragetX to meet all different enterprise requirements that your business needs to grow, whether it is about augmenting staff, developers support, maintaining client relationships or a branding team.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.StaffAug} alt="Clone App Development" />
                                    </div>
                                    <h5>Staff Augmentation Services</h5>
                                    <p>Hire a dedicated team of marketers, sales people, hiring managers, creative people, and developers from PragetX to augment your staff and give them a chance to be your dedicated extended IT team.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ManagedServices} alt="NFT Platform Development" />
                                    </div>
                                    <h5>Managed Enterprise IT services</h5>
                                    <p>Have multiple business models and software at your enterprise and need someone to take care of all as your extended IT team? Leverage PragetX to be your dedicated, extended IT team.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ERP} alt="UI/UX Designing" />
                                    </div>
                                    <h5>ERP Software Development</h5>
                                    <p>Switch from manual or old ERP to the latest, tech-enabled, cloud-based and customized enterprise software as per your requirements to digitally transform your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CRM} alt="Application Maintenance & QA Services" />
                                    </div>
                                    <h5>CRM Software development</h5>
                                    <p>Increase sales lead, customer retention, faster communication, and analyze purchasing patterns with the custom CRM solution built specifically for your business.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BOM} alt="Application Migration Solutions" />
                                    </div>
                                    <h5>Bill of Material (BOM) Preparation Services</h5>
                                    <p>Get detailed reports with all specifications and features of raw materials required to manufacture your product.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SCM} alt="Software Development Consultation" />
                                    </div>
                                    <h5>Supply Chain Management Solution</h5>
                                    <p>Manage from raw material to end-customer with the help of five SCM components: Plan, Resource, Build, Deliver, and Return.</p>
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
                                    <h2>Why PragetX For Custom Enterprise Software Development?</h2>
                                    <p>A list of factors that defines PragetX as your one-stop destination to get all you want in your ideal enterprise IT solution bundle</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Let’s Digitize the Industry Together.</span>
                                                <p>Now, switch from manual or old ERP to the latest, cutting-edge, cloud-based and customized enterprise software as per your requirements to digitally transform your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Integrate and Manage Main Business Processes in Real-Time</span>
                                                <p>We help you analyze each aspect of your business separately in real-time for making timely and accurate managerial decisions along with meeting organizational goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Pay Only For What You Need, The Most</span>
                                                <p>From startups to large corporations, requirements vary for implementing better ERP according to the budget. Save more by avoiding purchases of hectic and expensive software from the market.</p>
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
        </>
    )
}

export default EnterPriseItSolution