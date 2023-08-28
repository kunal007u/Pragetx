import React from 'react'
import "./portfolio.css"
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
            <Helmet>
                <title>Our Software Development Portfolio | Our Work | PragetX</title>
            </Helmet>
            <section className="header-top-slider portfolio-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="portfolio-top-con">
                            <h1>Our <span>Software</span> Solution <br />Development Portfolio</h1>
                            <h5>Our software development portfolio demonstrates how our IT experts take businesses' <br />requirements and turn them into high-quality customer experiences <br />and cutting-edge IT solutions.</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-main">
                <div className="project-box-main">
                    <div className="project-head">
                        <h2>Website and Applications</h2>
                    </div>
                    <div className="container-el">
                        <div className="project-bg hungry-veels-app">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Hungry Veels <span><img src={Images.IndiaSvg} /></span></h2>
                                    <h5>A cross-platform mobile app development solution for ordering food online</h5>
                                    <h6>Industry: Logistics</h6>
                                    <p className="wrapLine">Hungry Veels is an emerging online food ordering and delivery mobile application providing its services across India.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/hungry-veels" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="Hungry Veels" />
                            </div>
                        </div>
                        <div className="project-bg folo-app">
                            <div className="illu">
                                <div className="bg" title="Folo App" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Folo App <span><img src={Images.IndiaSvg} /></span></h2>
                                    <h5>An on-demand astrology services providing cross-platform mobile app development solution</h5>
                                    <h6>Industry: Astrology</h6>
                                    <p className="wrapLine">Folo App is an Astrology-based app that connects astrologers from across India to provide their online astrology services on a per-minute charging business model.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/folo-app" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-el website-inner">
                        <div className="project-bg elc-tutoring">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>ELC Tutoring <span><img src={Images.UnitedKingdom} /></span></h2>
                                    <h5>A reward-based e-learning WordPress website development solution</h5>
                                    <h6>Industry: Education</h6>
                                    <p className="wrapLine">ELC Tutorial stands for the Every Lesson Counts Tutorial, which is an e-learning website based in the UK. It specializes in providing tutoring education for 11+ entrance tests, St. Anselm's tests, and Upton Hall tests, along with Maths and English tuition classes for 3-6-year-old kids and GCSEs.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/elc-tutorial" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="ELC Tutoring" />
                            </div>
                        </div>
                        <div className="project-bg neo-growth">
                            <div className="illu">
                                <div className="bg" title="NeoGrowth" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>NeoGrowth <span><img src={Images.IndiaSvg} /></span></h2>
                                    <h5>Website KYC routing solution implementation in React.js</h5>
                                    <h6>Industry: Finance</h6>
                                    <p className="wrapLine">A FinTech web app development solution helps businesses to apply for loans to  accomplish their goals with minimal interest rates with complete transparency and stipulations of the RBI’s directives.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/neogrowth" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-el website-inner">
                        <div className="project-bg school-owls">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>SchoolOwls <span><img src={Images.USSvg} /></span></h2>
                                    <h5>An e-learning WordPress website development solution</h5>
                                    <h6>Industry: Education</h6>
                                    <p className="wrapLine">School Owls is an online education platform which creates and provides fun-based, quality Mathematics, cursive writing, reading, and different types of worksheets for children, pursuing primary education (from kindergarten to grade 8).</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/schoolowls" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="SchoolOwls" />
                            </div>
                        </div>
                        <div className="project-bg zen-coast-university ">
                            <div className="illu">
                                <div className="bg" title="Zen Coast University" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Zen Coast University <span><img src={Images.IndiaSvg} /></span> <span><img src={Images.USSvg} /></span></h2>
                                    <h5>An e-learning website development solution in Kejabi</h5>
                                    <h6>Industry: Education, E-learning</h6>
                                    <p className="wrapLine">Zen Coast University is an e-learning platform developed in the Kejabi framework providing real estate investment related online courses from the industry experts.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/zen-coast-university" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-el">
                        <div className="project-bg nepal-government-app">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Nepal Government App <span><img src={Images.Nepal} /></span></h2>
                                    <h5>A cross-platform mobile application development for the Nepal government</h5>
                                    <h6>Industry: Government &amp; Public Sector</h6>
                                    <p className="wrapLine">Nepali government app makes Nepal citizens’ work easier to report online problems that occurred in their local regions through an online form to the government officers.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/nepal-government" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="Nepal Government App" />
                            </div>
                        </div>
                        <div className="project-bg aayuvani-app">
                            <div className="illu">
                                <div className="bg" title="Ayuvani" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Ayuvani <span><img src={Images.IndiaSvg} /></span></h2>
                                    <h5>An online ayurvedic doctors’ appointment booking cross-platform mobile application development solution</h5>
                                    <h6>Industry: E-booking, Healthcare</h6>
                                    <p className="wrapLine">Ayuvani is an online appointment booking application for doctors, which helps patients needing ayurvedic care to quickly consult an Ayurvedic/homoeopathic doctor in the comfort of home. </p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/ayuvani" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-el">
                        <div className="project-bg nft-marketplace ">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>NFT Marketplace <span><img src={Images.Singapore} /></span></h2>
                                    <h5>NFT Marketplace development with Ethereum Blockchain</h5>
                                    <h6>Industry: Blockchain</h6>
                                    <p className="wrapLine">An NFT marketplace application backed by ethereum blockchain that allows users to mint and sell NFTs, create and sign smart contracts.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/nft-marketplace" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="NFT Marketplace" />
                            </div>
                        </div>
                        <div className="project-bg scrap-book">
                            <div className="illu">
                                <div className="bg" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Scrapbook <span><img src={Images.USSvg} /></span></h2>
                                    <h5>Native iOS Mobile Application Development Solution</h5>
                                    <h6>Industry: Miscellaneous</h6>
                                    <p className="wrapLine">Scrapbook is an iOS mobile application enabling users to fill out their school time memories in the application connected to the iCloud storage system to access it whenever they feel nostalgic about their school time.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/scrapbook" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="project-bg">
                      <div class="illu">
                          <div class="bg" style="background-image: url(image/sofiqe.jpg)" title="Sofiqe"></div>
                      </div>
                      <div class="wrapper">
                          <div class="container-text">
                              <h2>Sofiqe <span><img src="image/united-kingdom.svg"></span></h2>
                              <h5>A cross-platform e-commerce cosmetic mobile application development</h5>
                              <h6>Industry: E-commerce</h6>
                              <p class="wrapLine">Sofiqe is a UK-based hybrid mobile application providing an e-commerce platform for buying and selling cosmetics products.</p>
                              <div class="appi-cta read_more_wrapper">
                                  <a href="sofiqe" class="btn">View Case Study <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                              </div>
                          </div>
                      </div>
                  </div> */}
                    </div>
                    <div className="container-el">
                        <div className="project-bg family-hives">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>Family Hives <span><img src={Images.Dubai} /></span></h2>
                                    <h5>Flutter App Testing Project</h5>
                                    <h6>Industry: Family Media</h6>
                                    <p className="wrapLine">Family Hives is a hybrid mobile application for both Android and iOS mobile devices. It is a unique concept of socialization application that keeps families connected whether they are living together or in remote locations. Read our Family Hive mobile app testing story.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/family-hives" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="KeepCoolRecs" />
                            </div>
                        </div>
                        <div className="project-bg urnest">
                            <div className="illu">
                                <div className="bg" title="UrNest" />
                            </div>
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>UrNest <span><img src={Images.IndiaSvg} /></span></h2>
                                    <h5>Native Cloud Kitchen Mobile App Development Solution</h5>
                                    <h6>Industry: Hospitality</h6>
                                    <p className="wrapLine">UrNest - a unique cloud-kitchen native iOS application development solution that brings people with different values and cultures together.</p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/urnest" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-el">
                        <div className="project-bg keep-cool-recs ">
                            <div className="wrapper">
                                <div className="container-text">
                                    <h2>KeepCoolRecs <span><img src={Images.Germany} /></span></h2>
                                    <h5>A native iOS mobile application development</h5>
                                    <h6>Industry: Manufacturing</h6>
                                    <p className="wrapLine">Image Processing is a native iOS mobile application that lets users scan images to guess the percentage of a green pixel color collection and nearby color code for industrial use. </p>
                                    <div className="appi-cta read_more_wrapper">
                                        <Link to="/keepcoolrecs" className="btn">View Case Study <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="illu">
                                <div className="bg" title="KeepCoolRecs" />
                            </div>
                        </div>
                        {/* <div class="project-bg">
                      <div class="illu">
                          <div class="bg" style="background-image: url(image/nawee-app.jpg)" title="NaWee Courier"></div>
                      </div>
                      <div class="wrapper">
                          <div class="container-text">
                              <h2>NaWee Courier <span><img src="image/nigeria.svg"></span></h2>
                              <h5>On-demand Hybrid Courier Delivery App Solution</h5>
                              <h6>Industry: Logistics</h6>
                              <p class="wrapLine">NaWee - an on-demand courier delivery cross-platform mobile app development solution developed in Flutter technology stack that supports 4-way delivery models.</p>
                              <div class="appi-cta read_more_wrapper">
                                  <a href="nawee-courier.shtml" class="btn">View Case Study <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                              </div>
                          </div>
                      </div>
                  </div> */}
                    </div>
                </div>
            </section>
            <Clientele />
            <LetsTalk />

        </>
    )
}

export default Portfolio