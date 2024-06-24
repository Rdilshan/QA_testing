import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


type ProductType = {
    title: string;
    price: string;
    shortDescription: string;
    quantity: string;
    productType: string;
    description: string;
    images: string[];
};

export default function Adminproductshow() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('jwtToken');
                const response = await axios.get('http://localhost:3000/product/getproducts', {
                    headers: {
                        'Authorization': token,
                    },
                });

                const productData = response.data;

                setProducts(productData);
            } catch (error: any) {
                if (error.response?.data === "Invalid Token") {
                    navigate('/Adminlog');
                }
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [navigate]);

    useEffect(() => {
        console.log(products); 
    }, [products]);

    return (
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
    )
}
