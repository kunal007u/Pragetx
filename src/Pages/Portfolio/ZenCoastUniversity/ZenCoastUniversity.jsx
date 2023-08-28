import React from 'react'
import "./zencoastuniversity.css"
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const ZenCoastUniversity = () => {
    return (
        <>
            <Helmet>
                <title>Real Estate e-Learning Kejabi Website Development | PragetX</title>
            </Helmet>
            <section className="header-top-slider zen-cost-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Zen Coast University</h1>
                            <h2><span>E-Learning Website</span> Development on Kejabi</h2>
                            <h5>A case study on Zen Coast University course landing page development in Kejabi platform for real estate deal analysis course taught by Calvin Chin, quality landing page content development, and social media solution provided by us.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.ZencoastWebsite} alt="Zen Coast University" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Zen Coast University</h2>
                            <p>Zen Coast University is an e-learning website developed in the Kejabi framework, which provides e-learning courses for real-estate investment. The founder of this website is Calvin Chin, a very well-known realtor in the USA who helps people with interests to build their careers in real estate investment.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Education, E-Learning</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Kejabi Website</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>4 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>1 months</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Kejabi, Adobe Illustrator, Canva</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CZencostLogo} alt="About Zen Coast University" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>About Client &amp; Project Requirements</h2>
                                <div className="case-about-img">
                                    <img src={Images.zenImg1} alt="About Zen Coast University" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.zenImg2} alt="About Zen Coast University" />
                                </div>
                                <p>The client was already helping people build their careers as real estate investors through his Facebook and LinkedIn pages, but he wanted to increase his reach globally. So, he decided to create an engaging website in Kejabi. He then contacted our project provider partner through one online project posting site. He described that he wanted to build the Zen Coast University website and add one important section called the Real Estate Investment course with multiple investment area chapters.</p>
                            </div>
                            <div className="case-about-box">
                                <p>On the course page, the client wanted us to implement some auto-newsletter sending functionality, inquiry forms, FAQs sections, and much more.</p>
                                <p>Along with the website, he also wanted us to provide some content for the Real Estate Deal Analysis course page, some marketing materials (email content), and social media content with designs to run Facebook ads.</p>
                                <div className="case-about-img">
                                    <img src={Images.zenImg3} alt="About Zen Coast University" />
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
                            <h2>The Kejabi Website Development Approach</h2>
                            <p>After gathering all important information regarding the Kejabi website development, we created website development for that project and approved it from the client's end. Developing a website on Kejabi was quite a difficult task for us as it was our first project on it. Thus, we aligned a skilled website developer for this project who has great problem-solving skills and has delivered many projects to the clients with satisfactory results.</p>
                            <p>At first, she did some research on the website development approach in Kejabi and then started to work on the project. During the project development, she was constantly in touch with the client and implemented all the functionalities in the Zen Coast University Course landing pages as the client demanded. Implementing some functions was challenging for her, but thanks to her positive learning attitude, we were able to deliver that website successfully.</p>
                            <p>After the website development, we aligned a well-experienced content writer for the website content, who provided intuitive, conversion creating, and valuable content for the Zen Coast University Deal Analysis Course by teaming up with an employee at Zen Coast University.</p>
                            <p>After the website content delivery, we team up our graphics designer and content writer to create some Facebook Ads content, which is helping them a lot in the marketing of their services.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.ZenCoastBanner} alt="About Zen Coast University" />
            </section>

            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Zen Coast University Website Features</h2>
                            <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br />functionalities for the ELC Online Website.</p>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.UxDesigningSvg} alt="UI/UX Designing" />
                                                </div>
                                                <h4>UI/UX Designing</h4>
                                                <p>Provided intuitive UI/UX design for the website development and helped the client select a better theme.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AutoEmailSendingFunctionalitySvg} alt="Auto-Email Sending Functionality" />
                                                </div>
                                                <h4>Auto-Email Sending Functionality</h4>
                                                <p>Whenever a website visitor applies for a consultation request or enrolls in a course, or newsletter, the respective email must be sent.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.CourseOfferPopupsSvg} alt="Course Offer Popups" />
                                                </div>
                                                <h4>Course Offer Popups</h4>
                                                <p>Whenever the user scrolls down the course content, an active offer for the course must pop up on the page.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="results-main">
                <div className="container">
                    <div className="row">
                        <h2>Results</h2>
                        <p>After a lot of hard work from our website development and creative team, we finally were able to deliver this project within 1 month as promised to the client. This Zen Coast University course site is helping many real estate enthusiasts to kick-start their careers as a realtor.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>


    )
}

export default ZenCoastUniversity