import React from 'react'
import "./foloapp.css"
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'
const FoloApp = () => {
    return (
        <>
            <Helmet>
                <title>Folo App - Astrology App Solution | Flutter Project | PragetX</title>
            </Helmet>
            <section className="header-top-slider folo-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Folo App</h1>
                            <h2>Hybrid Online <span>Astrology Services Booking</span> Application Development</h2>
                            <h5>A case study on Folo App - an Astrology Hybrid App Solution developed in Flutter that connects people who wanted to discover the future by consulting Astrologers. This app contains a special feature called minute based calling, which charges based on the minute rate decided by Astrologers.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.TFoloAPP} alt="Folo App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Folo App</h2>
                            <p>Folo App is an Astrology-based app that connects astrologers from across India to provide their online astrology services. The app development idea was just like Astroyogi App and Astrotalk Astrology Horoscope App. Folo app works on the per-minute charging business model, where customers can talk to the astrologers through a video call service, and their charges will be cut based on their minute spend.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Astrology</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Hybrid Mobile App Development</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>3 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>176 Hrs</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CFoloAppLogo} alt="About Folo App" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>About the client and project requirement</h2>
                                <div className="case-about-img">
                                    <img src={Images.FoloImg1} alt="About Folo App" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.FoloImg2} alt="About Folo App" />
                                </div>
                                <p>The client was based in India and wanted to create this Astrotalk clone app. He wanted us to develop a cross-platform astrology mobile application, which could be used on both Android and iOS mobile devices. Further, he wanted us to add some features, like In-App video call, Astrologer account registration and verification gateway, Appointment booking, and time-based wallet transferring feature from customers' to astrologers' accounts.</p>
                            </div>
                            <div className="case-about-box">
                                <p>In order to book an appointment with the astrologer - a customer's wallet must have a minimum balance worth 5 min talk, and if the customer's wallet balance gets exhausted, the video call with the astrologer should be dropped. Moreover, the customers' and astrologers' apps should allow them to contact the Folo App admin centre.</p>
                                <div className="case-about-img">
                                    <img src={Images.FoloImg3} alt="About Folo App" />
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
                            <h2>The Folo App Development Process</h2>
                            <p>As we already knew that the client wanted us to build a cross-platform development, we connected our 3+ years of experience containing Flutter Developer with the client for him to understand the complete app development requirement. After getting on board for the project, the developer understood the requirement and analysed the Astroyogi and Astrotalk apps to understand their working.</p>
                            <p>He then developed the Folo App development roadmap and explained the whole development lifecycle to the client, which he really liked. With the affirmative sign from the client, our Flutter Developer started the implementation of the Folo App.</p>
                            <p>During the development of this app, the developer faced many difficulties in implementing the auto call hang up function after the customer’s wallet get exhausted. But with a positive approach to problem-solving and learning, he finally succeeded to implement that function and delivered the app to the client with QA and security testing.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-app-screen">
                <img src={Images.FoloAppAstrologyScreen} alt="About Folo App" />
            </section>
            <section className="case-key-features pb-0">
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
                                                    <img src={Images.ProfileCreation} alt="Astrologer Profile Creation" />
                                                </div>
                                                <h4>Astrologer Profile Creation &amp; Verification</h4>
                                                <p>To create the astrologer profile in the Folo App, astrologers must add all the right details about their profession, including the name of the business, astrologers' certificates, testimonials, etc.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AppointmentBooking} alt="Appointment Booking" />
                                                </div>
                                                <h4>Appointment Booking</h4>
                                                <p>Any user looking for astrology insights can browse different profiles of astrologers and choose the right fit for their requirements and book an appointment through the Folo app based on availability.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppVideoCall} alt="In-app Video Call" />
                                                </div>
                                                <h4>In-app Video Call</h4>
                                                <p>As per the booking, customers and astrologers can connect over the in-app video call facility to get an in-person meeting like experience.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.WalletTransaction} alt="Wallet Transaction" />
                                                </div>
                                                <h4>Wallet Transaction</h4>
                                                <p>The Folo app will only let the customer use the video call functionality if his wallet has a minimum balance of 5 minutes worth of talk time. The transaction to astrologers’ wallets will be done in real-time from the customers’ wallets.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AutoVideoHungUp} alt="Auto Video Call Hung up" />
                                                </div>
                                                <h4>Auto Video Call Hung up</h4>
                                                <p>During the video call, the app will let customers talk with the astrologers till their wallet has money to spend, and the transaction will be transformed into the astrologer's wallet in real-time.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppSupport} alt="In-app User Support Channel" />
                                                </div>
                                                <h4>In-app User Support Channel</h4>
                                                <p>In case customers and astrologers are facing any technical glitches or want to report any person, they can do so by approaching the in-app user support channel.</p>
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
                        <div className="results-box-main">
                            <div className="results-box">
                                <h5>Real-time connectivity</h5>
                                <p>The Folo app is designed to provide an in-person appointment like experience, and the high-quality video call feature makes this real-time connectivity possible. </p>
                            </div>
                            <div className="results-box">
                                <h5>Faster money transactions</h5>
                                <p>The payment gateways are designed with high-speed transaction algorithms with security compliances, which makes payment transactions in no time.</p>
                            </div>
                            <div className="results-box">
                                <h5>Fewer fraud chances</h5>
                                <p>As the Folo app does profile verification at the start point, there are fewer chances for service fraud.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LetsTalk />

        </>
    )
}

export default FoloApp