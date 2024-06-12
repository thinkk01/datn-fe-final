import React from "react";
import img1 from "../../static/images/banner2/1.png";
import img2 from "../../static/images/banner2/2.png";
import "./style.css";
const Banner2 = () => {
  return (
    <>
      <div className="d-flex m-t-5 padding-4 gap-20 justify-content-center">
        <div className="hover-hidden-banner2">
          <div className="relative  hover-zoom2">
            <img src={img1} className=" w-full  " />
            <div className="flex-col absolute banner-2-absolute">
              <h2 className="h2-banner2">Best fashion of the season</h2>
              <p>Best fashion of the season</p>
              <a href="/store">
                <u>SHOP NOW</u>
              </a>
            </div>
          </div>
        </div>
        <div className="hover-hidden-banner2">
          <div className="relative hover-zoom2">
            <img src={img2} className=" w-full " />
            <div className="flex-col absolute banner-2-absolute">
              <h2 className="h2-banner2">Latest handbags for ladies</h2>
              <p>Best fashion of the season</p>
              <a href="/store">
                <u>SHOP NOW</u>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner2;
