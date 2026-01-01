import React from 'react';

const Contacts = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Contacts</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-lg" style={{
        background: '#fffbeb',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Intersecting gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(210, 105, 30, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, rgba(139, 69, 19, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(205, 133, 63, 0.1) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 230, 0.5)',
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(139, 69, 19, 0.05) 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px, transparent 20px)
          `,
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row row-50">
            <div className="col-lg-6 wow fadeInUp">
              <h3>Get in Touch</h3>
              <p>We are always ready to help you and answer your questions. Feel free to contact us using the information below or send us a message using the contact form.</p>
              
              <div className="row row-30">
                <div className="col-sm-6">
                  <h5>Address</h5>
                  <div className="unit unit-spacing-xs flex-column flex-md-row">
                    <div className="unit-left"><span className="icon mdi mdi-map-marker"></span></div>
                    <div className="unit-body">
                      <p>2130 Fulton Street<br/>San Diego, CA 94117-1080<br/>USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h5>Phone</h5>
                  <div className="unit unit-spacing-xs flex-column flex-md-row">
                    <div className="unit-left"><span className="icon mdi mdi-phone"></span></div>
                    <div className="unit-body">
                      <ul className="list-0">
                        <li><a href="tel:#">1-800-1234-567</a></li>
                        <li><a href="tel:#">1-800-5678-890</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h5>Email</h5>
                  <div className="unit unit-spacing-xs flex-column flex-md-row">
                    <div className="unit-left"><span className="icon mdi mdi-email"></span></div>
                    <div className="unit-body">
                      <ul className="list-0">
                        <li><a href="mailto:#">info@arty.com</a></li>
                        <li><a href="mailto:#">support@arty.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <h5>Opening Hours</h5>
                  <div className="unit unit-spacing-xs flex-column flex-md-row">
                    <div className="unit-left"><span className="icon mdi mdi-clock"></span></div>
                    <div className="unit-body">
                      <p>Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat-Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <h3>Send Us a Message</h3>
              <form className="rd-form rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div className="row row-20">
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input className="form-input" id="contact-name" type="text" name="name" data-constraints="@Required"/>
                      <label className="form-label" htmlFor="contact-name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-wrap">
                      <input className="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required"/>
                      <label className="form-label" htmlFor="contact-email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <input className="form-input" id="contact-phone" type="text" name="phone" data-constraints="@Numeric"/>
                      <label className="form-label" htmlFor="contact-phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="contact-message">Message</label>
                      <textarea className="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                    </div>
                  </div>
                </div>
                <button className="button button-default" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
