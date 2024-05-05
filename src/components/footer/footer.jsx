import React from 'react';
import { Link } from 'react-router-dom'; 
import './footer.css'
import Logo from '../header/logo.png'
import { Facebook, Instagram, Twitter, Linkedin, MapPin, PhoneCall, Mail  } from 'react-feather';



const Footer = () => {
    return (
        <footer className="footer footer-one">
            <div className="footer-top">
                <div className="container">
                    <div className="row mt-5">
                        {/* Footer Logo and About */}
                        <div className="col-lg-3 col-md-4">
                            <div className="footer-widget footer-about">
                                <div className="footer-logo">
                                    <a href="index.html"><img src={Logo} alt="logo" style={{width: '200px'}} /></a>
                                </div>
                                <div className="footer-about-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                            </div>
                        </div>

                        {/* For Patients */}
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Patients</h2>
                                        <ul>
                                            <li><a href="search.html">Search for Doctors</a></li>
                                            <li><a href="login.html">Login</a></li>
                                            <li><a href="register.html">Register</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* For Doctors */}
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-menu">
                                        <h2 className="footer-title">For Doctors</h2>
                                        <ul>
                                            <li><Link to=''>Appointments</Link></li>
                                            <li><Link to=''>Chat</Link></li>
                                            <li><Link to=''>Login</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Contact Us */}
                                <div className="col-lg-6 col-md-4">
                                    <div className="footer-widget footer-contact">
                                        <h2 className="footer-title">Contact Us</h2>
                                        <div className="footer-contact-info">
                                            <div className="footer-address">
                                                <p><i><MapPin/></i> 3556 Beech Street, Coventry</p>
                                            </div>
                                            <div className="footer-address">
                                                <p><i><PhoneCall/></i> +44 315 369 5943</p>
                                            </div>
                                            <div className="footer-address mb-0">
                                                <p><i><Mail/></i> olawalefilani112@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Subscription */}
                        <div className="col-lg-3 col-md-7">
                            <div className="footer-widget">
                                <h2 className="footer-title">Join Our Newsletter</h2>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="email" className="form-control" placeholder="Enter Email" />
                                        <button type="submit" className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="">
                                        <Link className='social-icon'><i><Facebook size={25}/></i></Link>
                                        <Link className='social-icon'><i><Instagram size={25}/></i></Link>
                                        <Link className='social-icon'><i><Twitter size={25}/></i></Link>
                                        <Link className='social-icon'><i><Linkedin size={25}/></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="copyright-text">
                                    <p className="mb-0"> Copyright © 2024 <Link to="">STEP-CARE.</Link> All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                {/* Footer Menu */}
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li><Link href="privacy-policy.html">Privacy Policy</Link></li>
                                        <li><a href="terms-condition.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
