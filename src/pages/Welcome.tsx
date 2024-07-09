import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
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

export default function Welcome() {


    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product/products');

                const productData = response.data;

                setProducts(productData);
                console.log(products)
            } catch (error: any) {

                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Navbar />

            <div className="body-popup-modal-area">
                <span className="modal-close"><img src="src/assets/img/cancel.png" alt="Close" className="img-fluid" /></span>
                <div className="modal-container d-flex">
                    <div className="search-box-area">
                        <div className="search-box-form">
                            <form action="#" method="post">
                                <input type="search" placeholder="type keyword and hit enter" />
                                <button className="btn" type="button"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <section id="banner-area">
                <div className="ruby-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="banner-carousel" className="owl-carousel">

                                <div className="single-carousel-wrap slide-item-1">
                                    <div className="banner-caption text-center text-lg-left">
                                        <h4>Rubby Store</h4>
                                        <h2>Ring Solitaire Princess</h2>
                                        <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                        <a href="#" className="btn-long-arrow">Shop Now</a>
                                    </div>
                                </div>



                                <div className="single-carousel-wrap slide-item-2">
                                    <div className="banner-caption text-center text-lg-left">
                                        <h4>New Collection 2024</h4>
                                        <h2>Beautiful Earrings</h2>
                                        <p>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                                        <a href="#" className="btn-long-arrow">Shop Now</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aboutUs-area" className="pt-9">
                <div className="ruby-container">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="about-image-wrap">
                                <a href="about.html"><img src="src/assets/img/about-img.png" alt="About Us" className="img-fluid" /></a>
                            </div>

                        </div>

                        <div className="col-lg-6 m-auto">

                            <div className="about-content-wrap ml-0 ml-lg-5 mt-5 mt-lg-0">
                                <h2>About Us</h2>
                                <h3>WE ARE VISIONARY</h3>
                                <div className="about-text">
                                    <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum
                                        est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                                        formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc
                                        nobis videntur parum clari, fiant sollemnes in futurum.</p>

                                    <p>Typi noni habented claritatem insitamed ested usused legentis in iis qui facit eorum
                                        claritatem. Investigationes demonstraverunt lectores legere me lius quod ii loreem ipsum ius
                                        delour legunt saepius.</p>

                                    <a href="about.html" className="btn btn-long-arrow">Learn More</a>


                                    <h4 className="vertical-text">WHO WE ARE?</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="new-collection-area" className="p-9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">

                            <div className="section-title">
                                <h2>New Collection Products</h2>
                                <p>Best products on sale.</p>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="new-collection-tabs">

                                <ul className="nav tab-menu-wrap" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="active" id="feature-products-tab" data-toggle="tab" href="#feature-products"
                                            role="tab" aria-controls="feature-products-tab" aria-selected="true">Feature Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="new-products-tab" data-toggle="tab" href="#new-products" role="tab"
                                            aria-controls="new-products" aria-selected="false">New Products</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="onsale-tab" data-toggle="tab" href="#onsale" role="tab" aria-controls="onsale"
                                            aria-selected="false">Onsale</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="myTabContent">

                                    <div className="tab-pane fade show active" id="feature-products" role="tabpanel"
                                        aria-labelledby="feature-products-tab">
                                        <div className="products-wrapper">
                                            <div className="products-carousel owl-carousel">



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/product-1.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Crown Summit Backpack</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span className="price">$52.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge">New</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>

                                                

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="new-products" role="tabpanel" aria-labelledby="new-products-tab">
                                        <div className="products-wrapper">
                                            <div className="products-carousel owl-carousel">

                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/new-product-1.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Crown Summit Backpack</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span className="price">$52.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge">New</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/new-product-2.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Bruno Compete Hoodie</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span className="price">$152.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge">New</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/new-product-3.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">MH01-Black</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <span className="price">$43.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge">New</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/new-product-4.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Chaz Kangeroo Hoodie</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half"></i>
                                                        </div>
                                                        <span className="price">$83.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge sale">Sale</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
                                        <div className="products-wrapper">
                                            <div className="products-carousel owl-carousel">

                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/sale-product-1.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Crown Summit Backpack</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span className="price">$52.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge sale">Sale</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/sale-product-2.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Bruno Compete Hoodie</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-o"></i>
                                                        </div>
                                                        <span className="price">$152.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge sale">Sale</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/product-3.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">MH01-Black</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <span className="price">$43.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge sale">Sale</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                                                    </div>
                                                </div>



                                                <div className="single-product-item text-center">
                                                    <figure className="product-thumb">
                                                        <a href="/view"><img src="src/assets/img/new-product-4.jpg"
                                                            alt="Products" className="img-fluid" /></a>
                                                    </figure>

                                                    <div className="product-details">
                                                        <h2><a href="/view">Chaz Kangeroo Hoodie</a></h2>
                                                        <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star-half"></i>
                                                        </div>
                                                        <span className="price">$83.00</span>
                                                        <a href="/view" className="btn btn-add-to-cart">+ Add to Cart</a>
                                                        <span className="product-bedge sale">Sale</span>
                                                    </div>

                                                    <div className="product-meta">

                                                        <a href="wishlist.html" data-toggle="tooltip" data-placement="left"
                                                            title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

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
            </section> */}

            <section id="new-products-area" className="p-9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">

                            <div className="section-title">
                                <h2>New Products</h2>
                                <p>Trending stunning Unique</p>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="products-wrapper">
                                <div className="new-products-carousel owl-carousel">

                                    <div className="single-product-item text-center">
                                        <figure className="product-thumb">
                                            <a href="/Shop"><img src="src/assets/img/new-product-1.jpg" alt="Products"
                                                className="img-fluid" /></a>
                                        </figure>

                                        <div className="product-details">
                                            <h2><a href="/Shop">Crown Summit Backpack</a></h2>
                                            <div className="rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <span className="price">$52.00</span>
                                            <a href="/Shop" className="btn btn-add-to-cart">+ Add to Cart</a>
                                            <span className="product-bedge">New</span>
                                        </div>

                                        <div className="product-meta">

                                            <a href="/Shop" data-toggle="tooltip" data-placement="left"
                                                title="Add to Wishlist"><i
                                                    className="fa fa-heart-o"></i></a>

                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
