import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <p>PORTFOLIO HIGHLIGHT</p>
        <h3>Annie & Rob | Taradale, Victoria</h3>
      </div>
      <div className="grid-item item2"></div>
      <div className="grid-item item3">
        <p>
          <span>109</span> <br />
          Photos
        </p>
        <button>View Gallery</button>
      </div>
      <div className="grid-item item4">
        <div className="item4-container"></div>
      </div>
      <div className="grid-item item5"></div>
      <div className="grid-item item6">
        <div className="item6-container"></div>
      </div>
    </div>
  );
};

export default Gallery;
