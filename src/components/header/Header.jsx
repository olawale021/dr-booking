import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import "./header.css"

const Header = () => {
  return (
    <header className="header header-custom header-fixed header-one">
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src="/static/img/logo.png" className="img-fluid" alt="Logo" />
              </Link>
              <li>
                <i className="fas fa-times"></i>
              </li>
            </div>
            <ul className="main-nav">
              <li className="has-submenu megamenu">
                <Link to="/">Home <i className="fas fa-chevron-down"></i></Link>
              </li>
              <li className="has-submenu">
                <Link to="/doctor_dashboard">Doctors <i className="fas fa-chevron-down"></i></Link>
              </li>
              <li className="has-submenu">
                <Link to="/patient_dashboard">Patients <i className="fas fa-chevron-down"></i></Link>
              </li>
              <li className="has-submenu">
                <Link>Pharmacy <i className="fas fa-chevron-down"></i></Link>
                <ul className="submenu">
                  <li><Link to="/pharmacy-index">Pharmacy</Link></li>
                  <li><Link to="/pharmacy-details">Pharmacy Details</Link></li>
                  <li><Link to="/pharmacy-search">Pharmacy Search</Link></li>
                  <li><Link to="/product-all">Product</Link></li>
                  <li><Link to="/pharmacy-register">Pharmacy Register</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link>Blog <i className="fas fa-chevron-down"></i></Link>
                <ul className="submenu">
                  <li><Link to="/blog-list">Blog List</Link></li>
                  <li><Link to="/blog-grid">Blog Grid</Link></li>
                  <li><Link to="/blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link>Admin <i className="fas fa-chevron-down"></i></Link>
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
                <Link to="/patient_registration" className="btn reg-btn"><i className="feather-user"></i>Register</Link>
              </li>
              <li className="register-btn">
                <Link to="/patient_login" className="btn btn-primary log-btn"><i className="feather-lock"></i>Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
