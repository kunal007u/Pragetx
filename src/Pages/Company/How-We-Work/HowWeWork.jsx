import React from 'react';
import './howwework.css';
import Images from '../../../Images';
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine';
import Industries from '../../../Components/Industries/Industries';
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject';
import TechnologyWork from '../../../Components/Technology-work/TechnologyWork';
import StartUp from '../../../Components/StartUp/StartUp';
import Clientele from '../../../Components/Clientele/Clientele';
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk';
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import EthicalCareer from '../../../Components/EthicalCareer/EthicalCareer';

const HowWeWork = () => {
    return (
        <>
            <Helmet>
                <title>PragetX Work Approach | How We Work | PragetX</title>
            </Helmet>
            <div className='how-we-work'>

                <section className="header-top-slider how-we-work-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="header-top-con">
                                    <h1>A Modern Age <span>Agile IT Work</span> Approach</h1>
                                    <h5>
                                        Helping businesses get the best breed of the IT solution through
                                        a strategic development approach with the assurance <br />of
                                        faster project delivery without compromising on quality.
                                    </h5>
                                    <Link to="/contact-us" className="btn">Explore Our Offerings
                                        <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>

                <ClientLogoSlider />

                <TeamTagLine />

                <section className="about-us-main nft-dec-con hww-dec-con">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-12 col-md-12">
                                    <div className="con-head text-center" style={{ margin: '0 0 0px' }}>
                                        <h2>Agile Collaborations = Faster Software Time-to-Market</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        {/* <h2>Agile Collaborations = Faster Software Time-to-Market</h2> */}
                                        <h5>
                                            Following the client-first approach from knowing and
                                            understanding requirements to planning a strategic roadmap by
                                            referring to Agile or Waterfall software implementation
                                            models, ensuring faster software time-to-market with
                                            definitive results at effective rates.
                                        </h5>
                                        <h5>
                                            PragetX Technologies LLP understands the importance of
                                            clients' requirements for reaching out to any software
                                            services providing firm to hire the best team that uses
                                            intelligence in analyzing requirements, strategic planning,
                                            persistence in following the roadmap, and aptitude in
                                            delivering rigorous solutions in less time at ample prices.
                                            So, don’t let your business-critical IT investment turn into
                                            an insignificant outcome due to improper planning and
                                            execution.
                                        </h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.AgileCollaborations1} alt="Agile Collaborations1" />
                                    </div>
                                </div>
                                <div className="space" />
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.AgileCollaborations2} alt="Agile Collaborations2" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h5>
                                            Trust team PragetX as your right-fit emerging IT services
                                            providing partner, delivering the state-of-the-art,
                                            value-driven, cost-effective, and cutting-edge IT solutions
                                            for your evolving business. Our software engineers are very
                                            well-skilled and have technological leadership quality and a
                                            client-first mindset, which is needed to ensure a smooth
                                            implementation and transition of your IT solutions.
                                        </h5>
                                        <h5>
                                            Get the right-sized IT development solution for your
                                            business-critical software project in terms of logical
                                            planning, monitoring, and management approaches within your
                                            budget without compromising on quality or outcomes.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ai-ml-services software-services proposition-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>PragetX Value Prepositions</h2>
                                    <h5>
                                        Delivering end-to-end, custom, and value-driven software
                                        solutions with satisfactory results in terms of phenomenal user
                                        experience so you can ensure your firm’s competitive edge at all
                                        times.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="ai-services-main">
                            <div className="row gy-4">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>Cutting-Edge IT Solutions</h5>
                                        <p>
                                            Thoroughly understanding the needs of clients to provide them
                                            with a feasible IT solution meeting their criteria in terms of
                                            development, user experience, and financial investment.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>Cognitive Collaborations</h5>
                                        <p>
                                            Following methodological communication and cognitive
                                            collaborations with clients to keep them updated with our
                                            progress on the project while ensuring to meet deliverables.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>Proactive Project Management</h5>
                                        <p>
                                            Asking for clients’ feedback on the completion of each project
                                            milestone to ensure that the planned project governance and
                                            KPIs are met with necessary amendments.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>End-Point Confidentiality</h5>
                                        <p>
                                            Providing end-to-end NDA (Non-Disclosure Agreements) and IPR
                                            (Intellectual Property Rights) agreements for your
                                            satisfactory IT collaboration with PragetX.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>Dedicated Support</h5>
                                        <p>
                                            Ensuring to meet all your IT service standards, whether your
                                            project is under development or already delivered. Get 30-days
                                            of free project maintenance support after the delivery.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <h5>Value For Money</h5>
                                        <p>
                                            Regardless of the project difficulties, software engineers at
                                            PragetX will ensure to craft a well-defined solution providing
                                            guaranteed cutting-edge performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="core-values-main business-models-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Business Models</h2>
                                    <h5>
                                        Understanding unique requirements for different industries,
                                        thus, proposing some business engagement models for you to
                                        discover the right-fit one meeting your business-critical IT
                                        project KPIs.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="business-models-inner">
                            <div className="row">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="tabs1" data-bs-toggle="tab" data-bs-target="#tabs-1" type="button" role="tab" aria-controls="tabs-1" aria-selected="true">
                                                Fixed-Priced Model
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tabs2" data-bs-toggle="tab" data-bs-target="#tabs-2" type="button" role="tab" aria-controls="tabs-2" aria-selected="false">
                                                Hourly-Priced Model
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="tabs3" data-bs-toggle="tab" data-bs-target="#tabs-3" type="button" role="tab" aria-controls="tabs-3" aria-selected="false">
                                                Hire &amp; Go (Staff Augmentation)
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs1">
                                            <div className="business-models-con">
                                                <div className="business-models-img">
                                                    <img src={Images.FixedPricedModel} alt='Fixed Priced Model' />
                                                </div>
                                                <h4>Fixed-Priced Model</h4>
                                                <p>
                                                    Have clear IT project development requirements and scope
                                                    in mind and need the exact crafted-in IT solution from us?
                                                    This business engagement model is for you. Let us know
                                                    your exact requirements and get the fixed reliable budget
                                                    with project deliverables with the proper timeline. Ensure
                                                    minimal interactions with the development team and leave
                                                    all your project worries to us so that you can focus on
                                                    your other business competencies.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs2">
                                            <div className="business-models-con">
                                                <div className="business-models-img">
                                                    <img src={Images.HourlyPricedModel} alt='Hourly Priced Model' />
                                                </div>
                                                <h4>Hourly-Priced Model</h4>
                                                <p>
                                                    The project development scope is briefly defined, the
                                                    requirements are expected to change over time, and need
                                                    developers to apply their creativity that can sync in with
                                                    the development as well, then this business engagement is
                                                    highly recommended. Get a well-defined solution in
                                                    different short-term milestones by hiring us to work on
                                                    your project on an hourly basis.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tabs-3" role="tabpanel" aria-labelledby="tabs3">
                                            <div className="business-models-con">
                                                <div className="business-models-img">
                                                    <img src={Images.HireGo} alt='Hire Go' />
                                                </div>
                                                <h4>Hire &amp; Go (Staff Augmentation)</h4>
                                                <p>
                                                    Have multiple requirements for us to meet for different
                                                    projects and need instant onboarding of a
                                                    resource/developer/software engineer to work dedicated for
                                                    your company as your employee? Hire dedicated resources or
                                                    an entire team of developers to extend your technical team
                                                    capabilities on a contract basis. Hire our developers to
                                                    work on an hourly basis as your dedicated resource.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <EthicalCareer />

                <Industries />

                <section className="core-values-main development-approach-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Our Development Functions</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="server-listing">
                                <div className="server-listing-img">
                                    <img src={Images.HiddenBrains} alt="Hidden Brains" />
                                </div>
                                <ul>
                                    <li>
                                        <div className="server-list-cont">
                                            <div className="server-list-cont-hd">Project Onboarding</div>
                                            <p>
                                                Requirement Analysis, Value-Prepositions, Agreement
                                                Exchanges, Project Onboarding
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="server-list-cont">
                                            <div className="server-list-cont-hd">Project Tracking</div>
                                            <p>
                                                Roadmap, Team Allocation, Work Distribution, Regular Team
                                                Stand-up meetings
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="server-list-cont">
                                            <div className="server-list-cont-hd">Collab &amp; Communicate</div>
                                            <p>
                                                Regular stand-up meetings with clients, Client Feedback,
                                                Amendments, Meet deadlines
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="server-list-cont">
                                            <div className="server-list-cont-hd">Monitoring &amp; Support</div>
                                            <p>
                                                Real-time monitoring &amp; documenting team progress to ensure
                                                better project management
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="server-list-cont">
                                            <div className="server-list-cont-hd">Invoicing</div>
                                            <p>
                                                Keeping track of services availed for the project to raise
                                                the invoice as agreed
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <DiscussProject />

                <section className="work-life-main benefits-you-get">
                    <div className="container">
                        <div className="con-head text-center">
                            <h2>Why Work With PragetX?</h2>
                        </div>
                        <div className="work-life">
                            <div className="row gy-5">
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.LearningDevelopment1} alt="Learning & Development1" />
                                        <span>Expert Consulting <br />Services</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.MindfulPersonalGuidance1} alt="Mindful Personal Guidance1" />
                                        <span>IPR and NDA <br />Protection</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.ConstructiveFeedback1} alt="Constructive Feedback1" />
                                        <span>Compliance <br />Management</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.InclusiveOpenCulture} alt="Inclusive & Open-Culture" />
                                        <span>Dedicated Proficient <br />Team</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.InnovationQualityFirst} alt="Innovation & Quality First" />
                                        <span>Active <br />Communication</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.ProactiveImplementation} alt="Proactive Implementation" />
                                        <span>Cognitive <br />Engagements</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.BestGlobalOpportunities} alt="Best & Global Opportunities" />
                                        <span>Timely Project <br />Progress Reports</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.WorkwithLatestTechnology} alt="Work with Latest Technology" />
                                        <span>Complete <br />Transparency</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.EvolvingCulture} alt="Evolving Culture" />
                                        <span>Cutting-edge <br />Reliability</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.LearningDevelopment2} alt="Learning & Development2" />
                                        <span>Complete Project <br />Ownership</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.MindfulPersonalGuidance2} alt="Mindful Personal Guidance2" />
                                        <span>Code Documentation <br />Support</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="work-life-box">
                                        <img src={Images.ConstructiveFeedback2} alt="Constructive Feedback2" />
                                        <span>Dedicated Support <br />and Maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <TechnologyWork />

                <StartUp />

                <Clientele />

                <LetsTalk />

            </div>
        </>

    )
}

export default HowWeWork
