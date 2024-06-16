
import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import Product from "../componment/Product";

export default function Shop() {
    return (
        <>
            <Navbar />

            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1>Shop</h1>
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/Shop" className="active">Shop</a></li>
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
                            <div className="shop-page-content-wrap">
                                <div className="products-settings-option d-block d-md-flex">
                                    <div className="product-cong-left d-flex align-items-center">
                                        <ul className="product-view d-flex align-items-center">
                                            <li className="current column-gird"><i className="fa fa-bars fa-rotate-90"></i></li>
                                            <li className="box-gird"><i className="fa fa-th"></i></li>
                                            <li className="list"><i className="fa fa-list-ul"></i></li>
                                        </ul>
                                        <span className="show-items">Items 1 - 9 of 17</span>
                                    </div>

                                    <div className="product-sort_by d-flex align-items-center mt-3 mt-md-0">
                                        <label htmlFor="sort">Sort By:</label>
                                        <select name="sort" id="sort" style={{ display: 'none' }}>
                                            <option value="Position">Relevance</option>
                                            <option value="Name Ascen">Name, A to Z</option>
                                            <option value="Name Decen">Name, Z to A</option>
                                            <option value="Price Ascen">Price low to heigh</option>
                                            <option value="Price Decen">Price heigh to low</option>
                                        </select><div className="nice-select" ><span className="current">Name, Z to A</span><ul className="list"><li data-value="Position" className="option focus">Relevance</li><li data-value="Name Ascen" className="option">Name, A to Z</li><li data-value="Name Decen" className="option selected">Name, Z to A</li><li data-value="Price Ascen" className="option">Price low to heigh</li><li data-value="Price Decen" className="option">Price heigh to low</li></ul></div>
                                    </div>
                                </div>

                                <div className="shop-page-products-wrap">
                                    <div className="products-wrapper">
                                        <div className="row">

                                            <Product />
                                            <Product />


                                        </div>
                                    </div>
                                </div>

                                <div className="products-settings-option d-block d-md-flex">
                                    <nav className="page-pagination">
                                        <ul className="pagination">
                                            <li><a href="#" aria-label="Previous">«</a></li>
                                            <li><a className="current" href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#" aria-label="Next">»</a></li>
                                        </ul>
                                    </nav>

                                    <div className="product-per-page d-flex align-items-center mt-3 mt-md-0">
                                        <label htmlFor="show-per-page">Show Per Page</label>
                                        <select name="sort" id="show-per-page" style={{ display: 'none' }}>
                                            <option value="9">9</option>
                                            <option value="15">15</option>
                                            <option value="21">21</option>
                                            <option value="6">27</option>
                                        </select><div className="nice-select" ><span className="current">9</span><ul className="list"><li data-value="9" className="option selected">9</li><li data-value="15" className="option">15</li><li data-value="21" className="option">21</li><li data-value="6" className="option">27</li></ul></div>
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
