import React from 'react'
import "./businessdevelopment.css"
import Images from '../../../Images'
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Helmet } from 'react-helmet'
import CountUp from 'react-countup';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'

const BusinessDevelopment = () => {

    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Best Business Intelligence Services in India | PragetX</title>
            </Helmet>

            <section className="header-top-slider blockchain-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-con">
                                <h1>Business <span>Intelligence and Analytics</span> Services</h1>
                                <h5>PragetX offers the best-in-class business intelligence and business analytics services to businesses with data maturity levels to help them get the best data science solutions to use for their product/service sales and marketing processes.</h5>
                            </div>
                        </div>
                        {/* <div class="col-lg-5"></div> */}
                    </div>
                </div>
            </section>

            <section className="about-us-main nft-dec-con">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Uncover All Business Possibilities</h2>
                                    <p>Nowadays, data is valuable for all businesses, whether it is profit or non-profit. Data helps organizations target their audience, know their Behaviors, their choices, and much more to increase the lead generation ratio. As today the data is being generated in bulk every second, and to make the most out of them, a well-defined data analytical approach is required. And that’s where business data intelligence and data analytics solutions come to help businesses get business insights on the go in a scalable manner and cost-effective way.</p>
                                    <p>With a futuristic mindset, the data scientists at PragetX Technologies LLP help businesses leverage extensive Business Intelligence (BI) and analytics capabilities to modernize their data collection, processing, filtering, and presentation approaches for quick insights. Highly skilled, experienced, and certified BI consultants at PragetX will guide you through all the toolsets and methodologies we use to work on your data analytics project.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.AgileCollaborations2} alt="Uncover All Business Possibilities" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 22.26 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">Global BI market size in 2020</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 43.03 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">Expected BI market size by 2028</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 8.7 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">CAGR in the period of 2021-2028</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <DiscussProject />

            <section className="ai-ml-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our Business Intelligence Prepositions</h2>
                                {/* <h5>At PragetX Technologies LLP, our NFT experts ensure that you get your NFT solution embedded with top-class features and functionalities with 100% satisfaction.</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BiConsulting} alt="BI Consulting" />
                                    </div>
                                    <h5>BI Consulting</h5>
                                    <p>Expert BI consultants at PragetX help businesses understand and make decisions regarding the BI solutions, including data warehousing, custom BI app development, etc., leading to better outcomes.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DataWarehousing} alt="Data Warehousing" />
                                    </div>
                                    <h5>Data Warehousing</h5>
                                    <p>Helping businesses create and customize their data warehousing in their choice of warehousing options, such as Enterprise Data Warehouse (EDW), Operational Data Store (ODS), and Data Mart.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BiSolutionDevelopment} alt="BI Solution Development" />
                                    </div>
                                    <h5>BI Solution Development</h5>
                                    <p>Looking for your business-specific business intelligence and analytics solution development services provider? PragetX is your destination to get customized BI solutions without comprising anything.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DataVisualizationAndReporting} alt="Data Visualization and Reporting" />
                                    </div>
                                    <h5>Data Visualization and Reporting</h5>
                                    <p>Providing businesses with the best front-end dashboard to represent real-time gathered data. Not just that, we also provide integration of your application with Power BI and Tableau tools for real-time data visualization and reporting.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BiSolutionMaintenanceTesting} alt="BI Solution Maintenance & Testing" />
                                    </div>
                                    <h5>BI Solution Maintenance &amp; Testing</h5>
                                    <p>Have your business intelligence solution ready, but need someone to bug test it and maintain it for a certain period? Then PragetX is there to help you out to meet all your BI solution maintenance and testing requirements.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DedicatedBISupport} alt="Dedicated BI Support" />
                                    </div>
                                    <h5>Dedicated BI Support</h5>
                                    <p>PragetX's team offers Dedicated BI Support to assist you in offering consistent results after the deployment. It helps in solving business difficulties in a comprehensive manner and Accomplishing unprecedented results.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-main">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Why Trust PragetX As Your Business Intelligence &amp; Analytics Company?</h2>
                        {/* <h5>At Pragetx, we embrace a well-established set of cultural and professional values which <br>represent our highest aspirations for how we engage as colleagues, fellows, alumni, partners, and board members.</h5> */}
                    </div>
                    <div className="core-values">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.TopProfessionals} alt="Top professionals to cover your needs" />
                                    <div className="values-con">
                                        <span>Top professionals to cover your needs</span>
                                        <p>Our experienced team of data scientists and BI specialists will closely inspect your needs and offer the best-in-class solutions that help you identify and maintain your techniques, planning processes, expenditures, and so forth to achieve the desired results.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.SecuredProcesses} alt="Secured processes" />
                                    <div className="values-con">
                                        <span>Secured processes</span>
                                        <p>To help companies in the development of safe and progressed information flows, our experts are well-versed in data compliance and safety standards. Following an analysis of your requirements, we implement industry-leading encryption methods and security procedures to safeguard your systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.TransparentWorkflows} alt="Transparent Workflows" />
                                    <div className="values-con">
                                        <span>Transparent Workflows</span>
                                        <p>PragetX provides robust Business Intelligence services that fulfill your enterprise-specific requirements, from consulting to execution. We maintain transparency in all of our communication systems through advanced tracking, collaborative effort, project updates, and monitoring systems.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.CuttingEdgeToolsTechnologies} alt="Cutting-edge tools & technologies" />
                                    <div className="values-con">
                                        <span>Cutting-edge tools &amp; technologies</span>
                                        <p>Our business intelligence advisors and data scientists build efficient business intelligence services using innovative tools and technologies. Our team of experts of business intelligence specialists thoughtfully comprehends your company to create an improved data blueprint encompassing all areas to maximize ROI.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ClientTeleMap scrollTarget={3400} />
            <LetsTalk />

        </>
    )
}

export default BusinessDevelopment