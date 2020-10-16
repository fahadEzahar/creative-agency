import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Client.css'

const Client = () => {
    return (
        <section className="container">
            <div className="row offset-md-2">
                <div className="col-md-2 col-sm-6 col-6"><img className="client" src={slack} alt="" /></div>
                <div className="col-md-2 col-sm-6 col-6"><img className="client" src={google} alt="" /></div>
                <div className="col-md-2 col-sm-6 col-6"><img className="client" src={uber} alt="" /></div>
                <div className="col-md-2 col-sm-6 col-6"><img className="client" src={netflix} alt="" /></div>
                <div className="col-md-2 col-sm-6 col-6"><img className="client" src={airbnb} alt="" /></div>
            </div>
        </section>
    );
};

export default Client;