import React from 'react'
import { Helmet } from 'react-helmet'
import "./sitemap.css"
import { Link } from 'react-router-dom'

const SiteMap = () => {
    return (
        <>
            <Helmet>
                <title>PragetX Website Sitemap</title>
            </Helmet>
            <section className="terms-of-use-top sitemap-top">
                <div className="container">
                    <div className="row">
                        <div className="terms-inner">
                            <h1>Sitemap</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="terms-of-use-con-main sitemap-con-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="main-link">
                                <ul>
                                    <li><Link to="https://www.pragetx.com/">Home</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="other-link">
                                <h5>Company</h5>
                                <ul>
                                    <li><Link to="/about">About PragetX</Link></li>
                                    <li><Link to="/how-we-work">How We Work</Link></li>
                                    <li><Link to="/referral-programs">Referral Programs</Link></li>
                                    <li><Link to="/become-partner">Become A Partner</Link></li>
                                    <li><Link to="/internship-and-training">Internship &amp; Training</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="other-link service-link">
                                <h5>Services</h5>
                                <ul>
                                    <li><Link to="/software-development">Custom Software Development</Link></li>
                                    <li><Link to="/web-app-development">Web App Development</Link></li>
                                    <li><Link to="/mobile-app-development">Mobile App Development</Link></li>
                                    <li><Link to="/ui-ux-designing">UI/UX Design</Link></li>
                                    <li><Link to="/qa-and-testing">QA &amp; Testing</Link></li>
                                    <li><Link to="/enterprise-it-solutions">Enterprise IT Solutions</Link></li>
                                    <li><Link to="/cloud-Solutions">Cloud Services</Link></li>
                                    <li><Link to="/devops">DevOps Solutions</Link></li>
                                    <li><Link to="/salesforce">Salesforce</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                    <li><Link to="/branding">Branding</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="other-link">
                                <h5>Hire Developers</h5>
                                <ul>
                                    <li><Link to="/hire-ios-app-developers">Hire iOS Developers</Link></li>
                                    <li><Link to="/hire-android-app-developers">Hire Android Developers </Link></li>
                                    <li><Link to="/hire-nodejs-developers">Hire Node js Developers</Link></li>
                                    <li><Link to="/hire-reactjs-developers">Hire React js Developers</Link></li>
                                    <li><Link to="/hire-react-native-developers">Hire React Native Developers</Link></li>
                                    <li><Link to="/hire-flutter-developers">Hire Flutter Developers</Link></li>
                                    <li><Link to="/hire-angular-developers">Hire Angular Developers</Link></li>
                                    <li><Link to="/hire-dot-net-developers">Hire .Net Developers</Link></li>
                                    <li><Link to="/hire-ui-ux-designers">Hire UI/UX Designers</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="other-link case-link">
                                <h5>Case Study</h5>
                                <ul>
                                    <li><Link to="/hungry-veels">Hungry Veels</Link></li>
                                    <li><Link to="/folo-app">Folo App</Link></li>
                                    <li><Link to="/elc-tutorial">ELC Tutoring</Link></li>
                                    <li><Link to="/neogrowth">NeoGrowth</Link></li>
                                    <li><Link to="/schoolowls">SchoolOwls</Link></li>
                                    <li><Link to="/zen-coast-university">Zen Coast University</Link></li>
                                    <li><Link to="/urnest">UrNest</Link></li>
                                    <li><Link to="/nawee-courier">NaWee Courier</Link></li>
                                    <li><Link to="/nepal-government">Nepal Government App</Link></li>
                                    <li><Link to="/ayuvani">Ayuvani</Link></li>
                                    <li><Link to="/nft-marketplace">NFT Marketplace</Link></li>
                                    <li><Link to="/sofiqe">Sofiqe</Link></li>
                                    <li><Link to="/keepcoolrecs">KeepCoolRecs</Link></li>
                                    <li><Link to="/scrapbook">Scrapbook</Link></li>
                                    <li><Link to="/family-hives">Family Hives</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SiteMap