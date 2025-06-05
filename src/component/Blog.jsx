import React from 'react';
import blog1 from '../utilities/images/earring.jpg';
import blog2 from "../utilities/images/footer.jpg";
import blog3 from "../utilities/images/necklace.jpg";

const blogPosts = [
  {
    title: "The Art of Goldsmithing: Behind the Scenes",
    date: "June 2025",
    author: "Shimmer Team",
    image: blog1,
    excerpt: "Discover the intricate process and passion that goes into every piece of Shimmer Jewellery. From design sketches to the final polish, our artisans bring dreams to life.",
    link: "#"
  },
  {
    title: "2025 Jewellery Trends: What’s Hot This Year?",
    date: "May 2025",
    author: "Shimmer Team",
    image: blog2,
    excerpt: "Explore the latest trends in gold, diamonds, and pearls. Find out which styles are making waves and how to wear them with confidence.",
    link: "#"
  },
  {
    title: "How to Care for Your Precious Jewellery",
    date: "April 2025",
    author: "Shimmer Team",
    image: blog3,
    excerpt: "Keep your jewellery sparkling for generations. Our experts share tips on cleaning, storage, and maintenance for all types of fine jewellery.",
    link: "#"
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Shimmer Jewellery Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div className="blog-card" key={idx}>
            <div className="blog-img-wrap">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span>{post.date}</span> | <span>{post.author}</span>
              </div>
              <p>{post.excerpt}</p>
              <a href={post.link} className="blog-readmore">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;