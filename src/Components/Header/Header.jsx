import React, { useEffect, useState } from 'react'
import './header.css'
import emailsvg from '../../Images/email.svg'
import callsvg from '../../Images/call.svg'
import skypesvg from '../../Images/skype.svg'
import { FaChevronDown } from 'react-icons/fa';
import droplist from '../../Images/header-dot.svg'
import { Link, useLocation } from 'react-router-dom'
import Images from '../../Images'
import { useRef } from 'react'


const Header = () => {

    const location = useLocation();
    const navRef = useRef()

    const [windwoWidth, setWindwoWidth] = useState(window.innerWidth);
    const [scrollDirection, setScrollDirection] = useState();
    const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);


    const [show, setShow] = useState({
        about: false,
        service: false,
        hire: false,
    })

    const handleScroll = () => {
        const scrollValue = window.scrollY;
        setScrollDirection(scrollValue);
    };

    const dropdownHandler1 = () => {
        if (windwoWidth < 992) {
            setShow((prev) => ({
                ...prev,
                about: !prev.about,
                service: false,
                hire: false,

            }))
        }
    }

    const dropdownHandler2 = () => {
        if (windwoWidth < 992) {
            setShow((prev) => ({
                ...prev,
                service: !prev.service,
                about: false,
                hire: false
            }))
        }
    }
    const dropdownHandler3 = () => {
        if (windwoWidth < 992) {
            setShow((prev) => ({
                ...prev,
                hire: !prev.hire,
                about: false,
                service: false
            }))
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindwoWidth(window.innerWidth);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location])

    const handleToggleOffcanvas = () => {

        if (windwoWidth < 992) {
            setOffcanvasOpen(!isOffcanvasOpen);
            setShowOverlay(!showOverlay)
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOffcanvasOpen(false);
                setShowOverlay(false)
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setOffcanvasOpen(false);
                setShowOverlay(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);


    return (

        <div className='header'>

            <header className="header-main">

                <div className="header-top-menu-con">

                    <div className="container">

                        <div className="top-menu-con">

                            <a className="d-flex" href="mailto:hello@pragetx.com">
                                <span>
                                    <img src={emailsvg} alt="Email" />
                                </span>
                                hello@pragetx.com
                            </a>

                            <a className="d-flex" href="tel:918487890773">
                                <span>
                                    <img src={callsvg} alt="Call" />
                                </span>
                                +91-84878 90773
                            </a>

                            <a className="d-flex" href="skype:live:.cid.65e5512c0938a3a?chat">
                                <span>
                                    <img src={skypesvg} alt="Skype" />
                                </span>
                                pragetX
                            </a>

                        </div>

                    </div>

                </div>

                <nav className={`navbar navbar-expand-lg ${scrollDirection >= 100 ? 'nav-bg' : ''} `}>

                    <div className="container">

                        <div className='logo'>
                            <Link className="navbar-brand" to="/"><img src={Images.Logo} /></Link>
                        </div>

                        <button
                            className='navbar-toggler'
                            type="button"
                            onClick={() => {
                                handleToggleOffcanvas()
                                setShowOverlay(true)
                            }}
                        // data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                        >
                            <span className='navbar-toggler-icon' />
                        </button>

                        <div className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''
                            }`}
                            tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" ref={navRef} >


                            <div className='offcanvas-header'>
                                <button type="button" className="text-reset" data-bs-dismiss="offcanvas" aria-label="Close"
                                    onClick={() => {
                                        handleToggleOffcanvas()
                                        setShowOverlay(false)
                                    }}>&#10005;</button>
                            </div>

                            <div className={`offcanvas-body`}>

                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                    <li className={`nav-item ${windwoWidth < 992 ? 'dropdown' : 'newdropdown'}  menu-item`} onClick={dropdownHandler1}>
                                        <a className="nav-link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company<span className={`dropdown-icon ms-1 ${show.about ? 'show' : ''}`}><FaChevronDown /></span></a>
                                        <ul className={`about-dropdown-menu dropdown-menu ${show.about ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/about"><span className='droplist-icon me-1' ><img src={droplist} /> </span>About PragetX</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/how-we-work"><span className='droplist-icon me-1'><img src={droplist} /> </span>How We Work</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/referral-programs"><span className='droplist-icon me-1'><img src={droplist} /> </span>Referral Programs</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/become-partner"><span className='droplist-icon me-1'><img src={droplist} /> </span>Become A Partner</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/internship-and-training"><span className='droplist-icon me-1'><img src={droplist} /> </span>Internship & Training</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`nav-item ${windwoWidth < 992 ? 'dropdown' : 'newdropdown'}  menu-item`} onClick={dropdownHandler2}>
                                        <a className="nav-link">Services<span className={`dropdown-icon ms-1 ${show.service ? 'show' : ''}`}><FaChevronDown /></span></a>
                                        <ul className={`service-dropdown-menu dropdown-menu ${show.service ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="#" className='fw-bold text-uppercase fs-6'>Our Services</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/software-development"><span className='droplist-icon me-1'><img src={droplist} /> </span>Custom Software Development</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/web-app-development"><span className='droplist-icon me-1'><img src={droplist} /> </span>Web App Development</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/mobile-app-development"><span className='droplist-icon me-1'><img src={droplist} /> </span>Mobile App Development</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/ui-ux-designing"><span className='droplist-icon me-1'><img src={droplist} /> </span>UI/UX Design</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/qa-and-testing"><span className='droplist-icon me-1'><img src={droplist} /> </span>QA & Testing</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/enterprise-it-solutions"><span className='droplist-icon me-1'><img src={droplist} /> </span>Enterprise IT Solutions</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/cloud-Solutions"><span className='droplist-icon me-1'><img src={droplist} /> </span>Cloud Services</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/devops"><span className='droplist-icon me-1'><img src={droplist} /> </span>DevOps Solutions</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/ai-ml-development"><span className='droplist-icon me-1'><img src={droplist} /> </span>AI & ML</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/business-intelligence-and-analytics-services"><span className='droplist-icon me-1'><img src={droplist} /> </span>Business Intelligence and Analytics</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/digital-marketing"><span className='droplist-icon me-1'><img src={droplist} /> </span>Digital Marketing</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`nav-item ${windwoWidth < 992 ? 'dropdown' : 'newdropdown'}  menu-item`} onClick={dropdownHandler3}>
                                        <a className="nav-link" >Hire Developers<span className={`dropdown-icon ms-1 ${show.hire ? 'show' : ''}`}><FaChevronDown /></span></a>
                                        <ul className={`hire-dropdown-menu dropdown-menu ${show.hire ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-ios-app-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire iOS Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-android-app-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire Android Developers </Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-nodejs-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire Node js Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-reactjs-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire React js Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-react-native-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire React Native Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-flutter-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire Flutter Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-angular-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire Angular Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-dot-net-developers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire .Net Developers</Link></li>
                                            <li onClick={() => handleToggleOffcanvas()}><Link to="/hire-ui-ux-designers"><span className='droplist-icon me-1'><img src={droplist} /> </span>Hire UI/UX Designers</Link></li>
                                        </ul>
                                    </li>

                                    <li className="nav-item menu-item">
                                        <Link onClick={() => handleToggleOffcanvas()} className="nav-link" to="/portfolio">Portfolio</Link>
                                    </li>

                                    <li className="nav-item menu-item">
                                        <Link onClick={() => handleToggleOffcanvas()} className="nav-link" to='/blog' >Blog</Link>
                                    </li>

                                    <li className="nav-item menu-item career">
                                        <Link onClick={() => handleToggleOffcanvas()} className="nav-link careers-link" to="/careers" >Careers</Link>
                                    </li>

                                </ul>

                                {windwoWidth < 992 ? '' : <div className="nav-item">
                                    <Link onClick={() => handleToggleOffcanvas()} to="/contact-us" className="btn" >Get In Touch</Link>
                                </div>}

                            </div>



                        </div>

                    </div>

                </nav>

                <div className={`${showOverlay ? 'overlay' : ''}`}></div>

            </header>

        </div>

    )
}

export default Header
