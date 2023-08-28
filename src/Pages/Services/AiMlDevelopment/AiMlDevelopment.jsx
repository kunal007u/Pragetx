import React from 'react'
import "./aimldevelopment.css"
import Images from '../../../Images'
import Marquee from "react-fast-marquee";
import TechStackStep from '../../../Components/TechStackStep/TechStackStep';
import ClientTeleMap from '../../../Components/ClientTeleMap/ClientTeleMap';
import LetsTalk from '../../../Components/Lets-Talk/LetsTalk';
import { Helmet } from 'react-helmet';
import useIntersectionObserver from '../../../Helper/useIntersectionObserver'
import CountUp from 'react-countup';

const AiMlDevelopment = () => {
    const [targetRef, isVisible] = useIntersectionObserver();

    return (
        <>
            <Helmet>
                <title>AI & ML Development Company | AI/ML Solutions | PragetX</title>
            </Helmet>
            <div>
                <section className="header-top-slider ai-ml-top-slider">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-top-con">
                                    <h1>AI/ML Development <span>Solutions</span></h1>
                                    <h5>Providing cutting-edge custom artificial intelligence and machine learning project development solutions to businesses transitioning to their digital age. AI and ML solution engineers at PragetX are all versed with AI &amp; ML algorithms, frameworks, tools, and development approaches to deliver innovative industry-oriented, intelligent solutions.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us-main nft-dec-con">
                    <div className="container">
                        <div className="about-con">
                            <div className="row gy-5">
                                <div className="col-lg-6 col-md-12">
                                    <div className="con-head">
                                        <h2>Why Should Your Software Solutions Have Intelligent Functionalities?</h2>
                                        <p>Since the proliferation, Artificial Intelligence and Machine Learning technologies have been helping businesses revamp their working approaches to derive faster and sound solutions through automation. The adoption of this intelligent approach not only boosts your organizational productivity but also helps you create innovative products at lower expenses through image analysis, image recognition, data and speech comprehension, and potential lead-generating data predictions. </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="about-img">
                                        <img src={Images.AiMlAboutImg} alt="About AI/ML Development" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-5 counter-number" id="counter" ref={targetRef}>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 21 : 0} duration={3} decimals={1} />%</div>
                                        <div className="number-l">People implement AI in at least one function  - McKinsey Survey</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 57 : 0} duration={3} decimals={1} />%</div>
                                        <div className="number-l">Use of a full life-cycle approach for AI model deployment - McKinsey Survey</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 43 : 0} duration={3} decimals={1} />%</div>
                                        <div className="number-l">Global organizations plans to initiate AI/ML development</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 136.6 : 0} duration={3} decimals={1} />B</div>
                                        <div className="number-l">AI/ML 2022 Market size</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><span>$</span><CountUp end={isVisible ? 1811.8 : 0} duration={3} decimals={1} />B</div>
                                        <div className="number-l">Revenue Forecast</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="about-counter">
                                        <div className="number-c count percent" ><CountUp end={isVisible ? 38.1 : 0} duration={3} decimals={1} />%</div>
                                        <div className="number-l">Market Growth Rate - CAGR from 2022 to 2030</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ai-ml-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>How PragetX Can Help You With AI &amp; ML Solution Implementation?</h2>
                                    <h5>AI fuels existing business applications and software solutions with intelligence and process automations only. At PragetX, we have a pool of expert AI and ML developers who use unique approaches to implement and leverage your business with cutting-edge intelligent feature solutions.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="ai-services-main">
                            <div className="row gy-4">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.MLSolutions} alt="Machine Learning Solutions" />
                                        </div>
                                        <h5>Machine Learning Solutions</h5>
                                        <p>Build, implement, and deploy ML solutions equipped with different neural networks and pattern recognition-like smart features to make your business smarter.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.NeuralNetwork} alt="Neural Network Architecture" />
                                        </div>
                                        <h5>Neural Network Architecture</h5>
                                        <p>Helping businesses implement MVP models equipped with specific recognition features to meet their industrial requirements.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DataEngScience} alt="Date Engineering & Science" />
                                        </div>
                                        <h5>Date Engineering &amp; Science</h5>
                                        <p>Data is a key to the success of businesses, and our data engineers and scientists can help you find value and actionable data using different methodologies.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.DataVisual} alt="Data Visualizations" />
                                        </div>
                                        <h5>Data Visualizations</h5>
                                        <p>Helping businesses implement intuitive quick insights-providing dashboards with filter options to create impressive progress reports to take into action.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.NLProcessing} alt="Natural Language Processing" />
                                        </div>
                                        <h5>Natural Language Processing</h5>
                                        <p>Helping businesses build NLP solutions that can quickly analyze, extract, and report information from human language inputs, such as speech, text, figures, names, etc.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.AIOpsSol} alt="AIOps Solutions" />
                                        </div>
                                        <h5>AIOps Solutions</h5>
                                        <p>Power your data analytics solutions with Artificial Intelligence (AI), Machine Learning (ML), and Machine Reasoning Engine (MR) to improve your business decision-making processes.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.SpeechRecog} alt="Speech Recognition" />
                                        </div>
                                        <h5>Speech Recognition</h5>
                                        <p>Build conceptual models equipped to understand different languages, accents, and acoustics using different probabilistic ML algorithms, Markov models, or deep neural networks.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.VisualRecog} alt="Visual Recognitions" />
                                        </div>
                                        <h5>Visual Recognitions</h5>
                                        <p>Empower your software or systems to analyze and recognize various visuals, such as facial expressions, behaviour analysis, image recognition, object detection, optical character recognition (OCR), etc.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.AIBots} alt="Custom AI Chatbots" />
                                        </div>
                                        <h5>Custom AI Chatbots</h5>
                                        <p>Implement AI-powered chatbots for your online service platforms to provide your visitors/customers/users personalized inquiry solutions at all times.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.ModuleTrans} alt="Module Translations" />
                                        </div>
                                        <h5>Module Translations</h5>
                                        <p>Helping businesses implement different module translation/conversion features, such as voice-to-text, text-to-speech, content-to-video, etc.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.AutomationSol} alt="Automation Solutions" />
                                        </div>
                                        <h5>Automation Solutions</h5>
                                        <p>Providing various software automation solutions hosted on different platforms, such as on-premises servers, cloud, etc., to accelerate business processes.</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="services-box">
                                        <div className="services-ic">
                                            <img src={Images.Integrations} alt="Integrations" />
                                        </div>
                                        <h5>Integrations</h5>
                                        <p>Providing seamless integration of AI-ML functionalities to business-specific applications, like CRM system, Policy Admin System, ERP solutions, etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ai-ml-we-work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="con-head text-center">
                                    <h2>Our Custom AI Software Development Approach</h2>
                                </div>
                            </div>
                        </div>
                        <div className="ai-we-work-main">
                            <div className="row">
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiRequirements} alt="Understanding Requirements" />
                                        </div>
                                        <h5>Understanding Requirements</h5>
                                        <p>Our team of sales executives and business analysts will analyze the project requirements to devise the best solution.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiUiUx} alt="UI/UX" />
                                        </div>
                                        <h5>UI/UX</h5>
                                        <p>We design an interactive UI/UX for the software development project that meets the user expectation levels.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiDevelopment} alt="Development" />
                                        </div>
                                        <h5>Development</h5>
                                        <p>Developers at PragetX maintain the cognitive engagement with clients to ensure that their expected results are met.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiQaTest} alt="QA & Testing" />
                                        </div>
                                        <h5>QA &amp; Testing</h5>
                                        <p>We apply all necessary QA practices and testing algorithms to find and resolve potential software bugs and exceptions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiDeployment} alt="Deployment" />
                                        </div>
                                        <h5>Deployment</h5>
                                        <p>Once the final product is ready, we take clients’ feedback to give the final touches to the solution and then deploy it on their server.</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 col-sm-12">
                                    <div className="we-work-box">
                                        <div className="we-work-ic">
                                            <img src={Images.AiW6} alt="Back-Support" />
                                        </div>
                                        <h5>Back-Support</h5>
                                        <p>Our work doesn’t end with project delivery, we provide dedicated back support to software till the agreed duration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="we-are-tag-line">
                    <div className="container">
                        <div className="row">
                            <div className="we-are-tag-line-con">
                                <h2>Discover All  Possibilities with our AI Solution and Take <br />Your Business Success To Next Level</h2>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="ai-techno-stack pt-1">
                    <div className="container">
                        <div className="con-head text-center">
                            <h2>How AI &amp; ML help various industries?</h2>
                            <h5>AI and ML can be used to power any company’s decision-making process, <br />helping them to make better business predictions.</h5>
                        </div>


                        <div className="ai-techno-stack-con-main">
                            <TechStackStep
                                title="DI Frameworks"
                                logos={[Images.Caffe2, Images.Chainer, Images.MxNet, Images.Nvidia, Images.Pytorch, Images.Theano, Images.Tensorflow]}
                            />

                            <TechStackStep
                                speed={70}
                                title="Modules/Toolkits"
                                logos={[Images.Kurento, Images.CognitiveToolkit, Images.CoreML, Images.Kurento, Images.CognitiveToolkit, Images.CoreML]}
                            />

                            <TechStackStep
                                speed={100}
                                title="Libraries"
                                logos={[Images.Sonnet, Images.TensorflowTf, Images.TensorflowQuantum, Images.TensorflowLite, Images.TensorflowHub, Images.TensorflowExtended, Images.Tensorflow20]}
                            />

                            <TechStackStep
                                speed={80}
                                title="Concepts"
                                logos={[Images.FewShotLearning, Images.Clusters, Images.MetricLearning, Images.SupervisedUnsupervised, Images.MachineLearning]}
                            />
                            <TechStackStep
                                speed={60}

                                title="Neural Networks"
                                logos={[Images.CNN, Images.RNN, Images.RepresentationLearning, Images.Mlab, Images.ManifoldLearning]}
                            />
                            <TechStackStep
                                speed={100}
                                title="Platforms"
                                logos={[Images.AmazonML, Images.AmazonRekog, Images.Azure, Images.AzureBot, Images.AzureCognitive, Images.AmazonLex, Images.AmazonPolly, Images.AzureML, Images.GoogleCloudML, Images.CloudVision, Images.CloudNLP, Images.DialogFlow, Images.CloudSpeech]}
                            />

                        </div>
                    </div>

                </section>

                <ClientTeleMap scrollTarget={5400} />
                <LetsTalk />

            </div>

        </>
    )
}

export default AiMlDevelopment