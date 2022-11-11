import React from "react";
import "./Home.css";
// import Video from "../videos/video.mp4";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="hero-section fade-in-bottom">
          {/* <video autoplay muted loop id="myVideo">
            <source src={Video} type="video/mp4" />
          </video> */}
        </div>
        <div className="home-desc">
          <div className="desc">
            <p>Partner Perfect</p>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              quis ne
            </h2>
            <a href="">Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
