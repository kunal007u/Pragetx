/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import './hiredotnetdeveloper.css';
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider';
import Images from '../../../Images';
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine';
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap';
import Clientele from '../../../Components/Clientele/Clientele';
import StartUp from '../../../Components/StartUp/StartUp';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import HireDevelopersForm from '../../../Components/HireDevelopersForm/HireDevelopersForm';

const HireDotNetDeveloper = () => {
    return (
        <>
            <Helmet>
                <title>Hire Dedicated .NET/ ASP.NET Developers | .NET Development Company | PragetX</title>
            </Helmet>
            <div className='hire-dot-net-developer'>

                <section className="header-slider hire-dotnet-top hire-developers">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="header-top-con">
                                    <h1>Hire Dedicated <br /><span>.Net</span> Developers</h1>
                                    <h5>Hire the best .NET developers, delivering the cutting-edge, enterprise-grade, cross-platform, MVC-based .NET app development solutions, meeting all technical requirements within a deadline under a valuable budget with a guaranteed 160+ man-hours a month.</h5>
                                    <ul>
                                        <li>NDA Protected</li>
                                        <li>End-to-end solutions</li>
                                        <li>Agile process development</li>
                                        <li>100% on-time delivery</li>
                                        <li>Part-Time Hiring, Full-Time Hiring, Hourly Hiring <b>@$15/hour*</b></li>
                                    </ul>
                                    <Link to="#" className="btn">Get A Rate Card Now <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <HireDevelopersForm />
                            </div>
                        </div>
                    </div>
                </section>

                <ClientLogoSlider />

                <section className="we-are-tag-line hire-tag-line">
                    <div className="container">
                        <div className="row">
                            <div className="we-are-tag-line-con">
                                <h2>You're not just recruiting a developer, you're recruiting a leader</h2>
                                <h4>At PragetX, such is the commitment &amp; responsibilities our teammates are trained to take while onboarding to your company for any dedicated work</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us-main soft-about-main pt-1">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h2>Why Hire Dedicated .NET Developers?</h2>
                                        <p>Being a Microsoft programming language vertical having robust and cross-platform supportability nature, .NET programming frameworks are recommended by many industry leaders. To craft your business-critical application ideas into a real project, hire the extremely proficient .NET developers from our pool of resources having 3-9+ years of experience in the field and building feature-rich cross-platform software applications.</p>
                                        <p>Desperately searching for highly experienced full-stack .NET developers who can embed your software application development requirements into a robust, innovative, cutting-edge IT solution under a quite friendly budget, such as @$10/hour? Then PragetX Technologies LLP is your best choice. At PragetX, we have a number of .NET profiles, which can be made available on demand. So, Inquire today!</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.DotNetAboutImg} alt="Custom Software Development" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-best-choose-main pt-0 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="why-best-choose-con" style={{ width: '100%' }}>
                                <h2>Your Ideal Team of .NET Developers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-main why-trust best-fit technical-expertise">
                        <div className="container">
                            <div className="about-con">
                                <div className="row gy-5">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h4>Technical Expertise of Our .NET Developers</h4>
                                            <ul>
                                                <li>Uses .NET IDE and text editors, like Visual Studio Code, JetBrains, SonarQube, StyleCop, Ride, Novi Builder</li>
                                                <li>A comprehensive knowledge of .NET programming language and its all frameworks: Dot Net Core, C#, ASP.NET, MVC3/MVC4/MVC5, Xamarin, SharePoint, Entity.</li>
                                                <li>Hands on experience in integrating and managing databases, like MS SQL server, PostgreSQL, SQLite, Microsoft Azure SQL, RavenDB, CosmosDB, Access.</li>
                                                <li>Higher proficiency in .NET testing tools, like Coded UI Test, dotCover, dotTrace, NUnit, Telerik Test Studio, Might Moose</li>
                                                <li>Better understanding of different database, programming framework and collaboration IT stacks' architectural patterns.</li>
                                                <li>Hands-on experience with .NET libraries, like Swashbuckle, Polly, AutoMapper, MailKit, Dapper, Ocelot.</li>
                                                <li>Proficiency in doing server-side and client-side implementations </li>
                                                <li>Better debugging skills and client-first mindset</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="con-head">
                                            <h4>What You’ll Get From PragetX?</h4>
                                            <p>Get the best breed of .NET development solutions and services from the PragetX:</p>
                                            <ul>
                                                <li>Eye-catchy and responsive .NET app UI/UX</li>
                                                <li>Secure, scalable, and reliable .NET apps</li>
                                                <li>Effective SDK/API integrations with .NET apps</li>
                                                <li>Cognitive collaboration and communication</li>
                                                <li>Fewer project failure risks</li>
                                                <li>Better customer experience and satisfaction</li>
                                                <li>Flexible budget</li>
                                                <li>On-time delivery</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-center">
                                        <Link to="https://calendly.com/pragetx" className="btn">Book A Call Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
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
                                    <h2>Hire Dedicated .NET Developers from PragetX</h2>
                                </div>
                            </div>
                        </div>
                        <div className="ai-services-main">
                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DotNetConsultants} alt="Custom Software Development" />
                                        </div>
                                        <h5>.NET Consultants</h5>
                                        <p>Want to build your unique business-oriented .NET solution or need a specific solution for your .NET development? Consult our expert .NET developers today!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.CustomIOSAppDevelopers} alt="Enterprise Software Development" />
                                        </div>
                                        <h5>Custom .NET App Developers</h5>
                                        <p>Delivering business-oriented, industry-focused, MVC-based, and enterprise-grade custom .NET development solutions. Hire our proficient.NET developers today!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DotNetCloudMicroservicesEngineers} alt="Clone App Development" />
                                        </div>
                                        <h5>.NET Cloud &amp; Microservices Engineers</h5>
                                        <p>Refactor your legacy or build new business IT applications to run efficiently on specific cloud platforms with microservices implementations. Hire our .NET engineers today!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DotNetIntegrationEngineers} alt="NFT Platform Development" />
                                        </div>
                                        <h5>.NET Integration Engineers</h5>
                                        <p>Integrate your .NET development solutions with third-party APIs to make the feature and function-rich solutions, providing your users with the unyielding app user experience.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.IOSAppUpgradeAndMigrationEngineers} alt="UI/UX Designing" />
                                        </div>
                                        <h5>.NET Migration &amp; Modernization Engineers</h5>
                                        <p>Migrate legacy software solutions into .NET build and upgrade or modernize your old .NET build into the latest .NET solution. Hire our .NET migration and modernization experts today!</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.IOSAppSupportEngineers} alt="Application Maintenance & QA Services" />
                                        </div>
                                        <h5>.NET Maintenance &amp; Support Engineers</h5>
                                        <p>Every .NET build needs a final touch before making it public and consistent support to improve and ensure its elevating performance. Hire our .NET support engineers @$10/hour*</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TeamTagLine />

                <section className="core-values-main">
                    <div className="container">
                        <div className="client-con-row">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="top-features">
                                        <h2>The PragetX - .NET Developers Staff Augmentation Advantages</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Skip Sourcing, Beat Talent Crunch, Save Time</span>
                                                    <p>Access to a pool of experienced, dedicated .NET developers for hire in less time by adopting modern and quick sourcing &amp; hiring processes.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Say No to Pre and Post-Hiring Responsibilities</span>
                                                    <p>When outsourcing the whole .NET talent hiring process to the professional and dedicated HR team, why worry? We have you covered!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Always Get Your Beta Ready</span>
                                                    <p>The shortlisted profiles aren’t meeting your app development requirements? Don’t worry! We have a beta list of pre-vetted .NET developers ready for you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Absolute Confidentiality Agreement</span>
                                                    <p>We understand that you don’t want to disclose your collaboration with us. That’s completely fine! Get the absolute partnership integrity with PragetX.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Utmost Transparency</span>
                                                    <p>Be updated with the development approach and progress of your .NET app development. Transparency at PragetX is a must that we follow.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="core-values-box">
                                                <div className="values-con">
                                                    <span>Save on Salary</span>
                                                    <p>The dedicated .NET developers’ hiring cost at PragetX is quite budget-friendly and will help you save up to 50% on employee salary with top-notch IT services.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="discuss-your-project-main">
                    <div className="container">
                        <div className="discuss-your-project-con">
                            <div className="discuss-left">
                                <h3>Leverage PragetX Technologies LLP to be your extended web and mobile app development team, playing a key role in your business’s growth.</h3>
                            </div>
                            <div className="discuss-btn">
                                <Link to="/become-partner" className="btn">Become A Partner <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <ClientTeleMap scrollTarget={5900} />

                <section className="ai-ml-we-work hiring-process-main">
                    <div className="container">
                        <div className="row">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="con-head text-center">
                                        <h2>4-Step Easy .NET Developer Hiring Process</h2>
                                        <h5>A simple 4-step easy hiring process to hire your ideal-fit dedicated .NET developer while ensuring time and cost-effectiveness.</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="hiring-process">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="process-box">
                                            <div className="process-ic">
                                                <img src={Images.HProcessUnderstandingRequirements} alt="Understanding Requirements" />
                                            </div>
                                            <p>Share Your .NET App Development Requirements</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="process-box">
                                            <div className="process-ic">
                                                <img src={Images.HProcessUIUX} alt="UI/UX" />
                                            </div>
                                            <p>We’ll shortlist the most ideal talent</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="process-box">
                                            <div className="process-ic">
                                                <img src={Images.HProcessDevelopment} alt="Development" />
                                            </div>
                                            <p>Hire the right-fit .NET Developer for the project</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="process-box">
                                            <div className="process-ic">
                                                <img src={Images.HProcessQATesting} alt="QA & Testing" />
                                            </div>
                                            <p>Onboard the talent &amp; Start the innovations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <StartUp />

                <section className="ai-ml-we-work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Our .NET App Development Processes</h2>
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
                                        <p>Our team of sales executives and business analysts will analyze the project requirements to devise the best .NET solution.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.UIUX} alt="UI/UX" />
                                        </div>
                                        <h5>UI/UX</h5>
                                        <p>We design an interactive UI/UX for the .NET app development project that meets the user expectation levels.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.Development} alt="Development" />
                                        </div>
                                        <h5>Development</h5>
                                        <p>Programming the .NET app with the technology stack asked by the client or suggested to the client for better responsiveness.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.QATesting} alt="QA & Testing" />
                                        </div>
                                        <h5>QA &amp; Testing</h5>
                                        <p>Apply all necessary QA practices and testing algorithms to find and resolve potential .NET app bugs and exceptions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.ContinuousDevelopment} alt="Deployment" />
                                        </div>
                                        <h5>Deployment</h5>
                                        <p>Once all changes and bugs are fixed, we deploy the .NET app to the App Store or client’s server for their use.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.BackSupport} alt="Back-Support" />
                                        </div>
                                        <h5>Back-Support</h5>
                                        <p>Our work doesn’t end with project delivery, we provide dedicated free back support to software till the agreed duration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Clientele />

            </div>
        </>

    )
}

export default HireDotNetDeveloper
