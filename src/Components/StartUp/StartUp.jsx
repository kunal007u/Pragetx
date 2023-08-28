import React from 'react';
import './startup.css'
import { Link } from 'react-router-dom';

const StartUp = () => {
    return (
        <div className='start-up'>
            <section className="are-you-startup-main">
                <div className="container-fluid">
                    <div className="con-head text-center">
                        <h3>Accelerate Your Digital Business Transformation Journey with PragetX</h3>
                        <p>Being a Startup, we understand how important it is for a business to have the right technology and tools in place. Leverage us to be <br />an essential part of your digital transformation journey and pave this initial phase of business growth TOGETHER!</p>
                        <Link to="/contact-us" className="btn">Get In Touch <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StartUp;
