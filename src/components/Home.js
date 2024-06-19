import addidas from "../static/images/adidas.jpg";
import nike from "../static/images/nike.jpg";
import puma from "../static/images/puma.jpg";
import fila from "../static/images/fila.jpg";
import reebook from "../static/images/reebok.png";
import daungoac from "../static/images/daungoac.png";
import yeezy from "../static/images/yeezy.png";
import converse from "../static/images/converse.png";
import { NavLink } from "react-router-dom";
import first from "../static/images/slider/image.png";
import second from "../static/images/slider/main-banner-2_2048x.png";
import React, { useState, useEffect, useRef } from "react";
import { getAllProducts } from "../api/ProductApi";
import Banner from "./banner/Banner";
import Banner2 from "./banner-2/Banner2";
import Banner3 from "./banner-3/Banner3";

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState({});
  const [active, setActive] = useState(true);

  var rows = new Array(total).fill(0).map((zero, index) => (
    <li
      className={page === index + 1 ? "page-item active" : "page-item"}
      key={index}
    >
      <button
        className="page-link"
        style={{ borderRadius: 50 }}
        onClick={() => onChangePage(index + 1)}
      >
        {index + 1}
      </button>
    </li>
  ));

  useEffect(() => {
    getAllProducts(page, 6, active).then((response) => {
      setProducts(response.data.content);
      setTotal(response.data.totalPages);
      console.log(response);
    });
    props.changeHeaderHandler(1);
  }, [page]);

  const onChangePage = (page) => {
    setPage(page);
  };
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Điều chỉnh giá trị này tùy theo chiều rộng sản phẩm
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Điều chỉnh giá trị này tùy theo chiều rộng sản phẩm
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={first} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={second} alt="Second slide" />
          </div>
          {/* <div className="carousel-item">
            <img className="d-block w-100" src={third} alt="Third slide" />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="banner-1">
        <Banner />
      </div>
      <div className="container-fluid padding">
        <div className="row welcome mini-card flex-col-center-a gap-20 ">
          <h4 className="title text-newproduct box-shadow-0 mb-0">
            Loại Sản Phẩm Nổi Bật
          </h4>
          <p className="">
            Hãy xem các sản phẩm nổi bật, hot trend được giới trẻ săn lùng và
            chào đón nhất hiện nay!
          </p>
        </div>
      </div>
      <div className="banner-3">
        <Banner3 />
      </div>
      <div className="container-fluid padding">
        <div className="row welcome mini-card flex-col-center-a gap-20">
          <h4 className="title text-newproduct box-shadow-0 mb-0">
            Sản phẩm Top Trending
          </h4>
          <p className="">
            Hãy xem bộ sưu tập Sản phẩm mới, vừa mới được nhập hàng từ
            ShopThinkk
          </p>
        </div>
      </div>
      <div className="col-11 container-fluid">
        {/* <div className="row padding d-flex">
          {products &&
            products.map((item, index) => (
              <div className="col-md-4 mb-3 item-hover over-hidden" key={index}>
                <div className="card h-100 mini-pro">
                  <div className="d-flex justify-content-between position-absolute t-r-0">
                    <div className="label-new">
                      <span className="text-red small d-flex align-items-center px-2 py-1">
                        <strong className="ml-1">New!</strong>
                      </span>
                    </div>
                  </div>
                  <NavLink to={`/product-detail/${item.id}`}>
                    <img
                      src={require(`../static/images/${item.image}`)}
                      alt="Product"
                      className="mini-card"
                    />
                  </NavLink>
                  <div className="card-body flex-col-center px-2 pb-2 pt-1">
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">
                        <strong>
                          <NavLink
                            to={`/product-detail/${item.id}`}
                            className="text-secondary font-size-base"
                          >
                            {item.name}
                          </NavLink>
                        </strong>
                      </p>
                      <p className="mb-1">
                        <small>
                          <NavLink to="#" className="text-secondary ">
                            {item.brand}
                          </NavLink>
                        </small>
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="text-warning m-0 d-flex  gap-4">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </p>
                      <p className=" d-flex align-items-center mb-0">
                        ({item.view})
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-between">
                        <p className="h4 text-primary">
                          {(
                            (item.price * (100 - item.discount)) /
                            100
                          ).toLocaleString()}
                          đ{" "}
                        </p>

                        <p className="mb-0 font-size-small text-secondary">
                          <strike>{item.price.toLocaleString()}đ</strike>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex relative slide-up-item justify-content-between">
                    <div className="col px-0 ">
                      <NavLink
                        to={`/product-detail/${item.id}`}
                        exact
                        className="btn btn-outline-primary btn-block"
                      >
                        Thêm vào giỏ{" "}
                        <i
                          className="fa fa-shopping-basket"
                          aria-hidden="true"
                        ></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div> */}
        <div className="product-list-wrapper">
          <button className="scroll-button left" onClick={scrollLeft}>
            &lt;
          </button>
          <div className="product-list-container" ref={containerRef}>
            <div className="product-list gap-0 w-full d-flex">
              {products &&
                products.map((item, index) => (
                  <div
                    className="col-md-4 mb-3 item-hover over-hidden width-3"
                    key={index}
                  >
                    <div className="card h-100 mini-pro">
                      <div className="d-flex justify-content-between position-absolute t-r-0">
                        <div className="label-new">
                          <span className="text-red small d-flex align-items-center px-2 py-1">
                            <strong className="ml-1">New!</strong>
                          </span>
                        </div>
                      </div>
                      <NavLink to={`/product-detail/${item.id}`}>
                        <img
                          src={require(`../static/images/${item.image}`)}
                          alt="Product"
                          className="mini-card"
                        />
                      </NavLink>
                      <div className="card-body flex-col-center px-2 pb-2 pt-1">
                        <div className="d-flex justify-content-between">
                          <p className="mb-0 max-height">
                            <strong>
                              <NavLink
                                to={`/product-detail/${item.id}`}
                                className="text-secondary font-size-base"
                              >
                                {item.name}
                              </NavLink>
                            </strong>
                          </p>
                          <p className="mb-1">
                            <small>
                              <NavLink to="#" className="text-secondary ">
                                {item.brand}
                              </NavLink>
                            </small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <p className="text-warning m-0 d-flex gap-4">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                          </p>
                          <p className="d-flex align-items-center mb-0">
                            ({item.view})
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex justify-content-between">
                            <p className="h4 text-primary">
                              {(
                                (item.price * (100 - item.discount)) /
                                100
                              ).toLocaleString()}
                              đ{" "}
                            </p>

                            <p className="mb-0 font-size-small text-secondary">
                              <strike>{item.price.toLocaleString()}đ</strike>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex relative slide-up-item justify-content-between">
                        <div className="col px-0">
                          <NavLink
                            to={`/product-detail/${item.id}`}
                            exact
                            className="btn btn-outline-primary btn-block"
                          >
                            Thêm vào giỏ{" "}
                            <i
                              className="fa fa-shopping-basket"
                              aria-hidden="true"
                            ></i>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            &gt;
          </button>
        </div>
      </div>
      {/* <nav aria-label="Page navigation">
        <ul className="pagination offset-5 mt-3">
          <li className={page === 1 ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              style={{ borderRadius: 50 }}
              onClick={() => onChangePage(1)}
            >
              {`<<`}
            </button>
          </li>
          {rows}
          <li className={page === total ? "page-item disabled" : "page-item"}>
            <button
              className="page-link"
              style={{ borderRadius: 50 }}
              onClick={() => onChangePage(total)}
            >
              {`>>`}
            </button>
          </li>
        </ul>
      </nav> */}
      <Banner2 />
      <div className="container-fluid padding mt-5">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={reebook} alt="" height={80} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={daungoac} alt="" height={80} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={yeezy} alt="" height={80} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={converse} alt="" height={80} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={addidas} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={nike} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={puma} alt="" height={50} />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 padding-logo ">
            <img src={fila} alt="" height={50} />
          </div>
        </div>
      </div>
      {/* <div className="container-fluid padding mt-5">
        <div className="row welcome">
          <div className="text-danger">
            <h4 className="title">Xem nhiều nhất</h4>
          </div>
        </div>
      </div>
      <div className="container padding">
        <div className="row padding d-flex">
        {products &&
            products.map((item, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card h-100">
                  <div className="d-flex justify-content-between position-absolute w-100">
                    <div className="label-new">
                      <span className="text-white bg-success small d-flex align-items-center px-2 py-1">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span className="ml-1">New</span>
                      </span>
                    </div>
                    <div className="label-sale">
                      <span className="text-white bg-primary small d-flex align-items-center px-2 py-1">
                        <i className="fa fa-tag" aria-hidden="true"></i>
                        <span className="ml-1">Sale</span>
                      </span>
                    </div>
                  </div>
                  <NavLink to={`/product-detail/${item.id}`}>
                    <img
                      src={require(`../static/images/${item.imageLink}`)}
                      style={{ width: 150, height: 150 }}
                      alt="Product"
                    />
                  </NavLink>
                  <div className="card-body px-2 pb-2 pt-1">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="h4 text-primary">
                          {item.price.toLocaleString()} Đ
                        </p>
                      </div>
                    </div>
                    <p className="text-warning d-flex align-items-center mb-2">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p className="mb-0">
                      <strong>
                        <NavLink to={`/product-detail/${item.id}`} className="text-secondary">
                          {item.name}
                        </NavLink>
                      </strong>
                    </p>
                    <p className="mb-1">
                      <small>
                        <NavLink to="#" className="text-secondary">
                          {item.brand}
                        </NavLink>
                      </small>
                    </p>
                    <div className="d-flex mb-3 justify-content-between">
                      <div>
                        <p className="mb-0 small">
                          <b>Yêu thích: </b> {item.view} lượt
                        </p>
                        <p className="mb-0 small">
                          <b>Giá gốc: </b> {item.price.toLocaleString()} Đ
                        </p>
                        <p className="mb-0 small text-danger">
                          <span className="font-weight-bold">Tiết kiệm: </span> 0 đ (0%)
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col px-0">
                        <NavLink
                          to={`/product-detail/${item.id}`}
                          exact
                          className="btn btn-outline-primary btn-block"
                        >
                          Thêm vào giỏ
                          <i
                            className="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </NavLink>
                      </div>
                      <div className="ml-2">
                        <NavLink
                          to="#"
                          className="btn btn-outline-success"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Wishlist"
                        >
                          <i className="fa fa-heart" aria-hidden="true"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
};

export default Home;
