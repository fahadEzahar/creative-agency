import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {

    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;
    const [admin, setAdmin] = useState([]);

    const handleBlur = (e) => {
        const updateAdmin = { ...admin };
        updateAdmin[e.target.name] = e.target.value;
        setAdmin(updateAdmin);
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        const newAdmin = {
            email: admin.email
        }
        fetch('https://mysterious-woodland-43100.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
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
            <div className="col-md-10">
                <nav class="navbar navbar-expand-lg container-fluid">
                    <h4>Add Admin</h4>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav  ml-auto">
                            <li class="nav-item ">
                                <p>{loggedInUserValue.displayName}</p>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="col-md-12 bg-light py-5">
                    <form class="container-fluid">
                        <div class="form-row align-items-center">
                            <div class="col-md-4">
                                <label for="Name">Email</label>
                                <input type="text" name="email" onBlur={handleBlur} class="form-control mb-2" placeholder="jon @ gmail.com" required/>
                            </div>
                            <div class="col-auto mt-4">
                                <button onClick={handleSubmit} type="submit" class="btn btn-bg px-5">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;