import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-woodland-43100.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <section className="container mt-5">
            <div className="text-center">
                <h2>Provide awesome <span className="txt-color">services</span></h2>
            </div>
            <div className=" row ">
                {
                    service.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;