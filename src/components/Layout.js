import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    // Re-initialize plugins if needed for this page
    if (window.jQuery && window.scriptsLoaded) {
      // Plugins are already loaded, just refresh if needed
    }
  }, []);

  return (
    <>
      <style>
        {`
          .page {
            overflow: visible !important;
          }
        `}
      </style>
      <div className="page">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
