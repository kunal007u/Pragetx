import { Suspense } from "react";
import Marquee from "react-fast-marquee";

const TechStackStep = ({ title, logos, speed }) => {

    return (
        <div className="ai-techno-stack-step">
            <div className="step-head">
                {title}
            </div>

            <div className="step-logo">
                <Marquee
                    speed={speed}
                >
                    {logos.map((logo, index) => (
                        <div className="ai-stack-logo" key={index}>
                            <Suspense fallback={<div>Loading...</div>}>
                                <img src={logo} alt={`Logo ${index}`} />
                            </Suspense>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default TechStackStep