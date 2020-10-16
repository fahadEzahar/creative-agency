import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [serviceData, setServiceData] = useState([]);
    const [file, setFile] = useState(null)

    const handleBlur = (e) => {
        const newServiceData = { ...serviceData };
        newServiceData[e.target.name] = e.target.value;
        setServiceData(newServiceData);
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', serviceData.title);
        formData.append('description', serviceData.description);
        
        const newServiceData = {...serviceData , formData};
        setServiceData(newServiceData);
        
        fetch('https://mysterious-woodland-43100.herokuapp.com/addService', {
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
        history.push("/");
        e.preventDefault();
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 my-3">
                <nav class="navbar navbar-expand-lg container-fluid">
                    <h4>Add Services</h4>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav  ml-auto">
                            <li class="nav-item ">
                                <p>{loggedInUserValue.displayName}</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-md-12 bg-light py-5">
                    <form onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <label for="service title">Service Title</label>
                                <input onBlur={handleBlur} type="text" name="title" class="form-control" placeholder="Service Title" required/>
                            </div>
                            <div class="form-group col-md-5">
                                <label for="Icon">Icon</label>
                                <input type="file" onChange={handleChange} class="form-control border-0" required />
                            </div>
                            <div class="form-group col-md-5">
                                <label for="description">Description</label>
                                <textarea style={{ "resize": "none" }} onBlur={handleBlur} type="text" name="description" class="form-control" placeholder="Description" rows="5" required></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-bg px-5">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;