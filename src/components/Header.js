import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <style>
        {`
          .page-header {
            position: sticky !important;
            top: 0 !important;
            z-index: 1000 !important;
            background-color: #ffffff !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
          }
          
          .rd-navbar-nav {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          .rd-nav-item {
            list-style: none;
          }
          
          .rd-nav-link {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            letter-spacing: 0.5px !important;
            color: #2c2416 !important;
            text-decoration: none !important;
            padding: 10px 18px !important;
            display: inline-block !important;
            transition: all 0.3s ease !important;
            position: relative !important;
            text-transform: uppercase !important;
          }
          
          .rd-nav-link::after {
            content: '' !important;
            position: absolute !important;
            bottom: 5px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: 0 !important;
            height: 3px !important;
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%) !important;
            transition: width 0.3s ease !important;
            border-radius: 2px !important;
          }
          
          .rd-nav-link:hover {
            color: #8B4513 !important;
            transform: translateY(-2px) !important;
          }
          
          .rd-nav-link:hover::after {
            width: 80% !important;
          }
          
          .rd-nav-item.active .rd-nav-link {
            color: #8B4513 !important;
            background: rgba(139, 69, 19, 0.05) !important;
            border-radius: 8px !important;
          }
          
          .rd-nav-item.active .rd-nav-link::after {
            width: 80% !important;
          }
        `}
      </style>
      <header className="section page-header">
      <div className="rd-navbar-wrap">
        <nav className="rd-navbar rd-navbar-wide" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              <div className="rd-navbar-panel">
                <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                <div className="rd-navbar-brand">
                  <Link className="brand" to="/">
                    <img className="brand-logo-dark" src="/images/trademark-removebg-preview.png" alt="" width="232" height="67"/>
                    <img className="brand-logo-light" src="/images/logo-inverse-86x104.png" alt="" width="86" height="104"/>
                  </Link>
                </div>
              </div>
              <div className="rd-navbar-nav-wrap">
                <ul className="rd-navbar-nav">
                  <li className={`rd-nav-item ${isActive('/')}`}>
                    <Link className="rd-nav-link" to="/">HOME</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/about')}`}>
                    <Link className="rd-nav-link" to="/about">ABOUT US</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/services')}`}>
                    <Link className="rd-nav-link" to="/services">SERVICES</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/projects')}`}>
                    <Link className="rd-nav-link" to="/projects">PROJECTS</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/portfolio')}`}>
                    <Link className="rd-nav-link" to="/portfolio">PORTFOLIO</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/training')}`}>
                    <Link className="rd-nav-link" to="/training">TRAINING</Link>
                  </li>
                  <li className={`rd-nav-item ${isActive('/contacts')}`}>
                    <Link className="rd-nav-link" to="/contacts">CONTACT US</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
