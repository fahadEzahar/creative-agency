import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import ViewOrderList from '../ViewOrderList/ViewOrderList';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

    useEffect(() => {
        fetch('https://mysterious-woodland-43100.herokuapp.com/orders?email=' + loggedInUserValue.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
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
                <div className="col-md-12 bg-light">
                    <div className="container ">
                        <div className="row py-5">
                            {
                                orders.map(order => <ViewOrderList order={order} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;