import React from 'react';

const Portfolio = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Portfolio</h2>
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
              <h3 className="text-center mb-4">Our Portfolio</h3>
              <p className="text-center">Showcasing 25+ years of excellence in civil engineering consultancy. View our completed projects across Government, Public, and Private sectors.</p>
            </div>
          </div>

          <div className="row row-30">
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-1-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Government Projects</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Infrastructure Development</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-2-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Commercial Buildings</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Design & Consultancy</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-3-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Residential Complex</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Planning & Execution</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-4-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Industrial Projects</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Testing & Quality Control</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-5-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Public Sector</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Comprehensive Solutions</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item" style={{
                backgroundImage: 'url(/images/projects-6-518x373.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '15px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  padding: '20px',
                  color: 'white'
                }}>
                  <h5 style={{color: 'white', marginBottom: '5px'}}>Highway & Roads</h5>
                  <p style={{margin: 0, fontSize: '14px'}}>Infrastructure Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
