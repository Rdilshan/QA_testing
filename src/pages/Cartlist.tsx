
import { useEffect, useState } from 'react';
import Footer from '../componment/Footer'
import Navbar from '../componment/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



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



export default function Cartlist() {

    const [products, setProducts] = useState<ProductType[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.get('http://localhost:3000/order/get', {
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

    const handleRemoveProduct = async (orderId: string) => {
        console.log(orderId)
        const confirmDelete = window.confirm("Are you sure you want to remove this product from your wishlist?");
        if (confirmDelete) {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.post('http://localhost:3000/order/delete', { orderId }, {
                    headers: {
                        'Authorization': token
                    }
                });
                console.log(response.data)

                setProducts(products.filter(product => product.orderID !== orderId));
                alert('Product removed successfully!');
            } catch (error) {
                console.error('Error removing product:', error);
                alert('Failed to remove product from wishlist');
            }
        }
    };

    const Updateqty = async (orderId: string, qty: number) => {
        try {
            const token = localStorage.getItem('jwtTokenuser');
            const response = await axios.post('http://localhost:3000/order/update', { orderId, qty }, {
                headers: {
                    'Authorization': token
                }
            });
            console.log(response.data)
        } catch (error) {
            console.error('Error updating quantity:', error);
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
                                        {products.length > 0 ? (
                                            products.map((product, index) => (
                                                <tr key={index}>
                                                    <td className="pro-thumbnail">
                                                        <a href="#"><img className="img-fluid" src={`http://localhost:3000/${product.images[0]}`} alt={`Product Thumbnail ${index + 1}`} /></a>
                                                    </td>
                                                    <td className="pro-title"><a href="#">{product.title}</a></td>
                                                    <td className="pro-price"><span>Rs {product.price}</span></td>
                                                    <td className="pro-quantity">
                                                        <span className="text-success">
                                                            <input
                                                                type="number"
                                                                id="qty"
                                                                min="1"
                                                                max="100"
                                                                defaultValue={product.qty}
                                                                onChange={(e) => Updateqty(product.orderID, parseInt(e.target.value))}
                                                            />
                                                        </span>
                                                    </td>
                                                    <td className="pro-remove">
                                                        <a href="#" onClick={() => handleRemoveProduct(product.orderID)}>
                                                            <i className="fa fa-trash-o"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={5} className="text-center">No products available</td>
                                            </tr>
                                        )}
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
