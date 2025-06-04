import React from "react";
import { Button, Row, Col} from "antd";
import sectionImg from "../utilities/images/footer.jpg";
import { useNavigate } from "react-router-dom";
import collection1 from "../utilities/images/earring.jpg";
import collection2 from "../utilities/images/ring.jpg";
import collection3 from "../utilities/images/necklace.jpg";
const Home =()=> {
    const navigate = useNavigate();

  return (
    <div className="jewelry-store">
      <header className="hero-section">
        <div className="overlay">
          <nav className="navbar">
          </nav>
          <div className="hero-content">
            <h1>Our Luxury Collections</h1>
            <p>Shimmer Jewelry Store</p>
            <p>Lorem ipsum dolor sit amet...</p>
            <Button>Let's Get Started</Button>
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
          <img src={sectionImg} alt="Model" />
        </div>
        <div className="text">
          <h2>The Art Of Radiant Refinement</h2>
          <p>Lorem ipsum dolor sit amet consectetur...</p>
          <Button>Learn More</Button>
        </div>
      </section>

      <section className="collection">
        <h2>Our Collection</h2>
        <Row gutter={10}>
            <Col span={8} sm={24} md={8} lg={8} xs={24}>
          <div className="collection-card">
            {/* <CardContent> */}
              <img src={collection1} alt="Gold Earring" />
              <div className="collection-desc">
              <p>Gold Earring</p>
              <span>$240.00</span>
              </div>
            {/* </CardContent> */}
          </div>
          </Col>
           <Col span={8} sm={24} md={8} lg={8} xs={24}>
          <div className="collection-card">
            {/* <CardContent> */}
              <img src={collection2} alt="Diamond Ring" />
              <div className="collection-desc">
              <p>Diamond Ring</p>
              <span>$240.00</span>
              </div>
            {/* </CardContent> */}
          </div>
          </Col>
           <Col span={8} sm={24} md={8} lg={8} xs={24}>
          <div className="collection-card">
            {/* <CardContent> */}
              <img src={collection3} alt="Gold Necklace" />
              <div className="collection-desc">
              <p>Gold Necklace</p>
              <span>$240.00</span>
              </div>
            {/* </CardContent> */}
          </div>
          </Col>
        </Row>
      </section>

      <section className="choose-type">
        <div className="video-preview">
          <img src={sectionImg} alt="Hand with jewelry" />
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

      {/* <footer className="footer">
        <div className="logos">
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
          <span>logoipsum</span>
        </div>
      </footer> */}
      {/* <Footer/> */}
    </div>
  );
}
export default Home; 
/* JewelryStore.scss */

