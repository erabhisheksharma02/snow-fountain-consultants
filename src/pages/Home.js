import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// 1. UPDATED COMPACT STYLES (Non-Scrollable, Smaller)
const treeStyles = `
  /* Tree Container - Non Scrollable */
  .tree-container {
    width: 100%;
    overflow: hidden; /* Hides scrollbars */
    padding: 30px 0;
    text-align: center;
    background-color: #fff;
    display: flex;
    justify-content: center; /* Centers the whole chart */
  }

  .tree {
    transform: scale(0.9); /* Slightly scales down the whole tree to fit better */
    transform-origin: top center;
  }

  /* Reset list styles */
  .tree ul {
    padding-top: 15px; /* Reduced padding */
    position: relative;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    margin: 0;
    padding-left: 0;
  }

  .tree li {
    float: left; text-align: center;
    list-style-type: none;
    position: relative;
    padding: 15px 2px 0 2px; /* Reduced padding between branches to fit horizontally */
    transition: all 0.5s;
  }

  /* Connectors (Lines) */
  .tree li::before, .tree li::after {
    content: '';
    position: absolute; top: 0; right: 50%;
    border-top: 2px solid #8B4513;
    width: 50%; height: 15px; /* Shorter lines */
  }
  .tree li::after {
    right: auto; left: 50%;
    border-left: 2px solid #8B4513;
  }

  /* Remove connectors from first/last children appropriately */
  .tree li:first-child::before, .tree li:last-child::after {
    border: 0 none;
  }
  .tree li:last-child::before {
    border-right: 2px solid #8B4513;
    border-radius: 0 5px 0 0;
  }
  .tree li:first-child::after {
    border-radius: 5px 0 0 0;
  }

  /* Remove connectors from the root */
  .tree ul ul::before {
    content: '';
    position: absolute; top: 0; left: 50%;
    border-left: 2px solid #8B4513;
    width: 0; height: 15px; /* Shorter lines */
  }

  /* THE BOXES (Nodes) - SMALLER SIZE */
  .tree li .node {
    border: 2px solid #8B4513;
    padding: 6px 8px; /* Much smaller padding */
    text-decoration: none;
    color: #333;
    font-family: 'Arial', sans-serif;
    font-size: 11px; /* Smaller font */
    font-weight: 700;
    display: inline-block;
    border-radius: 6px;
    transition: all 0.3s;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    min-width: 80px; /* Reduced min-width */
    max-width: 130px; /* Prevent wide boxes */
    position: relative;
    z-index: 1;
    line-height: 1.3;
  }

  .tree li .node:hover, .tree li .node:hover+ul li .node {
    background: #fffcd3;
    border-color: #D2691E;
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    z-index: 2;
  }

  /* COLOR THEMES */
  .node.root { 
    background: #F4A460; 
    font-size: 14px; /* Root slightly larger */
    color: #000; 
    text-transform: uppercase; 
    font-weight: 800; 
    padding: 10px 20px; 
    min-width: 150px;
  }
  .node.level-1 { background: #FFF8DC; }
  .node.level-2 { background: #FFE4E1; }
  .node.level-3 { background: #E0FFFF; }

  /* Vertical Layout helper for narrow branches */
  .vertical-list > ul {
    flex-direction: column;
    align-items: center;
  }
  .vertical-list > ul > li {
    padding: 8px 0; /* Reduced vertical gap */
  }
  .vertical-list > ul > li::before, .vertical-list > ul > li::after {
    display: none; 
  }
  .vertical-list > ul > li {
    position: relative;
  }
  .vertical-list > ul > li:not(:first-child)::before {
    content: '';
    display: block;
    position: absolute;
    top: -8px; /* Adjusted for smaller gap */
    left: 50%;
    width: 2px;
    height: 8px;
    background: #8B4513;
  }
`;

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const slides = [
    '/images/slide1_merged.jpg',
    '/images/slide2_merged.jpg',
    '/images/slide3_merged.jpg',
    '/images/slide4_merged.jpg',
    '/images/slide5_merged.jpg'
  ];

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      steps: [
        { 
          element: '#tour-welcome', 
          popover: { 
            title: 'Welcome to Snow Fountain', 
            description: 'We are an ISO 9001:2015 certified civil engineering company with 25+ years of excellence.',
            side: "left", 
            align: 'start' 
          } 
        },
        { 
          element: '#tour-carousel', 
          popover: { 
            title: 'Our Gallery', 
            description: 'Take a look at our latest office culture, labs, and team moments.',
            side: "bottom", 
            align: 'start' 
          } 
        },
        { 
          element: '#key-sectors-chart', 
          popover: { 
            title: 'Our Key Sectors', 
            description: 'Explore our wide range of engineering and consultancy services.',
            side: "top", 
            align: 'start' 
          } 
        },
        { 
          element: '#tour-projects', 
          popover: { 
            title: 'Latest Projects', 
            description: 'Explore our recent architectural and construction masterpieces.',
            side: "top", 
            align: 'start' 
          } 
        },
        { 
          element: '#tour-stats', 
          popover: { 
            title: 'Our Achievements', 
            description: 'We have won 10+ awards and completed 57+ projects successfully.',
            side: "top", 
            align: 'start' 
          } 
        }
      ]
    });
    
    driverObj.drive();
  };

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (window.jQuery && window.plugins) {
      if (typeof window.jQuery.fn.RDNavbar !== 'undefined') {
        window.jQuery('[data-rd-navbar]').each(function() {
          if (!window.jQuery(this).data('rdNavbar')) {
            // Only initialize if not already initialized
          }
        });
      }
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
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradientText {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animated-welcome-text {
            animation: fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            background: linear-gradient(45deg, #8B4513, #D2691E, #8B4513);
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out forwards, gradientText 3s ease infinite;
          }
          
          /* Remove horizontal line and add vertical line */
          .text-decorative {
            padding-left: 30px !important;
          }
          .text-decorative:before {
            content: '' !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 4px !important;
            height: 100% !important;
            background: linear-gradient(180deg, #8B4513 0%, #D2691E 50%, #8B4513 100%) !important;
            transform: none !important;
          }
          .modern-carousel-container {
            position: relative;
            width: 100%;
            height: 400px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          }
          .carousel-slide {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%; opacity: 0;
            transition: opacity 1s ease-in-out, transform 6s ease;
            transform: scale(1.05);
          }
          .carousel-slide.active { opacity: 1; transform: scale(1); z-index: 1; }
          .carousel-image { width: 100%; height: 100%; object-fit: cover; }
          .carousel-controls {
            position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
            display: flex; gap: 12px; z-index: 10; padding: 10px 20px;
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.4) 0%, rgba(210, 105, 30, 0.4) 100%);
            backdrop-filter: blur(10px);
            border-radius: 30px; 
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }
          .carousel-dot {
            width: 12px; height: 12px; border-radius: 50%; 
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6));
            cursor: pointer; transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
          .carousel-dot.active {
            background: linear-gradient(135deg, #fff, #fef9e7);
            transform: scale(1.3); 
            box-shadow: 0 0 15px rgba(255,255,255,0.8), 0 0 25px rgba(210, 105, 30, 0.5);
          }
          .nav-arrow {
            position: absolute; top: 50%; transform: translateY(-50%);
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.3) 0%, rgba(210, 105, 30, 0.3) 100%);
            backdrop-filter: blur(5px);
            color: white; 
            border: 1px solid rgba(255,255,255,0.3);
            width: 40px; height: 40px; border-radius: 50%; display: flex;
            align-items: center; justify-content: center; cursor: pointer;
            z-index: 10; transition: all 0.3s;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .nav-arrow:hover { 
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.6) 0%, rgba(210, 105, 30, 0.6) 100%);
            transform: translateY(-50%) scale(1.1); 
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
          }
          .nav-prev { left: 20px; }
          .nav-next { right: 20px; }
          
          /* Tour Button Animation */
          .tour-btn {
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%);
            background-size: 200% auto;
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 10px 25px rgba(139, 69, 19, 0.4);
            transition: all 0.4s ease;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 2px solid transparent;
          }
          .tour-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(139, 69, 19, 0.6);
            background-position: right center;
            border-color: rgba(210, 105, 30, 0.3);
          }
          
          /* Navigation Bar Color - Match Tour Button */
          .rd-navbar-nav {
            background: linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%) !important;
            background-size: 200% auto;
          }
          
          /* Make logo sticky when navbar is stuck */
          .rd-navbar--is-stuck .rd-navbar-brand,
          .rd-navbar--is-clone .rd-navbar-brand {
            display: flex !important;
            position: fixed !important;
            top: 10px !important;
            left: 20px !important;
            z-index: 1001 !important;
            transition: all 0.3s ease !important;
          }
          
          .rd-navbar--is-stuck .rd-navbar-brand img,
          .rd-navbar--is-clone .rd-navbar-brand img {
            max-height: 50px !important;
            width: auto !important;
            transition: all 0.3s ease !important;
          }
          
          .rd-navbar-brand {
            transition: all 0.3s ease !important;
          }
            
          /* INJECTING THE TREE STYLES HERE */
          ${treeStyles}
        `}
      </style>

      {/* Professional Cinematic Loader */}
      {isLoading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
          backgroundColor: '#1a1a1a', zIndex: 9999, display: 'flex',
          alignItems: 'center', justifyContent: 'center', animation: 'fadeOut 0.5s ease-out 1.5s forwards'
        }}>
           <style>
            {`
              @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }
              @keyframes floatIn {
                0% { opacity: 0; transform: translateY(30px) scale(0.9); }
                50% { opacity: 1; transform: translateY(-10px) scale(1.02); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
              @keyframes glow {
                0%, 100% { text-shadow: 0 0 10px rgba(139, 69, 19, 0.5), 0 0 20px rgba(139, 69, 19, 0.3); }
                50% { text-shadow: 0 0 20px rgba(139, 69, 19, 0.8), 0 0 30px rgba(139, 69, 19, 0.5); }
              }
              @keyframes slideIn { 0% { width: 0; } 100% { width: 100%; } }
              .loader-text { animation: floatIn 1s ease-out, glow 2s ease-in-out infinite; }
              .loader-line { animation: slideIn 1s ease-out 0.3s forwards; }
            `}
          </style>
          
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div className="loader-line" style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #8B4513, #D2691E, #8B4513, transparent)', marginBottom: '30px', width: 0, margin: '0 auto 30px' }}></div>
            <div className="loader-text" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', color: '#fffcd3', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: '"Playfair Display", Georgia, serif', position: 'relative', padding: '20px 40px' }}>
              <div style={{ background: 'linear-gradient(90deg, #D2691E, #8B4513, #CD853F, #8B4513, #D2691E)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 3s linear infinite', fontWeight: 'bold' }}>
                Snow Fountain
              </div>
              <div style={{ fontSize: '0.6em', letterSpacing: '0.3em', marginTop: '10px', color: '#D2691E', fontWeight: '600' }}>
                Consultants
              </div>
            </div>
            <div className="loader-line" style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #8B4513, #D2691E, #8B4513, transparent)', marginTop: '30px', width: 0, margin: '30px auto 0' }}></div>
            <div style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', color: '#fffcd3', marginTop: '20px', opacity: 0, animation: 'floatIn 1s ease-out 0.5s forwards', letterSpacing: '0.15em', fontWeight: '300' }}>
              21 Years of Engineering Excellence
            </div>
          </div>
        </div>
      )}
      
    <div className="page">
      <nav style={{ position: 'fixed', top: '30%', zIndex: 1000 }}>
        <ul style={{ listStyleType: 'none', padding: 0, transform: 'translateX(-270px)', margin: 0 }}>
          {['Twitter', 'Facebook', 'Google plus', 'Instagram'].map((social, index) => {
            const iconClass = social === 'Google plus' ? 'google-plus' : social.toLowerCase();
            return (
              <li key={index} style={{ display: 'block', margin: '5px', background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)', width: '300px', textAlign: 'right', padding: '10px', borderRadius: '0 30px 30px 0', transition: 'all 0.5s', boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(110px)'; e.currentTarget.style.background = 'linear-gradient(135deg, #A0522D 0%, #D2691E 50%, #A0522D 100%)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0px)'; e.currentTarget.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #8B4513 100%)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 69, 19, 0.3)'; }}>
                <a href={`https://${social.replace(' ', '')}.com`} style={{ color: '#fffcd3', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {social}
                  <i className={`fa fa-${iconClass}`} aria-hidden="true" style={{ textAlign: 'center', marginLeft: '14px', color: '#8B4513', backgroundColor: '#fffcd3', padding: '10px', borderRadius: '50%', width: '20px', height: '20px', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 1s' }}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <section className="section section-relative section-header">
        <header className="section page-header header-absolute">
          <div className="rd-navbar-wrap">
            <nav className="rd-navbar rd-navbar-aside" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
              <div className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
              <div className="rd-navbar-collapse">
                <ul className="list rd-navbar-list">
                  <li><a className="icon icon-sm icon-bordered link-default mdi mdi-behance" href="#"></a></li>
                  <li><a className="icon icon-sm icon-bordered link-default mdi mdi-facebook" href="#"></a></li>
                  <li><a className="icon icon-sm icon-bordered link-default mdi mdi-instagram" href="#"></a></li>
                </ul>
              </div>
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  <div className="rd-navbar-panel">
                    <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                    <div className="rd-navbar-brand">
                      <Link className="brand" to="/">
                        <img className="brand-logo-dark" src="/images/trademark-removebg-preview.png" alt="Snow Fountain" width="350" height="100" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)', WebkitFilter: 'contrast(1.1) brightness(1.05)' }}/>
                        <img className="brand-logo-light" src="/images/trademark-removebg-preview.png" alt="Snow Fountain" width="150" height="150" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)', WebkitFilter: 'contrast(1.1) brightness(1.05)' }}/>
                      </Link>
                    </div>
                  </div>
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active"><Link className="rd-nav-link" to="/">HOME</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/about">ABOUT US</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/services">SERVICES</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/projects">PROJECTS</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/portfolio">PORTFOLIO</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/training">TRAINING</Link></li>
                      <li className="rd-nav-item"><Link className="rd-nav-link" to="/contacts">CONTACT US</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        
        <section className="section context-dark section-jumbotron bg-cover" style={{
          background: '#fffbeb',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Intersecting gradient overlay in the middle */}
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
          
          {/* UPDATED: Intersecting Diagonal Lines (Cross-hatch pattern) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 230, 0.5)', 
            // This creates the intersecting lines effect
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(139, 69, 19, 0.05) 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, rgba(139, 69, 19, 0.05) 0px, rgba(139, 69, 19, 0.05) 1px, transparent 1px, transparent 20px)
            `,
            pointerEvents: 'none',
            zIndex: 0
          }}></div>

          <div className="panel-left" style={{ position: 'relative', zIndex: 1 }}>
            <Link className="brand" to="/">
              <img className="brand-logo-dark" src="/images/trademark-removebg-preview.png" alt="Snow Fountain" width="350" height="100" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)', WebkitFilter: 'contrast(1.1) brightness(1.05)' }}/>
              <img className="brand-logo-light" src="/images/trademark-removebg-preview.png" alt="Snow Fountain" width="150" height="150" style={{ imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.1) brightness(1.05)', WebkitFilter: 'contrast(1.1) brightness(1.05)' }}/>
            </Link>
            <ul className="list-md custom-list">
              <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-behance" href="#"></a></li>
              <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-facebook" href="#"></a></li>
              <li><a className="icon icon-sm icon-gray-filled icon-circle mdi mdi-instagram" href="#"></a></li>
            </ul>
          </div>
          <div className="section-fullheight">
            <div className="section-fullheight-inner section-md text-center text-lg-left">
              <div className="container-fluid" style={{ maxWidth: '1600px' }}>
                
                {/* Breaking News Marquee */}
                <div style={{
                  background: 'linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #8B0000 100%)',
                  padding: '12px 0',
                  boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
                  borderBottom: '3px solid #FFD700',
                  position: 'relative',
                  zIndex: 10,
                  overflow: 'hidden',
                  borderRadius: '10px',
                  marginBottom: '30px', 
           }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 20px'
                  }}>
                    <div style={{
                      background: '#FFD700',
                      color: '#8B0000',
                      padding: '5px 20px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      borderRadius: '5px',
                      marginRight: '15px',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}>
                      🔴 Important Notification
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <marquee behavior="scroll" direction="left" scrollamount="6" style={{
                        color: '#FFFFFF',
                        fontSize: '16px',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>
                        🎓 Training Started for Civil Engineering and Diploma (Civil) Students!!! 📚 Learn from Industry Experts with 25+ Years Experience | NABL Accredited Lab Training | ISO 9001:2015 Certified Institute | For Details Call us on: +91 7897651111 📞 | Limited Seats Available - Enroll Now! 🎓
                      </marquee>
                    </div>
                  </div>
                  <style>
                    {`
                      @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                      }
                    `}
                  </style>
                </div>

                <div className="row justify-content-center justify-content-lg-start align-items-start" style={{ gap: '2rem' }}>
                  <div className="col-md-10 col-lg-5" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="jumbotron-custom-1" id="tour-welcome" style={{
                      marginTop:'0px', 
                      background: 'rgba(255, 251, 235, 0.85)',
                      padding: '30px',
                      borderRadius: '20px',
                      boxShadow: '0 5px 20px rgba(139, 69, 19, 0.06)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(139, 69, 19, 0.03)'
                    }}>
                      <div className="title text-decorative animated-welcome-text" style={{ 
                        fontSize: '2.8rem', 
                        lineHeight: '1.2', 
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #8B4513 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 'bold'
                      }}>
                        Welcome to Snow Fountain Group
                      </div>
                      
                      <p className="big-2" style={{ color: '#2c2416', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        <strong>M/s Snow Fountain Consultants (SFC)</strong>, is a rapidly growing multifarious company in civil engineering having more than 25 years of experience. Its Regd. office is in Lucknow (Uttar Pradesh). We are an <strong>ISO 9001:2015 certified company</strong> and also have a <strong>NABL accredited lab</strong>.
                        <br/><br/>
                        <strong>SFC</strong> is a company promoted by a group of qualified Engineers and Professionals, with the aim of providing quality services in the field of Civil Engineering.
                        <br/><br/>
                        Apart from catering to the domestic demand, the management at SFC extends its operations by means of venturing into the Government Sector, Public Sector, Private Sector houses, that provides comprehensive total solutions to Civil Engineering Consultancy with Implementation of Information technology for different Govt. / Pvt. Institutions / Organizations across the country.
                        <br/><br/>
                        <strong>Snow Fountain Consultants</strong> infuses the power of creativity converging with high-end technology to optimize business value. We are known for our timely completion of projects, quality of work and total commitment to our clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-10 col-lg-6" style={{ marginTop: '30px', position: 'relative', zIndex: 1 }}>
                    <div className="modern-carousel-container" id="tour-carousel" style={{
                      background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(210, 105, 30, 0.1) 100%)',
                      padding: '20px',
                      borderRadius: '25px',
                      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
                      border: '2px solid rgba(139, 69, 19, 0.2)'
                    }}>
                      {slides.map((slide, index) => (
                        <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                          <img src={slide} alt={`Project ${index + 1}`} className="carousel-image" />
                        </div>
                      ))}

                      <button className="nav-arrow nav-prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                      </button>
                      <button className="nav-arrow nav-next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                      </button>

                      <div className="carousel-controls">
                        {slides.map((_, index) => (
                          <div key={index} className={`carousel-dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
                        ))}
                      </div>
                    </div>
                    
                    <div style={{ marginTop: '25px', textAlign: 'center' }}>
                      <button className="tour-btn" onClick={startTour}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Take a Tour
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* =========================================================================
            KEY SECTORS CHART (TREE VIEW)
         ========================================================================= */}
      <section className="section section-lg bg-default" id="key-sectors-chart" style={{ paddingBottom: '0' }}>
        <div className="container">
          <h3 className="text-center" style={{ marginBottom: '40px', color: '#8B4513' }}>Our Expertise</h3>
          
          <div className="tree-container">
            <div className="tree">
              <ul>
                {/* ROOT */}
                <li>
                  <div className="node root">KEY SECTORS</div>
                  <ul>
                    
                    {/* BRANCH 1: Testing Lab */}
                    <li>
                      <div className="node level-1">Testing<br/>Lab</div>
                      <ul className="vertical-list">
                        <li>
                          <ul>
                            <li><div className="node level-2">Sub-Soil<br/>Exploration<br/>& Testing</div></li>
                            <li><div className="node level-2">Material<br/>Testing Lab</div></li>
                            <li><div className="node level-2">Non Destructive<br/>Test of R.C.C.</div></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* BRANCH 2: Infrastructure Consultancy */}
                    <li>
                      <div className="node level-1">Infrastructure<br/>Consultancy</div>
                      <ul className="vertical-list">
                        <li>
                          <ul>
                            {/* Public Health */}
                            <li>
                              <div className="node level-2">Public Health<br/>Engineering</div>
                              <ul>
                                <li><div className="node level-3">Sewerage &<br/>Drainage</div></li>
                                <li><div className="node level-3">Water Supply<br/>Rural & Urban</div></li>
                                <li><div className="node level-3">Solid & Liquid<br/>Waste Mgmt</div></li>
                              </ul>
                            </li>
                            {/* Architectural */}
                            <li><div className="node level-2">Architectural<br/>Consultancy</div></li>
                            {/* Structural */}
                            <li><div className="node level-2">Structural<br/>Consultancy</div></li>
                            {/* Transportation */}
                            <li>
                              <div className="node level-2">Transportation<br/>Sector</div>
                              <ul>
                                  <li><div className="node level-3">BRTS Projects</div></li>
                                  <li><div className="node level-3">Comprehensive<br/>Mobility Plan</div></li>
                              </ul>
                            </li>
                            {/* Housing */}
                            <li><div className="node level-2">Housing/Township<br/>Projects</div></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* BRANCH 3: Engineering Survey */}
                    <li>
                      <div className="node level-1">Engineering<br/>Survey</div>
                    </li>

                    {/* BRANCH 4: TPI/PMC */}
                    <li>
                      <div className="node level-1">TPI /<br/>PMC</div>
                    </li>

                    {/* BRANCH 5: Valuation */}
                    <li>
                      <div className="node level-1">Valuation</div>
                    </li>

                    {/* BRANCH 6: Training Institute */}
                    <li>
                      <div className="node level-1">Civil Engineering<br/>Training Institute</div>
                      <ul className="vertical-list">
                          <li>
                            <ul>
                              <li><div className="node level-2">Industrial<br/>Training</div></li>
                              <li><div className="node level-2">Technical<br/>Seminars</div></li>
                              <li><div className="node level-2">Workshops</div></li>
                              <li><div className="node level-2">Software<br/>Development</div></li>
                            </ul>
                          </li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="section section-lg bg-default section-lined" id="tour-projects">
        <div className="container container-lined">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="container container-custom-width">
          <h3 className="text-center">Our Latest Projects</h3>
          <div className="row row-custom-width row-30 row-xxl-100 row-flex">
            <div className="col-sm-6 col-lg-4 wow fadeInRight">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-1-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Eastwood Hotel</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-2-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Southward Concert Hall</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.4s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-3-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">California Mega Mall</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.2s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-4-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Hearst Business Center</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.4s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-5-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Westwood Child Center</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeInRight" data-wow-delay="0.6s">
              <div className="project-grid" style={{backgroundImage: 'url(/images/projects-6-518x373.jpg)'}}>
                <div className="inner">
                  <img src="/images/bg-pattern-transparent.png" alt=""/>
                  <h5 className="title text-capitalize font-weight-medium"><a href="#">Modern Art Gallery</a></h5>
                  <p className="font-weight-regular exeption">We deliver reliable architectural solutions to our individual and corporate clients throughout the USA.</p>
                  <a className="button button-default" href="#">View</a>
                </div>
              </div>
            </div>
          </div>
          <div className="button-wrap-1 text-center"><a className="button button-default" href="#">View All Projects</a></div>
        </div>
      </section>

      <section className="section section-lg bg-gray-700 text-center text-sm-left" id="tour-stats">
        <div className="container">
          <div className="row row-40">
            <div className="col-lg-9">
              <div className="row row-30 row-xxl-85">
                <div className="col-sm-6 col-md-4">
                  <h5>Architecture</h5>
                  <ul className="list-xs font-weight-regular">
                    <li><a className="link-item" href="#">Planning & Development</a></li>
                    <li><a className="link-item" href="#">Project Management</a></li>
                    <li><a className="link-item" href="#">Structural Engineering</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4">
                  <h5>3D Modeling</h5>
                  <ul className="list-xs font-weight-regular">
                    <li><a className="link-item" href="#">Interior Rendering</a></li>
                    <li><a className="link-item" href="#">Visualization</a></li>
                    <li><a className="link-item" href="#">VR Architecture</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4">
                  <h5>Design</h5>
                  <ul className="list-xs font-weight-regular">
                    <li><a className="link-item" href="#">Interior Design</a></li>
                    <li><a className="link-item" href="#">Architectural Design</a></li>
                    <li><a className="link-item" href="#">Technical Detailing</a></li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-4">
                  <article className="box-counter">
                    <div className="box-counter-main">
                      <div className="counter">10</div><span className="small small_top">+</span>
                    </div>
                    <div className="box-counter-title">International awards</div>
                  </article>
                </div>
                <div className="col-sm-6 col-md-4">
                  <article className="box-counter">
                    <div className="box-counter-main">
                      <div className="counter">57</div>
                    </div>
                    <div className="box-counter-title">Finished projects</div>
                  </article>
                </div>
                <div className="col-sm-6 col-md-4">
                  <article className="box-counter">
                    <div className="box-counter-main">
                      <div className="counter">19</div>
                    </div>
                    <div className="box-counter-title">Years of experience</div>
                  </article>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="heading-3">High-quality solutions</div>
              <div className="big text-white-lighter text-white-darken">We are committed to providing the best possible solutions at a competitive cost. Our team is ready to offer a wide range of various architectural services.</div>
              <div className="img-wrap-1"><img src="/images/speaker-1-180x80.png" alt="" width="180" height="80"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }} onClick={() => setShowModal(false)}>
          <div style={{ backgroundColor: '#2d2d2d', padding: '40px', borderRadius: '8px', maxWidth: '800px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative', color: '#fff' }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'transparent', border: 'none', fontSize: '30px', color: '#d4a574', cursor: 'pointer', lineHeight: '1' }}>&times;</button>
            <h3 style={{ color: '#d4a574', marginBottom: '20px' }}>About Snow Fountain Consultants</h3>
            <div style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <p><strong>M/s Snow Fountain Consultants (SFC)</strong>, is a rapidly growing multifarious company...</p>
              <p>SFC is a company promoted by a group of qualified Engineers and Professionals...</p>
              <p>Apart from catering to the domestic demand, the management at SFC extends its operations...</p>
              <p><strong>Snow Fountain Consultants</strong> infuses the power of creativity...</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
    </>
  );
};

export default Home;