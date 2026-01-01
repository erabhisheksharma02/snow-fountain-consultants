import React from 'react';

const Projects = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Our Projects</h2>
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
          <h3 className="text-center mb-5">Latest Projects</h3>
          
          <div className="row row-30 row-xxl-100 row-flex">
            <div className="col-sm-6 col-lg-4 wow fadeInRight">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-1-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Government Infrastructure</a></h5>
                  <p className="font-weight-regular">We deliver reliable civil engineering solutions for government infrastructure projects across India.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-2-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Commercial Complex</a></h5>
                  <p className="font-weight-regular">Complete consultancy for commercial buildings with modern engineering solutions.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.4s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-3-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Residential Projects</a></h5>
                  <p className="font-weight-regular">Quality residential project consultancy ensuring safety and compliance.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-4-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Industrial Facilities</a></h5>
                  <p className="font-weight-regular">Specialized industrial engineering and testing services with NABL certification.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.4s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-5-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Public Sector Works</a></h5>
                  <p className="font-weight-regular">Comprehensive public sector project management and execution.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.6s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-6-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Highway & Roads</a></h5>
                  <p className="font-weight-regular">Expert highway and road construction consultancy services.</p>
                  <a className="button button-default" href="#">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
