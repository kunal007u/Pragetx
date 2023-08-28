import React from 'react'
import './industries.css'
import Images from '../../Images'

const Industries = () => {
    return (
        <div className='industries'>

            <section className="industries-we-serve-main">
                <div className="container">
                    <div className="con-head text-center">
                        <h2>Industries We Serve</h2>
                        <h5>The aim of PragetX to digitally transform businesses is not limited to any particular industry</h5>
                    </div>
                    <div className="industries-we-serve">
                        <div className="row gy-5">
                            <div className="col-lg-4 col-md-12">
                                <ul className="nav nav-tabs" id="myTab1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="serve-tab1" data-bs-toggle="tab" data-bs-target="#serve1" type="button" role="tab" aria-controls="serve1" aria-selected="true">Government &amp; Public
                                            Sector</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab2" data-bs-toggle="tab" data-bs-target="#serve2" type="button" role="tab" aria-controls="serve2" aria-selected="false">Banking &amp; Finance</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab3" data-bs-toggle="tab" data-bs-target="#serve3" type="button" role="tab" aria-controls="serve3" aria-selected="false">Manufacturing</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab4" data-bs-toggle="tab" data-bs-target="#serve4" type="button" role="tab" aria-controls="serve4" aria-selected="false">Education</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab5" data-bs-toggle="tab" data-bs-target="#serve5" type="button" role="tab" aria-controls="serve5" aria-selected="false">Media &amp;
                                            Entertainment</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab6" data-bs-toggle="tab" data-bs-target="#serve6" type="button" role="tab" aria-controls="serve6" aria-selected="false">Supply Chain</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab7" data-bs-toggle="tab" data-bs-target="#serve7" type="button" role="tab" aria-controls="serve7" aria-selected="false">Health Care</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab8" data-bs-toggle="tab" data-bs-target="#serve8" type="button" role="tab" aria-controls="serve8" aria-selected="false">Startup</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab9" data-bs-toggle="tab" data-bs-target="#serve9" type="button" role="tab" aria-controls="serve9" aria-selected="false">Real Estate &amp;
                                            Construction</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab10" data-bs-toggle="tab" data-bs-target="#serve10" type="button" role="tab" aria-controls="serve10" aria-selected="false">FMCG</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab11" data-bs-toggle="tab" data-bs-target="#serve11" type="button" role="tab" aria-controls="serve11" aria-selected="false">Oil &amp; Gas</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab12" data-bs-toggle="tab" data-bs-target="#serve12" type="button" role="tab" aria-controls="serve12" aria-selected="false">Insurance</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab13" data-bs-toggle="tab" data-bs-target="#serve13" type="button" role="tab" aria-controls="serve13" aria-selected="false">Hospitality</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="serve-tab14" data-bs-toggle="tab" data-bs-target="#serve14" type="button" role="tab" aria-controls="serve14" aria-selected="false">Telecommunication</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="tab-content" id="myTabContent1">
                                    <div className="tab-pane fade show active" id="serve1" role="tabpanel" aria-labelledby="serve-tab1">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IGoverment} alt="Government" title="Government" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Government</h3>
                                                <p>Building IT solutions by understanding the data-confidentiality needs that any government
                                                    &amp; public sector would need to function efficiently with hassle-free digital service
                                                    experiences</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve2" role="tabpanel" aria-labelledby="serve-tab2">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IBankingFinance} alt="Banking & Finance" title="Banking & Finance" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Banking &amp; Finance</h3>
                                                <p>Providing banking and financial sectors with powerful computational IT solutions in
                                                    compliance with the government body, providing users with faster, reliable, and precise
                                                    operation experiences</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve3" role="tabpanel" aria-labelledby="serve-tab3">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IManufacturing} alt="Manufacturing" title="Manufacturing" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Manufacturing</h3>
                                                <p>Implementing the streamlined and well-programmed industry automation solutions that can
                                                    help them roll out the targeted production mark and lead the sector</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve4" role="tabpanel" aria-labelledby="serve-tab4">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IEducation} alt="Education" title="Education" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Education</h3>
                                                <p>Helping educational organizations store and manage the students' essential data
                                                    effectively by providing software solutions with cybersecurity modules</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve5" role="tabpanel" aria-labelledby="serve-tab5">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IMedia} alt="Media & Entertainment" title="Media & Entertainment" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Media &amp; Entertainment</h3>
                                                <p>Ensuring the non-stop streaming with live data updates with online streaming solutions
                                                    made in MEAN/MERN stack that are all device friendly and easy to maintain</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve6" role="tabpanel" aria-labelledby="serve-tab6">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.ISupplyChain} alt="Supply Chain" title="Supply Chain" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Supply Chain</h3>
                                                <p>Providing a range of on-demand, cloud IT solutions with real-time tracking enablement that
                                                    a supply chain sector needs to function effortlessly</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve7" role="tabpanel" aria-labelledby="serve-tab7">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IHealthCare} alt="Health Care" title="Health Care" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Health Care</h3>
                                                <p>Building on-demand healthcare IT solutions in compliance with HIPAA that can help
                                                    healthcare entities shift and manage their work digitally</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve8" role="tabpanel" aria-labelledby="serve-tab8">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IStartUp} alt="Startup" title="Startup" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Startup</h3>
                                                <p>No matter to which industry your startup belongs to, we at PragetX have industry-friendly
                                                    IT solutions that are in compliance with the respective industry regulations</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve9" role="tabpanel" aria-labelledby="serve-tab9">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IRealEstate} alt="Real Estate & Construction" title="Real Estate & Construction" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Real Estate &amp; Construction</h3>
                                                <p>Providing custom software development solutions for the real estate industry, which
                                                    includes website development, mobile app development, NFT marketplace solutions, etc</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve10" role="tabpanel" aria-labelledby="serve-tab10">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IFmcg} alt="FMCG" title="FMCG" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>FMCG</h3>
                                                <p>Providing software development solutions for Fast-Moving Consumer Goods (FMCG) sector to
                                                    meet their real-time update-based web and mobile app requirements</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve11" role="tabpanel" aria-labelledby="serve-tab11">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IOilGas} alt="Oil & Gas" title="Oil & Gas" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Oil &amp; Gas</h3>
                                                <p>Software implementation solutions based on IoT and blockchain technology solutions to keep
                                                    track of the condition of their plants’ processes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve12" role="tabpanel" aria-labelledby="serve-tab12">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IInsurance} alt="Insurance" title="Insurance" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Insurance</h3>
                                                <p>Providing powerful computational IT solutions compliant with the government regulations
                                                    for the insurance sector to leverage users with faster, reliable, and precise operation
                                                    experiences</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve13" role="tabpanel" aria-labelledby="serve-tab13">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.IHospitality} alt="Hospitality" title="Hospitality" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Hospitality</h3>
                                                <p>Helping hospitality sectors businesses, like Hotels, Restaurants, Cafés , Cloud Kitchens,
                                                    Remote Kitchens, etc, to shift their businesses to the online platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="serve14" role="tabpanel" aria-labelledby="serve-tab14">
                                        <div className="industries-serve-box">
                                            <div className="industries-img">
                                                <img src={Images.ITelecommunication} alt="Telecommunication" title="Telecommunication" />
                                            </div>
                                            <div className="serve-box-con">
                                                <h3>Telecommunication</h3>
                                                <p>Empower telecommunication entities to manage all their activities and ensure better
                                                    customer services experience through web and mobile app development</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Industries;
