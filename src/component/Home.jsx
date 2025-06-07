import React from "react";
import { Button, Row, Col } from "antd";
import sectionImg from "../utilities/images/footer.jpg";
import { useNavigate } from "react-router-dom";
import collection1 from "../utilities/images/earring.jpg";
import collection2 from "../utilities/images/ring.jpg";
import collection3 from "../utilities/images/necklace.jpg";
const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="jewelry-store">
			<header className="hero-section">
				<div className="overlay">
					<nav className="navbar"></nav>
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

			<Row className="refinement">
				<Col className="image">
					<img src={sectionImg} alt="Model" />
				</Col>
				<Col className="text">
					<h2>The Art Of Radiant Refinement</h2>
					<p>Lorem ipsum dolor sit amet consectetur...</p>
					<Button className="btn">Learn More</Button>
				</Col>
			</Row>

			<section className="collection">
				<h2>Our Collection</h2>

				<Row gutter={10}>
					<Col span={8} sm={24} md={8} lg={8} xs={24} className="card-col">
						<div className="collection-card">
							{/* <CardContent> */}
							<img src={collection1} alt="Gold Earring" height={200} />
							<div className="collection-desc">
								<p>Gold Earring</p>
								<span>$240.00</span>
							</div>
							{/* </CardContent> */}
						</div>
					</Col>
					<Col span={8} sm={24} md={8} lg={8} xs={24} className="card-col">
						<div className="collection-card">
							{/* <CardContent> */}
							<img src={collection2} alt="Diamond Ring" height={200} />
							<div className="collection-desc">
								<p>Diamond Ring</p>
								<span>$240.00</span>
							</div>
							{/* </CardContent> */}
						</div>
					</Col>
					<Col span={8} sm={24} md={8} lg={8} xs={24} className="card-col">
						<div className="collection-card">
							{/* <CardContent> */}
							<img src={collection3} alt="Gold Necklace" height={200} />
							<div className="collection-desc">
								<p>Gold Necklace</p>
								<span>$240.00</span>
							</div>
							{/* </CardContent> */}
						</div>
					</Col>
				</Row>
			</section>

			<Row className="choose-type">
				<Col span={8} sm={24} md={8} lg={8} className="video-preview">
					{/* <div className="vdo-section"></div> */}
					<img src={sectionImg} alt="Hand with jewelry" />
					<Button className="play-button">▶</Button>
				</Col>
				<Col span={12} sm={24} md={12} lg={12} className="type-options">
					<h2>Choose The Type!</h2>
					<p>Lorem ipsum dolor sit amet consectetur...</p>
					<div className="types">
						<div className="type">Ring</div>
						<div className="type">Necklace</div>
						<div className="type">Bracelet</div>
					</div>
				</Col>
			</Row>

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
};
export default Home;
/* JewelryStore.scss */
