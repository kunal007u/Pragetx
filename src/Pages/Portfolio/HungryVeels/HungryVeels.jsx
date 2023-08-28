import React from 'react'
import { Helmet } from 'react-helmet'
import "./hungryveels.css"
import { Link } from 'react-router-dom'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'

const HungryVeels = () => {
    return (
        <>
            <Helmet>
                <title>On-Demand Hybrid Food Delivery App Solution | PragetX</title>
            </Helmet>
            <section className="header-top-slider hungry-veels-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>Hungry Veels</h1>
                            <h2>A cross-platform <span>Food Delivery</span> mobile application</h2>
                            <h5>A case study on Hungry Veels - an on-demand hybrid food delivery app development solution developed in Flutter. Hungry Veels is an emerging online food ordering startup operating in a few states of India. But soon it will become a considerable competition for highly used apps in this sector as it expands across India.</h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.HungryApp} alt="Hungry Veels" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h2>About Hungry Veels</h2>
                            <p>Likewise, Swiggy and Zomato, Hungry Veels is an <b>emerging online food ordering and delivery mobile application</b> in India. It provides an online portal to connect customers and food vendors through an online portal. Hungry Veels mobile app for android and iOS devices was launched just a few months back, though it gained around <b>10,000+ installs</b> with <b>4.5-Star</b> ratings in <b>Google Play Store</b> and <b>5.0-Star ratings in App Store</b> for the best UI/UX design, better responsiveness, real-time tracking, better customer support, and quick food deliveries.</p>
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Logistics</p>
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
                                    <h5>Development Time</h5>
                                    <p>720 Hrs/ 25 weeks / 5 months</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Flutter</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.HungryVeelsLogo} alt="About Hungry Veels" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <h2>About Client &amp; Project Requirements</h2>
                            <h4>Seeing the busy schedules of corporate employees, college students, etc., and the popularity of online food delivery apps, the client had the vision to develop such a food delivery app. He then gathered all the requirements for the mobile application development and contacted us with such.</h4>
                            <div className="client-con-row">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="top-features">
                                            <h5>Purpose</h5>
                                            <h3>Hybrid Application Development Solution</h3>
                                            <div className="top-features-img">
                                                <img src={Images.HungryFoodImg} alt="Hybrid Application Development" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <h5>Vendor Panel</h5>
                                        <p>An entry form for vendor profile registration, business verification forms inside the vendor profile edit section, and features to add menus and promo codes. Dashboard showing order details and order success ratios.</p>
                                        <h5>Rider Panel</h5>
                                        <p>An entry registration form, in the profile settings, an identity verification form, in the central dashboard, an available ticket for the food delivery near his location with basic customer details that they should know, a chat option, and a billing menu tracking their active time for the service and reward features. A personalized dashboard for success delivery ratio, avg. delivery time, etc.</p>
                                        <h5>Customer Panel</h5>
                                        <p>An entry customer registration form with Name and Phone No. where login should be done through OTP. Inside the customer profile section, it must ask to Edit Personal Information, in which a profile pic, full name, and contact details should appear, along with manage addresses, order history, a favourites section, app sharing option, and logout option.</p>
                                        <h5>Home Page</h5>
                                        <p>Show favourite restaurants along with nearby restaurants providing food deliveries and pick-up facilities, different types of food item categories, and a search filter option. And personalized dashboard for vendors and delivery partners.</p>
                                    </div>
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
                            <h2>Our Approach for Hungry Veels Application Development</h2>
                            <p>We gathered, analyzed, and understood the client's requirements. The client wanted to build an app for both Android and iOS devices within a certain budget. So, we suggested developing a cross-platform or hybrid mobile app using Flutter and a whole app development roadmap.</p>
                            <p>Once confirmation was received for the development approach from the client, we aligned our trusted senior Flutter Developer with 4+ years of experience in similar developments. He suggested some additional functionalities, like auto-OTP readiness once the OTP is received in the mobile device, search filters, etc. After the confirmation, we started the Hungry Veels development process with full force while keeping the client in a loop for the UI/UX design finalization, app features updates, and final implementation updates, along with responsiveness and bug testing and fixing updates.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.HungryVeelsAppScreen} alt="Hungry Veels Application Development" />
            </section>

            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>Key Features We Integrated</h2>
                            <p>With a lot of brainstorming, our mobile app developers came up with the following features and <br />functionalities for the Hungry Veels application.</p>
                        </div>
                        <div className="case-key-box">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Customer Panel</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Rider Panel</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">Vendor Panel</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.SearchFilters} alt="Search Filters" />
                                                </div>
                                                <h4>Search Filters</h4>
                                                <p>Customers could choose the type of food they are craving for, either from the food categories shown on the home page or from the search bar. Also, they can enable food options, like veg, egg-based, and non-veg.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.AddInstructions} alt="Add Instructions" />
                                                </div>
                                                <h4>Add Instructions</h4>
                                                <p>Many foodies like to remove some ingredients from the food and not send cutlery they selected for the restaurants and not ring the doorbell or call too often, etc.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.PromoCodes} alt="Apply Promo Codes" />
                                                </div>
                                                <h4>Apply Promo Codes</h4>
                                                <p>Like other food delivery apps, this app also has options for customers to apply promo codes and avail discounts on their favourite food.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.PaymentOptions} alt="Choose Payment Options" />
                                                </div>
                                                <h4>Choose Payment Options</h4>
                                                <p>Not every customer has e-wallets or UPI, as some prefer, cash payments. For different payment requirements, we also have enabled various payment options.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.RealTimeTracking} alt="Real-Time Tracking" />
                                                </div>
                                                <h4>Real-Time Tracking</h4>
                                                <p>Once the order is placed, customers can check the progress of their order like the order accepted by the vendor, order preparation status, the delivery partner assigned, his movement on the map, and the time to expect the order delivery.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppChatCall} alt="In-App Chat & Call" />
                                                </div>
                                                <h4>In-App Chat &amp; Call</h4>
                                                <p>When the order is taking a lot to get delivered, or a customer forgot to add something, at those times, they have a facility to talk to the customer support and allocated delivery partner.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.ProfileCreation} alt="Profile Creation" />
                                                </div>
                                                <h4>Profile Creation</h4>
                                                <p>Riders have to provide all their information to verify their profile and start their food pickup and delivery work.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NotifAlerts} alt="Notification & Alert" />
                                                </div>
                                                <h4>Notification &amp; Alert</h4>
                                                <p>Riders would get notified with the new request arrival, chat requests from the vendor and customer, and other important updates.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NewRequest} alt="The New Request Arrived" />
                                                </div>
                                                <h4>The New Request Arrived</h4>
                                                <p>Once they add their clock in time and live location, they'd be notified with the new request for the food delivery made in their nearby.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.RequestDetail} alt="Request detail" />
                                                </div>
                                                <h4>Request detail</h4>
                                                <p>After clicking on the request, they can look into it to accept or ignore the request. The details could be who ordered it, their location, order detail, restaurant detail, restaurant location, etc.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.LocationTracking} alt="Location Tracking" />
                                                </div>
                                                <h4>Location Tracking</h4>
                                                <p>There are some locations of which riders are not aware, so they can also click on the map to get navigation to the pick-up and drop location.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.InAppSupport} alt="In-app chat & call support" />
                                                </div>
                                                <h4>In-app chat &amp; call support</h4>
                                                <p>If, in any case, there can be a delay in the delivery or additional request made by the restaurant or the customer, riders can open the in-app chat or call feature for better communication and support.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.RestaurantReg} alt="Restaurant or Café registration" />
                                                </div>
                                                <h4>Restaurant or Café registration</h4>
                                                <p>Once a vendor downloads the Hungry Veels app, they must register their profile first, then register their business by providing all information about their business, like GST no., address, etc., to verify their profile.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.MenuSetup} alt="Menu Set-Up" />
                                                </div>
                                                <h4>Menu Set-Up</h4>
                                                <p>After that, they must add their menu with basic information about the food category and what ingredients are used. They can also avail of discounts on selected food options.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NotifAlerts} alt="Notification & Alert" />
                                                </div>
                                                <h4>Notification &amp; Alert</h4>
                                                <p>Vendors would get notified with every new order for them to prepare and other important notifications from the rider, customer, and admin panel.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.OrderManagement} alt="Order Management Panel" />
                                                </div>
                                                <h4>Order Management Panel</h4>
                                                <p>They could see what order they received with additional cooking instructions and cutlery information. They could accept or decline the order request based on availability and add order process information.</p>
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
                                <h5>Real-Time Tracking</h5>
                                <p>Enable vendors, riders, and customers to keep track of orders and manage the expected time to delivery. Using these records, Hungry Veels ensure less time to deliver and attract more customers.</p>
                            </div>
                            <div className="results-box">
                                <h5>Active Customer Support</h5>
                                <p>Whenever a customer or rider feels difficulties with the services, they can directly get in touch with the Hungry Veels customer support team through an in-app chat function.</p>
                            </div>
                            <div className="results-box">
                                <h5>Interactive UI/UX</h5>
                                <p>For any application, UI/UX plays an important role to guide users on how the application functions, which we ensured to implement in the Hungry Veels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <LetsTalk />

        </>
    )
}

export default HungryVeels