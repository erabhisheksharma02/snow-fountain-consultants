import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="pre-footer-classic bg-gray-700 context-dark">
        <div className="container">
          <div className="row row-30 justify-content-lg-between">
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <h5>Location</h5>
              <ul className="list list-sm">
                <li><p>1418 Riverwood Drive,</p></li>
                <li><p>Suite 3845 Cottonwood,</p></li>
                <li><p>CA 96022</p></li>
                <li><p>United States</p></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <h5>Contacts</h5>
              <dl className="list-terms-custom">
                <dt>Ph.</dt>
                <dd><a className="link-default" href="tel:#">1-300-123-1234</a></dd>
              </dl>
              <dl className="list-terms-custom">
                <dt>Email.</dt>
                <dd><a className="link-default" href="mailto:#">Info@demolink.org</a></dd>
              </dl>
              <ul className="list-inline list-inline-sm">
                <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-facebook" href="#"></a></li>
                <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-instagram" href="#"></a></li>
                <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-behance" href="#"></a></li>
                <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-twitter" href="#"></a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Newsletter</h5>
              <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="form-wrap form-wrap-icon">
                  <div className="form-icon mdi mdi-email-outline"></div>
                  <input className="form-input" id="footer-email" type="email" name="email" data-constraints="@Email @Required"/>
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
      <footer className="section footer-classic context-dark text-center">
        <div className="container">
          <div className="row row-15 justify-content-lg-between">
            <div className="col-lg-4 col-xl-3 text-lg-left">
              <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span>. All Rights Reserved. Design by <a href="https://www.templatemonster.com">TemplateMonster</a></p>
            </div>
            <div className="col-lg-5 col-xl-6">
              <ul className="list-inline list-inline-lg text-uppercase">
                <li><a href="#">About us</a></li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
