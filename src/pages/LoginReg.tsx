import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
export default function LoginReg() {
    return (
        <>
            <Navbar />

            <div id="page-title-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-title-content">
                                <h1>Member Area</h1>
                                <ul className="breadcrumb">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="login-register.html" className="active">Login &amp; Register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="page-content-wrapper" className="p-9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">

                            <div className="login-register-wrapper">

                                <nav className="nav login-reg-tab-menu">
                                    <a className="active" id="login-tab" data-toggle="tab" href="#login">Login</a>
                                    <a id="register-tab" data-toggle="tab" href="#register">Register</a>
                                </nav>


                                <div className="tab-content" id="login-reg-tabcontent">
                                    <div className="tab-pane fade show active" id="login" role="tabpanel">
                                        <div className="login-reg-form-wrap">
                                            <form action="#" method="post">
                                                <div className="single-input-item">
                                                    <input type="email" placeholder="Enter your Email" />
                                                </div>

                                                <div className="single-input-item">
                                                    <input type="password" placeholder="Enter your Password" />
                                                </div>

                                                <div className="single-input-item">
                                                    <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
                                                        <div className="remember-meta">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                                                <label className="custom-control-label" htmlFor="rememberMe">Remember
                                                                    Me</label>
                                                            </div>
                                                        </div>

                                                        <a href="#" className="forget-pwd">Forget Password?</a>
                                                    </div>
                                                </div>

                                                <div className="single-input-item">
                                                    <button className="btn-login">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="register" role="tabpanel">
                                        <div className="login-reg-form-wrap">
                                            <form action="#" method="post">
                                                <div className="single-input-item">
                                                    <input type="text" placeholder="Full Name" />
                                                </div>

                                                <div className="single-input-item">
                                                    <input type="email" placeholder="Enter your Email" />
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="single-input-item">
                                                            <input type="password" placeholder="Enter your Password" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="single-input-item">
                                                            <input type="password" placeholder="Repeat your Password" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="single-input-item">
                                                    <div className="login-reg-form-meta">
                                                        <div className="remember-meta">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="subnewsletter" />
                                                                <label className="custom-control-label" htmlFor="subnewsletter">Subscribe
                                                                    Our Newsletter</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="single-input-item">
                                                    <button className="btn-login">Register</button>
                                                </div>
                                            </form>
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
