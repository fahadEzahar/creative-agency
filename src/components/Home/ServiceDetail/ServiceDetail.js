import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = (props) => {
    const { title, description, image } = props.service;

    return (
        <div className="col-md-4 text-center">
            <div className="my-5">
                <Link style={{ 'textDecoration': 'none' }} to={"/placeOrder"}>
                    <div className="card-body service ">
                        <img className="mx-3" width="60" src={`data:image/png;base64,${image.img}`} alt="" />
                        <div>
                            <h5 className="mt-3 mb-3 text-dark">{title}</h5>
                            <p className="text-secondary">{description}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;