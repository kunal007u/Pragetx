import React from 'react'
import "./cloudsolutions.css"
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

const CloudSolutions = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Best Cloud Services Provider Company in India | PragetX</title>
            </Helmet>

            <section className="header-top-slider cloud-computing-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1><span>Cloud Computing Solutions</span> <br />Provider Company</h1>
                                <h5>Be a part of the future of technologies! Transition your on-premises business software to a cloud environment friendly by refactoring them according to the cloud architecture requirements. PragetX offers time and cost-effective cloud service packages, including cloud migration services, cloud governance services, and custom cloud-native application development.</h5>
                                <Link to="/contact-us" className="btn">Get A Project Estimation Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>Cloud Enablement Services For Modern Businesses</h2>
                                    <p>As businesses have already faced an industry-transforming event called COVID-19 Pandemic, they need a robust IT solution that can accelerate their processes, provide improved scalability, enable innovations, and easily connect them with the world without compromising business security and help them get all in a cost-effective way.</p>
                                    <p>On a day-to-day basis, organizations deal with countless IT processes, in which there are certain chances for them missing out on IT infrastructure management and making the most out of it. All these indicators lead businesses to adopt cloud technology. Hence, PragetX - our reliable cloud services partner into the picture!</p>
                                    <p>PragetX has a team of expert cloud engineers whom you can count as your strategic cloud partners, helping you get your digital transformation through managed cloud services. You can consider this as a noteworthy opportunity for your organization to innovate and redefine approaches to grow business faster.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.CloudImg} alt="Simplify Your Enterprise Workflow Today" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 53 : 0} duration={3} />%</div>
                                    <div className="number-l">of SMBs have adopted cloud platforms in 2021</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 1.2 : 0} duration={3} decimals={1} />M</div>
                                    <div className="number-l">of investment done by SMBs on cloud services</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 30 : 0} duration={3} />%</div>
                                    <div className="number-l">of cloud storage got wasted by organizations in 2021</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 57 : 0} duration={3} />%</div>
                                    <div className="number-l">of existing cloud users plan to move more IT assets in cloud</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 42 : 0} duration={3} />%</div>
                                    <div className="number-l">of on-premises systems users will shift to Cloud SaaS products</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 29 : 0} duration={3} />%</div>
                                    <div className="number-l">of cloud users ends up overspending in cloud services</div>
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
                                <h2>Cloud Services We Offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudConsulting} alt="Cloud Consulting" />
                                    </div>
                                    <h5>Cloud Consulting</h5>
                                    <p>Consult our expert cloud engineers to get a proper roadmap to choose the right cloud vendor from many cloud services providers &amp; implement your cloud services that can lead your business to the competitive edge.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudMigration} alt="Cloud Migration" />
                                    </div>
                                    <h5>Cloud Migration</h5>
                                    <p>Helping businesses choose the right cloud platform to migrate their data from on-premises infrastructure to the cloud platform by simplifying complex cloud migration processes, like refactoring on time.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudNativeApp} alt="Cloud Native App Development" />
                                    </div>
                                    <h5>Cloud-Native App Development</h5>
                                    <p>Analyzing and building cloud-native app by considering that cloud platform architecture for its seamless performance. Leverage PragetX to help you with your cloud-native app development project.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudIntegration} alt="Cloud Integration Services" />
                                    </div>
                                    <h5>Cloud Integration Services</h5>
                                    <p>Access all their third-party on-premises or cloud-based software, and IoT objects by integrating them into a centralized programmed platform and making use of them through a single glass pane.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SaaSImpl} alt="SaaS Product Implementation" />
                                    </div>
                                    <h5>SaaS Product Implementation</h5>
                                    <p>Leverage Cloud-Native Application Development Services to build a Cloud SaaS product, which can provide top-notch performance, agility, and higher uptime, to ensure a coherent user experience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudOptimize} alt="Cloud Optimization Services" />
                                    </div>
                                    <h5>Cloud Optimization Services</h5>
                                    <p>Monitor and analyze cloud utilization to figure out cloud overspend. Providing a guaranteed cloud optimization strategy to choose the right cloud plan and efficiently utilize cloud <br />services.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.Serverless} alt="Serverless Computing" />
                                    </div>
                                    <h5>Serverless Computing</h5>
                                    <p>Develop an auto-provisioning cloud solution to ensure seamless cloud application performance and user experiences while forgetting worries about cloud architecture backend provisioning and maintenance.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CloudSecurity} alt="Cloud Security" />
                                    </div>
                                    <h5>Cloud Security</h5>
                                    <p>Cyberattackers are waiting for the slightest opportunity to disrupt your online services and use them for their own benefits. Hire our cloud security engineers to harden your all cloud end-points.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.ManagedCloud} alt="Managed Cloud Services" />
                                    </div>
                                    <h5>Managed Cloud Services</h5>
                                    <p>Outsource your cloud maintenance, cloud backup and disaster recovery, and cloud monitoring projects to PragetX and get dedicated support for each cloud service suite you choose for your business.</p>
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
                                    <h2>PragetX - Your Ideal Cloud Services Companion</h2>
                                    <p>A list of factors that defines PragetX as your one-stop destination to get all you want in your ideal cloud solutions</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Experienced Cloud Engineers’ Team You Can Count On</span>
                                                <p>Our cloud engineers have a wide experience in all popular public cloud services providers, such as AWS, Microsoft Azure, Google Cloud Platforms, etc., who use different cloud platforms’ best practice to deliver you the best cloud product with less time-to-market.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Get Agile Cloud Solutions</span>
                                                <p>Our Cloud solutions are highly scalable and flexible based on cloud processing requirements and integrated with the cloud platforms with a proper configuration to inherit the platform’s auto-scaling functionalities, which will help you in your better cloud cost optimization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Cloud Solution Made Specifically For Your Business</span>
                                                <p>PragetX understands that every business has different requirements, and to meet all such, they need their business-oriented cloud solution. Therefore, we understand your business need and craft the best-fit cloud solutions for your organization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>A Complete Cycle Cloud Product Implementation</span>
                                                <p>Get complete ownership of your cloud solution implementation from ideation to development, integration, deployment, and continuous maintenance process to tailor your business-oriented cloud solution.</p>
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
                                <h2>Our Cloud Solution Implementation Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Analysis} alt="Requirement Gathering and Analysis" />
                                    </div>
                                    <h5>Requirement Gathering and Analysis</h5>
                                    <p>Our cloud consultants first gather requirements for the cloud solution, like clients’ business objectives, business IT infrastructure capacity, expected outcomes, suggested solution, and agreed terms, to design a well-structured and sound cloud solution implementation roadmap while aligning the best-fit financial models for that solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Wireframing} alt="Wireframing & Prototyping" />
                                    </div>
                                    <h5>Wireframing &amp; Prototyping</h5>
                                    <p>Our business analysts deeply analyze the roadmap circulated by the pre-sale team, do their own research to fix the development approach and timeline after discussing with cloud engineers, and wireframe the solution to get confirmation from the client to shift the product into the development phase.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.UiDev} alt="Development" />
                                    </div>
                                    <h5>Development</h5>
                                    <p>Our cloud engineers first design the best-fit cloud architecture for the cloud solution implementation, finalize and align the right technology stack for the development, and then use the development best practices to build the cutting-edge cloud product, meeting agreed requirements and industry compliance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={6750} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />

        </>
    )
}


export default CloudSolutions;