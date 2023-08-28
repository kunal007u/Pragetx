import React from 'react'
import './technologywork.css'
import Images from '../../Images'

const TechnologyWork = () => {
    return (
        <div className='technology-work'>
            <section className="technologies-we-work-main">
                <div className="technologies-we-work-con">
                    <div className="container">
                        <div className="con-head text-center">
                            <h2>Technologies we work with</h2>
                            <h5>Be competitive in this intense market competition by adopting modern business IT solutions</h5>
                        </div>
                        <div className="technologies-we-work-inner">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="tab8" data-bs-toggle="tab" data-bs-target="#tab-8" type="button" role="tab" aria-controls="tab-8" aria-selected="false">Web3.0</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab1" data-bs-toggle="tab" data-bs-target="#tab-1" type="button" role="tab" aria-controls="tab-1" aria-selected="true">Mobile App</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab" aria-controls="tab-2" aria-selected="false">Frontend</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab" aria-controls="tab-3" aria-selected="false">BI &amp; Analytics</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab4" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab" aria-controls="tab-4" aria-selected="false">Database</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab5" data-bs-toggle="tab" data-bs-target="#tab-5" type="button" role="tab" aria-controls="tab-5" aria-selected="false">Frameworks</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab6" data-bs-toggle="tab" data-bs-target="#tab-6" type="button" role="tab" aria-controls="tab-6" aria-selected="false">Cloud</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="tab7" data-bs-toggle="tab" data-bs-target="#tab-7" type="button" role="tab" aria-controls="tab-7" aria-selected="false">DevOps</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="tab-8" role="tabpanel" aria-labelledby="tab8">
                                    <div className="technologies-list new-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechAiMl} alt="AI & ML" />
                                                <p>AI &amp; ML</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechIot} alt="IoT" />
                                                <p>IoT</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechChatBot} alt="Chatbot" />
                                                <p>Chatbot</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechAndroid} alt="Android" />
                                                <p>Android</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechApple} alt="iOS" />
                                                <p>iOS</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechFlutter} alt="Flutter" />
                                                <p>Flutter</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechReact} alt="React Native" />
                                                <p>React Native</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechKotlin} alt="Kotlin" />
                                                <p>Kotlin</p>
                                            </a>
                                        </div>

                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechSwift} alt="Swift" />
                                                <p>Swift</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechAngular} alt="Angular js" />
                                                <p>Angular.js</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechReact} alt="React js" />
                                                <p>React.js</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechVueJs} alt="Vue.js" />
                                                <p>Vue.js</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechJavaScript} alt="JavaScript" />
                                                <p>JavaScript</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechCss} alt="CSS3" />
                                                <p>CSS3</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechHtml} alt="HTML5" />
                                                <p>HTML5</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechPowerBi} alt="PowerBI" />
                                                <p>PowerBI</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechTableAu} alt="Tableau" />
                                                <p>Tableau</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechSplunk} alt="Splunk" />
                                                <p>Splunk</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechAlteryx} alt="Alteryx" />
                                                <p>Alteryx</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechRstudio} alt="Rstudio" />
                                                <p>Rstudio</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechKibana} alt="Kibana" />
                                                <p>Kibana</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box7">
                                            <a >
                                                <img src={Images.TechGrafana} alt="Grafana" />
                                                <p>Grafana</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box8">
                                            <a >
                                                <img src={Images.TechPlotyDash} alt="Plotly Dash" />
                                                <p>Plotly Dash</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechMySql} alt="MySQL" />
                                                <p>MySQL</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechPostgresql} alt="PostgreSQL" />
                                                <p>PostgreSQL</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechMongodb} alt="MongoDb" />
                                                <p>MongoDb</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechSqlite} alt="SQLite" />
                                                <p>SQLite</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechDynamoDb} alt="DynamoDB" />
                                                <p>DynamoDB</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechElasticSearch} alt="Elasticsearch" />
                                                <p>Elasticsearch</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="tab5">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechDotNet} alt=".NET" />
                                                <p>.NET</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechLaravel} alt="Laravel" />
                                                <p>Laravel</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechCodeIgniter} alt="Codignitor" />
                                                <p>Codignitor</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechDjango} alt="Django" />
                                                <p>Django</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechExpressJs} alt="Express.js" />
                                                <p>Express.js</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechSpring} alt="Spring" />
                                                <p>Spring</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box7">
                                            <a >
                                                <img src={Images.TechRuby} alt="Ruby on rails" />
                                                <p>Ruby on Rails</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="tab6">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechAws} alt="AWS" />
                                                <p>AWS</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechGoogleCloud} alt="Google Cloud" />
                                                <p>Google Cloud</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechAzure} alt="Azure" />
                                                <p>Azure</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechAlibaba} alt="Alibaba Cloud" />
                                                <p>Alibaba Cloud</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechOracle} alt="Oracle Cloud" />
                                                <p>Oracle Cloud</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-7" role="tabpanel" aria-labelledby="tab7">
                                    <div className="technologies-list">
                                        <div className="technologies-box1">
                                            <a >
                                                <img src={Images.TechJenkins} alt="JenKins" />
                                                <p>JenKins</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box2">
                                            <a >
                                                <img src={Images.TechAzure} alt="Azure Devops" />
                                                <p>Azure</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box3">
                                            <a >
                                                <img src={Images.TechAws} alt="AWS" />
                                                <p>AWS</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box4">
                                            <a >
                                                <img src={Images.TechDocker} alt="Docker" />
                                                <p>Docker</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box5">
                                            <a >
                                                <img src={Images.TechKuberNets} alt="kubernetes" />
                                                <p>Kubernetes</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box6">
                                            <a >
                                                <img src={Images.TechSelenium} alt="Selenium" />
                                                <p>Selenium</p>
                                            </a>
                                        </div>
                                        <div className="technologies-box7">
                                            <a >
                                                <img src={Images.TechGrandle} alt="Gradle" />
                                                <p>Gradle</p>
                                            </a>
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

export default TechnologyWork
