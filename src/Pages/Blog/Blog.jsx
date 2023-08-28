import React from 'react'
import "./blog.css"
import { Helmet } from 'react-helmet'
import Images from '../../Images'
import Clientele from '../../Components/Clientele/Clientele'
import LetsTalk from '../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Our Blog PragetX</title>
            </Helmet>
            <section className="header-top-slider portfolio-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="portfolio-top-con">
                            <h1>Our <span>Blogs</span></h1>
                            <h5>We write about business tactics and advice that we've picked up along the way. <br />We enjoy sharing with startups and business owners!</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="blog-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.blog1} alt="Top-4 Restaurant Website Development UI/UX Ideas" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/top-4-restaurant-website-development-ui-ux-ideas">Top-4 Restaurant Website Development UI/UX Ideas</Link></h5>
                                    <p>Nowadays, every business entity, whether it is a small or large one, needs its online presence to run efficiently and attract audiences’ attention.</p>
                                    <span>05 Jul 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.blog2} alt="Why Should Businesses Partner with PragetX for Agile IT Collaborations?" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/why-should-businesses-partner-with-pragetx-for-agile-it-collaborations">Why Should Businesses Partner with PragetX for Agile IT Collaborations?</Link></h5>
                                    <p>Collaboration in the IT industry has been running for over decades, whether in their service stack, overseas or in different vertices.</p>
                                    <span>02 Aug 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.blog3} alt="How Does IT Staff Augmentation Help Businesses Make Profits?" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/how-does-it-staff-augmentation-help-businesses-make-profits">How Does IT Staff Augmentation Help Businesses Make Profits?</Link></h5>
                                    <p>After the COVID-19 pandemic, businesses are adopting new engagement models to ensure their business growth. </p>
                                    <span>15 Sep 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.blog4} alt="How digital marketing and branding play a vital role in growing your business?" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/how-digital-marketing-and-branding-play-a-vital-role-in-growing-your-business">How digital marketing and branding play a vital role in growing your business?</Link></h5>
                                    <p>With the evolution of the market and world happening around digital marketing has become a very important part in marketing.</p>
                                    <span>02 Oct 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.blog5} alt="MacBook, AirPod & newcomer - HomePad Mini" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/macbook-airpod-newcomer-homepad-mini">MacBook, AirPod &amp; newcomer - HomePad Mini</Link></h5>
                                    <p>Nowadays, every business entity, whether it is a small or large one, needs its online presence to run efficiently and attract audiences’ attention.</p>
                                    <span>12 Nov 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.stockTrading} alt="How to build an online stock trading app?" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/how-to-build-an-online-stock-trading-app">How to build an online stock trading app?</Link></h5>
                                    <p>Nowadays, every business entity, whether it is a small or large one, needs its online presence to run efficiently and attract audiences’ attention.</p>
                                    <span>06 Dec 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.makeWebsite} alt="How to make a website on a limited budget?" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/how-to-make-a-website-on-a-limited-budget">How to make a website on a limited budget?</Link></h5>
                                    <p>Nowadays, every business entity, whether it is a small or large one, needs its online presence to run efficiently and attract audiences’ attention.</p>
                                    <span>11 Jan 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-box">
                                <div className="blog-img">
                                    <img src={Images.seoTools} alt="4 SEO tools that make your life easier" />
                                </div>
                                <div className="blog-con">
                                    <h5><Link to="/4-seo-tools-that-make-your-life-easier">4 SEO tools that make your life easier</Link></h5>
                                    <p>Nowadays, every business entity, whether it is a small or large one, needs its online presence to run efficiently and attract audiences’ attention.</p>
                                    <span>05 Feb 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clientele />
            <LetsTalk />

        </>
    )
}

export default Blog