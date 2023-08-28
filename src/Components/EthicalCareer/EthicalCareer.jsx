import React from 'react'
import "./ethicalcareer.css"
import { Link } from 'react-router-dom'

const EthicalCareer = () => {
    return (
        <>
            <section className="why-best-choose-main-2">
                <div className="why-best-choose-main-2-bg">
                    <div className="container">
                        <h2>Build a Best Ethical Career with PragetX</h2>
                        <h5>We like to bring creativity to life for our team members. Belief in the culture of our company makes it
                            the best place to work.</h5>
                        <Link target='_blank' to="https://calendly.com/pragetx" className="btn">Join Us Today <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                    </div>
                </div>
            </section>

        </>
    )
}

export default EthicalCareer