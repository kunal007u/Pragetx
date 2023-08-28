import React from 'react'
import "./fourseotools.css"
import { Helmet } from 'react-helmet'
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap'
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk'
const FourSeoTools = () => {
    return (
        <>
            <Helmet>
                <title>4 SEO tools that make your life easier</title>
            </Helmet>
            <section className="header-top-slider blockchain-top-slider blog-top-main5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-con">
                                <h1><span>4 SEO tools</span> that make your life easier</h1>
                                <h5>These two above mentioned tools are one of the best and most important tools of SEO for any company or personal blogging website.</h5>
                            </div>
                        </div>
                        {/* <div class="col-lg-5"></div> */}
                    </div>
                </div>
            </section>

            <section className="blog-detail-con">
                <div className="container">
                    <div className="blog-detail">
                        <h3>1) Google Analytics &amp; Google Search Console:</h3>
                        <p>These two above mentioned tools are one of the best and most important tools of SEO for any company or personal blogging website. This helps to track all your web analytics of your website. There’s no other data analytics tool that provides analysis in such depth. In a world where Google controls almost everything, we need to integrate Google Analytics to get more site visitors, generate more traffic, demographics etc. You can even track how many visitors stayed on a particular page for how much time. That’s just what we need in order to run different paid marketing campaigns to increase more sales by getting more conversions.</p>
                        <p>If Google Analytics is the ‘AIR’ then Google Search Console is the ‘WATER’. It’s hard to live without both. Google Search Console fully focuses on SEO (Search Engine Optimization). SEO is not just the king of the country, it is the king of the world. If you are into SEO, you need to check the search console daily. By looking at the dashboard, you can get more than sufficient information and can figure out what should be your next step for improving your website.</p>
                        <h3>2) MozBar:</h3>
                        <p>SEO is all about knowing the right stuff and then applying the knowledge rightfully. MozBar helps you to find the right stuff at a glance. The MozBar sits right up on the toolbar and when you visit the website and click you get all the information. MozBar can be adjusted according to your need; it's not necessary that it should be on the top. The toolbar has three main categories of data — Page Elements, Page Attributes, and Link Data.</p>
                        <ul>
                            <li>Page Elements: It displays the “nuts and bolts” of SEO. In page elements you can see various tags, titles, H1, etc.</li>
                            <li>Page Attributes: It shows some below-the-surface onsite optimization features, such as robots, rel=”canonical” and load time. Additionally, you can find out on-page link data.</li>
                            <li>Link Data: It has all the necessary information related to site links and also everything about the URL.</li>
                        </ul>
                        <h3>3) SEOWorkers Analytics Tool:</h3>
                        <p>In SEO, one thing is very important, which is the analytics report. Not only for our website but also for our competitor's website for planning different marketing strategies to stay alive in the market. So, this tool: “SEOWorkers Analytics Tool”, gets you all the information regarding yours and your competitors’ website in just a click. It's pretty much the same as google analytics, but it tells you about things which went under the hood like HTTP that you might not check at all.</p>
                        <p>It also highlights the stuff that needs your attention and also needs to be rectified. They teach you about SEO in addition to showing you the SEO data that matters. Within each analyzed category, the report provides a detailed discussion. The keyword analysis they give is very detailed and comprehensive.</p>
                        <h3>4) Pagespeed Insights:</h3>
                        <p>Imagine everything is going/working perfectly on your website, like keywords, backlinking, tags, titles etc. but what if the site takes more time to load? You think people will stay for longer on your site? All your hard work can go in vain just like that.</p>
                        <p>So, what’s the solution? Well, if you don’t want this to happen, then you need to check the speed of your website with “PageSpeed Insights”. It tells you the loading time, whether it's slow or fast. If it's slow, then it will help you to find the problems and give a solution. This tool is free, easy to use and provides must-have information for your website in order to speed up load time.</p>
                    </div>
                </div>
            </section>
            <ClientTeleMap />
            <LetsTalk />

        </>
    )
}

export default FourSeoTools