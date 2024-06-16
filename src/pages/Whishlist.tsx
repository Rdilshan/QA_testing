import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";

export default function Whishlist() {
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
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop-left-full-wide.html">Shop</a></li>
                                    <li><a href="#" className="active">Wishlist</a></li>
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
                                            <th className="pro-quantity">Stock Status</th>
                                            <th className="pro-subtotal">Add to Cart</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product-1.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Zeon Zen 4 Pro</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                                            <td className="pro-subtotal"><a href="cart.html" className="btn-add-to-cart">Add to Cart</a></td>
                                            <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product-2.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Aquet Drone D 420</a></td>
                                            <td className="pro-price"><span>$275.00</span></td>
                                            <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                                            <td className="pro-subtotal"><a href="cart.html" className="btn-add-to-cart">Add to Cart</a></td>
                                            <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product-3.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Game Station X 22</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity"><span className="text-danger">Stock Out</span></td>
                                            <td className="pro-subtotal"><a href="cart.html" className="btn-add-to-cart disabled">Add to
                                                Cart</a></td>
                                            <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="src/assets/img/product-4.jpg" alt="Product" /></a></td>
                                            <td className="pro-title"><a href="#">Roxxe Headphone Z 75 </a></td>
                                            <td className="pro-price"><span>$110.00</span></td>
                                            <td className="pro-quantity"><span className="text-success">In Stock</span></td>
                                            <td className="pro-subtotal"><a href="cart.html" className="btn-add-to-cart">Add to Cart</a></td>
                                            <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}
