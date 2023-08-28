import React from 'react';
import './discussproject.css';
import { Link } from 'react-router-dom';

const DiscussProject = () => {
    return (
        <div className='discuss-project'>
            <section className="discuss-your-project-main">
                <div className="container">
                    <div className="discuss-your-project-con">
                        <div className="discuss-left">
                            <h3>We are your ideal partner to leverage <br />emerging tech in innovative ways</h3>
                        </div>
                        <div className="discuss-btn">
                            <Link to="/become-partner" className="btn">Become A Partner <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DiscussProject
