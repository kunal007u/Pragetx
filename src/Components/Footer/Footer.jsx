import React from 'react'
import './footer.css'
import Images from '../../Images'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className=''>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="footer-logo">
                                <img src={Images.Logo} alt="Pragetx" />
                            </div>
                            <p>&nbsp;</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 social-icon">
                            <a target="_blank" href="https://www.facebook.com/PragetX"><img src={Images.FooterFacebook} alt="Facebook" /></a>
                            <a target="_blank" href="https://twitter.com/PragetX"><img src={Images.FooterTwitter} alt="Twitter" /></a>
                            <a target="_blank" href="https://www.linkedin.com/company/79788955"><img src={Images.FooterLinkedin} alt="Linkedin" /></a>
                            <a target="_blank" href="https://www.instagram.com/pragetx_technologies/"><img src={Images.FooterInstagram} alt="Instagram" /></a>
                            <a target="_blank" href="https://www.youtube.com/channel/UC4ju5EX2B5ptpTSIHOZbGLw"><img src={Images.FooterYouTube} alt="Youtube" /></a>
                            <a target="_blank" href="https://www.behance.net/pragetxtechnologies/"><img src={Images.FooterBehance} alt="Behance" /></a>
                            <a target="_blank" href="https://dribbble.com/PragetX"><img src={Images.FooterDribble} alt="Dribbble" /></a>
                        </div>
                    </div>
                    <div className="footer-address-main">
                        <div className="row">
                            <div className="footer-address-inner">
                                <div className="d-flex footer-address">
                                    <div className="add-con">
                                        <h5><img src={Images.IndiaSvg} /> India (HQ)</h5>
                                        <p>D-509 &amp; D-510, Swati Clover, Shilaj Circle, <br />SP Ring Road, Thaltej, Ahmedabad - 380054</p>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-address-inner">
                                <div className="d-flex footer-address">
                                    <div className="add-con">
                                        <h5><img src={Images.USSvg} /> US Office</h5>
                                        <p>PO Box 531, Centerville, Atlanta GA 31028</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-address-inner">
                                <div className="d-flex footer-address">
                                    <div className="add-con">
                                        <h5><img src={Images.FooterUk} /> UK Office</h5>
                                        <p>379, New Chester Road, Birkenhead, Liverpool UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-contact">
                    <div className="container">
                        <div className="d-flex flex-row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="f-skype">
                                    <a className="d-flex" href="skype:live:.cid.65e5512c0938a3a?chat">
                                        <span>
                                            <img src={Images.FooterSkype} alt="Skype" />
                                        </span>
                                        pragetX
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12 f-border">
                                <div className="f-skype">
                                    <a className="d-flex" href="tel:918487890773">
                                        <span>
                                            <img src={Images.FooterCall} alt="Call" />
                                        </span>
                                        +91-84878 90773
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="f-skype">
                                    <a className="d-flex" href="mailto:hello@pragetx.com">
                                        <span>
                                            <img src={Images.FooterEmail} alt="Email" />
                                        </span>
                                        hello@pragetx.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row footer-link-main">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 footer-link">
                        <ul>
                            <li><Link to="/about" href="about" className="lear-more-l">About Us</Link></li>
                            <li><Link to="/portfolio" className="lear-more-l">Portfolio</Link></li>
                            <li className="hiring-link blink-menu"><Link to="/careers" className="lear-more-l blink-active">Careers</Link> <span className="hiring">We Are Hiring</span></li>
                            <li><Link to="/how-we-work" className="lear-more-l">How We Work</Link></li>
                            <li><Link to="/referral-programs" className="lear-more-l">Referral Programs</Link></li>
                            <li><Link to="/become-partner" className="lear-more-l">Become A Partner</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex flex-row">
                        <div className="col-lg-6 col-md-6 col-sm-12 copy-right text-left">
                            <p><span>Copyright © 2023 PragetX Technologies. All Rights Reserved.</span></p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 bottom-link text-right">
                            <p style={{ textAlign: 'right' }}><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-use">Terms of Use</Link> | <Link to="/sitemap">Sitemap</Link></p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer
