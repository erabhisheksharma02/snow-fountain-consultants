import React from 'react';

const About = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">About Us</h2>
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
              <h3>About Our Company</h3>
              <p>Arty is an award-winning architecture company that provides its clients with a wide range of architectural services. We are committed to excellence and strive to provide our clients with the best possible solutions. Our team has over 19 years of experience in the industry and has worked on various projects.</p>
              <p>We specialize in planning & development, project management, structural engineering, interior design, 3D modeling, and more. We take pride in our ability to deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="row row-30">
                <div className="col-sm-6">
                  <img src="/images/about-1-390x332.jpg" alt="" width="390" height="332"/>
                </div>
                <div className="col-sm-6">
                  <img src="/images/about-2-390x332.jpg" alt="" width="390" height="332"/>
                </div>
                <div className="col-sm-6">
                  <img src="/images/about-3-390x332.jpg" alt="" width="390" height="332"/>
                </div>
                <div className="col-sm-6">
                  <img src="/images/about-4-390x332.jpg" alt="" width="390" height="332"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-lg bg-gray-100">
        <div className="container">
          <h3 className="text-center">Our Services</h3>
          <div className="row row-40 row-md-50">
            <div className="col-sm-6 col-lg-4 wow fadeInUp">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon construction-icon-12"></div>
                <h5 className="box-icon-modern-title">Architecture</h5>
                <div className="box-icon-modern-decor"></div>
                <p className="box-icon-modern-text">We provide comprehensive architectural services including planning, development, and structural engineering.</p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon construction-icon-13"></div>
                <h5 className="box-icon-modern-title">3D Modeling</h5>
                <div className="box-icon-modern-decor"></div>
                <p className="box-icon-modern-text">Our team creates stunning 3D visualizations and renderings for interior and exterior projects.</p>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <article className="box-icon-modern">
                <div className="box-icon-modern-icon construction-icon-14"></div>
                <h5 className="box-icon-modern-title">Interior Design</h5>
                <div className="box-icon-modern-decor"></div>
                <p className="box-icon-modern-text">We offer complete interior design solutions that combine functionality with aesthetics.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
