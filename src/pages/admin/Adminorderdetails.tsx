

export default function Adminorderdetails() {
    return (
        <>
            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1> Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/Admin">Admin</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="page-content-wrapper" className="p-9">
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6">
                            <div className="checkout-billing-details-wrap">
                                <h2>Billing Details</h2>
                                <div className="billing-form-wrap">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input-item">
                                                    <label htmlFor="f_name" className="required">First Name</label>
                                                    <input type="text" id="f_name" placeholder="First Name" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input-item">
                                                    <label htmlFor="l_name" className="required">Last Name</label>
                                                    <input type="text" id="l_name" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="single-input-item">
                                            <label htmlFor="street-address" className="required">Street address</label>
                                            <input type="text" id="streetAddress1" placeholder="Street address Line 1" />
                                        </div>

                                        <div className="single-input-item">
                                            <input type="text" id="streetAddress2" placeholder="Street address Line 2 (Optional)" />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="town" className="required">Town / City</label>
                                            <input type="text" id="town" placeholder="Town / City" />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="state">State / Divition</label>
                                            <input type="text" id="state" placeholder="State / Divition" />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="postcode" className="required">Postcode / ZIP</label>
                                            <input type="text" id="postcode" placeholder="Postcode / ZIP" />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" placeholder="Phone" />
                                        </div>






                                        <div className="single-input-item">
                                            <label htmlFor="ordernote">Order Note</label>
                                            <textarea name="ordernote" id="ordernote" placeholder="Notes about your order, e.g. special notes for delivery." ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="order-summary-details">
                                <h2>Your Order Summary</h2>
                                <div className="order-summary-content">

                                    <div className="order-summary-table table-responsive text-center">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Products</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr  >
                                                    <td><a href={`/view/w3rwerwer}`}>fsdfsdf<strong> × 3</strong></a></td>
                                                    <td>Rs 1000</td>

                                                </tr>

                                            </tbody>
                                            <tfoot>


                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td><strong>Rs 100</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="single-input-item">
                                        <label htmlFor="phone">Order status</label>
                                        <select name="" id="">
                                            <option value="Processing">Processing</option>
                                            <option value="On hold" >On hold</option>
                                            <option value="Finished">Finished</option>

                                        </select>
                                    </div>

                                    <div className="summary-footer-area mt-5">

                                        <button
                                            className="btn-add-to-cart"
                                        >
                                            Update order
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
