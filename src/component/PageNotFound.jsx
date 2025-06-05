import React from 'react';

const PageNotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="round"></div>
				<div className="round-small"></div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist or has been moved.</p>
        <a href="/" className="notfound-home-btn">Go Home</a>
      </div>
    </div>
  );
};

export default PageNotFound;