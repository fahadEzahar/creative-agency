import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faList, faCommentAlt, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Sidebar = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    const { loggedInUser } = useContext(userContext);
    const [loggedInUserValue, setLoggedInUserValue] = loggedInUser;

    useEffect(() => {
        fetch('https://mysterious-woodland-43100.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUserValue.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="container-fluid m-3">
            <div>
                <img style={{ height: '60%', width: '70%' }} src={logo} alt="" />
            </div>
            <div className="my-5">
                {isAdmin ? <>
                    <Link className="text-dark" to="/servicesList"><p><FontAwesomeIcon icon={faList} /> Services list</p></Link>
                    <Link className="text-dark" to="/addService"><p><FontAwesomeIcon icon={faPlus} /> Add service</p></Link>
                    <Link className="text-dark" to="/addAdmin"><p><FontAwesomeIcon icon={faUserPlus} /> Make admin</p></Link>
                    </>
                    :
                    <>
                        <Link className="text-dark" to="/placeOrder"><p ><FontAwesomeIcon icon={faShoppingCart} /> Order</p></Link>
                        <Link className="text-dark" to="/orderList"><p><FontAwesomeIcon icon={faList} /> Service list</p></Link>
                        <Link className="text-dark" to="/review"><p><FontAwesomeIcon icon={faCommentAlt} /> Review</p></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Sidebar;