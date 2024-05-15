import React from "react";
// import image2 from "../assets/templates-2.mp4"
// import image1 from "../assets/Sports Intro - After Effects Templates Motion Array.mp4"
// import image3 from "../assets/Templates -3.mp4"

const Carousal = () => {
  const style = {
    width: "100px",
    height: "500px",
    objectFit: "fill",
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <video
            className="d-block w-100"
            style={style}
            autoPlay
            loop
            muted
            src="https://resource.flexclip.com/templates/video/720p/daily-news-updates.mp4?v=1.0.5.19.5"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            style={style}
            className="d-block w-100"
            autoPlay
            loop
            muted
            src="https://resource.flexclip.com/templates/video/720p/effect-earth-news-intro-outro.mp4?v=1.0.5.19.5"
          ></video>
        </div>
        <div className="carousel-item">
          <video
            style={style}
            className="d-block w-100"
            autoPlay
            loop
            muted
            src="https://resource.flexclip.com/templates/video/720p/live-breaking-news-intro-outro.mp4?v=1.0.5.19.5"
          ></video>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
