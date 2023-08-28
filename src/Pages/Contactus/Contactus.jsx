import React from 'react'
import "./contactus.css"
import { Helmet } from 'react-helmet'
import Images from '../../Images'
import Clientele from '../../Components/Clientele/Clientele'
import ReactSlider from 'react-slider'
import GetInTouchForm from '../../Components/GetInTouchForm/GetInTouchForm'


const Contactus = () => {

    const handleRange = (e) => {
        console.log(e);
    }

    return (
        <>
            <Helmet>
                <title>Contact Us For Your Web and Mobile App Development Needs | PragetX</title>
            </Helmet>

            <section className="header-top-slider contact-top-slider">
                <div className="container-fluid">
                    <div className="row gy-5">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-top-con">
                                <h1>How can we help you?</h1>
                                <h5>At PragetX, we have made it easier for businesses to contact us with their requirements for quick
                                    consultation and project delivery.</h5>
                                <div className="contact-btn">
                                    <div className="f-skype">
                                        <a target="_blank" className="d-flex" href="skype:live:.cid.2f0f01a83b32003a?chat">
                                            <span>
                                                <img src={Images.Skype} alt="Skype" />
                                            </span>
                                            pragetX
                                        </a>
                                    </div>
                                    <div className="f-skype">
                                        <a target="_blank" className="d-flex" href="tel:918487890773">
                                            <span>
                                                <img src={Images.WhatsApp} alt="Whatsapp" />
                                            </span>
                                            +91-84878 90773
                                        </a>
                                    </div>
                                    <div className="f-skype">
                                        <a target="_blank" className="d-flex" href="mailto:hello@pragetx.com">
                                            <span>
                                                <img src={Images.Email} alt="Email" />
                                            </span>
                                            hello@pragetx.com
                                        </a>
                                    </div>
                                    <div className="f-skype">
                                        <a target="_blank" className="d-flex" href="https://calendly.com/pragetx">
                                            <span>
                                                <img src={Images.GoogleMeet} alt="Google Meet" />
                                            </span>
                                            Schedule Meeting
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-top-img">
                                <img src={Images.ContactUsImg} alt="Contact Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="contact-form-main">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-2 col-md-12" />
                        <div className="col-lg-8 col-md-12">
                            <div className="contact-form-con">
                                <div className="con-head text-center">
                                    <h2>Get a Quote</h2>
                                    <h5>Please give us a call or enter your information and requirements in the below form, and our IT
                                        consulting executives will be in touch with you shortly.</h5>
                                </div>
                                <form name="contactForm" id="contactForm" method="post" encType="multipart/form-data">
                                    <div className="form-row">
                                        <div className="col-lg-12 col-md-12">
                                            <h6>1. Basic Contact Information</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>First Name <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="First Name" name="name" id="name" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>Your Email Address <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="Your Email Address" name="email" id="email" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>Phone Number <span>*</span></label>
                                            <input type="tel" className="form-control" placeholder="Phone Number" name="phone" maxLength={15} id="phone" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>Company website <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="Company website" name="company_website" id="company_website" />
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <label>What’s your biggest business IT challenge? <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="What’s your biggest business IT challenge?" name="biggest_challenge" id="biggest_challenge" />
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <h6>2. How Can We Help You?</h6>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <label>Describe your project briefly <span>*</span></label>
                                            <textarea className="form-control" rows={3} placeholder="Describe your project briefly" name="describe_project" id="describe_project" defaultValue={""} />
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <label className="price-label">What’s your budget?</label>
                                            <ReactSlider
                                                className="horizontal-slider"
                                                thumbClassName="example-thumb"
                                                trackClassName="example-track"
                                                defaultValue={[0, 500000]}
                                                ariaLabel={['Lower thumb', 'Upper thumb']}
                                                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                                                renderThumb={(props, state) => <div {...props}><span className='react-slider-range'>${state.valueNow}</span> </div>}
                                                pearling
                                                minDistance={0}
                                                min={100}
                                                max={500000}

                                                onChange={(state) => console.log(`lowerLimit : ${state[0]}, upperLimit: ${state[1]}`)}
                                            />
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="input-group custom-file-button contact-us-form">
                                                <label className="input-group-text" htmlFor="inputGroupFile">Have a file to share?</label>
                                                <input type="file" className="form-control" id="inputGroupFile" name="file[]" multiple />
                                            </div>
                                            <span>Only Document, Image or ZIP file. Max size 8MB</span>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <h6>3. Services You Want to Sign Up For</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="Custom Software Development" id="flexCheckDefault1" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                    Custom Software Development
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="Web or Mobile Apps Development" id="flexCheckDefault" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Web or Mobile Apps Development
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="Web App Development" id="flexCheckDefault2" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                    Web App Development
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="Mobile App Development" id="flexCheckDefault3" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                    Mobile App Development
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="Software Testing and QA" id="flexCheckDefault4" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                    Software Testing and QA
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue="UI/UX Designing" id="flexCheckDefault5" name="service_interested[]" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                    UI/UX Designing
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <h6>4. Book your free 60 min IT consulting with our tech experts.</h6>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>Meeting Date <span>*</span></label>
                                            <input type="date" className="form-control" placeholder="Meeting Date" name="meeting_date" id="meeting_date" />
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <label>Meeting Time <span>*</span></label>
                                            <input type="time" className="form-control" placeholder="Meeting Time" name="meeting_time" id="meeting_time" />
                                        </div>
                                    </div>
                                    <button type="submit" name="form_submit" value="submit" id="form_submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            <div className="alert alert-success alert-dismissible success" style={{ display: 'none' }}>
                                <span id="success" />
                            </div>
                            <div className="alert alert-error alert-dismissible error" style={{ display: 'none' }}>
                                <span id="error" />
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12" />
                    </div>
                </div>
            </section> */}
            <GetInTouchForm />
            <section className="contact-startup-main">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-7 col-md-12">
                            <div className="con-head">
                                <h2>Have a startup idea &amp; <br />need to discuss with us?</h2>
                                <p>Let us give you our honest opinion.</p>
                                <h5>Book your <b>FREE 30 minutes</b> consultation with:</h5>
                                <a target="_blank" href="https://calendly.com/shrey-pragetx" className="btn">Consult our experts <i className="fa fa-angle-right" aria-hidden="true" /></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="startup-con">
                                <img src={Images.AndyCoFounder} />
                                <div className="startup-got-con">
                                    <h5>Mr. Sagar Anadkat</h5>
                                    <span>Co-Founder &amp; Business Head</span>
                                    <a className="d-flex" href="mailto:hello@pragetx.com">
                                        <span>
                                            <img src={Images.EmailWhite} alt="Email" />
                                        </span>
                                        hello@pragetx.com
                                    </a>
                                    <a className="d-flex" href="tel:919825289891">
                                        <span>
                                            <img src={Images.PhoneCall} alt="Call" />
                                        </span>
                                        +91-98252 89891
                                    </a>
                                    <a className="d-flex" href="skype:live:.cid.2f0f01a83b32003a?chat">
                                        <span>
                                            <img src={Images.SkypeWhite} alt="Skype" />
                                        </span>
                                        pragetX
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clientele />
            <section className="contact-our-office-main pt-1">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Our Offices</h2>
                        {/* <h5>We provide cutting edge web and mobile app solutions</h5> */}
                    </div>
                    <div className="row gy-5">
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.TimeSquare} alt="Corporate Office" />
                                </div>
                                <div className="office-con">
                                    <h5>Corporate Office</h5>
                                    <p>16, Ground floor, Time Square 1, Thaltej-Silaj Road, Thaltej, Ahmedabad, Gujarat 380059</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.ElanzaCrest} alt="Registered Office" />
                                </div>
                                <div className="office-con">
                                    <h5>Registered Office</h5>
                                    <p>501, Pride-410, Nr. Zebar School, B/H Copper Stone, Thaltej, Ahmedabad, Gujarat 380059</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.USOffice} alt="US Office" />
                                </div>
                                <div className="office-con">
                                    <h5>US Office</h5>
                                    <p>PO Box 531 Centerville ga <br />31028</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="office-address">
                                <div className="office-img">
                                    <img src={Images.UKOffice} alt="UK Office" />
                                </div>
                                <div className="office-con">
                                    <h5>UK Office</h5>
                                    <p>379 New Chester Road, Birkenhead, <br />Liverpool UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus