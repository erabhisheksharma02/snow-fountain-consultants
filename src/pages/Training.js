import React from 'react';

const Training = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Training Programs</h2>
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
          <div className="row justify-content-center mb-5">
            <div className="col-lg-10">
              <h3 className="text-center mb-4">Professional Training & Development</h3>
              <p className="text-center">Snow Fountain Consultants offers comprehensive training programs for civil engineering professionals and students. Learn from experts with 25+ years of industry experience.</p>
            </div>
          </div>

          <div className="row row-40 row-md-50">
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-school"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>Structural Engineering</h5>
                <p>Hands-on training in structural design, analysis, and quality control with practical lab sessions.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 3 months</li>
                  <li>✓ Certification included</li>
                  <li>✓ Lab access provided</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-flask"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>Material Testing</h5>
                <p>Learn testing procedures in our NABL accredited laboratory with experienced professionals.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 2 months</li>
                  <li>✓ NABL certified training</li>
                  <li>✓ Internship opportunity</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-clipboard-check"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>Project Management</h5>
                <p>Comprehensive project management training covering planning, execution, and quality assurance.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 2 months</li>
                  <li>✓ Real project exposure</li>
                  <li>✓ Industry certification</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-desktop-mac"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>CAD & Design Software</h5>
                <p>Master AutoCAD, STAAD Pro, and other essential civil engineering design software.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 3 months</li>
                  <li>✓ Software certification</li>
                  <li>✓ Project-based learning</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-certificate"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>Quality Assurance</h5>
                <p>ISO 9001:2015 quality management training for civil engineering projects.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 1 month</li>
                  <li>✓ ISO certification prep</li>
                  <li>✓ Audit training included</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div style={{
                background: 'rgba(255, 255, 255, 0.7)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)',
                height: '100%',
                border: '1px solid rgba(139, 69, 19, 0.1)'
              }}>
                <div style={{fontSize: '40px', color: '#8B4513', marginBottom: '15px'}}>
                  <i className="mdi mdi-account-group"></i>
                </div>
                <h5 style={{color: '#8B4513', marginBottom: '15px'}}>Internship Program</h5>
                <p>6-month comprehensive internship program working on live projects with our team.</p>
                <ul style={{listStyle: 'none', padding: 0}}>
                  <li>✓ Duration: 6 months</li>
                  <li>✓ Stipend provided</li>
                  <li>✓ Job opportunity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a href="/contacts" className="button button-primary" style={{
              background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
              padding: '15px 40px',
              borderRadius: '50px',
              color: 'white',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              boxShadow: '0 5px 20px rgba(139, 69, 19, 0.3)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >Enroll Now</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
