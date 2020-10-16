import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const ClientReview = () => {

    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [review, setReview] = useState([]);

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        const newFeedback = {
            quote: review.description,
            name: review.name,
            designation: review.designation
        }
        fetch('https://mysterious-woodland-43100.herokuapp.com/addFeedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFeedback)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        history.push('/');
        e.preventDefault();
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 my-3  ">
                <nav class="navbar navbar-expand-lg container-fluid">
                    <h4>Order</h4>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav  ml-auto">
                            <li class="nav-item ">
                                <p>{loggedInUserValue.displayName}</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-md-12 bg-light py-5">
                    <div className="col-md-5  ">
                        <form class="container-fluid" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" name="name" onBlur={handleBlur} class="form-control" placeholder="Your name" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" name="designation" onBlur={handleBlur} class="form-control" placeholder="Company's name / Designation" required />
                            </div>
                            <div class="form-group">
                                <textarea style={{ "resize": "none" }} type="text" className="form-control" name="description" onBlur={handleBlur} placeholder="Description" rows="5" required/>
                            </div>
                            <button type="submit" class="btn btn-bg px-5">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;