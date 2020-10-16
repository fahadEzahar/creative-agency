import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServicesList = () => {

    const { status, loggedInUser } = useContext(userContext);
    const [statusValue, setStatusValue] = status;
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [order, setOrder] = useState([]);
  
    useEffect(() => {
        fetch('https://mysterious-woodland-43100.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleChange = (e) => {
        const newStatus = { ...statusValue };
        newStatus[e.target.name] = e.target.value;
        setStatusValue(newStatus)
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <nav class="navbar navbar-expand-lg container-fluid">
                    <h4>Services List</h4>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav  ml-auto">
                            <li class="nav-item ">
                                <p>{loggedInUserValue.displayName}</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <table class="table container m-3">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        order.map(order =>
                            <tbody>
                                <tr>
                                    <td>{loggedInUserValue.displayName}</td>
                                    <td>{loggedInUserValue.email}</td>
                                    <td>{order.title}</td>
                                    <td>{order.projectDetails}</td>
                                    <td >
                                        <select onChange={handleChange} name="option" className="border-0">
                                            <option class="text-danger" >pending</option>
                                            <option class="text-warning" >on going</option>
                                            <option class="text-success" >done</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default ServicesList;