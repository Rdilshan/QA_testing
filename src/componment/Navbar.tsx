

export default function Navbar() {
    return (
        <>
            <header id="header-area">
                <div className="ruby-container">
                    <div className="row">

                        <div className="col-3 col-lg-1 col-xl-2 m-auto">
                            <a href="index.html" className="logo-area">
                                <img src="src/assets/img/logo.png" alt="Logo" className="img-fluid" />
                            </a>
                        </div>



                        <div className="col-3 col-lg-9 col-xl-8 m-auto">
                            <div className="main-menu-wrap">
                                <nav id="mainmenu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/Shop">Shop</a></li>
                                        <li><a href="/ContactUS">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 m-auto">
                            <div className="header-right-meta text-right">
                                <ul>
                                   
                                    <li className="settings"><a href="#"><i className="fa fa-cog"></i></a>
                                        <div className="site-settings d-block d-sm-flex">


                                            <dl className="my-account">
                                                <dt>My Account</dt>
                                                <dd><a href="/Userdashboard">Dashboard</a></dd>
                                                <dd><a href="/Userdashboard">Profile</a></dd>
                                                <dd><a href="#">Sign</a></dd>
                                            </dl>


                                        </div>
                                    </li>
                                    <li className="shop-cart"><a href="/Whishlist"><i className="fa fa-heart-o"></i> </a>
                                        
                                    </li>
                                    <li className="shop-cart"><a href="/Cart"><i className="fa fa-shopping-bag"></i> <span
                                        className="count">3</span></a>
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}
