
import Footer from '../componment/Footer'
import Navbar from '../componment/Navbar'

export default function Cartlist() {
    return (
        <>
            <Navbar />

            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1>Wishlist</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/shop">Shop</a></li>
                                    <li><a href="#" className="active">Cart</a></li>
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

                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">Thumbnail</th>
                                            <th className="pro-title">Product</th>
                                            <th className="pro-price">Price</th>
                                            <th className="pro-quantity">Qty</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr >
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={`http://localhost:3000/uploads/1719239409124.jpg`} alt={`Product Thumbnail`} /></a></td>
                                            <td className="pro-title"><a href="#">sdfgsd</a></td>
                                            <td className="pro-price"><span>Rs 100</span></td>


                                            <td className="pro-quantity">
                                                <span className="text-success">
                                                <input type="number" id="qty" min="1" max={100} defaultValue="1" />
                                                </span>
                                            </td>

                                            <td className="pro-remove"><a href="#" ><i className="fa fa-trash-o"></i></a></td>
                                        </tr>

                                    </tbody>
                                </table>

                               
                            </div>
                           
                        </div>
                        <a href="/cart" className="btn-add-to-cart mt-4"> Place Order</a>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}
