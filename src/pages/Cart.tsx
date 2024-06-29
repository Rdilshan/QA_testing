import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";







export default function Cart() {




    return (
        <>
            <Navbar />

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
                                            <input type="text" id="street-address" placeholder="Street address Line 1" />
                                        </div>

                                        <div className="single-input-item">
                                            <input type="text" placeholder="Street address Line 2 (Optional)" />
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
                                            <textarea name="ordernote" id="ordernote" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
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
                                                <tr>
                                                    <td><a href="single-product.html">Suscipit Vestibulum <strong> × 1</strong></a></td>
                                                    <td>$165.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="single-product.html">Ami Vestibulum suscipit <strong> × 4</strong></a>
                                                    </td>
                                                    <td>$165.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="single-product.html">Vestibulum suscipit <strong> × 2</strong></a></td>
                                                    <td>$165.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>


                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td><strong>$470</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>


                                    <div className="order-payment-method">


                                        <div className="summary-footer-area">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="terms" />
                                                <label className="custom-control-label" htmlFor="terms">I have read and agree to the website
                                                    <a href="index.html">terms and conditions.</a></label>
                                            </div>

                                            <a href="#" className="btn-add-to-cart"> Place Order</a>
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
