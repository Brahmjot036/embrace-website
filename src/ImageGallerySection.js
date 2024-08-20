import React from 'react';
import './ImageGallerySection.css';

const ImageGallerySection = () => {
  return (
    <div className="image-gallery-section">
      <div className="gallery-heading">
        <h2>Our Work</h2>
        <p>A glimpse of our portfolio</p>
      </div>
      <div className="gallery-images">
        <div className="image-item">
          <img src="apple.jpeg" alt="Image 1" />
          <p className="image-subheading">Apple</p>
        </div>
        <div className="image-item">
          <img src="nike.jpeg" alt="Image 2" />
          <p className="image-subheading">Nike</p>
        </div>
        <div className="image-item">
          <img src="netflix.jpg" alt="Image 3" />
          <p className="image-subheading">Netflix</p>
        </div>
      </div>
      <div className="see-more-button">
        <button>See More</button>
      </div>
    </div>
  );
};

export default ImageGallerySection;
