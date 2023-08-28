import React from 'react'
import { Helmet } from 'react-helmet'
import Images from '../../../Images'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
import "./nftmarketplace.css"
import { Link } from 'react-router-dom'
const NftMarketplace = () => {
    return (
        <>
            <Helmet>
                <title>NFT Marketplace Development Solution | Case Study | PragetX</title>
            </Helmet>

            <section className="header-top-slider nft-marketplace-top-slider">
                <div className="container">
                    <div className="row">
                        <div className="header-top-con">
                            <h1>NFT Marketplace</h1>
                            <h2><span>NFT Marketplace Solution</span> - An iOS Mobile App Development Project</h2>
                            <h5>A case study on developing the NFT marketplace native iOS mobile application, which allows users to do all activities they can do using OpenSea with easy to use UI. This NFT Marketplace mobile app allows users to mint their NFTs into the marketplace in just a single click using Ethereum Wallet. </h5>
                            <Link to="/contact-us" className="btn">Get Your Estimation <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
                        </div>
                        <div className="header-img">
                            <img src={Images.TNftMarketplaceApp} alt="TNft Marketplace App" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-case-study">
                <div className="container">
                    <div className="row">
                        <div className="about-case-con">
                            <h4>Quick Info</h4>
                            <div className="quick-panel">
                                <div className="quick-box">
                                    <h5>Industry</h5>
                                    <p>Blockchain</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Project Type</h5>
                                    <p>Individual Project</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Service Type</h5>
                                    <p>Native iOS Mobile App Development</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Team Size</h5>
                                    <p>3 members</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Development Time</h5>
                                    <p>Ongoing</p>
                                </div>
                                <div className="quick-box">
                                    <h5>Technology Stack</h5>
                                    <p>Swift UI, Core data framework, Web3 IPFS</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-case-img">
                            <img src={Images.CnftMarketplaceLogo} alt="NFT Marketplace Solution" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-client about-purpose case-about">
                <div className="container">
                    <div className="row">
                        <div className="about-client-con">
                            <div className="case-about-box">
                                <h2>NFT Marketplace Solution Requirements</h2>
                                <p>The word NFT stands for Non-Fungible Tokens, which are near to impossible to alter or penetrate by any hacking tactic and assures 100% ownership of the NFT collectibles. As there are many NFT marketplaces are available in the form of website, android, and iOS application, our client came to us with a requirement to build NFT marketplace, which quite similar to other NFT platforms, but with many special features:</p>
                                <div className="case-about-img">
                                    <img src={Images.NftmImg1} alt="Nepal Government Project" />
                                </div>
                            </div>
                            <div className="case-about-box">
                                <div className="case-about-img">
                                    <img src={Images.NftmImg2} alt="Nepal Government Project" />
                                </div>
                                <ul>
                                    <li>NFT minting in just a single click</li>
                                    <li>Explore option to find particular types of NFTs</li>
                                    <li>A search bar for very specific NFT searching</li>
                                    <li>Statistics of popular NFTs with their market prices comparison</li>
                                    <li>And many other exciting features for NFT enthusiasts</li>
                                </ul>
                            </div>
                            <div className="case-about-box">
                                <p>He wanted us to build this iOS NFT marketplace application using technologies like Swift UI, Web 3 IPFS - web era, Core data framework for storage option and Pinata API, so the global crypto trading is accessible to the global and get secure browsing and transaction through cryptocurrencies and blockchain. Above all, for our client, creating a secure, scalable, and fast responsive NFT application is the utmost requirement.</p>
                                <div className="case-about-img">
                                    <img src={Images.NftmImg3} alt="Nepal Government Project" />
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
                            <h2>Our Development Approach</h2>
                            <p>We gathered and understood all necessary requirements from the client and then aligned our proficient iOS developer having 7+ years of wide experience in the field and have delivered many iOS app development projects successfully to the clients with satisfactory results.</p>
                            <p>For our developer, building is not that tough, even the NFT marketplace, but writing iOS application code for file transferring using Pinata API was quite challenging for him as it has documentation only in JavaScript and not supporting Swift code. Also, due to not having proper resources for implementing such application using Pinata API, our developer had to choose a long way and extensive coding and logical skills to use different JavaScript and Python language logics to code the NFT Marketplace iOS mobile application.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="case-app-screen">
                <img src={Images.NftMarketplaceScreen} alt="NFT Marketplace Solution" />
            </section>

            <section className="case-key-features pb-0">
                <div className="container">
                    <div className="row">
                        <div className="key-head">
                            <h2>NFT Marketplace Features &amp; Functionalities</h2>
                        </div>
                        <div className="case-key-box">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="case-key-main-box">
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NProfileCreationEditsIc} alt="Search Filters" />
                                                </div>
                                                <h4>Profile Creation</h4>
                                                <p>Any NFT enthusiasts can use this platform and create/her profile using an email ID or phone number and fill out their personal information and some proof to verify their identity for crypto trading.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NEasyNftMintingIc} alt="Add Instructions" />
                                                </div>
                                                <h4>Easy NFT Minting</h4>
                                                <p>With this NFT Marketplace application, minting users’ favorite NFT of data is made easy. They can mint multiple NFTs by selecting multiple images, files, and folders, in just a single click.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NSearchBarFiltersIc} alt="Apply Promo Codes" />
                                                </div>
                                                <h4>Search Bar &amp; Filters</h4>
                                                <p>This NFT marketplace is not only limited to NFT creators, they also need buyers to sell their NFTs. And for that, users get a feature to search &amp; filter out their favourite NFT collectable for buying purposes.</p>
                                            </div>
                                        </div>
                                        <div className="key-box">
                                            <div className="key-box-inner">
                                                <div className="key-ic">
                                                    <img src={Images.NStatsBiddingIc} alt="Choose Payment Options" />
                                                </div>
                                                <h4>Stats &amp; Bidding</h4>
                                                <p>These features help buyers to know the popular NFT creators and their sales chart to decide from whom they should buy NFT collectibles in a particular category and get the best deal to acquire their favourites.</p>
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
                        <ul>
                            <li>An exceptionally designed NFT marketplace iOS mobile application that anyone can use with ease.</li>
                            <li>Faster, responsive, secure, scalable, and reliable NFT marketplace </li>
                            <li>Effective trading experience with two-way authentication</li>
                            <li>A quick and easy way to enter the crypto trading world.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <LetsTalk />
        </>

    )
}

export default NftMarketplace