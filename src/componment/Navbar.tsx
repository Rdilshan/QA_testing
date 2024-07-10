import axios from "axios";
import { useEffect, useState } from "react";


export default function Navbar() {

    const[ordercount, setordercount] = useState<number>(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('jwtTokenuser');
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/order/count`, {
                    headers: {
                        'Authorization': token
                    }
                });

                setordercount(response.data.count);

            } catch (error: any) {
                if (error.response?.data === "Invalid Token") {
                    setordercount(0);
                }
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <header id="header-area">
                <div className="ruby-container">
                    <div className="row">

                        <div className="col-3 col-lg-1 col-xl-2 m-auto">
                            <a href="index.html" className="logo-area">
                                <img src="/assets/img/logo.png" alt="Logo" className="img-fluid" />
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
                                                {/* <dd><a href="#">Sign</a></dd> */}
                                            </dl>


                                        </div>
                                    </li>
                                    <li className="shop-cart"><a href="/Whishlist"><i className="fa fa-heart-o"></i> </a>

                                    </li>
                                    <li className="shop-cart"><a href="/cartlist"><i className="fa fa-shopping-bag"></i> <span
                                        className="count">{ordercount}</span></a>

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

