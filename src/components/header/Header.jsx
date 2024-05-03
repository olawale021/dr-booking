import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import "./header.css"
import { ChevronDown,Lock, User } from 'react-feather';
import Logo from './logo.png'


const Header = () => {
  return (
    <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={Logo} className="img-fluid" alt="Logo" style={{ width: '150px', height: '70px' }}/>
              </Link>
            </div>
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/doctor_dashboard">Doctors</Link>
              </li>
              <li>
                <Link to="/patient_dashboard">Patients</Link>
              </li>
              <li className="has-submenu">
                <Link>Pharmacy <i><ChevronDown size={15} /></i></Link>
                <ul className="submenu">
                  <li><Link to="/pharmacy-index" style={{ color: 'black' }}>Pharmacy</Link></li>
                  <li><Link to="/pharmacy-details">Pharmacy Details</Link></li>
                  <li><Link to="/pharmacy-search">Pharmacy Search</Link></li>
                  <li><Link to="/product-all">Product</Link></li>
                  <li><Link to="/pharmacy-register">Pharmacy Register</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link>Blog <i><ChevronDown size={15} /></i></Link>
                <ul className="submenu">
                  <li><Link to="/blog-list">Blog List</Link></li>
                  <li><Link to="/blog-grid">Blog Grid</Link></li>
                  <li><Link to="/blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link>Admin <i><ChevronDown size={15} /></i></Link>
                <ul className="submenu">
                  <li><Link to="/admin_login" target="_blank">Admin</Link></li>
                  <li><Link to="/pharmacy-admin" target="_blank">Pharmacy Admin</Link></li>
                </ul>
              </li>
              <li className="searchbar">
                <li><i className="feather-search"></i></li>
                <div className="togglesearch">
                  <form action="search.html">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <button type="submit" className="btn">Search</button>
                    </div>
                  </form>
                </div>
              </li>
                <li className="register-btn">
                    <Link
                        to="/patient_registration"
                        className="btn reg-btn"
                        style={{
                        backgroundColor: '#0F82FD',
                        color: '#FFFFFF',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'background-color 0.3s, color 0.3s', // Add smooth transition effect
                        }}
                        onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#FFFFFF';
                        e.target.style.color = '#0F82FD'; // Change text color on hover
                        }}
                        onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#0F82FD';
                        e.target.style.color = '#FFFFFF'; // Change back to original text color on mouse out
                        }}
                    >
                        <i><User size={15} color='black' /></i>Register
                    </Link>
                    </li>
                    <li className="register-btn">
                    <Link
                        to="/patient_login"
                        className="btn btn-primary log-btn"
                        style={{
                        backgroundColor: '#FFFFFF',
                        color: '#0F82FD',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'background-color 0.3s, color 0.3s', // Add smooth transition effect
                        }}
                        onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#0F82FD';
                        e.target.style.color = '#FFFFFF'; // Change text color on hover
                        }}
                        onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#FFFFFF';
                        e.target.style.color = '#0F82FD'; // Change back to original text color on mouse out
                        }}
                    >
                        <i><Lock size={15} color='black' /></i>Login
                    </Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
