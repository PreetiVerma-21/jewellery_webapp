import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="footer">
  <div className="footer-brand">
    <span>Ornamen</span>ts
  </div>
  <div className="footer-links">
    <a href="#">About</a>
    <a href="#">Jewellery</a>
    <a href="#">Contact</a>
    <a href="#">Blog</a>
  </div>
  <div className="footer-social">
    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
    <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
  </div>
  <div className="footer-copy">
    &copy; {new Date().getFullYear()} Ornaments. All rights reserved.
  </div>
</footer>
   </>
  )
}

export default Footer