import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";



type ProductType = {
    id: any;
    orderID: any;
    qty: number;
    title: string;
    price: string;
    shortDescription: string;
    quantity: number;
    productType: string;
    description: string;
    images: string[];
};

export default function Cart() {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [fullprice, setfullprice] = useState<number>(0);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
        f_name: '',
        l_name: '',
        streetAddress1: '',
        streetAddress2: '',
        town: '',
        state: '',
        postcode: '',
        phone: '',
        ordernote: ''
    });



    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/order/get`, {
                    headers: {
                        'Authorization': token
                    }
                });


                // console.log(response.data)
                setProducts(response.data);

            } catch (error: any) {
                if (error.response?.data === "Invalid Token") {
                    navigate('/LoginReg');
                }
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [navigate]);


    useEffect(() => {
        const total = products.reduce((acc, product) => acc + (parseFloat(product.price) * product.qty), 0);
        setfullprice(total);
    }, [products]);



    const handleTermsChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setIsTermsChecked(e.target.checked);
    };

    const handleInputChange = (e: { target: { id: any; value: any; }; }) => {
        const { id, value } = e.target;
        setBillingDetails((prevDetails) => ({ ...prevDetails, [id]: value }));
    };

    const handlePlaceOrder = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (isTermsChecked) {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/order/place`, {
                    ...billingDetails,
                    products: products 
                }, {
                    headers: {
                        'Authorization': token
                    }
                });

                console.log("Order placed successfully with details:", response.data);
                console.log("Billing Details:", billingDetails);
                console.log("OrderIDs:", products);

                navigate('/Userdashboard');

            } catch (error) {
                console.error("Error placing order:", error);
            }
        }
    };


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
                                                    <input type="text" id="f_name" placeholder="First Name" onChange={handleInputChange} />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input-item">
                                                    <label htmlFor="l_name" className="required">Last Name</label>
                                                    <input type="text" id="l_name" placeholder="Last Name" onChange={handleInputChange} />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="single-input-item">
                                            <label htmlFor="street-address" className="required">Street address</label>
                                            <input type="text" id="streetAddress1" placeholder="Street address Line 1" onChange={handleInputChange} />
                                        </div>

                                        <div className="single-input-item">
                                            <input type="text" id="streetAddress2" placeholder="Street address Line 2 (Optional)" onChange={handleInputChange} />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="town" className="required">Town / City</label>
                                            <input type="text" id="town" placeholder="Town / City" onChange={handleInputChange} />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="state">State / Divition</label>
                                            <input type="text" id="state" placeholder="State / Divition" onChange={handleInputChange} />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="postcode" className="required">Postcode / ZIP</label>
                                            <input type="text" id="postcode" placeholder="Postcode / ZIP" onChange={handleInputChange} />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" placeholder="Phone" onChange={handleInputChange} />
                                        </div>




                                        <div className="single-input-item">
                                            <label htmlFor="ordernote">Order Note</label>
                                            <textarea name="ordernote" id="ordernote" placeholder="Notes about your order, e.g. special notes for delivery." onChange={handleInputChange}></textarea>
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
                                                {products.map((product, index) => (
                                                    <tr key={index} >
                                                        <td><a href={`/view/${product.id}`}>{product.title}<strong> × {product.qty}</strong></a></td>
                                                        <td>Rs {parseFloat(product.price) * product.qty}</td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>


                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td><strong>Rs {fullprice}</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>


                                    <div className="summary-footer-area mt-5">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="terms"
                                                onChange={handleTermsChange}
                                            />
                                            <label className="custom-control-label" htmlFor="terms">
                                                I have read and agree to the website
                                                <a href="index.html"> terms and conditions.</a>
                                            </label>
                                        </div>

                                        <button
                                            className="btn-add-to-cart"
                                            onClick={handlePlaceOrder}
                                            disabled={!isTermsChecked}
                                        >
                                            Place Order
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            <Footer />
        </>
    )
}
