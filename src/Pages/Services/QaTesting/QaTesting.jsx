import React from 'react'
import "./qaTesting.css"
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
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'

const QaTesting = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Best QA and Software Testing Services Company in India | PragetX</title>
            </Helmet>
            <section className="header-top-slider qa-software-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1><span>QA &amp; Software</span> Testing Company</h1>
                                <h5>Delivering robust software solutions confidently with thorough QA testing and software source code testing processes while ensuring optimum software quality and meeting customers' requirements. Hire QA and software quality management engineers associated with PragetX to bug-fix and secure your software solutions and launch them in the market with 100% confidence.</h5>
                                <Link to="/contact-us" className="btn">Get Your Software Solution Tested Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>Ensure &amp; Optimize Your Software Quality</h2>
                                    <p>Getting online services in compact-sized mobile devices-supported apps from the comfort of home with a seamless, uninterrupted experience is what your users want from your application solutions. To meet your users' expectations and make your mobile application a known brand, you as an online services provider, must ensure that your software solution is well-optimized. At PragetX, our software quality control and testing engineers make sure that you get the high-functioning software solutions providing accurate and faster responses in each click regardless of the circumstances.</p>
                                    <p>Software quality control and QA engineers at PragetX see a broad view of your software application performance. And for this, they do BlackBox software testing to find more bugs and use their forward-thinking approach to find solutions for quick error-solving. At PragetX, customers always come first, and we provide them with a range of software testing services from the domain of manual and automated software testing approaches.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.QaImage} alt="Optimize Your Software Quality" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 20 : 0} duration={3} />%</div>
                                    <div className="number-l">of Software Testing is mandated by Federation &amp; Government Bodies</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">

                                    <div className="number-c count percent" ><CountUp end={isVisible ? 74 : 0} duration={3} />%</div>
                                    <div className="number-l">of software testers follow a hybrid testing approach</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 11 : 0} duration={3} /></div>
                                    <div className="number-l">Software Testing Parameters are most-important to follow</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 30 : 0} duration={3} />%</div>
                                    <div className="number-l">of testers use AI-capabilities for test selection</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 66.5 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">testers automate functional testing</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 54.2 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">testers automate API testing</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 50.5 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">testers automate regression testing</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 95.3 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">of testers prefer manual probability testing</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 62.8 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">of testers recommend manual smoke testing</div>
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
                                <h2>Best-In-Class Software Quality Assurance Testing Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SoftwareLifecycle} alt="Software Lifecycle Testing" />
                                    </div>
                                    <h5>A Complete Software Lifecycle Testing</h5>
                                    <p>With a vision to help companies create their digital service platform presence, PragetX ensures that your software solution will be tested in all phases of the software development lifecycle. So, you can roll out your software solution in the market with utmost confidence.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.BlackboxTesting} alt="BlackBox Software Testing" />
                                    </div>
                                    <h5>BlackBox Software Testing</h5>
                                    <p>Here, we don’t ask our clients to give us heads-up to do the software testing. Software testers at PragetX take a comprehensive software analytical approach to find and fix even the granular but most impactful software bugs to deliver a fully-optimized software solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.GreyboxTesting} alt="GreyBox Software Testing" />
                                    </div>
                                    <h5>GreyBox Software Testing</h5>
                                    <p>Use given a couple of software bugs to find more software solution bugs and fix them to deliver the optimized software solution before the deadline comes. This GreyBox software testing approach helps to complete a software testing process in half-time.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.WhiteboxTesting} alt="WhiteBox Software Testing" />
                                    </div>
                                    <h5>WhiteBox Software Testing</h5>
                                    <p>WhiteBox software testing is like an open book for software testers because they already have a list of bugs, which they need to verify and fix through a manual software testing approach, which helps you get your optimized software solution in no time.</p>
                                </div>
                            </div>
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
                                    <h2>Our Proficiency in Software Testing Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>QA Testing</h5>
                                    <p>Use manual software testing approaches to identify and bug fix software solutions with disciplinary software solution optimization strategies.</p>
                                    <ul>
                                        <li>Smoke Testing</li>
                                        <li>Exploratory Testing</li>
                                        <li>End-to-End Testing</li>
                                        <li>Functional Testing</li>
                                        <li>Regression Testing</li>
                                        <li>Device Compatibility Testing</li>
                                        <li>Sanity Testing</li>
                                        <li>Integration Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>Web App Testing</h5>
                                    <p>In-depth web application code testing to ensure the web apps' compatibility in types of web browsers and defence against cyberattacks.</p>
                                    <ul>
                                        <li>Cross-Browser Testing</li>
                                        <li>Functional Testing</li>
                                        <li>Regression Testing</li>
                                        <li>Smoke Testing</li>
                                        <li>Integration Testing</li>
                                        <li>UI Testing</li>
                                        <li>Field Validation Testing</li>
                                        <li>Acceptance Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>Mobile App Testing</h5>
                                    <p>Ensuring the working of the mobile app across all-available mobile devices through managing complex device-based modules, solving user side-testing queries, and running different QA tests like:</p>
                                    <ul>
                                        <li>Functional Testing</li>
                                        <li>Performance Testing</li>
                                        <li>UI UX Testing</li>
                                        <li>Device Compatibility Testing</li>
                                        <li>Localization Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>Performance Testing</h5>
                                    <p>Testing software solutions in all possible environments and circumstances, like high-traffic scenarios and complex algorithms, integration options to discover and solve all possible areas where an application may lag.</p>
                                    <ul>
                                        <li>Performance Testing &amp; Assessment</li>
                                        <li>Load Testing</li>
                                        <li>Stress Testing</li>
                                        <li>Scalability Testing</li>
                                        <li>Stability Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>API Testing</h5>
                                    <p>Ensuring the performance and minimizing the complexities of an API in terms of function responses, loading, scaling, and UI UX perspectives.</p>
                                    <ul>
                                        <li>Non-UI Functional Testing</li>
                                        <li>Integration Testing</li>
                                        <li>Unit Testing</li>
                                        <li>Load Testing</li>
                                        <li>Exception Testing and Handling</li>
                                        <li>UI UX Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>Microservices Testing</h5>
                                    <p>Deciding software testing KPIs to follow for the testing, aligning responsible QA engineers for the software testing processes to manage test environment setup, test data generating and gathering, and creating varying test cases with solutions</p>
                                    <ul>
                                        <li>Unit Testing</li>
                                        <li>Performance Testing</li>
                                        <li>Integration Testing</li>
                                        <li>Regression Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <h5>Security Testing</h5>
                                    <p>Providing a comprehensive application code security testing solution, which includes different types of vulnerability assessments and penetration tests using your choice of testing approach, from the black box, grey box, and white box testing.</p>
                                    <ul>
                                        <li>Network hardening</li>
                                        <li>Full-stack app security testing</li>
                                        <li>App architecture audit</li>
                                        <li>Compliance testing</li>
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
                                <h2>Software Testing Approaches We Follow</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ManualTesting} alt="Tone and Voice" />
                                    </div>
                                    <h5>Manual Software Testing</h5>
                                    <p>Thoroughly check the source code of the software solution in all possible scenarios to identify and fix software bugs and exceptions. A lengthy software testing process, but worth to wait to get exceptional software performance.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AutomationTesting} alt="Visual Identity" />
                                    </div>
                                    <h5>Software Testing Automation</h5>
                                    <p>Writing a script for required software or app test processes that accelerates their speed and saves testers' time to do innovations. A testing approach, providing near-to-accurate software testing results in a cost-effective way.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AgileTesting} alt="Reach the right audience" />
                                    </div>
                                    <h5>Agile Software Testing</h5>
                                    <p>A software testing approach that is bundled up with the software development package, in which software development, code integration, and code testing processes are done simultaneously. A time saving and cost-effective software development and testing model.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.HybridTesting} alt="Roadmap" />
                                    </div>
                                    <h5>Hybrid Software Testing</h5>
                                    <p>Want to roll out your software solution in the market with precision? Then this hybrid software testing approach is the right fit for you, which uses testing automation and manual software testing approaches to optimize the software solution.</p>
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
                            <h2>Discover All  Possibilities with our AI Solution and Take <br />Your Business Success To Next Level</h2>
                        </div>
                    </div>
                </div>
            </section>

            <TechnologyWork />
            <section className="about-us-main why-trust best-fit follows pt-0">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.SoftImage2} alt="Custom Software Development Company" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Software Testing Lifecycle</h2>
                                    <ul>
                                        <li>Requirement Gathering &amp; Analysis</li>
                                        <li>Software Testing KPIs</li>
                                        <li>QA Engineer Allocation</li>
                                        <li>Setup Test Environment</li>
                                        <li>Test and Bugfix</li>
                                        <li>Gather Test Cases</li>
                                        <li>Future Maintenance &amp; Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={8950} />
            <StartUp />
            <Clientele />
            <LetsTalk />
        </>
    )
}

export default QaTesting