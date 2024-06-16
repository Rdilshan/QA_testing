
export default function adminDashboard() {
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

                                            <a href="login-register.html"><i className="fa fa-sign-out"></i> Logout</a>
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
                                                <div className="myaccount-content">
                                                    <h3>Product</h3>

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
                                                                    <td>
                                                                        <a href="/view" className="btn-add-to-cart" target="_blank" rel="noopener noreferrer">View</a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>2</td>
                                                                    <td>July 22, 2018</td>
                                                                    <td>Approved</td>
                                                                    <td>$200</td>
                                                                    <td><a href="/view" className="btn-add-to-cart" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>3</td>
                                                                    <td>June 12, 2017</td>
                                                                    <td>On Hold</td>
                                                                    <td>$990</td>
                                                                    <td><a href="/view" className="btn-add-to-cart" target="_blank" rel="noopener noreferrer">View</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className="tab-pane fade" id="account-info" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>

                                                    <div className="account-details-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="first-name" className="required">First Name</label>
                                                                        <input type="text" id="first-name" placeholder="First Name" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-6">
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="last-name" className="required">Last Name</label>
                                                                        <input type="text" id="last-name" placeholder="Last Name" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="single-input-item">
                                                                <label htmlFor="display-name" className="required">Display Name</label>
                                                                <input type="text" id="display-name" placeholder="Display Name" />
                                                            </div>

                                                            <div className="single-input-item">
                                                                <label htmlFor="email" className="required">Email Addres</label>
                                                                <input type="email" id="email" placeholder="Email Address" />
                                                            </div>

                                                            <fieldset>
                                                                <legend>Password change</legend>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="current-pwd" className="required">Current
                                                                        Password</label>
                                                                    <input type="password" id="current-pwd" placeholder="Current Password" />
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="new-pwd" className="required">New
                                                                                Password</label>
                                                                            <input type="password" id="new-pwd" placeholder="New Password" />
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label htmlFor="confirm-pwd" className="required">Confirm
                                                                                Password</label>
                                                                            <input type="password" id="confirm-pwd" placeholder="Confirm Password" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </fieldset>

                                                            <div className="single-input-item">
                                                                <button className="btn-login btn-add-to-cart">Save Changes</button>
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
        </>
    )
}
