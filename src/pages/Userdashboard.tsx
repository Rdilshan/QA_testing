import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Userdashboard() {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [currentPwd, setCurrentPwd] = useState('');
    const [newPwd, setNewPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.get('http://localhost:3000/user/get', {
                    headers: {
                        'Authorization': token
                    }
                });
                // console.log(response.data)
                setname(response.data.name)
                setemail(response.data.email)
            } catch (error: any) {
                if (error.response.data == "Invalid Token") {
                    navigate('/LoginReg');
                }
                console.error('Error fetching orders:', error);

            }
        };

        fetchOrders();
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (newPwd !== confirmPwd) {
            alert("New password and confirm password do not match");
            return;
        }

        try {
            const token = localStorage.getItem('jwtTokenuser');
            const response = await axios.post('http://localhost:3000/user/update', {
                name,
                email,
                currentPwd,
                newPwd
            }, {
                headers: {
                    'Authorization': token
                }
            });
            setCurrentPwd("")
            setNewPwd("")
            setConfirmPwd("")

            alert('Profile updated successfully');
        } catch (error: any) {
            alert(error.response?.data?.message || 'An error occurred');
        }
    };


    return (
        <>
            <Navbar />
            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1>Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Userdashboard" className="active">Dashboard</a></li>
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

                                            <a href="#orders" data-toggle="tab" className=""><i className="fa fa-cart-arrow-down"></i> Orders</a>

                                            <a href="#account-info" data-toggle="tab" className="active show"><i className="fa fa-user"></i> Account Details</a>

                                            <a href="login-register.html"><i className="fa fa-sign-out"></i> Logout</a>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 mt-5 mt-lg-0">
                                        <div className="tab-content" id="myaccountContent">



                                            <div className="tab-pane fade" id="orders" role="tabpanel">
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



                                            <div className="tab-pane fade active show" id="account-info" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>

                                                    <div className="account-details-form">
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="first-name" className="required">Full Name</label>
                                                                        <input
                                                                            type="text"
                                                                            id="first-name"
                                                                            placeholder="First Name"
                                                                            defaultValue={name}
                                                                            onChange={(e) => setname(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="single-input-item">
                                                                <label htmlFor="email" className="required">Email Address</label>
                                                                <input
                                                                    type="email"
                                                                    id="email"
                                                                    placeholder="Email Address"
                                                                    defaultValue={email}
                                                                    onChange={(e) => setemail(e.target.value)}
                                                                    readOnly
                                                                />
                                                            </div>

                                                            <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="current-pwd" className="required">Current Password</label>
                                                                    <input
                                                                        type="password"
                                                                        id="current-pwd"
                                                                        placeholder="Current Password"
                                                                        defaultValue={currentPwd}
                                                                        onChange={(e) => setCurrentPwd(e.target.value)}
                                                                    />
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="new-pwd" className="required">New Password</label>
                                                                            <input
                                                                                type="password"
                                                                                id="new-pwd"
                                                                                placeholder="New Password"
                                                                                defaultValue={newPwd}
                                                                                onChange={(e) => setNewPwd(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="confirm-pwd" className="required">Confirm Password</label>
                                                                            <input
                                                                                type="password"
                                                                                id="confirm-pwd"
                                                                                placeholder="Confirm Password"
                                                                                defaultValue={confirmPwd}
                                                                                onChange={(e) => setConfirmPwd(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>

                                                            <div className="single-input-item">
                                                                <button type="submit" className="btn-login btn-add-to-cart">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />


        </>
    )
}
