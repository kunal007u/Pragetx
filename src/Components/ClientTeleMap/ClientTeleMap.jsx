/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import "./clientTeleMap.css"
import Images from '../../Images';
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

const ClientTeleMap = () => {

    const location = useLocation();

    const [current, setCurrent] = useState(null);
    const [animationTrigger, setAnimationTrigger] = useState(false);

    const targetRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !animationTrigger) {
                setAnimationTrigger(true);
            }
        }, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return (
        <>
            <section id="places-map" className='place-map' ref={targetRef}>
                <div className="con-head text-center">
                    <h2>Clientele</h2>
                    <h5>Our work speaks for itself. Take a look why our clients love team PragetX. <br />They are not just our customers, but they are part of one <br />large extended family</h5>
                </div>
                <div className="map animate-fade-in">
                    <img src="https://jeffbridgforth.com/codepen/places-map.png" alt="Map of Western Union Locations" width={903} height={452} />
                    <div className="map-pins">
                        <a className={`map-location-marker marker-san-francisco ${current === 1 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''} `} id="top-up1" onMouseEnter={() => setCurrent(1)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-denver ${current === 2 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up2" onMouseEnter={() => setCurrent(2)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-costa-rica ${current === 3 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up3" onMouseEnter={() => setCurrent(3)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-argentina ${current === 4 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up4" onMouseEnter={() => setCurrent(4)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-vilnius ${current === 5 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up5" onMouseEnter={() => setCurrent(5)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-peterborough ${current === 6 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up6" onMouseEnter={() => setCurrent(6)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-india  ${current === 7 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up7" onMouseEnter={() => setCurrent(7)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-dubai ${current === 8 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up8" onMouseEnter={() => setCurrent(8)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-singapore ${current === 9 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up9" onMouseEnter={() => setCurrent(9)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-manila ${current === 10 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up10" onMouseEnter={() => setCurrent(10)} >
                            <div className="line" />
                        </a>
                        <a className={`map-location-marker marker-sydney ${current === 11 ? 'current' : ''} ${animationTrigger ? 'animated bounceInDown' : ''}`} id="top-up11" onMouseEnter={() => setCurrent(11)} >
                            <div className="line" />
                        </a>
                        <div className={`${current === 1 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up1" >
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.DNoel} alt='' /></div>
                                <div className="c-con">
                                    <h5>D. Noel <img src={Images.canada} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Scrapbook</p>
                                    <p><b>Project</b> : Scrapbook App</p>
                                    <a href="scrapbook">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 2 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up2">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.SmallSchoolOwl} alt='' /> </div>
                                <div className="c-con">
                                    <h5>Archana Tiwari <img src={Images.UnitedStates} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : SchoolOwls</p>
                                    <p><b>Project</b> : SchoolOwls Website</p>
                                    <a href="schoolowls">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 3 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up3">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.NaweeApp } alt='' /></div>
                                <div className="c-con">
                                    <h5>Mrs. Nelle P <img src={Images.Nigeria} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : NaWee Courier</p>
                                    <p><b>Project</b> : NaWee Courier App</p>
                                    <a href="nawee-courier">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 4 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up4">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.TLogo14} alt='' /></div>
                                <div className="c-con">
                                    <h5>Arjun Bansal <img src={Images.Nepal} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Nepal Government</p>
                                    <p><b>Project</b> : Nepal Government App</p>
                                    <a href="nepal-government">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 5 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up5">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.TLogo4} alt='' /></div>
                                <div className="c-con">
                                    <h5>Rodge Boulton <img src={Images.UnitedKingdom} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : ELC</p>
                                    <p><b>Project</b> : ELC Tutoring Website</p>
                                    <a href="elc-tutorial">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 6 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up6">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.James} alt='' /></div>
                                <div className="c-con">
                                    <h5>James T. <img src={Images.UnitedKingdom} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Sofiqe</p>
                                    <p><b>Project</b> : E-commerce App</p>
                                    <a href="sofiqe">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 7 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up7">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.MichaelKohlert} alt='' /></div>
                                <div className="c-con">
                                    <h5>Michael Kohlert <img src={Images.Germany} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : KeepCoolRecs</p>
                                    <p><b>Project</b> : KeepCoolRecs App</p>
                                    <a href="keepcoolrecs">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 8 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up8">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.RohitKumar} alt='' /></div>
                                <div className="c-con">
                                    <h5>Rohit Kumar <img src={Images.Dubai} alt="Dubai, United Arab Emirates" /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : VR Cube Technologies</p>
                                    <p><b>Project</b> : Family Hives</p>
                                    <a href="family-hives">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 9 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up9">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.AlexNee} alt='' /></div>
                                <div className="c-con">
                                    <h5>Alex Nee <img src={Images.Singapore} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : NFT</p>
                                    <p><b>Project</b> : NFT Marketplace App</p>
                                    <a href="nft-marketplace">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 10 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up10">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.KrishnaK} alt='' /></div>
                                <div className="c-con">
                                    <h5>Krishna Kumar <img src={Images.IndiaSvg} alt='' /></h5>
                                    <p><b>Designation</b> : Partner</p>
                                    <p><b>Company</b> : Hungry Veels</p>
                                    <p><b>Project</b> : On-demand Food Delivery</p>
                                    <a href="hungry-veels">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 11 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up11">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.NeerajGala} alt='' /></div>
                                <div className="c-con">
                                    <h5>Neeraj Gala <img src={Images.IndiaSvg} alt='' /></h5>
                                    <p><b>Designation</b> : Co-Founder &amp; CEO</p>
                                    <p><b>Company</b> : UrNest</p>
                                    <p><b>Project</b> : UrNest - AirBnB of Cloud Kitchen</p>
                                    <a href="urnest">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="map-pins">
                        <Element name="element1" className={`map-location-marker marker-san-francisco ${current === 1 ? 'current' : ''} ${scrolledElements.includes('element1') ? 'animated bounceInDown' : ''} `} id="top-up1" onMouseEnter={() => setCurrent(1)} >
                            <div className="line" />
                        </Element>
                        <Element name="element2" className={`map-location-marker marker-denver ${current === 2 ? 'current' : ''} ${scrolledElements.includes('element2') ? 'animated bounceInDown' : ''}`} id="top-up2" onMouseEnter={() => setCurrent(2)} >
                            <div className="line" />
                        </Element>
                        <Element name="element3" className={`map-location-marker marker-costa-rica ${current === 3 ? 'current' : ''} ${scrolledElements.includes('element3') ? 'animated bounceInDown' : ''}`} id="top-up3" onMouseEnter={() => setCurrent(3)} >
                            <div className="line" />
                        </Element>
                        <Element name="element4" className={`map-location-marker marker-argentina ${current === 4 ? 'current' : ''} ${scrolledElements.includes('element4') ? 'animated bounceInDown' : ''}`} id="top-up4" onMouseEnter={() => setCurrent(4)} >
                            <div className="line" />
                        </Element>
                        <Element name="element5" className={`map-location-marker marker-vilnius ${current === 5 ? 'current' : ''} ${scrolledElements.includes('element5') ? 'animated bounceInDown' : ''}`} id="top-up5" onMouseEnter={() => setCurrent(5)} >
                            <div className="line" />
                        </Element>
                        <Element name="element6" className={`map-location-marker marker-peterborough ${current === 6 ? 'current' : ''} ${scrolledElements.includes('element6') ? 'animated bounceInDown' : ''}`} id="top-up6" onMouseEnter={() => setCurrent(6)} >
                            <div className="line" />
                        </Element>
                        <Element name="element7" className={`map-location-marker marker-india  ${current === 7 ? 'current' : ''} ${scrolledElements.includes('element7') ? 'animated bounceInDown' : ''}`} id="top-up7" onMouseEnter={() => setCurrent(7)} >
                            <div className="line" />
                        </Element>
                        <Element name="element8" className={`map-location-marker marker-dubai ${current === 8 ? 'current' : ''} ${scrolledElements.includes('element8') ? 'animated bounceInDown' : ''}`} id="top-up8" onMouseEnter={() => setCurrent(8)} >
                            <div className="line" />
                        </Element>
                        <Element name="element9" className={`map-location-marker marker-singapore ${current === 9 ? 'current' : ''} ${scrolledElements.includes('element9') ? 'animated bounceInDown' : ''}`} id="top-up9" onMouseEnter={() => setCurrent(9)} >
                            <div className="line" />
                        </Element>
                        <Element name="element10" className={`map-location-marker marker-manila ${current === 10 ? 'current' : ''} ${scrolledElements.includes('element10') ? 'animated bounceInDown' : ''}`} id="top-up10" onMouseEnter={() => setCurrent(10)} >
                            <div className="line" />
                        </Element>
                        <Element name="element11" className={`map-location-marker marker-sydney ${current === 11 ? 'current' : ''} ${scrolledElements.includes('element11') ? 'animated bounceInDown' : ''}`} id="top-up11" onMouseEnter={() => setCurrent(11)} >
                            <div className="line" />
                        </Element>
                        <div className={`${current === 1 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up1" >
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.dNoel} alt='' /></div>
                                <div className="c-con">
                                    <h5>D. Noel <img src={Images.canada} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Scrapbook</p>
                                    <p><b>Project</b> : Scrapbook App</p>
                                    <a href="scrapbook">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 2 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up2">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.smallSchoolOwl} alt='' /> </div>
                                <div className="c-con">
                                    <h5>Archana Tiwari <img src={Images.unitedStates} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : SchoolOwls</p>
                                    <p><b>Project</b> : SchoolOwls Website</p>
                                    <a href="schoolowls">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 3 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up3">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.naweeApp} alt='' /></div>
                                <div className="c-con">
                                    <h5>Mrs. Nelle P <img src={Images.nigeria} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : NaWee Courier</p>
                                    <p><b>Project</b> : NaWee Courier App</p>
                                    <a href="nawee-courier">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 4 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up4">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.tLogo14} alt='' /></div>
                                <div className="c-con">
                                    <h5>Arjun Bansal <img src={Images.nepal} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Nepal Government</p>
                                    <p><b>Project</b> : Nepal Government App</p>
                                    <a href="nepal-government">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 5 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up5">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.tLogo4} alt='' /></div>
                                <div className="c-con">
                                    <h5>Rodge Boulton <img src={Images.unitedKingdom} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : ELC</p>
                                    <p><b>Project</b> : ELC Tutoring Website</p>
                                    <a href="elc-tutorial">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 6 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up6">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.james} alt='' /></div>
                                <div className="c-con">
                                    <h5>James T. <img src={Images.unitedKingdom} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : Sofiqe</p>
                                    <p><b>Project</b> : E-commerce App</p>
                                    <a href="sofiqe">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 7 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up7">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.MichaelKohlert} alt='' /></div>
                                <div className="c-con">
                                    <h5>Michael Kohlert <img src={Images.germany} alt='' /> </h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : KeepCoolRecs</p>
                                    <p><b>Project</b> : KeepCoolRecs App</p>
                                    <a href="keepcoolrecs">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 8 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up8">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.RohitKumar} alt='' /></div>
                                <div className="c-con">
                                    <h5>Rohit Kumar <img src={Images.dubai} alt="Dubai, United Arab Emirates" /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : VR Cube Technologies</p>
                                    <p><b>Project</b> : Family Hives</p>
                                    <a href="family-hives">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 9 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up9">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.AlexNee} alt='' /></div>
                                <div className="c-con">
                                    <h5>Alex Nee <img src={Images.singapore} alt='' /></h5>
                                    <p><b>Designation</b> : Founder &amp; CEO</p>
                                    <p><b>Company</b> : NFT</p>
                                    <p><b>Project</b> : NFT Marketplace App</p>
                                    <a href="nft-marketplace">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 10 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up10">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.krishnaK} alt='' /></div>
                                <div className="c-con">
                                    <h5>Krishna Kumar <img src={Images.IndiaSvg} alt='' /></h5>
                                    <p><b>Designation</b> : Partner</p>
                                    <p><b>Company</b> : Hungry Veels</p>
                                    <p><b>Project</b> : On-demand Food Delivery</p>
                                    <a href="hungry-veels">Case Study</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${current === 11 ? 'bcurrent' : ''} top-up1-modal mydiv`} id="divtop-up11">
                            <div className="top-up1-modal-inner">
                                <div className="c-img"><img src={Images.NeerajGala} alt='' /></div>
                                <div className="c-con">
                                    <h5>Neeraj Gala <img src={Images.IndiaSvg} alt='' /></h5>
                                    <p><b>Designation</b> : Co-Founder &amp; CEO</p>
                                    <p><b>Company</b> : UrNest</p>
                                    <p><b>Project</b> : UrNest - AirBnB of Cloud Kitchen</p>
                                    <a href="urnest">Case Study</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default ClientTeleMap;