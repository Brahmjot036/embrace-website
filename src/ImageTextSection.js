import React from 'react';
import './ImageTextSection.css';

const ImageTextSection = () => {
  return (
    <div className="image-text-section">
      <div className="left-section">
        <h2 className="section-heading">HOW IT WORKS!</h2>
        <p className="section-subheading">We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
        <img src="image.jpeg" alt="With Me" className="left-image" />
      </div>
      <div className="right-Section">
        <div className="right-item">
          <img src="imge1.png" alt="Small Image 1" className="small-image" />
          <div>
            <h4 className="right-heading">Discovery</h4>
            <p className="right-subheading">We meet with you to learn about your business, your goals,<br/> and your target audience.</p>
          </div>
        </div>
        <div className="right-item">
          <img src="imge2.png" alt="Small Image 2" className="small-image" />
          <div>
            <h4 className="right-heading">Strategy</h4>
            <p className="right-subheading">We develop a customized marketing strategy that is based<br/> on your unique needs and goals.</p>
          </div>
        </div>
        <div className="right-item">
          <img src="imge3.png" alt="Small Image 3" className="small-image" />
          <div>
            <h4 className="right-heading">Execution</h4>
            <p className="right-subheading">We execute our strategy using the latest digital marketing <br/>tools and techniques.</p>
          </div>
        </div>
        <div className="right-item">
          <img src="imge4.png" alt="Small Image 4" className="small-image" />
          <div>
            <h4 className="right-heading">Measurement</h4>
            <p className="right-subheading">We track the results of our campaigns so that<br/> we can make adjustments as needed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
