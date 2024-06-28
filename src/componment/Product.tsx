import axios from "axios";
import { useEffect, useState } from "react";



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


export default function Product() {

    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/products');

                const productData = response.data;

                setProducts(productData);
            } catch (error: any) {

                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



    return (

        <>
         {products.map((product, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>

                <div className="single-product-item text-center">
                    <figure className="product-thumb">
                        <a href={`/view/${product.id}`}><img src={`http://localhost:3000/${product.images[0]}`} alt={`Product Thumbnail ${index + 1}`} className="img-fluid" /></a>
                    </figure>

                    <div className="product-details">
                        <h2><a href={`/view/${product.id}`}>{product.title}</a></h2>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <span className="price">Rs {product.price}</span>

                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                        
                    </div>

                    <div className="product-meta">

                        <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                    </div>
                    <span className="product-bedge">{product.productType}</span>
                </div>

            </div>
         ))}
        </>


    )
}
