import React from 'react'
import { Helmet } from 'react-helmet'
import "./familyhives.css"
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const FamilyHives = () => {
    return (
        <>
            <Helmet>
                <title>FamilyHives - A Flutter Mobile App Testing Case Study | PragetX</title>
            </Helmet>

            <section className="header-top-slider family-hives-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Family Hives</h1>
                            <h2>A <span>Family-Media</span> Mobile Application - Hybrid Mobile App Testing Project</h2>
                            <h5>A case study on Family Hives - a hybrid mobile application providing socialization services for the family members to stay connected regardless of the location. Family Hives is not a social media, but we’d like to call it a family media for the families living in different locations.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.CFamilyHivesTop} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Family Media</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Qa &amp; Testing</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>3 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Development Time</h5>
                                    <p>-</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.FamilyHivesLogo} alt="Sofiqe" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>Family Hives Mobile App Development Requirements</h2>
                                <div className="case-about-img">
                                    <img src={Images.CFamilyHivesImg1} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.CFamilyHivesImg2} alt="Nepal Government Project" />
                                </div>
                                <p>The client is from the UAE - who came to us with the Family Hives mobile app testing project. Family Hives is a unique concept that connects family members living in disparate locations to stay connected. He wanted us to test the features and functionalities, like adding family members, making different trees, notifications on each update - which is manageable, alarms for family time, memories, cooking recipes from particular family members, and bedtime stories.</p>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.CFamilyHivesImg3} alt="Nepal Government Project" />
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
                            <h2>Family Hives Development Approach</h2>
                            <p>The concept of family hives was quite interesting for us to work on it; thus, we aligned our senior flutter developer with 3+ years of vast experience working in the field. He suggested many features and functionalities to add to the application, such as keeping the family tree numbers to two (maximum) and having a story scrolling feature in the application to make it a family media, which the client also liked.</p>
                            <p>So, without taking more time, our flutter developer provided his application testing types and time with a timeline and started working on it. While testing the application, he did face a little challenge while fixing some serious bugs created by other developers working side by side. Their expertise in problem-solving came as a great help in delivering the Family Hives application with compelling performance.</p>
                            <p>This Family Hives application is still with us under continuous application maintenance for future versions’ releases.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="case-app-screen">
                <img src={Images.FamilyHivesBanner} alt="Sofiqe" />
            </section>

            <section class="results-main pt-1">
                <div class="container">
                    <div class="row text-center">
                        <h2>Results</h2>
                        <p>The performance of the family hives has impressed the client. It is under beta testing and soon will be made public.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>
    )
}

export default FamilyHives