import React, { useContext } from 'react';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="container">
                <div className="col-md-10 py-5 border-round text-center ">
                    <div class="alert alert-success" role="alert">
                        <h2> Hi {loggedInUserValue.displayName} , welcome to your dashboard!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;