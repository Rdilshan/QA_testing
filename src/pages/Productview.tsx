import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

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

export default function Productview() {

    const { id } = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/product/get/${id}`);
                setProduct(response.data);
            } catch (error: any) {
                console.error('Error fetching orders:', error);

            }
        };

        fetchProduct();
    }, []);

    useEffect(() => {

    }, [product]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />


            <div id="page-title-area" >
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Shop">Shop</a></li>
                                    <li><a href="/view{{product.id}}" className="active">{product.title}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="page-content-wrapper" className="p-9">
                <div className="ruby-container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="single-product-page-content">
                                <div className="row">

                                    <div className="col-lg-5">
                                        <div className="product-thumbnail-wrap">
                                            <div className="product-thumb-carousel owl-carousel owl-loaded owl-drag">
                                               
                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" style={{ transform: 'translate3d(-1338px, 0px, 0px)', transition: 'all 0s ease 0s', width: '4907px' }}>
                                                        {product.images.map((image, index) => (
                                                            <div key={index} className="owl-item" style={{ width: '446.025px' }}>
                                                                <div className="single-thumb-item">
                                                                    <a href="single-product.html">
                                                                        <img className="img-fluid" src={`http://localhost:3000/${image}`} alt={`Product Image ${index + 1}`} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="owl-nav">
                                                    <button type="button" role="presentation" className="owl-prev">
                                                        <i className="fa fa-angle-left"></i>
                                                    </button>
                                                    <button type="button" role="presentation" className="owl-next">
                                                        <i className="fa fa-angle-right"></i>
                                                    </button>
                                                </div>

                                                <div className="owl-dots disabled"></div>

                                                <div className="owl-thumbs">
                                                    {product.images.map((image, index) => (
                                                        <button key={index} className={`owl-thumb-item ${index === 0 ? 'active' : ''}`}>
                                                            <img src={`http://localhost:3000/${image}`} alt={`Product Thumbnail ${index + 1}`} />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-7 mt-5 mt-lg-0">
                                        <div className="product-details">
                                            <h2><a href="single-product.html">{product.title}</a></h2>

                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>

                                            <span className="price">Rs {product.price}</span>

                                            <div className="product-info-stock-sku">
                                                <span className="product-stock-status">In Stock</span>

                                            </div>

                                            <p className="products-desc">{product.shortDescription}</p>


                                            <div className="product-quantity d-flex align-items-center">
                                                <div className="quantity-field">
                                                    <label htmlFor="qty">Qty</label>
                                                    <input type="number" id="qty" min="1" max={parseInt(product.quantity)} value="1" />
                                                </div>

                                                <a href="single-product.html" className="btn btn-add-to-cart">Add to Cart</a>
                                            </div>

                                            <div className="product-btn-group">
                                                <a href="single-product.html" className="btn btn-add-to-cart btn-whislist">+ Add to
                                                    Wishlist</a>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-lg-12">

                                        <div className="product-full-info-reviews">

                                            <nav className="nav" id="nav-tab">
                                                <a className="active" id="description-tab" data-toggle="tab" href="#description">Description</a>

                                            </nav>

                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="description">
                                                    <p>{product.description}</p>


                                                </div>

                                            </div>

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
