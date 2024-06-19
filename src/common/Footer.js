import React from "react";
import "../static/css/style.css";
import des from "../static/images/title-des.jpg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="mt-5">
        <div className="container-fluid padding bg-light text-dark">
          <div className="row text-center">
            <div className="col-md-4 flex-col-center-a">
              <hr className="light" />
              <h5>Tư vấn mua hàng</h5>
              <hr className="light" />
              <p>Hotline: 0337213898</p>
            </div>
            <div className="col-md-4 flex-col-center-a">
              <hr className="light" />
              <h5>Giờ làm việc</h5>
              <hr className="light" />
              <p>Thứ hai-Chủ nhật: 8:00 - 21:00</p>
              <div className="social padding d-flex gap-20">
                <NavLink to="#" className="p-0">
                  <i className="fab fa-facebook" />
                </NavLink>
                <NavLink to="#" className="p-0">
                  <i className="fab fa-google-plus-g" />
                </NavLink>
                <NavLink to="#" className="p-0">
                  <i className="fab fa-instagram" />
                </NavLink>
                <NavLink to="#" className="p-0">
                  <i className="fab fa-youtube" />
                </NavLink>
              </div>
            </div>
            <div className="col-md-4 flex-col-center-a">
              <hr className="light" />
              <h5>Hệ thống cửa hàng</h5>
              <hr className="light" />
              <p>Chính sách đổi trả</p>
              <p>Chính sách trả góp</p>
              <p>Hướng dẫn mua trả góp</p>
            </div>
            <div className="col-12">
              <hr className="light-100" />
              {/* <div className="container-fluid padding  mt-5 mb-5">
                <div className="row text-center padding">
                  <div className="col-12">
                    <h2 className="text-danger">Liên lạc với chúng tôi</h2>
                  </div>
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
