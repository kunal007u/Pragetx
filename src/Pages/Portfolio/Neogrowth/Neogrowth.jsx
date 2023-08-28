import React from 'react'
import "./neogrowth.css"
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const Neogrowth = () => {
    return (
        <>
            <Helmet>
                <title>NeoGrowth Website KYC-Routing Implementation | React.js Project | PragetX</title>
            </Helmet>
            <section className="header-top-slider neogrowth-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>NeoGrowth</h1>
                            <h2>KYC Routing Solution Using React.js</h2>
                            <h5>A case study of implementing KYC Routing with Cybersecurity Support in NeoGrowth Website using React.js.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.NeogrowthWebsite} alt="NeoGrowth" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About NeoGrowth</h2>
                            <p>NeoGrowth Credit Pvt. Ltd. is a finance service providing firm that aims to provide funds to businesses to accomplish their goals with minimal interest rates with complete transparency and the stipulations of the RBI’s directives, such as interest rate policy is to be adopted by the Board. Businesses looking for funding from trusted financiers can approach NeoGrowth either via their website or download the NeoGrowth app from the Google Play Store.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Finance/FinTech</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Payment Gateway Service</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>1 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>13 Hrs / 1 month</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>React.js</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CNeogrowthLogo} alt="About NeoGrowth" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>NeoGrowth Project Requirement</h2>
                                <div className="case-about-img">
                                    <img src={Images.neogrowthImg1} alt="NeoGrowth Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.neogrowthImg2} alt="NeoGrowth Project" />
                                </div>
                                <p>Being a fintech firm, NeoGrowth needed to integrate KYC routing to verify the identity of their services' users. Furthermore, they also wanted us to protect that KYC linking routes with cybersecurity best practices, all implemented in React.js.</p>
                                <p>So, this KYC routing was necessary to get all correct information about their users to avoid business loan frauds and further consequences. In the requirement, they asked us to implement a crucial series of forms, where users can not move to the next step until they fill and validate the current form precisely.</p>
                            </div>
                            <div className="case-about-box">
                                <p>This series of forms should have a business registration landing page form, business info page (asking business GST no., employee strength, the reason for the loan application, etc.), business finance details (including PAN number, Aadhaar card, bank details, turn over, etc.), business ownership information, business registration, bank A/C linking, and important questionnaires. Only after filling and validating all these details, a business can apply for a loan or financial support at NeoGrowth successfully.</p>
                                <div className="case-about-img">
                                    <img src={Images.neogrowthImg3} alt="NeoGrowth Project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-case-solution">
                <div className="container">
                    <div className="row">
                        <div className="case-solution-con">
                            <h2>The Solution &amp; Development Approach</h2>
                            <p>After receiving all these requirements, we called a technical team to the React.js developers' meeting to finalize the best and most well-experienced (3+ years) React.js developer to work on this project.</p>
                            <p>We then aligned our React.js developer with the client, for him to understand the exact project requirements. He then understood the requirements and did some research on the project to provide a sound solution to integrate KYC APIs like NSDL API with the business details' forms' verification using Axios and React together for better GET response. </p>
                            <p>After providing the form details' verification path, he proceeded to set up protected routes and authentication to provide security for the multiple KYC pages, such as the business registration landing page form, business info page, business finance details, business ownership information, business registration, bank A/C linking, and important questionnaires. These protected routes could prevent unauthorized users from accessing inner application services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.NeogrowthBanner} alt="NeoGrowth Project" />
            </section>

            <section className="our-case-solution">
                <div className="container">
                    <div className="row">
                        <div className="case-solution-con">
                            <h2>The architecture to implement protected routes using React.js</h2>
                            <div className="user-flow">
                                <img src={Images.UserFlow} alt="NeoGrowth Project" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-key-features pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Key Features We Integrated</h2>
                            <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br />functionalities for the UrNest application.</p>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.UserAuth} alt="User Authorization" />
                                                </div>
                                                <h4>User Authorization</h4>
                                                <p>As we implemented protected routes for the KYC forms, no user could go further with any other form without getting verification of the previous/current form.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Cybersecurity} alt="Cybersecurity" />
                                                </div>
                                                <h4>Cybersecurity</h4>
                                                <p>No user could access the inner application services routes without getting business profile registration verification.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.FasterResp} alt="Faster Responsiveness" />
                                                </div>
                                                <h4>Faster Responsiveness</h4>
                                                <p>As these forms are developed using React.js, they inherit its specific features, like fast responsiveness, which helped clients and users to complete their work quickly.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.SecureBrowsing} alt="Secure browsing" />
                                                </div>
                                                <h4>Secure browsing</h4>
                                                <p>As we used the Axios-npm package with React.js, NeoGrowth succeeded in providing secure KYC Form browsing for users with client-side support for protecting against XSRF (Cross-Site Request Forgery).</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LetsTalk />
        </>
    )
}

export default Neogrowth