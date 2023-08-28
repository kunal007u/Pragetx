
import React, { useEffect, useState } from 'react';
import './becomepartner.css';
import ClientLogoSlider from './../../../Components/Client-Logo-Slider/ClientLogoSlider';
import TeamTagLine from './../../../Components/Team-tag-line/TeamTagLine';
import Images from '../../../Images';
import CountUp from 'react-countup';
import { Link, useLocation } from 'react-router-dom';
import Clientele from './../../../Components/Clientele/Clientele';
import LetsTalk from './../../../Components/Lets-Talk/LetsTalk';
import { Helmet } from 'react-helmet';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver';

const BecomePartner = () => {

    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet >
                <title>Let Us Be Your Extended Remote IT Team | Become A Partner | PragetX</title>
            </Helmet>
            <div className='become-partner'>

                <section className="header-top-slider  become-partner-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="header-top-con">
                                    <h1>Explore New Age of IT <br /><span>Collaborations</span>!</h1>
                                    <h5>Offshoring Partner | Outsourcing Partner | Staff Augmentation</h5>
                                    <p>Let PragetX Technologies LLP to be your trusted, dedicate, and reliable extended IT team <br />practicing Agile methodologies to deliver better, cutting-edge solutions on time.</p>
                                    <Link to="/contact-us" className="btn">Consult Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ClientLogoSlider />

                <TeamTagLine />

                <section className="why-best-choose-main partner-main">
                    <div className="container">
                        <div className="row">

                            <div className="why-best-choose-con">
                                <h2>Partner With PragetX</h2>
                                <p>
                                    In this COVID-19 era, when many new online businesses came to the
                                    market and elevated the market competition. So, to ensure the
                                    competitive edge and ongoing business, in the IT industry, the new
                                    vertical of B2B collaboration came into the limelight for small
                                    businesses as an active source of revenue generation.
                                </p>
                                <p>
                                    At PragetX Technologies LLP, we understand that you need a trusted
                                    and reliable IT partner, who will always ensure to meet your
                                    development standards and help you build cutting-edge software
                                    solutions, improve its performance, and maintain its
                                    sustainability by all standards at affordable rates. So, partner
                                    with the dedicated IT team having a remarkable track record in
                                    providing satisfactory results to the clients.
                                </p>
                                <p>
                                    After all, at PragetX client satisfaction is what lies at the
                                    center.
                                </p>
                                <div className="partner-box">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="work-life-box">
                                            <img src={Images.BuildInnovativeCommunity} alt="Build Innovative Community" />
                                            <span>Build Innovative <br />Community</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="work-life-box">
                                            <img src={Images.CognitiveCollaboration} alt="Cognitive Collaboration" />
                                            <span>Cognitive <br />Collaboration</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="work-life-box">
                                            <img src={Images.AchieveBusinessGrowth} alt="Achieve Business Growth" />
                                            <span>Achieve Business <br />Growth</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="blockquote-main">
                    <div className="container">
                        <div className="row">
                            <div className="blockquote">
                                <h4>
                                    "Whether your firm do B2B IT collaboration for hiring dedicated
                                    resources, outsourcing your business-critical process, offshoring
                                    IT services or maintenance, or interested in collaborated in
                                    complete IT business, partnering with PragetX will indeed unlock
                                    extraordinary opportunity and create value for your business."
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us-main nft-dec-con">
                    <div className="container">
                        <div className="about-con">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="con-head text-center">
                                        <h2>PragetX Trust Factors</h2>
                                        <h5>
                                            Our IT Solutions Define Flexibility &amp; Reliability In All
                                            Working Environments
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent"><CountUp end={isVisible ? 64 : 0} duration={3} />+</div>
                                        <div className="number-l">Project</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 40 : 0} duration={3} />+</div>
                                        <div className="number-l">Clients</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 13 : 0} duration={3} />+</div>
                                        <div className="number-l">Countries</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent p-percent">
                                            <CountUp end={isVisible ? 98 : 0} duration={3} />%
                                        </div>
                                        <div className="number-l">Retentions</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 20 : 0} duration={3} />+</div>
                                        <div className="number-l">Professionals</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 7 : 0} duration={3} />+</div>
                                        <div className="number-l">Offshore Partners</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-best-choose-main pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="why-best-choose-con">
                                <h2>Pick A Rewarding Partner Program For Your Business</h2>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main why-trust follows">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="about-img">
                                            <img src={Images.OutsourcingPartner} alt="Custom Software Development Company" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h2>Outsourcing Partner</h2>
                                            <p>
                                                No matter which industry your business is from, in today’s
                                                intense market competition, you also need a trusted IT
                                                services partner to help you out with your business-critical
                                                IT solution maintenance and support. Outsource your IT needs
                                                to PragetX with confidence at the best negotiable budget.
                                            </p>
                                            <ul>
                                                <li>Expert IT consultation</li>
                                                <li>High-quality services</li>
                                                <li>Impressive Return On Investment (ROI)</li>
                                                <li>Get cost-effective IT services bundle</li>
                                                <li>Focus more on core business competencies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main why-trust follows follows1 pt-0">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h2>Offshoring Partner</h2>
                                            <p>
                                                Looking for the highly reliable Offshore IT services provider
                                                partner in India? Share your business IT offshoring
                                                requirements with PragetX and get the best deal under your
                                                budget with utmost reliability.
                                            </p>
                                            <ul>
                                                <li>
                                                    Offshore IT services on fixed-price or hourly business
                                                    engagement models
                                                </li>
                                                <li>Let IT experts work as your extended IT team</li>
                                                <li>Top-notch IT services experience</li>
                                                <li>
                                                    Get the best IT consultation from the industry experts
                                                </li>
                                                <li>Get cost-effective IT solutions and services</li>
                                                <li>Improve your business focus cohesively</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="about-img">
                                            <img src={Images.OffshoringPartner} alt="Custom Software Development Company" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main why-trust follows pt-0">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="about-img">
                                            <img src={Images.BusinessDevelopmentPartner} alt="Custom Software Development Company" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h2>Business Development Partner</h2>
                                            <p>
                                                Are you a company, consultancy, or individual agent, hiring
                                                companies to work on your client projects? Leverage PragetX to
                                                be your dedicated IT services and solutions provider to work
                                                on your third-party projects at reasonable prices.
                                            </p>
                                            <ul>
                                                <li>Enroll on referring and earn programs</li>
                                                <li>Become our loyal business partner and earn royalties</li>
                                                <li>Earn massive profits</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main why-trust follows follows1 pt-0">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h2>Affiliate Partner</h2>
                                            <p>
                                                Become our sales and marketing partner and refer our services
                                                to your network and after the completion of their onboarding
                                                and first payment, earn a certain amount of referral
                                                bonus/rewards in terms of cash, service benefits, or vouchers.
                                            </p>
                                            <ul>
                                                <li>Enroll on refer and earn programs</li>
                                                <li>Become our loyal business partner and earn royalties</li>
                                                <li>Earn massive profits</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="about-img">
                                            <img src={Images.AffiliatePartner} alt="Custom Software Development Company" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main why-trust follows py-0">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="about-img">
                                            <img src={Images.StaffAugmentationPartner} alt="Custom Software Development Company" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h2>Staff Augmentation Partner</h2>
                                            <p>
                                                Getting many projects but not having enough IT resources to
                                                align on such projects or need dedicated IT resources to
                                                deliver your project under a close and strict deadline? Hire
                                                the best and most experienced team of developers, software
                                                engineers, QA testing engineers, and branding &amp; marketing
                                                managers from PragetX under a feasible budget.
                                            </p>
                                            <ul>
                                                <li>Get your flexible and extended IT strength</li>
                                                <li>
                                                    Choose your dedicated IT talent from a pool of resources
                                                </li>
                                                <li>Improve your operation efficiency</li>
                                                <li>Assign IT tasks and projects with confidence</li>
                                                <li>Cut costs without compromising on quality</li>
                                                <li>Achieve cost-effectiveness and time-effectiveness</li>
                                                <li>Ensure competitive edge of your business</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <Clientele />

                <LetsTalk />

            </div>
        </>

    )
}

export default BecomePartner
