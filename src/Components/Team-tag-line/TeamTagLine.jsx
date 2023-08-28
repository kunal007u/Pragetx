import React from 'react';
import './teamtagline.css';

const TeamTagLine = () => {
    return (
        <div className='team-tag-line'>
            <section className="work-tag-line">
                <div className="container">
                    <div className="row">
                        <div className="work-tag-box">
                            <h4>Experienced <br />Developer <br />Team</h4>
                        </div>
                        <div className="work-tag-dash">
                            <h2>=</h2>
                        </div>
                        <div className="work-tag-box">
                            <h4>Proper <br />Code <br />Architecture</h4>
                        </div>
                        <div className="work-tag-dash">
                            <h2>=</h2>
                        </div>
                        <div className="work-tag-box">
                            <h4>Less Bugs <br />Low Maintenance</h4>
                        </div>
                        <div className="work-tag-dash">
                            <h2>=</h2>
                        </div>
                        <div className="work-tag-box">
                            <h4>Less <br />Expense</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamTagLine;
