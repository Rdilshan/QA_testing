import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


type ProductType = {
    id: any;
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
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/getproducts`, {
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>Rs {product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <a href={`/view/${product.id}`} className="btn-add-to-cart" target="_blank" rel="noopener noreferrer">
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}
