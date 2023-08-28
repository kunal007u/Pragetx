import { Link } from 'react-router-dom'
import CountUp from 'react-countup';

import "./about.css"
import Images from '../../../Images';
import ServingFortune from '../../../Components/Serving-Fortune/ServingFortune';
import DiscussProject from '../../../Components/Discuss-Project/DiscussProject';
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk';
import StartUp from '../../../Components/StartUp/StartUp';
import { Helmet } from "react-helmet";
import EthicalCareer from '../../../Components/EthicalCareer/EthicalCareer';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver';

const About = () => {
  const [targetRef, isVisible] = useIntersectionObserver();

  return (
    <>
      <Helmet>
        <title>About PragetX : Software Company Overview | Why PragetX</title>
      </Helmet>
      <section className="header-slider about-top-slider">
        <div className="container">
          <div className="row">
            <div className="header-top-con">
              <h5>A visionary &amp; upcoming leading software development company based in India</h5>
              <h1>A Dedicated, <span>Agile Team</span> of Developers <br />At Your Service</h1>
              <h5>PragetX is an extended team of experienced software developers who are on a mission to help businesses in their digital transformation journey through dedication and the latest technology support.</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="why-best-choose-main">
        <div className="container">
          <div className="row">
            <div className="why-best-choose-con">
              <h2>PragetX: How It All Started?</h2>
              <h6>The idea of PragetX was like a buzzword in our founders’ minds that they couldn’t resist because the change it could bring across the IT sector. That’s how the leaders at PragetX came in front and laid its pillars in 2021 with an aim to be a helping hand to businesses suffering in their digital transformation journey due to a sudden need to transition to remote work settlements. Though it’s just a startup, during just a year of the journey, this visionary team has accomplished many milestones and has served 54+ global brands with extraordinary and compelling results as promised.</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-main about-stat-main mb-1">
        <div className="container-fluid">
          <div className="about-con">
            <div className="row gy-5">
              <div className="col-lg-6 col-md-12">
                <div className="about-img">
                  <img src={Images.AboutImg} alt="Build Your Pragetanam with Us" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-center">
                <div className="con-head">
                  <h2>Build Your <i>Pragetanam</i> with Us</h2>
                  <h5>Our IT Solutions Define Flexibility &amp; Reliability In All Working Environments</h5>
                  <h6>A team of creative developers, smart leaders, digital content creators, and brand marketers, working together to provide all types of software and marketing-related services to help build your company’s “Pragetanam” with us.</h6>
                  <Link to="/contact-us" className="btn" >Get In Touch <i className="fa fa-angle-right" aria-hidden="true" /></Link>

                </div>
                <div className="about-stat" ref={targetRef}>
                  <div className="row gy-5 counter-number" id="counter">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 80 : 0} duration={3} />+</div>
                        <div className="number-l">Project</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 60 : 0} duration={3} />+</div>
                        <div className="number-l">Clients</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 18 : 0} duration={3} />+</div>
                        <div className="number-l">Countries</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 98 : 0} duration={3} />+</div>
                        <div className="number-l">Retentions</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 20 : 0} duration={3} />+</div>
                        <div className="number-l">Professionals</div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="about-counter">
                        <div className="number-c count percent" ><CountUp end={isVisible ? 7 : 0} duration={3} />+</div>
                        <div className="number-l">Offshore Partners</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EthicalCareer />
      <section className="core-values-main business-models-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-head text-center">
                <h2>We only commit, if we can do it</h2>
                <h5>our focused business strategy is designed to enhance client’s existing development methodology and improve their conventional way of business operations.</h5>
              </div>
            </div>
          </div>
          <div className="business-models-inner">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Our Mission</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Our Vision</button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                    <div className="our-mission">
                      <div className="our-mission-con">
                        {/* <h3>PragetX Mission</h3> */}
                        <h5>You Grow, We Grow.</h5>
                        <p>Thriving to ease the workload of companies and individuals by providing cutting-edge, innovative, hassle-free software development and marketing solutions.</p>
                        <p>We want companies to not compromise on anything because of any factor but to aim for higher and better results in their development budget.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                    <div className="our-vision">
                      <div className="our-mission-con">
                        {/* <h3>PragetX Vision</h3> */}
                        <h5>Our vision is not to outgrow anyone, but to help YOU outgrow YOURSELF</h5>
                        <p>Our vision is to empower businesses with emerging IT solutions, helping them solve their concerning problems, ease their workloads, and thrive in their digital transformation journey. This way, we can make PragetX - the best and your dream team of developers to collaborate with.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="at-pragetx-main">
        <div className="container">
          <div className="con-head text-center">
            <h2>At PragetX, We Live By Our Mantra</h2>
            <h5>Give us a chance to be your extended IT team and help you achieve your competitive edge</h5>
          </div>
          <div className="at-pragetx">
            <div className="at-box1">
              <div>
                <h5>Listen</h5>
                <p>We listen to each important requirement from the client in detail and share valuable suggestions to come up with the best wireframe design.</p>
              </div>
            </div>
            <div className="at-box2">
              <div>
                <h5>Develop</h5>
                <p>With best agile methodologies, we develop the project with highly skilled developers and team leaders with a complete software development life cycle.</p>
              </div>
            </div>
            <div className="at-box3">
              <div>
                <h5>Deploy</h5>
                <p>We finish developing and testing before the targeted timeline for discussing with our clients to make any necessary changes or modifications needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-life-main">
        <div className="container">
          <div className="con-head text-center">
            <h2>Work Life At Its Best</h2>
            <h5>A passionate team that develops an encouraging and innovative work culture that you’re actively looking forward to collaborating with</h5>
          </div>
          <div className="work-life">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.LearningDevelopment} alt="Learning & Development" />
                  <span>Learning &amp; <br />Development</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.MindfulPersonal} alt="Mindful Personal Guidance" />
                  <span>Mindful <br />Personal Guidance</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.ConstructiveFeedback} alt="Constructive Feedback" />
                  <span>Constructive <br />Feedback</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.InclusiveOpenCulture} alt="Inclusive & Open-Culture" />
                  <span>Inclusive &amp;<br /> Open-Culture</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.InnovationQualityFirst} alt="Innovation & Quality First" />
                  <span>Innovation &amp;<br /> Quality First</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.ProactiveImplementation} alt="Proactive Implementation" />
                  <span>Proactive <br />Implementation</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.BestGlobalOpportunities} alt="Best & Global Opportunities" />
                  <span>Best &amp; Global <br />Opportunities</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.WorkWithLatestTechnology} alt="Work with Latest Technology" />
                  <span>Work with <br />Latest Technology</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-life-box">
                  <img src={Images.EvolvingCulture} alt="Evolving Culture" />
                  <span>Evolving <br />Culture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StartUp />
      <section className="insights-main pt-1">
        <div className="con-head text-center">
          <h2>Insights</h2>
          <h5>PragetX team is passionate about delivering excellence and <br />committed to helping clients scale to new heights</h5>
        </div>
        <ul className="cb-slideshow">
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
          <li><span>&nbsp;</span></li>
        </ul>
      </section>
      <ServingFortune />
      <DiscussProject />

      <section className="core-values-main">
        <div className="container">
          <div className="con-head text-center">
            <h2>Our Core Values</h2>
            <h5>At PragetX, we embrace a well-established set of cultural and professional values which <br />represent our highest aspirations for how we engage as colleagues, fellows, alumni, partners, and board members</h5>
          </div>
          <div className="core-values">
            <div className="row gy-5">
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.CustomerComesFirst} alt="Customer Comes First" />
                  <div className="values-con">
                    <span>Customer Comes First</span>
                    <p>All clients of PragetX are our key to success and an essential part of this thriving organization.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.Satisfaction} alt="Satisfaction" />
                  <div className="values-con">
                    <span>Satisfaction</span>
                    <p>A team that sticks to the words given till the project delivery</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.Honesty} alt="Honesty" />
                  <div className="values-con">
                    <span>Honesty</span>
                    <p>Complete transparency is what we aim for, and we follow through by all means.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.Integrity} alt="Integrity" />
                  <div className="values-con">
                    <span>Integrity</span>
                    <p>Our ethics and professionalism to deal with industry problems define our work culture.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.Accountability} alt="Accountability" />
                  <div className="values-con">
                    <span>Accountability</span>
                    <p>No matter how difficult a project is, we strive to achieve the desired benchmarks</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.CognitiveTeamwork} alt="Cognitive Teamwork" />
                  <div className="values-con">
                    <span>Cognitive Teamwork</span>
                    <p>No project work can be done alone better than teamwork, and that's what lies at the center of PragetX.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.PassionateTeams} alt="Passionate Teams" />
                  <div className="values-con">
                    <span>Passionate Teams</span>
                    <p>A passion to deliver projects with multiple times, cross-verifications and amendments until the objectives are met.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.SkillsAboveEverything} alt="Skills Above Everything" />
                  <div className="values-con">
                    <span>Skills Above Everything</span>
                    <p>At PragetX, we choose our team members by assessing their skills rather than giving priority to their degree</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="core-values-box">
                  <img src={Images.ValueToTime} alt="Value to Time" />
                  <div className="values-con">
                    <span>Value to Time</span>
                    <p>No matter how big or small and easy or difficult a project is, we ensure to meet the deadline every time.</p>
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

export default About