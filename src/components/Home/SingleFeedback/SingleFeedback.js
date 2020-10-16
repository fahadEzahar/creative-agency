import React from 'react';

const SingleFeedback = (props) => {
    const { quote, name, designation, img } = props.feedback;
    return (
        <div className="col-md-4">
            <div className="border  my-3">
                <div className="card-body ">
                    <img className="mx-3" src={img} alt="" width="60" />
                    <div>
                        <h6 className="text-dark">{name}</h6>
                        <p className="m-0">{designation}</p>
                    </div>
                </div>
                <div className="card-footer border-0 bg-white">
                    <p className="card-text text-center">{quote}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeedback;