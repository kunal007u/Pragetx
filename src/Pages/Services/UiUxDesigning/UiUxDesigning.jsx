import React from 'react'
import './uiUxDesigning.css'
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


const UiUxDesigning = () => {

    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Mobile and Web UI/UX Design company in India | PragetX</title>
            </Helmet>
            <section className="header-top-slider ui-ux-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1>Mobile &amp; Web <span>UI UX</span> <br />Development Company</h1>
                                <h5>Increase your user interaction experience with your online services by providing platforms' most interactive UI UX designs to create more conversions for your business. Our UI/UX designers &amp; developers work together to bring the best design with proper research, wire-frame, analysis, prototyping, visualization, A/B testing and QA approaches.</h5>
                                <Link to="/contact-us" className="btn">Let’s Connect <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>UI UX That Generates Higher User Retention Rates</h2>
                                    <p>Providing innovative, creative, eye-catchy, industry-grade UI UX designs certified by highly-experienced QAs and embedded with faster algorithms to amplify user experiences and provide them with a state-of-the-art feel.</p>
                                    <p>PragetX being a customer-centric UI UX development company in India, aims to provide clients with the best-in-class UI UX design services, like information architecture, user experience (UX) development, user interface (UI development), and industry-specific app design solutions, while ensuring their business goals. Our UI UX designers create robust UI/UX designs with an assurance to help them create a stronger business identity in their sector.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.UiImg} alt="UI UX That Generates Higher User Retention Rates" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
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
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 80 : 0} duration={3} />%</div>
                                    <div className="number-l">Hike in business KPIs due to better UI/UX designs</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 200 : 0} duration={3} />%</div>
                                    <div className="number-l">Hike in business conversion due to a good interface</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 9900 : 0} duration={3} />%</div>
                                    <div className="number-l">ROI resulted in businesses due to good UI/UX investment</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 70 : 0} duration={3} />%</div>
                                    <div className="number-l">of online buyers leave e-commerce websites because of poor UX.</div>
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
                                <h2>Building Interactive &amp; Responsive UI UX Designs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.UiUxConsult} alt="UI/UX Design Consulting" />
                                    </div>
                                    <h5>UI/UX Design Consulting</h5>
                                    <p>Analyzing business requirements and framing ingenious UI/UX designs for the web &amp; mobile app projects while considering industry compliance and all devices and Operating Systems' supportability.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WebApp} alt="Web App UI/UX Design and Development" />
                                    </div>
                                    <h5>Web App UI/UX Design and Development</h5>
                                    <p>Considering extreme business requirements for a better UI/UX design to craft the off-the-shaft UI/UX for the business website that can retain users and help businesses create more lead conversions.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.MobileApp} alt="Mobile App UI/UX Design and Development" />
                                    </div>
                                    <h5>Mobile App UI/UX Design and Development</h5>
                                    <p>Framing and integrating the eye-catchy UI/UX design for your mobile application by considering your user base to make it easier for them to use the app and do what they came to your online mobile app window.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SaasApp} alt="SaaS App UI/UX Design" />
                                    </div>
                                    <h5>SaaS App UI/UX Design</h5>
                                    <p>From creating wireframes, and drafting sitemaps to visual sketches, get your SaaS design with the perfect layout. Our UI/UX designers ensure that you get the UI/UX solution for what you’ve trusted us.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.VisualTemplate} alt="Visual Template UI/UX Design Solutions" />
                                    </div>
                                    <h5>Visual Template UI/UX Design Solutions</h5>
                                    <p>Helping businesses create intuitive, brief, and conversion creating highly responsive templates for their varying needs, such as email, newsletters, websites, mobile apps, brochures, and different advertising purposes.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ArDesign} alt="AR Design" />
                                    </div>
                                    <h5>AR Design</h5>
                                    <p>Get elements ranging from sound to video, graphics to GPS overlays, etc., in digital form to respond in the real world. PragetX is a leading UI/UX designing company, ensuring to meet your Artificial Reality visual.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CustomUiUx} alt="Custom UI/UX Design Solutions" />
                                    </div>
                                    <h5>Custom UI/UX Design Solutions</h5>
                                    <p>Have a brief idea about the UI/UX template you need for your business? Leverage us to give our expert touch on it and create a miracle that helps you create better brand awareness across your target audiences.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.Testing} alt="UI/UX Testing Services" />
                                    </div>
                                    <h5>UI/UX Testing Services</h5>
                                    <p>Designing UI/UX design with extensive brainstorming and coding to run seamlessly on all platforms users wish. PragetX aims to provide clients with the most attractive and responsive UI UX design solutions.</p>
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
                                    <h2>PragetX’s Key Differentiators For the Best UI/UX Design Company</h2>
                                    <p>A list of factors that defines PragetX as your one-stop destination to get all you want in your ideal UI UX design bundle</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Bring More Loyal Customers With Your Design.</span>
                                                <p>They say that 79% of users will switch to a competitor if they are not satisfied with the UI/UX of your current website, app, company logo or any such product or platform of your company. Trust PragetX with your dream UI/UX project.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Get the Best Art of Design for Your Software needs. </span>
                                                <p>From web to app, SaaS product to AR design, we help you bring more audience for your company with a focus on maximizing usability, interface, and user experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>A Perfect Blend of Design and Interface.</span>
                                                <p>Our UI/UX developer works together as a team and designs templates after extensive brainstorming and UI testing to provide the most responsive UI/UX design solution that runs seamlessly in your choice of platforms.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DiscussProject />
            <section className="about-us-main why-trust follows">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.UiImg2} alt="UI/UX Design Principles That PragetX Follows" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>UI/UX Design Principles That PragetX Follows</h2>
                                    <ul>
                                        <li>In-Depth Brand Analysis</li>
                                        <li>Meticulously Designed Wireframes</li>
                                        <li>Uninterrupted Navigation</li>
                                        <li>Complete control over Apps &amp; Services</li>
                                        <li>Biometric Security Enablement</li>
                                        <li>Quick-touch call to action</li>
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
                                <h2>Our UI/UX Design and Development Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Analysis} alt="Analysis & Brainstorming" />
                                    </div>
                                    <h5>Analysis &amp; Brainstorming</h5>
                                    <p>Gathering and analyzing clients’ requirements with the current technology and market trends to come up with quality design ideas.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Architecting} alt="Architecting" />
                                    </div>
                                    <h5>Architecting</h5>
                                    <p>For user-friendly UI/UX design, it is compulsory to figure out and put the right element in the right place for users to better understand application usability.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Wireframing} alt="Wireframing & Prototyping" />
                                    </div>
                                    <h5>Wireframing &amp; Prototyping</h5>
                                    <p>A detailed design flow representation of application elements helps clients understand how the IT software project development flow would go.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Visualization} alt="Visualization" />
                                    </div>
                                    <h5>Visualization</h5>
                                    <p>Designing UI/UX elements by considering all factors, such as branding considerations, audience type, users’ liking areas, and measures to get more clicks and conversions.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UiDev} alt="UI Development" />
                                    </div>
                                    <h5>UI Development</h5>
                                    <p>Aligning business objectives with a UI design project to ensure that your web and mobile app UI/UX design and different advertising templates presents your brand.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ResponsivTesting} alt="Responsiveness Testing" />
                                    </div>
                                    <h5>Responsiveness Testing</h5>
                                    <p>Coding UI/UX designs in such a way that it clearly works as it suppose to do and testing it with all possible conditions to check the responsiveness of the product testing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={7250} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />


        </>
    )
}

export default UiUxDesigning