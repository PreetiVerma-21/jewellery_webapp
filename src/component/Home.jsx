import React from "react";
import { Button, Card } from "antd";

const Home =()=> {
  return (
    <div className="jewelry-store">
      <header className="hero-section">
        <div className="overlay">
          <nav className="navbar">
            <div className="logo">Shimmer</div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Collections</li>
              <li>Pages</li>
              <li><Button>Contact Us</Button></li>
            </ul>
          </nav>
          <div className="hero-content">
            <h1>Our Luxury Collections</h1>
            <p>// Shimmer Jewelry Store</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <Button>Let’s Get Started</Button>
          </div>
        </div>
      </header>

      <section className="features">
        <div className="feature">Free Shipping</div>
        <div className="feature">Exclusive Design</div>
        <div className="feature">Good Packaging</div>
        <div className="feature">Highest Quality</div>
      </section>

      <section className="refinement">
        <div className="image">
          <img src="/img/model-glasses.jpg" alt="Model" />
        </div>
        <div className="text">
          <h2>The Art Of Radiant Refinement</h2>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          <Button>Learn More</Button>
        </div>
      </section>

      <section className="collection">
        <h2>Our Collection</h2>
        <div className="items">
          <Card>
            {/* <CardContent> */}
              <img src="/img/gold-earring.jpg" alt="Gold Earring" />
              <p>Gold Earring</p>
              <span>$240.00</span>
            {/* </CardContent> */}
          </Card>
          <Card>
            {/* <CardContent> */}
              <img src="/img/diamond-ring.jpg" alt="Diamond Ring" />
              <p>Diamond Ring</p>
              <span>$240.00</span>
            {/* </CardContent> */}
          </Card>
          <Card>
            {/* <CardContent> */}
              <img src="/img/gold-necklace.jpg" alt="Gold Necklace" />
              <p>Gold Necklace</p>
              <span>$240.00</span>
            {/* </CardContent> */}
          </Card>
        </div>
      </section>

      <section className="choose-type">
        <div className="video-preview">
          <img src="/img/hand-video.jpg" alt="Hand with jewelry" />
          <Button className="play-button">▶</Button>
        </div>
        <div className="type-options">
          <h2>Choose The Type!</h2>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          <div className="types">
            <div className="type">Ring</div>
            <div className="type">Necklace</div>
            <div className="type">Bracelet</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="logos">
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
        </div>
      </footer>
    </div>
  );
}
export default Home; 
/* JewelryStore.scss */

