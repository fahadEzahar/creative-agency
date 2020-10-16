import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import OrderList from './components/OrderList/OrderList';
import ClientReview from './components/ClientReview/ClientReview';
import ServicesList from './components/ServicesList/ServicesList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import AddAdmin from './components/AddAdmin/AddAdmin';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [status, setStatus] = useState([]);

  return (
    <userContext.Provider value={{ loggedInUser: [loggedInUser, setLoggedInUser], status: [status, setStatus] }} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/servicesList">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute path="/placeOrder">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ClientReview />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path ="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
