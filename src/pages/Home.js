import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// ... [KEEP ALL YOUR CSS STRINGS AND STYLES AS IS] ...
// (Skipping large CSS blocks to save space, keeping treeStyles and standard styles)

const treeStyles = `
  /* ... keep your existing treeStyles string here ... */
  .tree-container { width: 100%; overflow: auto; padding: 20px 10px; text-align: center; background-color: #fff; display: flex; justify-content: center; cursor: pointer; position: relative; }
  .tree { transform: scale(0.65); transform-origin: top center; width: 100%; transition: transform 0.4s ease-in-out; }
  .tree-container:hover .tree { transform: scale(1.1); }
  @media (min-width: 1200px) { .tree { transform: scale(0.75); } .tree-container:hover .tree { transform: scale(1.15); } }
  @media (min-width: 1600px) { .tree { transform: scale(0.85); } .tree-container:hover .tree { transform: scale(1.2); } }
  @media (min-width: 1920px) { .tree { transform: scale(1); } .tree-container:hover .tree { transform: scale(1.25); } }
  .tree ul { padding-top: 8px; position: relative; transition: all 0.5s; display: flex; justify-content: center; margin: 0; padding-left: 0; }
  .tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 8px 1px 0 1px; transition: all 0.5s; }
  .tree li::before, .tree li::after { content: ''; position: absolute; top: 0; right: 50%; border-top: 1px solid #8B4513; width: 50%; height: 8px; }
  .tree li::after { right: auto; left: 50%; border-left: 1px solid #8B4513; }
  .tree li:first-child::before, .tree li:last-child::after { border: 0 none; }
  .tree li:last-child::before { border-right: 2px solid #8B4513; border-radius: 0 5px 0 0; }
  .tree li:first-child::after { border-radius: 5px 0 0 0; }
  .tree ul ul::before { content: ''; position: absolute; top: 0; left: 50%; border-left: 1px solid #8B4513; width: 0; height: 8px; }
  .tree li .node { border: 1px solid #8B4513; padding: 4px 6px; text-decoration: none; color: #333; font-family: 'Arial', sans-serif; font-size: 10px; font-weight: 700; display: inline-block; border-radius: 5px; transition: all 0.3s; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); min-width: 70px; max-width: 120px; position: relative; z-index: 1; line-height: 1.2; }
  .tree li .node:hover, .tree li .node:hover+ul li .node { background: #fffcd3; border-color: #D2691E; transform: scale(1.1); box-shadow: 0 5px 10px rgba(0,0,0,0.2); z-index: 2; }
  .node.root { background: #F4A460; font-size: 12px; color: #000; text-transform: uppercase; font-weight: 800; padding: 8px 15px; min-width: 130px; }
  .node.level-1 { background: #FFF8DC; }
  .node.level-2 { background: #FFE4E1; }
  .node.level-3 { background: #E0FFFF; }
  .vertical-list > ul { flex-direction: column; align-items: center; }
  .vertical-list > ul > li { padding: 4px 0; }
  .vertical-list > ul > li::before, .vertical-list > ul > li::after { display: none; }
  .vertical-list > ul > li { position: relative; }
  .vertical-list > ul > li:not(:first-child)::before { content: ''; display: block; position: absolute; top: -4px; left: 50%; width: 1px; height: 4px; background: #8B4513; }
`;

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const slides = [
    '/images/slide1_merged.jpg',
    '/images/slide2_merged.jpg',
    '/images/slide3_merged.jpg',
    '/images/slide4_merged.jpg',
    '/images/slide5_merged.jpg'
  ];

  // Slide captions for the horizontal footer
  const slideInfo = [
    {
      title: 'Awards and Achievements',
      description: '10+ National Awards | 57+ Successful Projects | ISO 9001:2015 Certified | NABL Accredited Lab'
    },
    {
      title: 'Office Culture',
      description: 'Professional Work Environment | State-of-the-art Facilities | Collaborative Workspace'
    },
    {
      title: 'Testing Laboratory',
      description: 'NABL Accredited Lab | Advanced Testing Equipment | Quality Assurance Excellence'
    },
    {
      title: 'Team Excellence',
      description: '25+ Years Experience | Expert Engineers | Qualified Professionals | Dedicated Team'
    },
    {
      title: 'Project Gallery',
      description: 'Infrastructure Development | Civil Engineering Solutions | Successful Project Completion'
    }
  ];

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { 
          element: '#tour-welcome', 
          popover: { title: 'Welcome to Snow Fountain', description: 'We are an ISO 9001:2015 certified civil engineering company with 25+ years of excellence.', side: "left", align: 'start' } 
        },
        { 
          element: '#tour-carousel', 
          popover: { title: 'Our Gallery', description: 'Take a look at our latest office culture, labs, and team moments.', side: "bottom", align: 'start' } 
        },
        { 
          element: '#key-sectors-chart', 
          popover: { title: 'Our Key Sectors', description: 'Explore our wide range of engineering and consultancy services.', side: "top", align: 'start' } 
        },
        { 
          element: '#tour-projects', 
          popover: { title: 'Latest Projects', description: 'Explore our recent architectural and construction masterpieces.', side: "top", align: 'start' } 
        },
        { 
          element: '#tour-stats', 
          popover: { title: 'Our Achievements', description: 'We have won 10+ awards and completed 57+ projects successfully.', side: "top", align: 'start' } 
        }
      ]
    });
    driverObj.drive();
  };

  useEffect(() => {
    // Show loader for 3 seconds on every page load
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    if (window.jQuery && window.plugins && typeof window.jQuery.fn.RDNavbar !== 'undefined') {
        window.jQuery('[data-rd-navbar]').each(function() {
          if (!window.jQuery(this).data('rdNavbar')) { }
        });
    }
    
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <>
      <style>
        {`
          /* ... KEEP ALL YOUR EXISTING CSS STYLES HERE ... */
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes gradientText { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .animated-welcome-text { animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; background: linear-gradient(45deg, #8B4513, #D2691E, #8B4513); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: fadeInUp 1s ease-out forwards, gradientText 3s ease infinite; }
          .text-decorative { padding-left: 30px !important; }
          .text-decorative:before { content: '' !important; position: absolute !important; top: 0 !important; left: 0 !important; width: 4px !important; height: 100% !important; background: linear-gradient(180deg, #8B4513 0%, #D2691E 50%, #8B4513 100%) !important; transform: none !important; }
          .modern-carousel-container { position: relative; width: 100%; height: 600px; overflow: hidden; background: #000; }
          .carousel-slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 1s ease-in-out; }
          .carousel-slide.active { opacity: 1; z-index: 1; }
          .carousel-image { width: 100%; height: 100%; object-fit: cover; }
          .carousel-controls { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px; z-index: 10; }
          .carousel-dot { width: 15px; height: 15px; border-radius: 10px; background: rgba(255, 255, 255, 0.5); cursor: pointer; transition: all 0.3s ease; }
          .carousel-dot.active { width: 40px; background: rgba(255, 255, 255, 0.9); }
          .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.9); color: #333; border: none; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: all 0.3s; }
          .nav-arrow:hover { background: rgba(255, 255, 255, 1); transform: translateY(-50%) scale(1.1); }
          .nav-prev { left: 20px; }
          .nav-next { right: 20px; }
          .tour-btn { background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%); background-size: 200% auto; color: white; border: none; padding: 12px 30px; border-radius: 50px; font-size: 1rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; box-shadow: 0 10px 25px rgba(139, 69, 19, 0.4); transition: all 0.4s ease; display: inline-flex; align-items: center; gap: 10px; border: 2px solid transparent; }
          .tour-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(139, 69, 19, 0.6); background-position: right center; border-color: rgba(210, 105, 30, 0.3); }
          .rd-navbar-nav { background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%) !important; background-size: 200% auto; }
          .rd-navbar-wrap, .rd-navbar, .rd-navbar--is-stuck, .rd-navbar--is-clone { z-index: 1000 !important; }
          .page { overflow: visible !important; }
          .page-header { position: sticky !important; top: 0 !important; z-index: 1000 !important; background-color: #ffffff !important; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important; }
          .rd-navbar--is-stuck .rd-navbar-brand, .rd-navbar--is-clone .rd-navbar-brand { display: flex !important; position: fixed !important; top: 10px !important; left: 20px !important; z-index: 1001 !important; transition: all 0.3s ease !important; }
          .rd-navbar--is-stuck .rd-navbar-brand img, .rd-navbar--is-clone .rd-navbar-brand img { max-height: 50px !important; width: auto !important; transition: all 0.3s ease !important; }
          @media (max-width: 991px) { .pill-navbar { width: 90% !important; padding: 10px 15px !important; justify-content: space-between !important; } .nav-links-container { display: ${isMobileMenuOpen ? 'flex' : 'none'} !important; flex-direction: column; position: absolute; top: 70px; left: 0; width: 100%; background: white; padding: 20px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); z-index: 999; gap: 15px !important; } .mobile-menu-toggle { display: block !important; } .nav-divider, .search-contact-container { display: none !important; } }
          .rd-navbar-brand { transition: all 0.3s ease !important; }
          ${treeStyles}
        
          @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}
      </style>

      {/* Animated Loader */}
      {isLoading && (
        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100vh', 
          background: 'linear-gradient(135deg, #fffbeb 0%, #fff8f0 50%, #fffbeb 100%)',
          zIndex: 9999, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          animation: 'fadeOut 0.5s ease-out 2.5s forwards'
        }}>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '400px',
            padding: '30px'
          }}>
            {/* Spinning Logo/Circle */}
            <div style={{ 
              width: '60px', 
              height: '60px', 
              margin: '0 auto 20px',
              border: '4px solid rgba(139, 69, 19, 0.2)',
              borderTop: '4px solid #8B4513',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            
            {/* Company Name */}
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '15px',
              animation: 'slideUp 0.6s ease-out'
            }}>
              Snow Fountain Group
            </h2>
            
            {/* Key Points */}
            <div style={{ 
              fontSize: '0.85rem', 
              color: '#2c2416',
              lineHeight: '1.8',
              animation: 'slideUp 0.6s ease-out 0.2s backwards'
            }}>
              <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ color: '#8B4513', fontSize: '1.2rem' }}>✓</span>
                <span>ISO 9001:2015 Certified</span>
              </p>
              <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ color: '#8B4513', fontSize: '1.2rem' }}>✓</span>
                <span>NABL Accredited Lab</span>
              </p>
              <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ color: '#8B4513', fontSize: '1.2rem' }}>✓</span>
                <span>25+ Years Experience</span>
              </p>
              <p style={{ margin: '5px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span style={{ color: '#8B4513', fontSize: '1.2rem' }}>✓</span>
                <span>10+ National Awards</span>
              </p>
            </div>
            
            {/* Loading Text */}
            <p style={{ 
              marginTop: '20px',
              fontSize: '0.75rem',
              color: '#8B4513',
              fontWeight: '500',
              letterSpacing: '2px',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              LOADING...
            </p>
          </div>
        </div>
      )}
      
      <div className="page" style={{ 
        background: `
          repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(139, 69, 19, 0.03) 50px, rgba(139, 69, 19, 0.03) 51px),
          repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(210, 105, 30, 0.03) 50px, rgba(210, 105, 30, 0.03) 51px),
          repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(139, 69, 19, 0.02) 100px, rgba(139, 69, 19, 0.02) 101px),
          repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(210, 105, 30, 0.02) 100px, rgba(210, 105, 30, 0.02) 101px),
          linear-gradient(135deg, #fffbeb 0%, #fff8f0 50%, #fffbeb 100%)
        `,
        minHeight: '100vh'
      }}>
        {/* Marquee Section with Address */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #8B0000 100%)', padding: '5px 0', boxShadow: '0 2px 10px rgba(139, 0, 0, 0.5)', borderBottom: '2px solid #FFD700', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: '80%', overflow: 'hidden', padding: '0 15px' }}>
              <marquee behavior="scroll" direction="left" scrollamount="5" style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: '600', letterSpacing: '0.3px', lineHeight: '1.2' }}>
                🎓 Training Started for Civil Engineering and Diploma (Civil) Students!!! 📚 Learn from Industry Experts with 25+ Years Experience | NABL Accredited Lab Training | ISO 9001:2015 Certified Institute | For Details Call us on: +91 7897651111 📞 | Limited Seats Available - Enroll Now! 🎓
              </marquee>
            </div>
            <div style={{ width: '20%', padding: '0 15px', textAlign: 'center', borderLeft: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: '600', letterSpacing: '0.3px', lineHeight: '1.2', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                5/259, Vikas Nagar, Lucknow, U.P., India
              </span>
            </div>
        </div>

        {/* Social Media Sidebar */}
        <div style={{ position: 'fixed', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #1877f2, #0d65d9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 3px 10px rgba(24, 119, 242, 0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(24, 119, 242, 0.3)'; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 3px 10px rgba(29, 161, 242, 0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(29, 161, 242, 0.3)'; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #E1306C, #C13584, #833AB4, #5B51D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 3px 10px rgba(225, 48, 108, 0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(225, 48, 108, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(225, 48, 108, 0.3)'; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #0077B5, #005885)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 3px 10px rgba(0, 119, 181, 0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(0, 119, 181, 0.3)'; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://wa.me/917897651111" target="_blank" rel="noopener noreferrer" style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #25D366, #1ebe57)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 3px 10px rgba(37, 211, 102, 0.3)', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 3px 10px rgba(37, 211, 102, 0.3)'; }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
        </div>

        {/* Pill Navbar */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '50px', marginBottom: '20px', position: 'sticky', top: '40px', zIndex: 1000 }}>
             {/* ... Navbar code ... */}
             <div className="pill-navbar" style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '19px', padding: '8px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px', width: '87%', border: '1px solid rgba(139, 69, 19, 0.08)', position: 'relative' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
                    <img src="/images/trademark-removebg-preview.png" alt="Snow Fountain" style={{ height: '50px', width: 'auto' }} />
                </Link>
                {/* ... other nav items ... */}
                <nav className="nav-links-container">
                    <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                         {['Home', 'About', 'Services', 'Projects', 'Portfolio', 'Training'].map((item) => (
                             <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#4a4a4a', fontWeight: '500', fontSize: '0.9rem' }}>{item}</Link></li>
                         ))}
                    </ul>
                </nav>
             </div>
        </div>

        {/* Full Width Carousel Section */}
        <section style={{ width: '100%', padding: '0 100px', marginTop: '20px' }}>
          <div className="modern-carousel-container" id="tour-carousel" style={{ width: '100%', height: 'calc(100vh - 180px)', minHeight: '400px', maxHeight: '600px', position: 'relative', background: '#000', overflow: 'hidden', borderRadius: '20px 20px 0 0', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            {/* ... Carousel background gradients ... */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 30% 50%, rgba(210, 105, 30, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(139, 69, 19, 0.12) 0%, transparent 50%)`, pointerEvents: 'none', zIndex: 0 }}></div>
            
            {/* ... Slides Loop ... */}
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`} style={{ position: 'absolute', width: '100%', height: '100%', opacity: index === currentSlide ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
                <img src={slide} alt={`Project ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}

            {/* ... Navigation Arrows & Dots ... */}
            <button className="nav-arrow nav-prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} style={{ position: 'absolute', left: '20px', top: '50%' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="nav-arrow nav-next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} style={{ position: 'absolute', right: '20px', top: '50%' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>

          {/* Horizontal Scrolling Info Bar - Carousel Footer */}
          <div style={{
            width: '100%',
            marginTop: '0',
            background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
            borderRadius: '0 0 20px 20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 100}%)`,
            }}>
              {slideInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    minWidth: '100%',
                    padding: '25px 40px',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: '#fffcd3',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    {info.title}
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '400',
                    margin: 0,
                    color: 'rgba(255, 255, 255, 0.95)',
                    letterSpacing: '0.5px'
                  }}>
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <button className="tour-btn" onClick={startTour}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Take a Tour
            </button>
          </div>
        </section>

        {/* ... [Rest of sections remain unchanged] ... */}
        <section className="section context-dark section-jumbotron bg-cover" style={{ background: '#fffbeb', position: 'relative', overflow: 'hidden', padding: '1px 70px' }}>
            {/* ... Welcome and Key Sectors ... */}
            <div className="container-fluid" style={{ maxWidth: '1600px' }}>
            <div className="row align-items-center" style={{ minHeight: '600px' }}>
              <div className="col-lg-6 col-md-12" style={{ padding: '30px' }}>
                <div id="tour-welcome" style={{ background: 'rgba(255, 251, 235, 0.85)', padding: '40px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', backdropFilter: 'blur(3px)', border: '1px solid rgba(139, 69, 19, 0.1)' }}>
                  <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold' }}>
                    Welcome to Snow Fountain Group
                  </h1>
                  <p style={{ color: '#2c2416', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1rem' }}>
                    <strong>M/s Snow Fountain Consultants (SFC)</strong>, is a rapidly growing multifarious company in civil engineering having more than 25 years of experience. Its Regd. office is in Lucknow (Uttar Pradesh). We are an <strong>ISO 9001:2015 certified company</strong> and also have a <strong>NABL accredited lab</strong>.
                  </p>
                  <p style={{ color: '#2c2416', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1rem' }}>
                    SFC is a company promoted by a group of qualified Engineers and Professionals, with the aim of providing quality services in the field of Civil Engineering.
                  </p>
                  <p style={{ color: '#2c2416', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify', marginBottom: '1rem' }}>
                    Apart from catering to the domestic demand, the management at SFC extends its operations by means of venturing into the Government Sector, Public Sector, Private Sector houses, that provides comprehensive total solutions to Civil Engineering Consultancy with implementation of Information technology for different Govt. / Pvt. Institutions / Organizations across the country.
                  </p>
                  <p style={{ color: '#2c2416', fontSize: '1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                    <strong>Snow Fountain Consultants</strong> infuses the power of creativity converging with high-end technology to optimize business value. We are known for our timely completion of projects, quality of work and total commitment to our clients.
                  </p>
                </div>
              </div>

              <div className="col-lg-6 col-md-12" style={{ padding: '30px' , marginTop: '-249px' }} id="key-sectors-chart">
                <div style={{ background: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(139, 69, 19, 0.15)', border: '2px solid rgba(139, 69, 19, 0.1)' , marginBottom: '108px' }}>
                  <img 
                    src="/images/key sector.jpg" 
                    alt="Key Sectors - Snow Fountain Consultants" 
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '10px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fff8f0 50%, #fffbeb 100%)', padding: '80px 100px' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '50px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Our Services
            </h2>
            
            {/* First Row - 3 Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '30px' }}>
              {/* Card 1 - Civil Engineering */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide1_merged.jpg" alt="Civil Engineering Consultant" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#8B4513', marginBottom: '15px' }}>Civil Engineering Consultant</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.95rem', lineHeight: '1.6', textAlign: 'justify', marginBottom: '15px' }}>
                    Snow Fountain Consultants with its strong engineering roots has adopted the latest innovative civil engineering offering end to end engineering solutions...
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}>Read more →</a>
                </div>
              </div>

              {/* Card 2 - Infrastructure Engineering */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide2_merged.jpg" alt="Infrastructure Engineering Consultant" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#8B4513', marginBottom: '15px' }}>Infrastructure Engineering Consultant</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.95rem', lineHeight: '1.6', textAlign: 'justify', marginBottom: '15px' }}>
                    As Infrastructure Consultant we prepare Detail Project Report for water supply, sewerage, drainage, road, residential and commercial projects...
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}>Read more →</a>
                </div>
              </div>

              {/* Card 3 - Engineering Survey */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide3_merged.jpg" alt="Engineering Survey" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#8B4513', marginBottom: '15px' }}>Engineering Survey</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.95rem', lineHeight: '1.6', textAlign: 'justify', marginBottom: '15px' }}>
                    We carry out different Engineering Survey of land and building using GPS and TS to identify exact location and specifications around land like pond, reservoirs, rivers etc. ...
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.9rem' }}>Read more →</a>
                </div>
              </div>
            </div>

            {/* Second Row - 4 Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3 , 1fr)', gap: '30px' }}>
              {/* Card 4 - Project Management */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide4_merged.jpg" alt="Project Management Consultant" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#8B4513', marginBottom: '12px' }}>Project Management Consultant</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '12px' }}>
                    Snow Fountain helps clients to make better decisions for complex projects using data-rich, virtual and collaborative technologies...
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.85rem' }}>Read more →</a>
                </div>
              </div>

              {/* Card 5 - Structural Engineering */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide5_merged.jpg" alt="Structural Engineering Consultant" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#8B4513', marginBottom: '12px' }}>Structural Engineering Consultant</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '12px' }}>
                    We are one of the renowned consultants with a heritage and track record. We are visionary owners and developers to deliver iconic projects...
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.85rem' }}>Read more →</a>
                </div>
              </div>

              {/* Card 6 - Valuation of Land & Building */}
              <div style={{ background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(139, 69, 19, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 69, 19, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)'; }}>
                <img src="/images/slide1_merged.jpg" alt="Valuation of Land & Building" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#8B4513', marginBottom: '12px' }}>Valuation of Land & Building</h3>
                  <p style={{ color: '#2c2416', fontSize: '0.9rem', lineHeight: '1.5', textAlign: 'justify', marginBottom: '12px' }}>
                    We are registered Valuer companiled with different banks. We carry out valuation of property such as buildings, Factories, Houses, Land etc....
                  </p>
                  <a href="/services" style={{ color: '#D2691E', fontWeight: '600', textDecoration: 'none', fontSize: '0.85rem' }}>Read more →</a>
                </div>
              </div>

         
            </div>
          </div>
        </section>

        <section className="section section-lg bg-default section-lined" id="tour-projects">
            {/* ... Project grids ... */}
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Home;