import React from 'react'
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import "./urnest.css"
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import { Link } from 'react-router-dom'
const Urnest = () => {
    return (
        <>
            <Helmet>
                <title>UrNest - A Cloud-Kitchen App Dev Solution | iOS App | PragetX</title>
            </Helmet>

            <section className="header-top-slider urnest-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>UrNest</h1>
                            <h2>Native Android &amp; iOS <span>Cloud Kitchen</span> Mobile App Development</h2>
                            <h5>A case study on UrNest - a unique cloud-kitchen native iOS application development solution that brings people with different values and cultures together. Like any restaurant reservation, this app allows users to book a cloud kitchen listed by Nesters, either for dine-in or takeaway.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.TUrNestApp} alt="UrNest" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About UrNest</h2>
                            <p>UrNest is a unique concept in the hospitality industry created by our client. Consider you're a traveller; you love to explore new places, learn about their people and culture, make new connections and widen your network, and you also prefer to eat something delicious but healthy and are eager to explore native food tastes. In that case, it would be difficult to do so all through traditional communication methods. In the other case, you own a house in your city and want to develop your business in the hospitality sector, but due to some financial matters, you're facing difficulties to do so. Here, the kitchen services' providers are known as Nesters. In both cases, UrNest comes as a revolutionary solution, which provides you with a single platform to do such business and meet new people and learn about their culture.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Hospitality</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Native Android &amp; iOS App</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>4 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Duration</h5>
                                    <p>Ongoing project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Android &amp; iOS</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CUrNestLogo} alt="About UrNest" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>About the Client &amp; Project Requirements</h2>
                                <div className="case-about-img">
                                    <img src={Images.UrNestImg1} alt="About UrNest" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.UrNestImg3} alt="About UrNest" />
                                </div>
                                <p>The client is from India, and he got the idea about UrNest from one such event that happened in his life. So, after pulling and getting all the information about this business, the client came to us with the requirement for native Android and iOS mobile app development.</p>
                            </div>
                            <div className="case-about-box">
                                <p>He needed us to build applications with 2 panels, one for customers and another one for cloud kitchen services providers also known as “Nesters”. In the customer panel, the client wanted to implement features, like profile registration forms, live location pinning, navigation, search filters, booking detail, my orders section, favourites, some custom settings, in-app chat, in-app call, addresses, payments &amp; refunds, and customer support channels.</p>
                                <div className="case-about-img">
                                    <img src={Images.UrNestImg2} alt="About UrNest" />
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
                            <h2>UrNest Solution Development Process</h2>
                            <p>After getting and understanding all the client requirements, we assigned this project to our highly experienced Native Android &amp; iOS developer with 7+ years of wide experience in the field. He took around 2-3 days to understand the requirement and plan the whole UrNest app development roadmap. After doing all cross-verifications, the client validated the roadmap , and we began to work on this project.</p>
                            <p>The iOS developer implemented many features for the search filter, like finding nearby kitchens, personalized search results, experiences, and events. And for food search filters, he implemented sorting by popularity, date, cuisine, price, distance, booking availability type, meal type, dietary restrictions, etc.</p>
                            <p>He understood all the requirements and started to work on the projects. As we thought before, complications in development would be waiting for us to conquer, which arose indeed. But thanks to his problem-solving skills and positive approach to research, he succeeded in overcoming those obstacles and delivered this application to the client with satisfactory results.</p>
                            <p>Well, the development work is done, but complicated applications like this are taking a bit longer to bug-fix the application entirely and add new features. Therefore, this project is still an ongoing one.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.UrNestAppScreen} alt="UrNest App" />
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
                                                    <img src={Images.PersonalizedHomePage} alt="Personalized Home Page" />
                                                </div>
                                                <h4>Personalized Home Page</h4>
                                                <p>The app is integrated with data science algorithms which will show you results based on your liking and your search behaviors in the <b>FOR YOU</b> section.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NearbyEventSpecials} alt="Nearby Event Specials" />
                                                </div>
                                                <h4>Nearby Event Specials</h4>
                                                <p>Customers can also check out events happening to their nearby locations based on their predefined distance, which can be reset as required.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.DailySpecials} alt="Daily Specials" />
                                                </div>
                                                <h4>Daily Specials</h4>
                                                <p>Nesters can add their today's special menu in the story to tell customers about their dish. Customers can check out what type of food and which dishes are being cooked in their <b>NEARBY</b> location.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.CheckOut} alt="Check Out" />
                                                </div>
                                                <h4>Check-Out</h4>
                                                <p>Once the user decides what they want to eat, they can add that dish to their cart and proceed to the booking and payment details.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.Filters} alt="Filters" />
                                                </div>
                                                <h4>Filters</h4>
                                                <p>Customers can find their favourite food being prepared in the city - they are craving for by filling out filter sections. They can directly search for the food through the search bar as well.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AppointmentBooking} alt="Booking" />
                                                </div>
                                                <h4>Booking</h4>
                                                <p>Nesters and customers can check all their bookings by clicking on the booking section</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppChatSupport} alt="In-App Chat" />
                                                </div>
                                                <h4>In-App Chat</h4>
                                                <p>Customers and Nesters can easily talk to each other through the INBOX section given in the app footer section.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppSupport} alt="Call Support" />
                                                </div>
                                                <h4>Call Support</h4>
                                                <p>While or before booking the kitchen services at Nesters, customers can talk to the nesters to solve their doubts.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppNavigation} alt="In-App Navigation" />
                                                </div>
                                                <h4>In-App Navigation</h4>
                                                <p>Customers can also use this feature to find the location (Nester’s) they have to visit for their dine-in and takeaway requirements.</p>
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
                        <p>We ensured to develop a complete online solution for this unique cloud kitchen application, just as our client wanted us to. The app was purposely ideated to connect people and culture, and it is doing its work in the areas like Pune, Mumbai, Paris, London, and Ireland. But soon, this app will expand to PAN India and then globally.</p>
                        <p>UrNest contains the potential to bring revolution in the networking and hospitality sector. And we can say ourselves as the proud developers of the UrNest applications.</p>
                    </div>
                </div>
            </section>

            <LetsTalk />

        </>
    )
}

export default Urnest