import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Addnewproduct from '../../componment/Addnewproduct';
import Adminproductshow from '../../componment/Adminproductshow';

export default function adminDashboard() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await axios.get('http://localhost:3000/product/getall', {
                    headers: {
                        'Authorization': token
                    }
                });
                setOrders(response.data);
                console.log(orders)
            } catch (error: any) {
                if (error.response.data == "Invalid Token") {
                    navigate('/Adminlog');
                }
                console.error('Error fetching orders:', error);

            }
        };

        fetchOrders();
    }, []);
    return (
        <>
            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1> Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/">Admin</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="page-content-wrapper" className="p-9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="myaccount-page-wrapper">

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="myaccount-tab-menu nav" role="tablist">

                                            <a href="#orders" data-toggle="tab" className="active show"><i className="fa fa-cart-arrow-down"></i> Orders</a>
                                            <a href="#product" data-toggle="tab" className=""><i className="fa fa-cart-arrow-down"></i> Product</a>

                                            <a href="#account-info" data-toggle="tab" className=""><i className="fa fa-user"></i> New product</a>

                                            <a href="" onClick={() => {
                                                localStorage.removeItem('jwtToken');
                                                navigate('/Adminlog');

                                            }}
                                            ><i className="fa fa-sign-out"></i> Logout</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 mt-5 mt-lg-0">
                                        <div className="tab-content" id="myaccountContent">



                                            <div className="tab-pane fade  active show" id="orders" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Orders</h3>

                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>Order</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Aug 22, 2018</td>
                                                                    <td>Pending</td>
                                                                    <td>$3000</td>
                                                                    <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>July 22, 2018</td>
                                                                    <td>Approved</td>
                                                                    <td>$200</td>
                                                                    <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>June 12, 2017</td>
                                                                    <td>On Hold</td>
                                                                    <td>$990</td>
                                                                    <td><a href="cart.html" className="btn-add-to-cart">View</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="product" role="tabpanel">
                                                <Adminproductshow />
                                            </div>



                                            <div className="tab-pane fade" id="account-info" role="tabpanel">
                                                <Addnewproduct />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
