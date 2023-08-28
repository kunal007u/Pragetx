import React from 'react'
import { Helmet } from 'react-helmet'
import "./iotdevelopment.css"
import { Link } from 'react-router-dom'
import Images from '../../Images'
import ClientTeleMap from '../../Components/ClientTeleMap/ClientTeleMap'
import LetsTalk from '../../Components/Lets-Talk/LetsTalk'


const IOTDevelopment = () => {
    return (
        <>
            <Helmet>
                <title>IoT Development Company | IOT implementation partner | PragetX</title>

            </Helmet>
            <section className="header-top-slider iot-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-con">
                                <h1><span>IoT</span> development company</h1>
                                <h5>Scale your business with our future-driven IoT solutions. PragetX - A leading IoT development company leverages this innovative tech to provide end-to-end IoT services that meet your ever-changing business requirements.</h5>
                            </div>
                        </div>
                        {/* <div className="col-lg-5"></div> */}
                    </div>
                </div>
            </section>

            <section className="about-us-main nft-dec-con">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Enhance your business connectivity with IoT!</h2>
                                    <p>In this digital dynamics, we know how important it is for businesses to stay connected with the Internet to get started and scale throughout.</p>
                                    <p>And in this competitive business environment, the Internet of things(IoT) comes to the rescue. It is a cutting-edge technology that will revolutionize how businesses provide solutions and how consumers engage with connected devices.</p>
                                    <p>It provides businesses with the added benefit of increased connectivity and control over their moments, allowing them to predict and monitor unusual outages accurately.</p>
                                    <p>But, you can't just leverage the benefits of this innovative tech until it's properly implemented. And for efficient implementation, you need to connect with the right partner.</p>
                                    <h5>And if you are looking for a top IOT partner, PragetX is the one for you!</h5>
                                    <p>PragetX can help you develop stellar IoT solutions based on your business needs. And, our skilled team of dedicated experts understands all IoT concepts to deliver best-in-class results.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.IotAboutImg} alt="Enhance your business connectivity with IoT" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="row gy-5 counter-number" id="counter">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="about-counter">
                              <div className="number-c"><span>$</span>22.26<span>B</span></div>
                              <div className="number-l">Global BI market size in 2020</div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="about-counter">
                              <div className="number-c"><span>$</span>43.03<span>B</span></div>
                              <div className="number-l">Expected BI market size by 2028</div>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="about-counter">
                              <div className="number-c">8.7<span>%</span></div>
                              <div className="number-l">CAGR in the period of 2021-2028</div>
                          </div>
                      </div>
                  </div> */}
                    </div>
                </div>
            </section>
            <section className="discuss-your-project-main">
                <div className="container">
                    <div className="discuss-your-project-con">
                        <div className="discuss-left">
                            <h3>Looking to hire an IoT implementation partner? <br />Book a free consultation call now!</h3>
                        </div>
                        <div className="discuss-btn">
                            <Link to="https://calendly.com/pragetx" className="btn">Schedule Meeting
                                <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ai-ml-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>What do we offer to our customers?</h2>
                                <h5>We will work with you to develop user-friendly products, accelerate business expansion, and scale digitalization through the use of the Internet of things.</h5>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotApplicationDevelopment} alt="IoT application development" />
                                    </div>
                                    <h5>IoT application development</h5>
                                    <p>Applications are ruling the internet arena, and if you are looking to adapt to it as well, then PragetX's leading application developers and designers will help you in developing the best IoT application. We carry out a comprehensive process to develop next-gen applications.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotIntegration} alt="IoT integration" />
                                    </div>
                                    <h5>IoT integration</h5>
                                    <p>Integrating IoT with other systems is more than essential to enhance your product's functionality. So, to fulfill this increasing demand, we offer IoT integration services with a comprehensive approach that would not interrupt your day-to-day activities.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotSoftwareDevelopment} alt="IoT software development" />
                                    </div>
                                    <h5>IoT software development</h5>
                                    <p>Do you want to create custom IoT software? If so, PragetX can assist you in developing full-cycle custom software solutions that flawlessly communicate with connected devices in your ecosystem and produce the desired results for you.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotCloudPlatform} alt="IoT cloud platform" />
                                    </div>
                                    <h5>IoT cloud platform</h5>
                                    <p>We create highly flexible IoT cloud solutions with Amazon AWS, Microsoft Azure, and Google Cloud that enable tech devices to communicate and store information securely and conveniently.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotConsultation} alt="IoT consultation" />
                                    </div>
                                    <h5>IoT consultation</h5>
                                    <p>The Internet of Things is a relatively new technology that requires expert advice before execution. And if you are looking for some guidance, then our IoT experts will provide you with detailed consultation to help you better understand the know-how of IoT.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.IotSupportHelp} alt="IoT support & help" />
                                    </div>
                                    <h5>IoT support &amp; help</h5>
                                    <p>The need for support &amp; help after development or consultation isn't over - it stays throughout. And PragetX believes in offering round-the-clock assistance to our customers to ensure seamless results even after development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values-main">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Why choose PragetX for your IoT requirements?</h2>
                        {/* <h5>At Pragetx, we embrace a well-established set of cultural and professional values which <br>represent our highest aspirations for how we engage as colleagues, fellows, alumni, partners, and board members.</h5> */}
                    </div>
                    <div className="core-values">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.SkilledTeamOfIoTExperts} alt="The skilled team of IoT experts" />
                                    <div className="values-con">
                                        <span>The skilled team of IoT experts.</span>
                                        <p>When you partner with PragetX for your IoT requirements, you will get the chance to work with a professional team of experts who will help you leverage this state-of-the-art technology.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.StepByStepApproach} alt="Step-by-step approach" />
                                    <div className="values-con">
                                        <span>Step-by-step approach.</span>
                                        <p>We'll prepare a personalized IoT development strategy that aligns with your specific requirements, followed by the approach-driven implementation to ensure efficient results.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.PostProjectAssistance} alt="Post-project assistance" />
                                    <div className="values-con">
                                        <span>Post-project assistance.</span>
                                        <p>Our work isn't over after developing an application or consultation call, and for that we offer our clients full-fledged post-project support so that they can get seamless services throughout.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="core-values-box">
                                    <img src={Images.ExpertiseInVariedIndustries} alt="Expertise in varied industries" />
                                    <div className="values-con">
                                        <span>Expertise in varied industries.</span>
                                        <p>Our dedicated team of developers and designers have expertise in developing IoT solutions for a wide range of industries - be it healthcare or education to IT and finance - we have got you covered.</p>
                                    </div>
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

            <section className="ai-ml-we-work">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our Blockchain Decentralized App Development Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiRequirements} alt="Understanding Requirements" />
                                    </div>
                                    <h5>Understanding Requirements</h5>
                                    <p>Our team of sales executives and business analysts will analyze the project requirements to devise the best solution.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiUiUx} alt="UI/UX" />
                                    </div>
                                    <h5>UI/UX</h5>
                                    <p>We design an interactive UI/UX for the software development project that meets the user expectation levels.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiDevelopment} alt="Development" />
                                    </div>
                                    <h5>Development</h5>
                                    <p>Developers at PragetX maintain the cognitive engagement with clients to ensure that their expected results are met.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiQaTest} alt="QA & Testing" />
                                    </div>
                                    <h5>QA &amp; Testing</h5>
                                    <p>We apply all necessary QA practices and testing algorithms to find and resolve potential software bugs and exceptions.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiDeployment} alt="Deployment" />
                                    </div>
                                    <h5>Deployment</h5>
                                    <p>Once the final product is ready, we take clients’ feedback to give the final touches to the solution and then deploy it on their server.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.AiW6} alt="Back-Support" />
                                    </div>
                                    <h5>Back-Support</h5>
                                    <p>Our work doesn’t end with project delivery, we provide dedicated back support to software till the agreed duration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ClientTeleMap />
            <LetsTalk />


        </>
    )
}

export default IOTDevelopment