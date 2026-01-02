import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <div className="pre-footer-classic" style={{ background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)', color: '#fff' }}>
        <div className="container">
          <div className="row row-30 justify-content-lg-between">
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5 style={{ color: '#fffcd3', fontWeight: '700' }}>Our Location</h5>
              <ul className="list list-sm">
                <li><p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Snow Fountain Consultants</p></li>
                <li><p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>5/259, Vikas Nagar,</p></li>
                <li><p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Lucknow,</p></li>
                <li><p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Uttar Pradesh - 226022</p></li>
                <li><p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>India</p></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5 style={{ color: '#fffcd3', fontWeight: '700' }}>Quick Links</h5>
              <ul className="list list-sm">
                <li><Link to="/" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Services</Link></li>
                <li><Link to="/projects" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Projects</Link></li>
                <li><Link to="/portfolio" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Portfolio</Link></li>
                <li><Link to="/training" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Training</Link></li>
                <li><Link to="/contacts" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5 style={{ color: '#fffcd3', fontWeight: '700' }}>Contact Info</h5>
              <dl className="list-terms-custom">
                <dt style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Ph.</dt>
                <dd><a style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }} href="tel:+917897651111">+91 78976 51111</a></dd>
              </dl>
              <dl className="list-terms-custom">
                <dt style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Email.</dt>
                <dd><a style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }} href="mailto:info@snowfountain.com">info@snowfountain.com</a></dd>
              </dl>
              <dl className="list-terms-custom">
                <dt style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Support.</dt>
                <dd><a style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }} href="mailto:support@snowfountain.com">support@snowfountain.com</a></dd>
              </dl>
              <ul className="list-inline list-inline-sm">
                <li><a className="icon icon-sm icon-circle mdi mdi-facebook" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }} href="https://facebook.com" target="_blank" rel="noopener noreferrer"></a></li>
                <li><a className="icon icon-sm icon-circle mdi mdi-instagram" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }} href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a></li>
                <li><a className="icon icon-sm icon-circle mdi mdi-linkedin" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a></li>
                <li><a className="icon icon-sm icon-circle mdi mdi-twitter" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }} href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5 style={{ color: '#fffcd3', fontWeight: '700' }}>Newsletter</h5>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Subscribe to get latest updates and news</p>
              <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline"></div>
                  <input className="form-input" id="footer-email" type="email" name="email" data-constraints="@Email @Required" placeholder="Your Email"/>
                  <label className="form-label" htmlFor="footer-email">E-mail</label>
                </div>
                <div className="button-wrap">
                  <button className="button button-default button-invariable" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="section footer-classic text-center" style={{ background: 'linear-gradient(135deg, #6d3913 0%, #8B4513 50%, #6d3913 100%)', color: '#fff' }}>
        <div className="container">
          <div className="row row-15 justify-content-lg-between align-items-center">
            <div className="col-lg-6 text-lg-left">
              <p className="rights" style={{ color: 'rgba(255, 255, 255, 0.9)' }}><span>&copy;&nbsp;{currentYear}</span> Snow Fountain Consultants. All Rights Reserved.</p>
            </div>
            <div className="col-lg-6">
              <ul className="list-inline list-inline-lg text-uppercase mb-0">
                <li><Link to="/about" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Services</Link></li>
                <li><Link to="/portfolio" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Portfolio</Link></li>
                <li><Link to="/contacts" style={{ color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
