import React from "react";
import "./style.css";
import img1 from "../../static/images/banner-3/1.png";
import img2 from "../../static/images/banner-3/2.png";
import img3 from "../../static/images/banner-3/2.png";
const Banner3 = () => {
  return (
    <>
      <div className="d-flex m-t-5 padding-4 gap-20 justify-content-center pt-mt-0">
        <div className="hover-hidden-banner2">
          <div className="relative  hover-zoom">
            <img src={img1} className=" w-full hover-zoom " />
            <div className="flex-col absolute banner-2-absolute">
              <p className="p-banner">Trending</p>
              <h2 className="h2-banner2">Giày Nam</h2>
              <a href="/store">
                <u>SHOP NOW</u>
              </a>
            </div>
          </div>
        </div>
        <div className="hover-hidden-banner2">
          <div className="relative  hover-zoom">
            <img src={img2} className=" w-full hover-zoom " />
            <div className="flex-col absolute banner-2-absolute">
              <p className="p-banner">Trending</p>
              <h2 className="h2-banner2">Giày Nữ</h2>
              <a href="/store">
                <u>SHOP NOW</u>
              </a>
            </div>
          </div>
        </div>
        <div className="hover-hidden-banner2">
          <div className="relative  hover-zoom">
            <img src={img3} className=" w-full hover-zoom " />
            <div className="flex-col absolute banner-2-absolute">
              <p className="p-banner">Trending</p>
              <h2 className="h2-banner2">Giày Trẻ Em</h2>
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

export default Banner3;
