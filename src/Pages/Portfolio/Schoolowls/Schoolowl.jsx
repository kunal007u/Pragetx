import React from 'react'
import { Helmet } from 'react-helmet'
import "./schoolowl.css"
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'

const Schoolowl = () => {
  return (
    <>
      <Helmet>
        <title>SchoolOwls WordPress Website Development Project | PragetX</title>
      </Helmet>
      <section className="header-top-slider school-owls-top-slider">
        <div className="container">
          <div className="row">
            <div className="header-top-con">
              <h1>School Owls</h1>
              <h2>An Online Fun-Based <span>Primary Education</span> Website Development</h2>
              <h5>A Case Study of a WordPress website development project for the education industry, which provides e-learning materials     for students pursuing Kindergarten - primary education. This website contains thousands of printable worksheets to help your child master the skills with minimal screen time.</h5>
              <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
            </div>
            <div className="header-img">
              <img src={Images.OwlsSchoolWebsite} alt="School Owls" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-case-study">
        <div className="container">
          <div className="row">
            <div className="about-case-con">
              <h2>About School Owls</h2>
              <p>School Owls is an online education platform which creates and provides fun-based, quality Mathematics, cursive writing, reading, and different types of worksheets for children, pursuing primary education (from kindergarten to grade 8). The organization’s aim for creating this online platform is to help parents find downloadable interactive and creative educational templates/worksheets for their children’s study purposes. Using this application, parents not only can elevate the interest of their children in education but also minimize their screen time by printing out those study activity materials.</p>
              <h4>Quick Info</h4>
              <div className="quick-panel school-owls-panel">
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
                  <p>Complete Website Development</p>
                </div>
                <div className="quick-box">
                  <h5>Team Size</h5>
                  <p>1 members</p>
                </div>
                <div className="quick-box">
                  <h5>Project Duration</h5>
                  <p>85 Hrs/ 3 months</p>
                </div>
                <div className="quick-box">
                  <h5>Technology Stack</h5>
                  <p>WordPress</p>
                </div>
              </div>
            </div>
            <div className="about-case-img">
              <img src={Images.CSchoolOwlsLogo} alt="About School Owls" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-client about-purpose case-about">
        <div className="container">
          <div className="row">
            <div className="about-client-con">
              <div className="case-about-box">
                <h2>About Our Client &amp; Project Requirements</h2>
                <div className="case-about-img">
                  <img src={Images.SchoolImg1} alt="About Our Client" />
                </div>
              </div>
              <div className="case-about-box">
                <div className="case-about-img">
                  <img src={Images.SchoolImg2} alt="About Our Client Project" />
                </div>
                <p>Our client is based in Texas, USA. She is our very first client who trusted us with our website development services for her dream project to inspire kids to learn new things creatively.</p>
                <p>Seeing the criticality of primary education, our client wanted to develop an online platform that could provide creative learning worksheets, which are also downloadable. With this website, parents can ensure that their children are learning something new and find it amusing to do it every day.</p>
              </div>
              <div className="case-about-box">
                <p>So, the client came to us with a requirement to build such a website, which can have different learning sections as per the children's grade type, such as Kindergarten and Grade 1-8 (for mathematics). The learning sections with areas like Mathematics, Cursive Writing Patterns, Reading exercises, General knowledge worksheets, and a bookstore to explore and buy e-books to learn new things along with an international payment accepting gateway.</p>
                <div className="case-about-img">
                  <img src={Images.SchoolImg3} alt="About Our Client Project" />
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
              <h2>Our Solution</h2>
              <p>After receiving all requirements from the client, we analyzed and understood the requirements and provided a software project development roadmap to her.</p>
              <p>Once we received her confirmation for the development approach, we started developing the project by keeping her updated with the development progress. We developed a website meeting her exact requirements along with some extra features implementation and course designing suggestions and a payment gateway, which can access international transactions.</p>
              <p>We also added some specific features to bifurcate the student and teacher portals and their management spaces, which you’ll find below.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-app-screen">
        <img src={Images.SchoolOwlsBanner} alt="SchoolOwls Website Building" />
      </section>

      <section className="our-case-solution">
        <div className="container">
          <div className="row">
            <div className="case-solution-con">
              <h2>SchoolOwls Website Building Process</h2>
              <p>The client only demanded to build a fully functional WordPress website. Thus, we made sure this website would be developed by an experienced technical person. We assigned our Sr. WordPress Developer having 7+ years of experience.</p>
              <p>Building a website using WordPress is not that hard, but implementing payment gateways and different kinds of forms is a challenge in itself. Therefore, our WordPress developer ensured to do some digging into the challenges and came up with concrete solutions to challenges.</p>
              <p>The client was persistent about the features and functionalities to be added to the website with precision, so we ensured to meet that requirement as well.</p>
              <p>The whole website development process, along with feedback, changes, and testing, took around 85 hours to complete with satisfactory results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-key-features pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="key-head">
              <h2>Key Features We Integrated</h2>
              <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br />functionalities for the SchoolOwls Website.</p>
            </div>
            <div className="case-key-box">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                  <div className="case-key-main-box">
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.ProfileCreation} alt="Profile Registrations" />
                        </div>
                        <h4>Profile Registrations</h4>
                        <p>Different profile registration for students and teachers along with their different account management accessibility considering user understanding and experiences.</p>
                      </div>
                    </div>
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.SubscriptionWindow} alt="Subscription Window" />
                        </div>
                        <h4>Subscription Window</h4>
                        <p>A subscription window showing monthly and yearly subscription types, feature specifications included content, a form for subscription profile, and a payment gateway.</p>
                      </div>
                    </div>
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.OnlineTutoring} alt="Online Tutoring" />
                        </div>
                        <h4>Online Tutoring</h4>
                        <p>A panel showcasing the availability of online tutors for particular learning purposes, their skills, testimonials from their previous students, and at the end an additional tutor inquiry form.</p>
                      </div>
                    </div>
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.NewsletterForm} alt="Newsletter Form" />
                        </div>
                        <h4>Newsletter Form</h4>
                        <p>An auto newsletter sending form to fill for visitors to get daily newsletters showing updates about the SchoolOwls platform to stay connected with the community.</p>
                      </div>
                    </div>
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.FormsSvg} alt="Forms" />
                        </div>
                        <h4>Forms</h4>
                        <p>Considering the requirement for any website, we made sure that SchoolOwls also contains Login, Register, Course Subscription, and Newsletter subscription forms. </p>
                      </div>
                    </div>
                    <div className="key-box">
                      <div className="key-box-inner">
                        <div className="key-ic">
                          <img src={Images.BlogSection} alt="Blog Section" />
                        </div>
                        <h4>Blog Section</h4>
                        <p>Seeing the importance of digital marketing for businesses to stand in this intense market competition, the blog section is a must requirement, which we ensured to embed.</p>
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
                <h5>User Friendliness</h5>
                <p>A website, which is easy to surf for primary education pursuing students as well as for tutors/teachers.</p>
              </div>
              <div className="results-box">
                <h5>Content Accessibility</h5>
                <p>All information of the company and content could be received just from the homepage. So, no need to inquire about finding particular content discovery.</p>
              </div>
              <div className="results-box">
                <h5>Worry Less Transactions</h5>
                <p>The payment gateways are backed by the high-end cybersecurity features provided by WordPress, so no need to worry about getting payment declined or not getting refunds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LetsTalk />


    </>
  )
}

export default Schoolowl