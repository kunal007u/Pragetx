import React from 'react'
import "./digitalmarketing.css"
import ClientLogoSlider from '../../../Components/Client-Logo-Slider/ClientLogoSlider'
import Images from '../../../Images'
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject'
import TeamTagLine from '../../../Components/Team-tag-line/TeamTagLine'
import Industries from '../../../Components/Industries/Industries'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import TechnologyWork from '../../../Components/Technology-work/TechnologyWork'
import StartUp from '../../../Components/StartUp/StartUp'
import Clientele from '../../../Components/Clientele/Clientele'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'


const DigitalMarketing = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>Best Digital Marketing Agency in Ahmedabad | India | PragetX</title>
            </Helmet>
            <section className="header-top-slider digital-marketing-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="header-top-con">
                                <h1>The Best <span>Digital Marketing</span> <br />Company</h1>
                                <h5>Expand your business reach across the world with well-planned, multichannel online marketing strategies and campaigns. Leverage SEO and digital marketing specialists at PragetX Technologies LLP to provide well-analyzed online marketing plans and social media ad campaigns to spread your business awareness to targeted audiences and create better business conversion rates.</h5>
                                <Link to="/contact-us" className="btn">About Your Marketing Needs <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
            </section>
            <ClientLogoSlider />
            <section className="about-us-main nft-dec-con">
                <div className="container">
                    <div className="about-con">
                        <div className="row gy-5">
                            <div className="col-lg-6 col-md-12">
                                <div className="con-head">
                                    <h2>Let's Aware Everyone About Your Business Presence</h2>
                                    <p>At PragetX, we consider online or digital marketing more than just an asset to bring and introduce company services to the world, which must be done through a lot of research, brainstorming, and thoughtful planning. Well-planned digital marketing is done by considering various goals, business types, audience behaviours and their liking; market trends, and creativity that can be applied as a brand voice.</p>
                                    <p>Speaking of digital brand marketing, creating a stronger brand identity is necessary. Starting with a deep market, audience, and competitors' analysis, thoughtful conclusions to marketing approaches to follow and breaking silos to be innovative to shine among audiences while ensuring roots. No matter how long you plan to run your campaigns, whether using paid advertising or non-paid ones, choosing the right marketing partner can benefit your business in many ways.</p>
                                    <p>Leverage marketing specialists at PragetX to guide you through your business values, input and output insights, and make quick but smart decisions to bring the best out of it.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={Images.DigiImg} alt="Digital Marketing" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 5 : 0} duration={3} />B</div>
                                    <div className="number-l">People search on Google per day!</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 200 : 0} duration={3} decimals={1} />%</div>
                                    <div className="number-l">ROI through PPC</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 4400 : 0} duration={3} />%</div>
                                    <div className="number-l">ROI derived through email marketing</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 49 : 0} duration={3} />%</div>
                                    <div className="number-l">Businesses uses organic SEO tactics for the best marketing ROI</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 55 : 0} duration={3} />%</div>
                                    <div className="number-l">of ads are digital</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="about-counter">
                                    <div className="number-c count percent" ><CountUp end={isVisible ? 80 : 0} duration={3} />%</div>
                                    <div className="number-l">of brand awareness is done through online marketing</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DiscussProject />
            <section className="ai-ml-services software-services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our Digital Marketing Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-services-main">
                        <div className="row gy-4">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DigitalMarketingConsultation} alt="Digital Marketing Consultation" />
                                    </div>
                                    <h5>Digital Marketing Consultation</h5>
                                    <p>Have various requirements and need a certain package digital marketing solution? Consult our digital marketing consultants and marketing specialists to get a sound solution based on your business objectives.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.DigitalMarketingStrategies} alt="Digital Marketing Strategies" />
                                    </div>
                                    <h5>Digital Marketing Strategies</h5>
                                    <p>Analyzing company objectives and requirements, doing market and competitive research, and crafting a well-targeted marketing strategy while ensuring branding and marketing activities consistency.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SEOServices} alt="SEO Services" />
                                    </div>
                                    <h5>SEO Services</h5>
                                    <p>Gathering client requirements, analyzing and strategizing SEO approaches through a website SEO audit. The SEO strategies include On-page and off-page approaches, along with keyword research and content marketing.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SEMServices} alt="SEM Services" />
                                    </div>
                                    <h5>SEM Services</h5>
                                    <p>Helping brands to rapidly spread awareness about their business among their targetted audiences through online paid ad campaigns for different mediums, including website pages, social media ads, play store ads, etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.SMMServices} alt="SMM Services" />
                                    </div>
                                    <h5>SMM Services</h5>
                                    <p>Use different social media platforms and create content based on their user base to connect with their vibe and humour to create your business social media marketing conversions, grow your business, and achieve your competitive edge.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.PPCServices} alt="PPC Services" />
                                    </div>
                                    <h5>PPC Services</h5>
                                    <p>Pay-per-click is a cost-effective online advertisement approach helping businesses place ads in a very strategic way for brand awareness. We run PPC campaigns for social media platforms and website kinds by targeting parameters, like location, keywords, interest, age, gender, etc.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.AppMarketingServices} alt="App Marketing Services" />
                                    </div>
                                    <h5>App Marketing Services</h5>
                                    <p>Following an effective and result-oriented app marketing strategy to make your app a featured one. Leverage SEO and SMM specialists at PragetX to amplify your app marketing and convert it into a service-specific brand.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="services-box">
                                    <div className="services-ic">
                                        <img src={Images.EmailMarketingServices} alt="Email Marketing Services" />
                                    </div>
                                    <h5>Email Marketing Services</h5>
                                    <p>Email marketing helps businesses gather the highest-level of business conversions. Hire our email copywriters and UI/UX designers to craft a killer email copy template that can help you get more business through email marketing practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="core-values-main">
                <div className="container">
                    <div className="client-con-row">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="top-features">
                                    <h2>PragetX is Your Ideal Digital Marketing Agency</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>You Grow, We Grow.</span>
                                                <p>We help you with more ambitious campaigns for Internet Marketing like SEO, SMM, SEM, PPC, Affiliate, Google Ads, etc., to boost your sales growth and acquire more target audiences than ever before. We’ve got you covered!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Now, Get More Traffic with Team PragetX.</span>
                                                <p>An experienced team of SEO at PragetX helps you get faster and better ranking service on search results. With SEO auditing, we ensure your ranking never drops and only goes up.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>Keywords To Rank Website in Top SERPs.</span>
                                                <p>With the help of visitors' data generated from the traffic on your website, we provide you with deep insights and detailed analytics to grow your business by having focused and advanced google keywords from the market.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="core-values-box">
                                            <div className="values-con">
                                                <span>More Business Conversions with Google Ads.</span>
                                                <p>Our team helps you drive more visitors to your website by generating more traffic and engagement with PPC campaigns through SEM service. This successfully converts more leads into revenue for your company.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TeamTagLine />
            <Industries />
            <section className="ai-ml-we-work">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="con-head text-center">
                                <h2>Our Digital Marketing Approach</h2>
                            </div>
                        </div>
                    </div>
                    <div className="ai-we-work-main">
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ToneAndVoice} alt="Tone and Voice" />
                                    </div>
                                    <h5>Tone and Voice</h5>
                                    <p>Analyzing brands and providing brands with the right tone and voice, they need to communicate effectively with their target audience and win their trust.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.VisualIdentity} alt="Visual Identity" />
                                    </div>
                                    <h5>Visual Identity</h5>
                                    <p>Meeting brand needs for a unique visual identity in terms of graphics and maintaining its consistent use for the steady, elevating brand marketing.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.ReachTheRightAudience} alt="Reach the right audience" />
                                    </div>
                                    <h5>Reach the right audience</h5>
                                    <p>Our marketers thoroughly analyze market trends, your brand responses, and many other factors necessary to create the right audience base.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="we-work-box">
                                    <div className="we-work-ic">
                                        <img src={Images.Roadmap} alt="Roadmap" />
                                    </div>
                                    <h5>Roadmap</h5>
                                    <p>Consistency is the key. And for full-proof branding and marketing of your unique brand, we provide a well-researched and structured calendar to ensure the same.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientTeleMap scrollTarget={6750} />
            <TechnologyWork />
            <StartUp />
            <Clientele />
            <LetsTalk />

        </>

    )
}

export default DigitalMarketing