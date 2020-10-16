import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const PlaceOrder = () => {

    const { status, loggedInUser } = useContext(userContext);
    const [statusValue, setStatusValue] = status;
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null)

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('serviceName', info.title);
        formData.append('status', statusValue);
        formData.append('projectDetails', info.projectDetails);

        fetch('https://mysterious-woodland-43100.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        history.push("/orderList");
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
                <div className="col-md-12  bg-light  ">
                    <div className="col-md-5 py-5  ">
                        <form class="container-fluid " onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" name="name" onBlur={handleBlur} class="form-control" placeholder="Your name / Company's name" required />
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" onBlur={handleBlur} class="form-control" placeholder="Your email address" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="title" onBlur={handleBlur} class="form-control" placeholder="service title" required/>
                            </div>
                            <div class="form-group">
                                <textarea style={{ "resize": "none" }} type="text" className="form-control" name="projectDetails" onBlur={handleBlur} placeholder="Project Details" rows="5" required />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="price" />
                                </div>
                                <div class="form-group col-md-4">
                                    <input type="file" onChange={handleChange}required />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-bg px-5">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;