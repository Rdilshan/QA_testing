import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";

export default function ContactUS() {
    return (
        <>
            <Navbar />
            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1>Contact Us</h1>
                                <ul className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="login-register.html" className="active">Contact</a></li>
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

                            <div className="contact-method-wrap">
                                <div className="row">

                                    <div className="col-lg-3 col-sm-6 text-center">
                                        <div className="contact-method-item">
                                            <span className="method-icon"><i className="fa fa-map-marker"></i></span>
                                            <div className="method-info">
                                                <h3>Street Address</h3>
                                                <p>Address : No 40 Baria Sreet 133/2 <br /> NewYork City, NY, United States.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 text-center">
                                        <div className="contact-method-item">
                                            <span className="method-icon"><i className="fa fa-phone"></i></span>
                                            <div className="method-info">
                                                <h3>Phone Number</h3>
                                                <a href="tel:0(1234)56789012">0(1234) 567 89012</a>
                                                <a href="tel:0(1234)56789012">0(1323) 466 89012</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 text-center">
                                        <div className="contact-method-item">
                                            <span className="method-icon"><i className="fa fa-envelope-open-o"></i></span>
                                            <div className="method-info">
                                                <h3>Number Fax</h3>
                                                <p>+1 323 555 1234 <br /> +1 267 555 12342</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-sm-6 text-center">
                                        <div className="contact-method-item">
                                            <span className="method-icon"><i className="fa fa-envelope"></i></span>
                                            <div className="method-info">
                                                <h3>Email Address</h3>
                                                <a href="mailto:your@email.here">your@email.here</a>
                                                <a href="mailto:your@email.here">your@email.here</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-9 m-auto">
                            <div className="contact-form-wrap">
                                <h2>Request a Quote</h2>

                                <form id="contact-form" action="https://d29u17ylf1ylz9.cloudfront.net/ruby-v2/ruby/assets/php/mail.php" method="post">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="text" name="first_name" placeholder="First Name *" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="text" name="last_name" placeholder="Last Name *" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="email" name="email_address" placeholder="Email Address *" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input-item">
                                                <input type="text" name="contact_subject" placeholder="Subject *" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="single-input-item">
                                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                            </div>

                                            <div className="single-input-item text-center">
                                                <button type="submit" name="submit" className="btn-add-to-cart">Send Meassage</button>
                                            </div>


                                            <div className="form-messege"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
