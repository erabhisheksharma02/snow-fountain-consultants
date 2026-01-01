import React from 'react';

const Services = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Our Services</h2>
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
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h3 className="text-center mb-5">Civil Engineering Services</h3>
              <p className="text-center mb-5">Snow Fountain Consultants provides comprehensive civil engineering consultancy services with over 25 years of experience in the industry.</p>
            </div>
          </div>

          <div className="row row-40 row-md-50">
            <div className="col-sm-6 col-lg-4 wow fadeInUp">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-city"></div>
                  <h5 className="icon-classic-title"><a href="#">Planning & Development</a></h5>
                </div>
                <p className="icon-classic-text">Comprehensive planning and development services for residential, commercial, and industrial projects.</p>
              </article>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-clipboard-check"></div>
                  <h5 className="icon-classic-title"><a href="#">Project Management</a></h5>
                </div>
                <p className="icon-classic-text">Professional project management ensuring timely delivery and quality execution of all projects.</p>
              </article>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-anvil"></div>
                  <h5 className="icon-classic-title"><a href="#">Structural Engineering</a></h5>
                </div>
                <p className="icon-classic-text">Expert structural engineering services with NABL accredited lab testing facilities.</p>
              </article>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-flask"></div>
                  <h5 className="icon-classic-title"><a href="#">Testing & Quality Control</a></h5>
                </div>
                <p className="icon-classic-text">ISO 9001:2015 certified quality control with state-of-the-art testing facilities.</p>
              </article>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-draw"></div>
                  <h5 className="icon-classic-title"><a href="#">Design Consultancy</a></h5>
                </div>
                <p className="icon-classic-text">Innovative design solutions for Government, Public, and Private sector projects.</p>
              </article>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <article className="box-icon-classic">
                <div className="icon-classic-main">
                  <div className="icon-classic-icon mdi mdi-file-document"></div>
                  <h5 className="icon-classic-title"><a href="#">Documentation & Compliance</a></h5>
                </div>
                <p className="icon-classic-text">Complete documentation and regulatory compliance services for all project types.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
