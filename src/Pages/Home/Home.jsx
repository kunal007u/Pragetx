/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Images from '../../Images';
import { Link, useLocation } from 'react-router-dom';
import TechnologyWork from '../../Components/Technology-work/TechnologyWork';

import './home.css'
import 'swiper/css';
import 'swiper/css/pagination';
import Industries from '../../Components/Industries/Industries';
import ServingFortune from '../../Components/Serving-Fortune/ServingFortune';
import Clientele from '../../Components/Clientele/Clientele';
import DiscussProject from '../../Components/Discuss-Project/DiscussProject';
import StartUp from '../../Components/StartUp/StartUp';
import LetsTalk from '../../Components/Lets-Talk/LetsTalk';
import { Helmet } from 'react-helmet';
import JoinUsModal from '../../Components/JoinUsModal/JoinUsModal';
import useIntersectionObserver from '../../Helper/useIntersectionObserver';
import ReactSlider from 'react-slider';



const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    const [targetRef, isVisible] = useIntersectionObserver();


    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                localStorage.removeItem('hasSeenModal');
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);


    useEffect(() => {
        if (!hasSeenModal) {
            setTimeout(() => {
                setIsOpen(true);
            }, 3000);
        }
    }, [])


    return (
        <>
            <Helmet>
                <title>Top Software Development Company in India and USA | PragetX</title>
            </Helmet>

            <JoinUsModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='home'>

                <section className="header-top-slider home-top">
                    <div className="container">
                        <div className="row">
                            <div className="header-top-con">
                                <h1>Best&nbsp;
                                    <TypeAnimation
                                        sequence={[
                                            'Agile Collaboration',
                                            1000,
                                            'Staff Augmentation',
                                            1000,
                                            'Outsource Partner',
                                            1000,

                                        ]}
                                        wrapper="span"
                                        speed={40}
                                        cursor={false}
                                        style={{ display: 'inline-block', color: '#024d81' }}
                                        repeat={Infinity}
                                    /> in <br />the Age of Remote Work</h1>
                                <h5>We are proud extensive arm for MNCs, Startups, Government, Small & Mid Cap companies around the world in all industries, when it comes to software product development &amp; delivery partners</h5>
                                <Link to="/contact-us" className="btn">Inquire Now <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="client-logo-slider home-client-logo">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="client-logo-con">
                                <div className="client-logo-review" >
                                    <Marquee>
                                        <div className="r-logo1">
                                            <img src={Images.AiMl} alt="AI & ML" title="AI & ML" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Iot} alt="IoT" title="IoT" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.ChatBot} alt="Chatbot" title="Chatbot" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Android} alt="Android" title="Android" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Apple} alt="ioS" title="ioS" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Flutter} alt="Flutter" title="Flutter" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.React} alt="React Native" title="React Native" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Kotlin} alt="Kotlin" title="Kotlin" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Swift} alt="Swift" title="Swift" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Angular} alt="Angular js" title="Angular js" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.VueJs} alt="Vue.js" title="Vue.js" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.JavaScript} alt="JavaScript" title="JavaScript" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Css3} alt="CSS3" title="CSS3" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Html5} alt="HTML5" title="HTML5" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.DotNet} alt=".NET" title=".NET" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Php} alt="PHP" title="PHP" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Python} alt="Python" title="Python" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.NodeJs} alt="Nodejs" title="Nodejs" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Java} alt="Java" title="Java" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Ruby} alt="Ruby" title="Ruby" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Azure} alt="Azure Devops" title="Azure Devops" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Aws} alt="AWS" title="AWS" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.Laravel} alt="Laravel" title="Laravel" />
                                        </div>
                                        <div className="r-logo1">
                                            <img src={Images.ExpressJs} alt="Express.js" title="Express.js" />
                                        </div>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="emerging-technology">
                    <div className="container">
                        <div className="row">
                            <div className="emerging-technology-con">
                                <div className="con-head text-center">
                                    <h2>Emerging Technology Services</h2>
                                    <h5>Just automate everything. Be it in any industry. Businesses are advancing and shifting their traditional workflows and approaches to digital automation, so why not switch from standard traditional procedure to automation using Web 3.0 platforms</h5>
                                </div>
                                <div className="emerging-technology-main">
                                    <div className="technology box1">
                                        <Link to="/ai-ml-development">
                                            <img src={Images.EAiMl} />
                                            <div className="technology-con">
                                                <h3>AI &amp; ML</h3>
                                                <p>Refactor existing business processes and improve the decision-making approach of your organization with the power of AI/ML capabilities</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="technology box3">
                                        <Link to="/iot-development">
                                            <img src={Images.EIot} />
                                            <div className="technology-con">
                                                <h3>IoT</h3>
                                                <p>Establish instantaneous and cognitive communication between two smart devices with the IoT integration servicese</p>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="technology box6">
                                        <Link to="/business-intelligence-and-analytics-services">
                                            <img src={Images.EbigData} />
                                            <div className="technology-con">
                                                <h3>Business Intelligence and Analytics</h3>
                                                <p>Evolve your business decision-making abilities with the help of actionable data analytical insights and stay ahead in this intense market competition</p>
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="we-are-tag-line">
                    <div className="container">
                        <div className="row">
                            <div className="we-are-tag-line-con">
                                <h2>We are following all International <br />Code Architectural Norms</h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us-main">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h2>Build You Companys' <i>Pragetanam</i> with PragetX</h2>
                                        <h5>Our IT Solutions Define Flexibility &amp; Reliability In All Working Environments</h5>
                                        <p>A team of smart and passionate leaders and adaptive software developers, working all together to deliver customized IT solutions, like web &amp; mobile app development, cloud computing, DevOps, and Enterprise IT solutions, with precisions to meet the vision to help you build your brand credibility </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.AboutImg} alt="Build Your Company" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">

                                            <div className="number-c count percent" ><CountUp end={isVisible ? 80 : 0} duration={3} />+</div>
                                            <div className="number-l">Projects</div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">
                                            <div className="number-c count percent" ><CountUp end={isVisible ? 60 : 0} duration={3} />+</div>
                                            <div className="number-l">Clients</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">
                                            <div className="number-c count percent" ><CountUp end={isVisible ? 18 : 0} duration={3} />+</div>
                                            <div className="number-l">Countries</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">
                                            <div className="number-c count percent p-percent" ><CountUp end={isVisible ? 98 : 0} duration={3} />%</div>
                                            <div className="number-l">Retentions</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">
                                            <div className="number-c count percent" ><CountUp end={isVisible ? 20 : 0} duration={3} />+</div>
                                            <div className="number-l">Professionals</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter-top">
                                        <div className="about-counter">
                                            <div className="number-c count percent" ><CountUp end={isVisible ? 7 : 0} duration={3} />+</div>
                                            <div className="number-l">Offshore Partners</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-main">
                    <div className="container">
                        <div className="services-con">
                            <div className="con-head text-center">
                                <h2>Services We Offer</h2>
                                <h5>Providing cutting-edge business IT solutions that bring better customer experience and <br />build
                                    compelling brand reputation, leading to better revenue growth</h5>
                            </div>
                            <div className="services-inner">
                                <div className="service-list-box">
                                    <div className="service-box1">
                                        <Link to="/software-development">
                                            <img src={Images.CustomSoftware} alt="SaaS & MVP" />
                                            <p>Custom Software <br />Development</p>
                                        </Link>
                                    </div>
                                    <div className="service-box2">
                                        <Link to="/enterprise-it-solutions">
                                            <img src={Images.EnterpriseSoftware} alt="Enterprise Solution" />
                                            <p>Enterprise <br />Solution</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-list-box list-box-tm">
                                    <div className="service-box2">
                                        <Link to="/digital-marketing">
                                            <img src={Images.Marketing} alt="Digital Marketing" />
                                            <p>Digital <br />Marketing</p>
                                        </Link>
                                    </div>
                                    <div className="service-box1">
                                        <Link to="/qa-and-testing">
                                            <img src={Images.QaTesting} alt="QA & Testing" />
                                            <p>QA &amp; Testing</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-list-box">
                                    <div className="service-box1">
                                        <Link to="/web-app-development">
                                            <img src={Images.WebDevelopment} alt="Web Development" />
                                            <p>Web <br />Development</p>
                                        </Link>
                                    </div>
                                    <div className="service-box2">
                                        <Link to="/ui-ux-designing">
                                            <img src={Images.UiUxDesign} alt="UI-UX Design" />
                                            <p>UI-UX Design</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-list-box list-box-tm">
                                    <div className="service-box2">
                                        <Link to="/cloud-Solutions">
                                            <img src={Images.AppDevelopment} alt="SAP & Database Management" />
                                            <p>Cloud <br />Solutions</p>
                                        </Link>
                                    </div>
                                    <div className="service-box1">
                                        <Link to="/salesforce">
                                            <img src={Images.SalesForce} alt="Salesforce" />
                                            <p>Salesforce</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="service-list-box">
                                    <div className="service-box1">
                                        <Link to="/mobile-app-development">
                                            <img src={Images.HomeMobileApp} alt="Mobile App Development" />
                                            <p>Mobile App <br />Development</p>
                                        </Link>
                                    </div>
                                    <div className="service-box2">
                                        <Link to="/devops">
                                            <img src={Images.Cloud} alt="Cloud & DevOps" />
                                            <p>DevOps <br />Solutions</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TechnologyWork />

                <section className='home-portfolio-main'>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}

                        pagination={{
                            clickable: true,
                        }}

                    >

                        <SwiperSlide className='carousel-inner'>

                            <div className="carousel-item active">
                                <img src={Images.PortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img">
                                                <div className="product-label">
                                                    <h5>FOOD DELIVERY</h5>
                                                </div>
                                                <div className="product-decor">
                                                    <img src={Images.ProductDeco} />
                                                </div>
                                                <div className="product-pro">
                                                    <img src={Images.HvProduct} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.HvProductLogo} alt="Hungry Veels" />
                                                </div>
                                                <h3>Hungry Veels <span><img src={Images.IndiaSvg} alt="india" /></span></h3>
                                                <h6>On-Demand Food Delivery App</h6>
                                                <h6>Industry: Logistics</h6>
                                                <p>Ordering Food? Use Hungryveels app for fast delivery from nearby restaurants. Using
                                                    Hungryveels you can Order food and beverages from restaurants near and around you. We
                                                    deliver food from your neighborhood Local joints , your favorite cafes and restaurants
                                                    from your locality. We place no minimum order restrictions.</p>
                                                <div className="product-rating">
                                                    <div className="rating-box">
                                                        <h3>4.5</h3>
                                                        <h6>app rating</h6>
                                                    </div>
                                                    <div className="rating-box">
                                                        <h3>99.5%</h3>
                                                        <h6>crash-free users</h6>
                                                    </div>
                                                    <div className="rating-box">
                                                        <h3>10k</h3>
                                                        <h6>monthly active users</h6>
                                                    </div>
                                                </div>
                                                <div className="app-store-btn">
                                                    <Link target="_blank" to="https://play.google.com/store/apps/details?id=com.hungryveels"><img src={Images.GooglePlay} alt="Google Play" /></Link>
                                                    <Link target="_blank" to="https://apps.apple.com/in/app/hungry-veels/id1620114971"><img src={Images.AppStore} alt="App Store" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="carousel-item active">
                                <img src={Images.UrnestPortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img">
                                                <div className="product-label">
                                                    <h5>Cloud Kitchen</h5>
                                                </div>
                                                <div className="product-decor">
                                                    <img src={Images.UrnestProductDeco} alt="UrNest" />
                                                </div>
                                                <div className="product-pro">
                                                    <img src={Images.UrnestProduct} alt="UrNest" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.UrnestProductLogo} alt="UrNest" />
                                                </div>
                                                <h3>UrNest <span><img src={Images.IndiaSvg} alt="India" /></span></h3>
                                                <h6>Cloud Kitchen</h6>
                                                <h6>Industry: Hospitality</h6>
                                                <p>A haven for foodies and explorers, Ur Nest blends people’s love for cooking with the
                                                    joys of discovering the culinary cultures of destinations, all from the comfort of
                                                    home. We believe food feeds the soul and is the single greatest unifier across cultures
                                                    and communities.</p>
                                                <div className="product-rating">
                                                    <div className="rating-box">
                                                        <h3>3.5</h3>
                                                        <h6>app rating</h6>
                                                    </div>
                                                    <div className="rating-box">
                                                        <h3>99.5%</h3>
                                                        <h6>crash-free users</h6>
                                                    </div>
                                                    <div className="rating-box">
                                                        <h3>10+</h3>
                                                        <h6>monthly active users</h6>
                                                    </div>
                                                </div>
                                                <div className="app-store-btn">
                                                    <Link target="_blank" to="https://play.google.com/store/apps/details?id=application.android.com.urnest"><img src={Images.GooglePlay} alt="Google Play" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="carousel-item active">
                                <img src={Images.FoloPortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img">
                                                <div className="product-label">
                                                    <h5>Online Calling</h5>
                                                </div>
                                                <div className="product-decor">
                                                    <img src={Images.FoloProductDeco} alt="Folo App" />
                                                </div>
                                                <div className="product-pro">
                                                    <img src={Images.FoloProduct} alt="Folo App" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.FoloProductLogo} alt="Folo App" />
                                                </div>
                                                <h3>Folo App <span><img src={Images.IndiaSvg} alt="India" /></span></h3>
                                                <h6>On-Demand Astrology App</h6>
                                                <h6>Industry: Astrology</h6>
                                                <p>Folo App is an astrology app that allows users to get astrology related services and
                                                    the product information based on the user's city. It is a comprehensive solution for
                                                    your regular/daily needs that cover the requirements in the most economical way
                                                    possible with ratings. Users can take a plan up to 30 days in advance. This app will be
                                                    available in the App Store soon.</p>
                                                <Link to="/folo-app" className="btn case-link">Read Case Study</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="carousel-item active ">
                                <img src={Images.OwlSchoolPortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img owls-school-img">
                                                <div className="product-pro website-pro">
                                                    <img src={Images.OwlSchoolProduct} alt="School Owls" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.OwlSchoolProductLogo} alt="School Owls" />
                                                </div>
                                                <h3>School Owls <span><img src={Images.USSvg} alt="United States" /></span></h3>
                                                <h6>Fun-Based Learning Website For Children</h6>
                                                <h6>Industry: Education</h6>
                                                <p>School Owls is a Fun-based learning website for children pursuing primary education.
                                                    This website contains thousands of printable worksheets to help your child master the
                                                    skills with minimal screen time, as excessive screen time is considered one of the
                                                    crucial risk factors that can potentially hamper the early developmental processes in
                                                    children.</p>
                                                <Link target="_blank" to="https://schoolowls.com/" className="btn case-link">Visit Website</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="carousel-item active">
                                <img src={Images.NeoGrowthPortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img neo-growth-img">
                                                <div className="product-pro website-pro ">
                                                    <img src={Images.NeoGrowthProduct} alt="NeoGrowth" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.NeoGrowthProductLogo} alt="NeoGrowth" />
                                                </div>
                                                <h3>NeoGrowth <span><img src={Images.IndiaSvg} alt="India" /></span></h3>
                                                <h6>Online Finance Services Website</h6>
                                                <h6>Industry: FinTech</h6>
                                                <p>NeoGrowth Credit Pvt. Ltd. is a finance service providing firm that aims to provide
                                                    funds to businesses to accomplish their goals with minimal interest rates with complete
                                                    transparency and the stipulations of the RBI’s directives, such as interest rate policy
                                                    is to be adopted by the Board. Businesses looking for funding from trusted financiers
                                                    can approach NeoGrowth either via their website or download the NeoGrowth app from the
                                                    Google Play Store.</p>
                                                <Link target="_blank" to="https://insta.neogrowth.in/" className="btn case-link">Visit
                                                    Website</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="carousel-item active">
                                <img src={Images.ElcPortBg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <div className="row gy-5">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-img elc-img">
                                                <div className="product-pro website-pro">
                                                    <img src={Images.ElcProduct} alt="ELC Tutoring" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="product-con">
                                                <div className="product-logo">
                                                    <img src={Images.ElcProductLogo} alt="ELC Tutoring" />
                                                </div>
                                                <h3>ELC Tutoring <span><img src={Images.IndiaSvg} alt="India" /></span></h3>
                                                <h6>UK-based Online Tutoring Website</h6>
                                                <h6>Industry: Real Estate, E-Learning</h6>
                                                <p>ELC Tutoring is an online tutoring website owned by a specialist Wirral Tutoring Agency
                                                    based in the UK providing tutorial services for children of the 11+ age group. With
                                                    this online platform, the agency aims for children to LOVE lessons and courses they are
                                                    pursuing.</p>
                                                <Link target="_blank" to="https://www.elctonline.co.uk/" className="btn case-link">Visit
                                                    Website</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>

                </section>

                <section className="how-we-work-main pb-0">
                    <div className="con-head text-center">
                        <h2>Our Software Development Approach</h2>
                        <h5>We follow a complete software development lifecycle to deliver cutting-edge software <br />solutions, meeting
                            clients’ needs</h5>
                    </div>
                    <div className="how-we-work-con">
                        <div className="we-work work-box1" style={{ background: 'url(../../Images/work-img1.png)' }} title="Plan">
                            <div className="step-no">1</div>
                            <div className="work-con">
                                <h4>Plan</h4>
                                <p>Understanding the idea and gathering all required information of Project</p>
                            </div>
                        </div>
                        <div className="we-work work-box2" style={{ background: 'url(image/work-img2.png)' }} title="Define">
                            <div className="step-no">2</div>
                            <div className="work-con">
                                <h4>Define</h4>
                                <p>Preparing a final wireframe &amp; timeline of all functions, elements, modules etc.</p>
                            </div>
                        </div>
                        <div className="we-work work-box3" style={{ background: 'url(image/work-img3.jpg)' }} title="Distribute">
                            <div className="step-no">3</div>
                            <div className="work-con">
                                <h4>Distribute</h4>
                                <p>Scheduling and dividing work among team of developer as per fixed timeline</p>
                            </div>
                        </div>
                        <div className="we-work work-box4" style={{ background: 'url(image/work-img4.png)' }} title="Design">
                            <div className="step-no">4</div>
                            <div className="work-con">
                                <h4>Design</h4>
                                <p>Researching new trends, tools, and skills for having best UI/UX from market</p>
                            </div>
                        </div>
                        <div className="we-work work-box5" style={{ background: 'url(image/work-img5.png)' }} title="Development">
                            <div className="step-no">5</div>
                            <div className="work-con">
                                <h4>Development</h4>
                                <p>Team leader and developers initiate development as per work distribution</p>
                            </div>
                        </div>
                        <div className="we-work work-head">
                            <h2>Custom Software <br />Development Lifecycle</h2>
                        </div>
                        <div className="we-work work-box6" style={{ background: 'url(image/work-img6.png)' }} title="Quality Assurance">
                            <div className="step-no">6</div>
                            <div className="work-con">
                                <h4>Quality Assurance</h4>
                                <p>Monitoring &amp; ensuring proper quality maintained as per the Deming (PDCA) Cycle</p>
                            </div>
                        </div>
                        <div className="we-work work-box7" style={{ background: 'url(image/work-img7.png)' }} title="Testing">
                            <div className="step-no">7</div>
                            <div className="work-con">
                                <h4>Testing</h4>
                                <p>Evaluating and verifying if there’s any gap, error, bug, or requirement implementation is missing
                                    before deploying</p>
                            </div>
                        </div>
                        <div className="we-work work-box8" style={{ background: 'url(image/work-img8.png)' }} title="Deploy">
                            <div className="step-no">8</div>
                            <div className="work-con">
                                <h4>Deploy</h4>
                                <p>Finally, getting product up and running before delivering to clients with all required changes</p>
                            </div>
                        </div>
                        <div className="we-work work-box9" style={{ background: 'url(image/work-img9.png)' }} title="Feedback">
                            <div className="step-no">9</div>
                            <div className="work-con">
                                <h4>Feedback</h4>
                                <p>Team passively collect and pin notes of opinions and changes from clients about project</p>
                            </div>
                        </div>
                        <div className="we-work work-box10" style={{ background: 'url(image/work-img10.png)' }} title="Maintenance">
                            <div className="step-no">10</div>
                            <div className="work-con">
                                <h4>Maintenance</h4>
                                <p>Dedicated developer is assigned for the project maintenance as requested by clients</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Industries />

                <section className="read-our-review-main pt-1">
                    <div className="container">
                        <div className="read-our-review-con">
                            <div className="con-head text-center">
                                <h2>PragetX Brand Accreditations</h2>
                                <h5>Our culture and quality services are what make us the right fit for your business to partner with us
                                    for the next-generation IT services</h5>
                            </div>
                            <div className="read-our-review">
                                <div className="row">
                                    <div className="our-review-box-inner">
                                        <Link to="https://clutch.co/profile/pragetx-technologies#summary" target="_blank">
                                            <div className="our-review-box">
                                                <div className="review-img">
                                                    <img src={Images.Clutch} alt="Clutch" />
                                                </div>
                                                <div className="number-l">
                                                    <p>Clutch Rating</p>
                                                    <div className="star">
                                                        <p>Review</p>
                                                        <img src={Images.Star} alt='star' />
                                                        <span>4.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="our-review-box-inner">
                                        <Link to="https://www.goodfirms.co/company/pragetx-technologies-llp" target="_blank">
                                            <div className="our-review-box">
                                                <div className="review-img">
                                                    <img src={Images.GoodFirms} alt="GoodFirms" />
                                                </div>
                                                <div className="number-l">
                                                    <p>GoodFirms Rating</p>
                                                    <div className="star">
                                                        <p>Review</p>
                                                        <img src={Images.Star} alt='star' />
                                                        <span>4.7</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>{/*
                          <div className="our-review-box-inner">
                              <a href="https://www.upwork.com/freelancers/~019514b189e12aacc1" target="_blank">
                                  <div className="our-review-box">
                                      <div className="review-img">
                                          <img src="image/upwork-logo.png" alt="Upwork">
                                      </div>
                                      <div className="number-l">
                                          <div className="star">
                                              <p>Jss <b>100%</b> of job success <br>& "Top rated" Badge</p>
                                              <img src="image/star.png">
                                                  <span>4.9</span>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                          </div> */}
                                    <div className="our-review-box-inner">
                                        <Link to="https://www.google.com/maps/place/PragetX+Technologies+LLP/@23.049957,72.5009979,15z/data=!4m5!3m4!1s0x0:0x78be73251ba03f26!8m2!3d23.0499545!4d72.5009977" target="_blank">
                                            <div className="our-review-box">
                                                <div className="review-img">
                                                    <img src={Images.Google} alt="Google" />
                                                </div>
                                                <div className="number-l">
                                                    <p>Google Rating</p>
                                                    <div className="star">
                                                        <p>Review</p>
                                                        <img src={Images.Star} alt='star' />
                                                        <span>5.0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="our-review-box-inner">
                                        <a href="https://www.glassdoor.co.in/Overview/Working-at-PragetX-Technologies-EI_IE5947807.11,31.htm" target="_blank">
                                            <div className="our-review-box">
                                                <div className="review-img">
                                                    <img src={Images.Glassdoor} alt="Glassdoor" />
                                                </div>
                                                <div className="number-l">
                                                    <p>Glassdoor Rating</p>
                                                    <div className="star">
                                                        <p>Review</p>
                                                        <img src={Images.Star} alt='star' />
                                                        <span>4.9</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <DiscussProject />

                <ServingFortune />

                <StartUp />

                <Clientele />

                <LetsTalk />

            </div>
        </>

    )
}

export default Home




