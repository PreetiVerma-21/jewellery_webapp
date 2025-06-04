import React from 'react';
import collection1 from "../utilities/images/earring.jpg";
import collection2 from "../utilities/images/footer.jpg";
import collection3 from "../utilities/images/necklace.jpg";
import collection4 from "../utilities/images/ring.jpg";
import collection5 from "../utilities/images/slider3.jpg";

const collections = [
  {
    name: 'Gold Necklace',
    price: '$499.00',
    img: collection1,
  },
  {
    name: 'Diamond Ring',
    price: '$799.00',
    img: collection2,
  },
  {
    name: 'Gold Bangles',
    price: '$299.00',
    img: collection3,
  },
  {
    name: 'Pearl Earrings',
    price: '$199.00',
    img: collection4,
  },
  {
    name: 'Jewellery Set',
    price: '$999.00',
    img: collection5,
  },

];

const Collections = () => {
  return (
    <div className="collections-container">
      <h2 className="collections-title">Our Exclusive Collections</h2>
      <div className="collections-grid">
        {collections.map((item, idx) => (
          <div className="collection-card" key={idx}>
            <div className="collection-img-wrap">
              <img src={item.img} alt={item.name} width={400} height={500}/>
            </div>
            <div className="collection-info">
              <h3>{item.name}</h3>
              <span className="collection-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;