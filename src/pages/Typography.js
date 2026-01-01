import React from 'react';

const Typography = () => {
  return (
    <>
      <section className="breadcrumbs-custom">
        <div className="breadcrumbs-custom-main bg-image context-dark bg-overlay-2" style={{backgroundImage: 'url(/images/breadcrumbs-bg-6.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <h2 className="breadcrumbs-custom-title">Typography</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-lg bg-default">
        <div className="container">
          <h3>Headings</h3>
          <div className="row row-50">
            <div className="col-md-6">
              <h1>H1 Heading</h1>
              <h2>H2 Heading</h2>
              <h3>H3 Heading</h3>
              <h4>H4 Heading</h4>
              <h5>H5 Heading</h5>
              <h6>H6 Heading</h6>
            </div>
            <div className="col-md-6">
              <p className="big">Big Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Regular Paragraph - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="small">Small Paragraph - Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-lg bg-gray-100">
        <div className="container">
          <h3>Buttons</h3>
          <div className="row row-30">
            <div className="col-sm-6 col-lg-4">
              <button className="button button-default" type="button">Default Button</button>
            </div>
            <div className="col-sm-6 col-lg-4">
              <button className="button button-primary" type="button">Primary Button</button>
            </div>
            <div className="col-sm-6 col-lg-4">
              <button className="button button-secondary" type="button">Secondary Button</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-lg bg-default">
        <div className="container">
          <h3>Lists</h3>
          <div className="row row-50">
            <div className="col-md-6">
              <h5>Unordered List</h5>
              <ul>
                <li>Architecture Services</li>
                <li>3D Modeling & Visualization</li>
                <li>Interior Design</li>
                <li>Project Management</li>
                <li>Structural Engineering</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Ordered List</h5>
              <ol>
                <li>Consultation & Planning</li>
                <li>Design Development</li>
                <li>Documentation</li>
                <li>Construction Management</li>
                <li>Project Completion</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Typography;
