import Navbar from "../componment/Navbar";
import Footer from "../componment/Footer";
import { useState } from "react";
import axios, { AxiosError } from "axios";





export default function LoginReg() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {

            if (formData.password !== formData.repeatPassword) {
                alert('Passwords do not match');
                return;
            }

            const response = await axios.post('http://localhost:3000/user/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                repeatpwd: formData.repeatPassword,
            });


            console.log('Registration successful:', response.data);

            setFormData({
                name: '',
                email: '',
                password: '',
                repeatPassword: '',
            });

            alert('Registration successful!');


        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    const handleSubmitlogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3000/user/login', {
            email,
            password,
          });
    
          if (response.status === 200) {
            // Handle successful login, e.g., store token in localStorage
            const { token } = response.data;

            localStorage.setItem('jwtTokenuser', token);
            window.location.href = '/';

          } else {
            throw new Error('Login failed');
          }
        } catch (error:any) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message);
              } else {
                alert('An unexpected error occurred.');
                console.error('Error during request:', error);
              }

        }
      };

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
                                            <form onSubmit={handleSubmitlogin}>
                                                <div className="single-input-item">
                                                    <input type="email" placeholder="Enter your Email" value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                </div>

                                                <div className="single-input-item">
                                                    <input type="password" placeholder="Enter your Password" value={password}
                                                        onChange={(e) => setPassword(e.target.value)} />
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
                                                    <button type="submit" className="btn-login">Login</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="register" role="tabpanel">
                                        <div className="login-reg-form-wrap">
                                            <form onSubmit={handleSubmit}>
                                                <div className="single-input-item">
                                                    <input type="text" placeholder="Full Name" name="name"
                                                        value={formData.name}
                                                        onChange={handleChange} />
                                                </div>

                                                <div className="single-input-item">
                                                    <input type="email" placeholder="Enter your Email" name="email"
                                                        value={formData.email}
                                                        onChange={handleChange} />
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="single-input-item">
                                                            <input type="password" placeholder="Enter your Password" name="password"
                                                                value={formData.password}
                                                                onChange={handleChange} />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="single-input-item">
                                                            <input type="password" placeholder="Repeat your Password" name="repeatPassword"
                                                                value={formData.repeatPassword}
                                                                onChange={handleChange} />
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="single-input-item">
                                                    <button type="submit" className="btn-login">Register</button>
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
