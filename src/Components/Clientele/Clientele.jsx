import React, { useRef, useState } from 'react'
import './clientele.css'
import Images from '../../Images'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Clientele = () => {

    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    const handleSlide = index => {
        swiperRef.current.swiper.slideTo(index);
        // setActiveIndex(swiperRef.current.swiper.activeIndex);
    }

    return (
        <div className='clientele' id='clientele'>
            <section className="why-best-choose-main pb-0" id="clientele">
                <div className="container">
                    <div className="row">
                        <div className="why-best-choose-con">
                            <h2>Clientele</h2>
                            <h5>Our work speaks for itself. Take a look why our clients love team PragetX. They are not just our
                                customers, <br />but they are part of one large extended family</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section id="clients" className="bg-white p-0 cursor-light no-transition">
                <div className="section-padding parallax-setting parallaxie parallax2" style={{ backgroundImage: 'url(image/parallax2.png)', backgroundSize: 'auto 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className="container">
                        <div className="testimonial-images">
                            <div className="owl-thumbs owl-dots d-lg-block d-none">
                                <div className={`owl-dot animated-wrap ${activeIndex === 0 ? 'active' : ''} `}><img src={Images.MichaelKohlert} alt="" className="animated-element" onClick={() => handleSlide(0)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 1 ? 'active' : ''} `}><img src={Images.CarlosRosales} alt="" className="animated-element" onClick={() => handleSlide(1)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 2 ? 'active' : ''} `}><img src={Images.NeerajGala} alt="" className="animated-element" onClick={() => handleSlide(2)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 3 ? 'active' : ''} `}><img src={Images.RohitKumar} alt="" className="animated-element" onClick={() => handleSlide(3)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 4 ? 'active' : ''} `}><img src={Images.KunalChoudhary} alt="" className="animated-element" onClick={() => handleSlide(4)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 5 ? 'active' : ''} `}><img src={Images.VirajDamani} alt="" className="animated-element" onClick={() => handleSlide(5)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 6 ? 'active' : ''} `}><img src={Images.JyotirmayiBaral} alt="" className="animated-element" onClick={() => handleSlide(6)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 7 ? 'active' : ''} `}><img src={Images.UjjalHafila} alt="" className="animated-element" onClick={() => handleSlide(7)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 8 ? 'active' : ''} `}><img src={Images.JyotsnaBajaj} alt="" className="animated-element" onClick={() => handleSlide(8)} /></div>
                                <div className={`owl-dot animated-wrap ${activeIndex === 9 ? 'active' : ''} `}><img src={Images.AlexNee} alt="" className="animated-element" onClick={() => handleSlide(9)} />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center position-relative">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn z-1" data-wow-delay="400ms">


                                    <Swiper
                                        modules={[Autoplay, Pagination, Navigation]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 5000,
                                            disableOnInteraction: false,
                                        }}

                                        onSlideChange={(swiper) => {
                                            setActiveIndex(swiper.realIndex)
                                        }}
                                        ref={swiperRef}
                                    >

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">PragetX has provided expertise and
                                                    professional project management on high level. Design, Build, Implementation, UAT done
                                                    as requested. Issue Fixing after UAT was done very fast. The team delivered exceeding
                                                    quality, on time with perfect communication skills. We are planning further projects
                                                    with the company.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.MichaelKohlert} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Michael Kohlert</h5>
                                                        <p className="color-grey">Founder &amp; CEO</p>
                                                        <p className="color-grey">The Integrated</p>
                                                        <div className="rating">
                                                            <span>Germany</span>
                                                            <img src={Images.Germany} alt="Germany" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item hide-cursor">
                                                <p className="color-black testimonial-para mb-15px">Highly recommend. I think their strong point
                                                    is communication. They do follow you in your project and that is priceless. We hired
                                                    this agency for a redesign of a corporate site in europe. They work on budget and
                                                    deliver on time. Thanks</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.CarlosRosales} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Carlos Rosales</h5>
                                                        <p className="color-grey">Co-Founder</p>
                                                        <p className="color-grey">Zdc Studio</p>
                                                        <div className="rating">
                                                            <span>Italy</span>
                                                            <img src={Images.ItalySvg} alt="Italy" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">We came across Pragtex through one of our
                                                    Devloper first to fix some IOS related Bugs but over a period of time based on our
                                                    interaction with the team we found them very skilled, proactive, professional, agile,
                                                    and open to discussing issues to find the right solutions economically.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.NeerajGala} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Neeraj Gala</h5>
                                                        <p className="color-grey">Co-Founder &amp; CEO</p>
                                                        <p className="color-grey">UrNest - AirBnB of Cloud Kitchen</p>
                                                        <div className="rating">
                                                            <span>India</span>
                                                            <img src={Images.IndiaSvg} alt="India" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">Pragetx Technologies LLP successfully
                                                    completed the project. They had an excellent workflow, which helped them deliver the
                                                    project on time. Overall, the client was impressed with their team's solidarity.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.RohitKumar} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Rohit Kumar</h5>
                                                        <p className="color-grey">Founder &amp; CEO</p>
                                                        <p className="color-grey">VR Cube Technologies Pvt Ltd</p>
                                                        <div className="rating">
                                                            <span>Dubai, United Arab Emirates</span>
                                                            <img src={Images.Dubai} alt="Dubai, United Arab Emirates" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">The task I gave them was done precisely with
                                                    all of my requirements and they did a fantastic job. They also kept me updated on every
                                                    step of my work process. The team and the head of the team was very humble and friendly
                                                    and they helped me in better understanding the scope of the modules than what I
                                                    anticipated. I would personally recommend them further to the people who are looking for
                                                    similar kind of services.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.KunalChoudhary} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Kunal Choudhary</h5>
                                                        <p className="color-grey">Managing Director</p>
                                                        <p className="color-grey">PetFind</p>
                                                        <div className="rating">
                                                            <span>Canada</span>
                                                            <img src={Images.Canada} alt="Canada" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">I worked with multiple people at PragetX and
                                                    found them to be professional and flexible on requirements. I would definitely recommend
                                                    them for startups who are looking at getting things done quickly in a cost effective
                                                    manner.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.VirajDamani} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Viraj Damani</h5>
                                                        <p className="color-grey">Founder &amp; CEO</p>
                                                        <p className="color-grey">Tru Performance Inc</p>
                                                        <div className="rating">
                                                            <span>United States</span>
                                                            <img src={Images.USSvg} alt="United States" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">The team is very cooperative and delivers
                                                    good quality work on time. They are receptive to feedback. Overall it was a very good
                                                    experience working with them. Would surely reccommend them to other organisations.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.JyotirmayiBaral} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Jyotirmayi Baral</h5>
                                                        <p className="color-grey">Managing Executive</p>
                                                        <p className="color-grey">Kreeti Technologis PVT LTD</p>
                                                        <div className="rating">
                                                            <span>India</span>
                                                            <img src={Images.IndiaSvg} alt="India" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">Impressed the client by how they proactively
                                                    asked for design inputs and other questions on how to move ahead, enabling them to
                                                    deliver quality outputs. They also facilitated an excellent workflow between both teams.
                                                    Overall, the client had a good experience.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.UjjalHafila} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Ujjal Hafila</h5>
                                                        <p className="color-grey">UI/UX Designer</p>
                                                        <p className="color-grey">Wooqer</p>
                                                        <div className="rating">
                                                            <span>India</span>
                                                            <img src={Images.IndiaSvg} alt="India" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>


                                        <SwiperSlide>


                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">Team PragetX is helping us with creatives
                                                    for our gourmet ice-cream business in Hyderabad. PragetX team has assigned dedicated
                                                    resources to work on our project and we can directly interact with their team members
                                                    for faster and accurate delivery of creatives. Among all the social media marketing
                                                    services companies we found that PragetX is very competitive and pocket friendly. Hawte
                                                    Madhapur team will highly recommend PragetX who is out looking for Social Media
                                                    services.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.JyotsnaBajaj} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Jyotsna Bajaj</h5>
                                                        <p className="color-grey">Founder &amp; CEO</p>
                                                        <p className="color-grey">Healt=""hy Hearth Enterprises</p>
                                                        <div className="rating">
                                                            <span>India</span>
                                                            <img src={Images.IndiaSvg} alt="India" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                        <SwiperSlide>

                                            <div className="testimonial-item">
                                                <p className="color-black testimonial-para mb-15px">Team was professional and understood the
                                                    requirements well. They were responsive and deliver the app as I desired. Surely
                                                    recommended to you.</p>
                                                <div className="testimonial-post">
                                                    <div className="post"><img src={Images.AlexNee} alt="image" /></div>
                                                    <div className="text-content">
                                                        <h5 className="color-black text-capitalize">Alex Nee</h5>
                                                        <p className="color-grey">Founder &amp; CEO</p>
                                                        <p className="color-grey">Sun Teame Pte Ltd</p>
                                                        <div className="rating">
                                                            <span>Singapore</span>
                                                            <img src={Images.Singapore} alt="Singapore" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </SwiperSlide>

                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Clients ends */}


        </div>
    )
}

export default Clientele;
