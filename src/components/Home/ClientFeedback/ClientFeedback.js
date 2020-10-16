import React, { useEffect, useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const ClientFeedback = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-woodland-43100.herokuapp.com/clientFeedbacks')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])

    return (
        <section className=" my-5 py-5">
            <div className="container ">
                <div className="text-center pb-5">
                    <h2 className="text-color" > Clients <span className="txt-color">Feedback </span></h2>
                </div>
                <div className="row">
                    {
                        feedback.map(feedback => <SingleFeedback feedback={feedback} key={feedback.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;