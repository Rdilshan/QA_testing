import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function Adminorderdetails() {

    const { id } = useParams();
    const [datas, setdatas] = useState<any>("");
    const [product, setproduct] = useState<any>("");
    const [orderstate, setOrderstate] = useState("");
    const navigate = useNavigate();


    const handleChange = (e: { target: { value: any; }; }) => {
        setOrderstate(e.target.value);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/order/get/${id}`);
                // console.log(response.data);
                setproduct(response.data.product)
                setdatas(response.data)
                setOrderstate(datas.orderstate)
            } catch (error: any) {
                console.error('Error fetching orders:', error);

            }
        };

        fetchProduct();
    }, []);


    const updatestatus = async () => {

        try {
          const token = localStorage.getItem('jwtToken');
          const response = await axios.post(
            'http://localhost:3000/order/updateorderstaus',
            { orderid: id, orderstate },
            {
                headers: {
                    'Authorization': token
                }
            }
          );
          console.log(response.data);
          navigate('/Admin');

        } catch (error: any) {
          if (error.response && error.response.data === "Invalid Token") {
            navigate('/Adminlog');
          }
          console.error('Error updating order status:', error);
        }
      };
      

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
                                <h2>User Details</h2>
                                <div className="billing-form-wrap">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-input-item">
                                                    <label htmlFor="f_name" className="required">First Name</label>
                                                    <input type="text" id="f_name" placeholder="First Name" defaultValue={datas.firstName} readOnly />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="single-input-item">
                                                    <label htmlFor="l_name" className="required">Last Name</label>
                                                    <input type="text" id="l_name" placeholder="Last Name" defaultValue={datas.lastName} readOnly />
                                                </div>
                                            </div>
                                        </div>



                                        <div className="single-input-item">
                                            <label htmlFor="street-address" className="required">Street address</label>
                                            <input type="text" id="streetAddress1" placeholder="Street address Line 1" defaultValue={datas.streetAddress1} readOnly />
                                        </div>

                                        <div className="single-input-item">
                                            <input type="text" id="streetAddress2" placeholder="Street address Line 2 (Optional)" defaultValue={datas.streetAddress2} readOnly />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="town" className="required">Town / City</label>
                                            <input type="text" id="town" placeholder="Town / City" defaultValue={datas.town} readOnly />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="state">State / Divition</label>
                                            <input type="text" id="state" placeholder="State / Divition" defaultValue={datas.state} readOnly />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="postcode" className="required">Postcode / ZIP</label>
                                            <input type="text" id="postcode" placeholder="Postcode / ZIP" defaultValue={datas.postcode} readOnly />
                                        </div>

                                        <div className="single-input-item">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" id="phone" placeholder="Phone" defaultValue={datas.phone} readOnly />
                                        </div>






                                        <div className="single-input-item">
                                            <label htmlFor="ordernote">Order Note</label>
                                            <textarea name="ordernote" id="ordernote" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={datas.ordernote} readOnly></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="order-summary-details">
                                <h2>Order Summary</h2>
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
                                                    <td><a href={`/view/${datas.productId}`}>{product.title}<strong> × {datas.qty}</strong></a></td>
                                                    <td>Rs {datas.qty * product.price}</td>

                                                </tr>

                                            </tbody>
                                            <tfoot>


                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td>Rs {datas.qty * product.price}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="single-input-item">
                                        <label htmlFor="phone">Order status</label>
                                        <input type="text" id="orderstaus" placeholder="order status" defaultValue={datas.orderstate}  onChange={handleChange}/>
                                    </div>

                                    <div className="summary-footer-area mt-5">

                                        <button className="btn-add-to-cart" onClick={() => updatestatus()}>
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
