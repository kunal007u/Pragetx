import React from 'react'
import "./devops.css"
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject'
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine'
import Industries from '../../../Components/Industries/Industries'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import TechnologyWork from '../../../Components/Technology-work/TechnologyWork'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import StartUp from '../../../Components/StartUp/StartUp'
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'
import CountUp from 'react-countup';

const Devops = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Top DevOps Services and Solutions Company in India | PragetX</title>
            </Helmet>

            <section className="header-top-slider devops-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1><span>DevOps Solutions</span> <br />Provider Company</h1>
                                <h5>Build your business-oriented software solution by teaming up development and operations capabilities to ensure simultaneous software implementation, integration, and testing, leading to faster solution product time-to-market. Hire expert DevOps engineers and developers from PragetX Technologies LLP, who uses DevOps solution development best practices to deliver the best DevOps managed services.</h5>
                                <Link to="/contact-us" className="btn">Let’s Discuss Project <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
            </section>

            <ClientLogoSlider />
            <section className="about-us-main nft-dec-con devops">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Improve Software <br />Time-To-Market With DevOps</h2>
                                    <p>Today, as the IT industry is transforming rapidly, businesses providing online services need a continuous and progressive build to ensure faster roll-outs of their applications to enable their users to have a seamless application user experience. In order to implement such optimum application roll-outs, businesses need an effective IT system efficiently aligned with the organization and its best development approach. Therefore, the DevOps solution comes into the picture that enables organizations to Automated Business IT Processes, resulting in progressive business revenues.</p>
                                    <p>Aiming to introduce businesses with the future-ready IT solutions, PragetX has carefully curated a team of DevOps engineers, proposing the insightful DevOps consulting, and value-added DevOps services enabled with Agile methodologies for better and faster outcomes. An Agile + DevOps methodologies combination is considered the best one as it automates continuous delivery of software functions and builds into a well architectured, integrated, and tested workflow.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.DevopsImg} alt="Simplify Your Enterprise Workflow Today" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 6.78 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">DevOps Market Size in 2020</div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 57.90 : 0} duration={3} decimals={1} />B</div>
                                    <div className="number-l">Projected DevOps Market Size by 2030</div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 24.2 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">CAGR valued between 2021 - 2030</div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 25 : 0} duration={3} />%</div>
                                    <div className="number-l">Business efficiency improvement noted by DevOps solutions’ adopters</div>
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
                                <h2>Our Suite of Future-Ready DevOps Services and Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DevopsConsulting} alt="DevOps Consulting" />
                                    </div>
                                    <h5>DevOps Consulting</h5>
                                    <p>Facing issues in developing your DevOps solutions? Contact PragetX’s DevOps consultants and engineers, who will listen to your requirements, analyze them, and devise the best-fit DevOps solution implementation plan for your business in an affordable package.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DevopsService} alt="DevOps-As-A-Service" />
                                    </div>
                                    <h5>DevOps-As-A-Service</h5>
                                    <p>A complete package of DevOps services, from strategic planning, CI/CD pipeline implementation, test automation, and build automation to continuous DevOps solution maintenance that every business needs to accelerate their business IT processes.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WorkflowAuto} alt="DevOps Workflow Automation" />
                                    </div>
                                    <h5>DevOps Workflow Automation</h5>
                                    <p>Need a well-established automated solution for your repetitive, boring, and monotonous business IT processes? DevOps engineers at PragetX use DevOps + Agile methodology best practices to develop a cohesive solution, leading your business to better productivity.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.CICDPipeline} alt="CI/CD Pipeline Implementation" />
                                    </div>
                                    <h5>CI/CD Pipeline Implementation</h5>
                                    <p>Implement CI/CD pipeline for your business software solution development and ensure their continuous, faster, and progressive user experience with quick and frequent version rollouts, so your online services’ users can use new and latest features.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.Containerization} alt="Containerization Services & Microservices Implementation" />
                                    </div>
                                    <h5>Containerization Services &amp; Microservices Implementation</h5>
                                    <p>Ensure faster software rollout and performance across different platforms with containerization and orchestration services and microservices implementation. PragetX offers the best - in - class Kubernetes and Docker-based multi-cloud and containerization services that will ease business processes and levitate your business performance with lower security risks.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IACBuild} alt="Infrastructure As Code (IaC) Build Services" />
                                    </div>
                                    <h5>Infrastructure As Code (IaC) Build Services</h5>
                                    <p>Ease your infrastructure management, operations, and maintenance processes by automatically provisioning your IT infrastructure in your business-oriented software solution with the help of our infrastructure as code services, which leads your business to greater productivity. <br />Hire our expert DevOps engineers for your IaC implementation requirements today.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SecopsSol} alt="SecOps Implementation Solutions" />
                                    </div>
                                    <h5>SecOps Implementation Solutions</h5>
                                    <p>Well-implemented and tested DevOps solutions with near fewer errors can contain serious loopholes. And to patch up such, the SecOps solution comes to the rescue, which secures all your DevOps solution end-points with precision by prioritizing security over development.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.HelpDesk} alt="Dedicated DevOps Help-Desk Services" />
                                    </div>
                                    <h5>Dedicated DevOps Help-Desk Services</h5>
                                    <p>Have a query or DevOps solution-based issue to solve? Contact us with your query. We will ensure to align our DevOps engineers to have a look at your problems and use their unparallel domain expertise to solve issues within 24-48 hours.</p>
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
                                    <h2>Why PragetX For DevOps Services?</h2>
                                    <p>A list of factors that defines PragetX as your one-stop destination to get all you want in your ideal DevOps solutions</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Experienced &amp; Reliable Team</span>
                                                <p>DevOps engineers at PragetX have an extensive experience in the domain, always keep themselves updated with the latest technology trends, and are persistent in meeting varying customers' needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Absolute Transparency</span>
                                                <p>At PragetX, we live by our mantra, your growth = our growth. So, we always ensure to keep our communication clear and transparent with all the parties we deal with, whether it is about clients or DevOps engineers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>On-Time Delivery</span>
                                                <p>Punctuation is what we make certain in our office environment, whether it is about coming to work or implementing and delivering DevOps projects to the client. Give us a chance to prove our obligingness to our clients.</p>
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
                                <h2>DevOps Approach We Leverage At PragetX</h2>
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
                                    <h5>Analysis &amp; Brainstorming</h5>
                                    <p>DevOps experts at PragetX, from designing a DevOps solution implementation roadmap to choosing a technology stack, always keep clients’ interests at the center of the process.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.DevelopmentTesting} alt="UI/UX" />
                                    </div>
                                    <h5>Development &amp; Testing</h5>
                                    <p>Using all the research to continuously build, integrate, and test the DevOps solution while keeping the deployment deadline under consideration.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.HardeningSolution} alt="Development" />
                                    </div>
                                    <h5>DevOps Solution Hardening</h5>
                                    <p>Analyze the outputs of the test results to find the gold-standard solution to fix the loopholes and harden the DevOps solution from all end-points.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ContinuousDevelopment} alt="QA & Testing" />
                                    </div>
                                    <h5>Continuous Deployment</h5>
                                    <p>Once the loophole fixes are done, push that directory for the final deployment, and we continue this process until the whole project deployment is done.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.FeedbackAmendments} alt="Deployment" />
                                    </div>
                                    <h5>Feedback &amp; Amendments</h5>
                                    <p>Once the DevOps solution is ready, we represent the solution in front of the clients and ask for their feedback to make necessary amendments.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.MaintenanceSupport} alt="Back-Support" />
                                    </div>
                                    <h5>Maintenance &amp; Support</h5>
                                    <p>After delivering the final DevOps solution to the client, we promise to deliver dedicated maintenance &amp; support free of cost for a certain period.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientTeleMap scrollTarget={6600} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />

        </>
    )
}

export default Devops