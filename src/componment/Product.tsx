
export default function Product() {
    return (

            <div className="col-lg-4 col-sm-6">

                <div className="single-product-item text-center">
                    <figure className="product-thumb">
                        <a href="/view"><img src="src/assets/img/new-product-1.jpg" alt="Products" className="img-fluid" /></a>
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
                        <a href="/view" className="btn btn-add-to-cart btn-whislist">+
                            Wishlist</a>
                        <a href="/view" className="btn btn-add-to-cart btn-compare">+
                            Compare</a>
                    </div>

                    <div className="product-meta">

                        <a href="#" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to Wishlist"><i className="fa fa-heart-o"></i></a>

                    </div>
                    <span className="product-bedge">New</span>
                </div>

            </div>

    )
}
