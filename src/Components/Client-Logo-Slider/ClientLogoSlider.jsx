import React from 'react'
import Marquee from 'react-fast-marquee'
import Images from '../../Images'
import './clientlogoslider.css'

const ClientLogoSlider = () => {
    return (
        <section className="client-logo-slider howwework-client-logo">
            <div className="container-fluid">
                <div className="row">
                    <div className="client-logo-con">
                        <div className="client-logo-review" >
                            <Marquee>
                                <div className="r-logo1">
                                    <img src={Images.ZenCoast} alt="Zen Coast University" title="Zen Coast University" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.NaWeeCourier} alt="NaWee Courier" title="NaWee Courier" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.FoloApp} alt="Folo App" title="Folo App" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.ELCTutoring} alt="ELC Tutoring" title="ELC Tutoring" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.HungryVeels} alt="Hungry Veels" title="Hungry Veels" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.J1click} alt="j1click" title="j1click" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Familyhives} alt="Familyhives" title="Familyhives" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Theintegrated} alt="Theintegrated" title="Theintegrated" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.RedFoxWebs} alt="Red Fox Web Technologies" title="Red Fox Web Technologies" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Villagio} alt="Villagio" title="Villagio" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Auyuvani} alt="Auyuvani" title="Auyuvani" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.SchoolOwls} alt="SchoolOwls" title="SchoolOwls" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.UrNest} alt="UrNest" title="UrNest" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.NeoGrowth} alt="NeoGrowth" title="NeoGrowth" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Fluke} alt="Fluke" title="Fluke" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Ultrapawz} alt="Ultrapawz" title="Ultrapawz" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.NepalGovernmentApp} alt="Nepal Government App" title="Nepal Government App" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Zip42lap} alt="Zip42lap" title="Zip42lap" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.EmpyrealInfotech} alt="Empyrealinfotech" title="Empyrealinfotech" />
                                </div>
                                <div className="r-logo1">
                                    <img src={Images.Wooqer} alt="Wooqur" title="Wooqur" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientLogoSlider
