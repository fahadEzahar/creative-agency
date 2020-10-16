import React from 'react';
import './HeaderMain.css'
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <section className="container">
            <div>
                <div className="row align-items-center ">
                    <div className="col-md-5">
                        <h1 className="text-color"><strong>Let's Grow Your <br /> Brand To The <br /> Next Level</strong></h1>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officia eveniet porro eaque illo aliquam labore.<br /> Officia eveniet porro eaque illo aliquam labore.</p>
                        <button className="btn btn-bg px-5">Hire Us</button>
                    </div>
                    <div className="col-md-7">
                        <img className="frame" src={frame} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;