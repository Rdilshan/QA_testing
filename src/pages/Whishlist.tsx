import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

type ProductType = {
    id: any;
    title: string;
    price: string;
    shortDescription: string;
    quantity: number;
    productType: string;
    description: string;
    images: string[];
};


export default function Whishlist() {

    const [products, setProducts] = useState<ProductType[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/whishlistget`, {
                    headers: {
                        'Authorization': token
                    }
                });


                console.log(response.data)
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



    const handleRemoveProduct = async (productId: string) => {
        console.log(productId)
        const confirmDelete = window.confirm("Are you sure you want to remove this product from your wishlist?");
        if (confirmDelete) {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/whishlistdelete`, { productId }, {
                    headers: {
                        'Authorization': token
                    }
                });
                console.log(response.data)

                setProducts(products.filter(product => product.id !== productId));
                alert('Product removed successfully!');
            } catch (error) {
                console.error('Error removing product:', error);
                alert('Failed to remove product from wishlist');
            }
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
                                <h1>Wishlist</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/shop">Shop</a></li>
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
                                        {products.length > 0 ? (
                                            products.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="pro-thumbnail">
                                                        <a href="#"><img className="img-fluid" src={`${process.env.REACT_APP_API_BASE_URL}/${product.images[0]}`} alt={`Product Thumbnail ${index + 1}`} /></a>
                                                    </td>
                                                    <td className="pro-title"><a href="#">{product.title}</a></td>
                                                    <td className="pro-price"><span>Rs {product.price}</span></td>

                                                    {product.quantity > 0 ? (
                                                        <td className="pro-quantity">
                                                            <span className="text-success">In Stock</span>
                                                        </td>
                                                    ) : (
                                                        <td className="pro-quantity">
                                                            <span className="text-danger">Out of Stock</span>
                                                        </td>
                                                    )}

                                                    <td className="pro-subtotal"><a href={`/view/${product.id}`} className="btn-add-to-cart">Add to Cart</a></td>
                                                    <td className="pro-remove"><a href="#" onClick={() => handleRemoveProduct(product.id)}><i className="fa fa-trash-o"></i></a></td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="text-center">No products available</td>
                                            </tr>
                                        )}
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
