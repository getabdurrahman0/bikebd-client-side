import React from 'react';
import { Container } from 'react-bootstrap';
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AddNewItem from '../AddNewItem/AddNewItem';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import'./Dashboard.css';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    
    return (
        <>
            <Navigation></Navigation>
            <Container className="d-flex">
             <div className="dlist col-md-2">
                 <ul>
                     <li><Link className="cStyle " to={`${url}`}>Dashboard</Link></li>
                     <li><Link className="cStyle " to={`${url}/myOrders`}>My Orders</Link></li>
                     <li> <Link className="cStyle" to={`${url}/pay`}>Pay</Link></li>
                     <li><Link className="cStyle " to={`${url}/review`}>Review</Link></li>
                 
             
                
               
                
                {admin && <>
                <li><Link className="cStyle" to={`${url}/allOrders`}>Manage Orders</Link></li>
                <li><Link className="cStyle " to={`${url}/makeAdmin`}>Make Admin</Link></li>
                <li><Link className="cStyle " to={`${url}/addNewItem`}>Add New Item</Link></li>
                    
                    
                    
                </>}
                </ul>
             </div>
                <div className="col-md-10 align-content-center">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addNewItem`}>
                        <AddNewItem></AddNewItem>
                    </AdminRoute>
                </Switch>
                </div>
            </Container >
            <Footer></Footer>
        </>
    );
};

export default Dashboard;