import React, { useEffect, useState } from "react";
import "../static/css/style.css";
import logo from "../static/images/logo/logo-removebg-preview.png";
import { NavLink, useHistory } from "react-router-dom";
import user_image from "../static/images/logo/image.png";
import Dropdown from "../admin/dropdown/Dropdown";
import { toast } from "react-toastify";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { IoCartOutline } from "react-icons/io5";
import { getCartItemByAccountId } from "../api/CartApi";
const user_menu = [
  {
    icon: "bx bx-user",
    content: "Tài khoản",
    url: "/profile",
  },
  {
    icon: "bx bx-log-out-circle bx-rotate-180",
    content: "Đăng xuất",
    url: "/",
  },
];

const not_menu = [
  {
    icon: "bx bx-user",
    content: "Đăng nhập",
    url: "/sign-in",
  },
  {
    icon: "bx bx-cog",
    content: "Đăng kí",
    url: "/register",
  },
];

const Header = (props) => {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    props.searchHandler(e.target.keyword.value);
    history.push("/search-page");
  };

  const curr_user = {
    display_name: props.user ? props.user.fullName : "Tài khoản",
    image: user_image,
  };

  const renderUserToggle = (user) => (
    <div className="topnav__right-user">
      <div className="topnav__right-user__image">
        <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">{user.display_name}</div>
    </div>
  );

  const renderUserMenu = (item, index) => (
    <NavLink
      to={item.url}
      key={index}
      exact
      className="color-black"
      onClick={item.url === "/" ? signOutHandler : ""}
    >
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </NavLink>
  );

  const signOutHandler = () => {
    props.refresh(false);
    toast.success("Tài khoản đã được đăng xuất.");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    props.userHandler(null);
  };
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 989);

  const handleScroll = () => {
    if (isMobile) {
      setIsFixed(window.scrollY > 100);
    } else {
      setIsFixed(window.scrollY > 160);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 989);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  // handle cart
  const [quantityCart, setQuantityCart] = useState(0);
  useEffect(() => {
    if (props.user) {
      getCartItemByAccountId(props.user.id).then((resp) => {
        const totalQuantity = resp.data.reduce(
          (acc, item) => acc + item.quantity,
          0
        );
        setQuantityCart(totalQuantity);
      });
    } else {
      setQuantityCart(0);
    }
  }, [props.user, props.changeHeaderHandler]);
  return (
    <>
      <div className="border-bottom">
        <div className="head-1 p-head grid-2">
          <div className="d-flex">
            <div className="location relative p-0-12 italic">VN</div>
            <div className="currency p-0-12 italic">VNĐ</div>
          </div>
          <span className="text-center">Freeship within 2km radius</span>
          <div className="text-right italic">Hotline: 0337213898 - Thinkk</div>
        </div>
      </div>
      <div className="navbar-brand ml-1 p-head col grid-2">
        <div className="header-service d-flex">
          <div className="services" id="services-header"></div>
          <Link to="#" className="service-header service-header-1">
            <div className="header-service-icon service-icone1cb6147-8987-4c43-b188-08186873ac00"></div>
            <div className="header-service-description">
              <div className="header-service-title">Need Help?</div>
              <div className="header-service-subtitle">
                <p>(+84) 0337-213-898</p>
              </div>
            </div>
          </Link>
        </div>
        <img
          src={logo}
          className="justify-self-center"
          width={200}
          height={80}
          alt=""
        />
        <form
          className="form-inline my-2 relative my-lg-0 justify-self-end mr-3"
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className="form-control relative mr-sm-2 input-search"
            type="search"
            aria-label="Search"
            name="keyword"
            placeholder="Search Product Here..."
          />
          <button className="absolute r-20">
            <i
              className="fa fa-search ml-1 "
              aria-hidden="true"
              style={{ fontSize: "24px" }}
            ></i>
          </button>
        </form>
      </div>
      <nav
        className={`navbar navbar-expand-md col-12 t-0 ${
          isFixed ? "fixed" : ""
        } `}
      >
        <div className="collapse navbar-collapse col justify-center p-30 gap-50">
          {isFixed && (
            <img
              src={logo}
              className="justify-self-center"
              width={100}
              height={50}
              alt=""
            />
          )}
          <ul className="navbar-nav gap-50">
            <li
              className={
                props.header === 1
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/" exact>
                Trang chủ
              </NavLink>
            </li>
            <li
              className={
                props.header === 2
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/store" exact>
                Mua Sắm
              </NavLink>
            </li>
            {/* <li
              className={
                props.header === 3
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/cart" exact>
                Giỏ hàng
              </NavLink>
            </li> */}
            {props.user && (
              <li
                className={
                  props.header === 5
                    ? "nav-item mr-2  mini-item active"
                    : "nav-item mr-2  mini-item"
                }
              >
                <NavLink className="nav-link text-white" to="/order" exact>
                  Đơn hàng
                </NavLink>
              </li>
            )}
            <li
              className={
                props.header === 4
                  ? "nav-item mr-2  mini-item active"
                  : "nav-item mr-2  mini-item"
              }
            >
              <NavLink className="nav-link text-white" to="/blog" exact>
                Chính sách
              </NavLink>
            </li>
            {props.user && (
              <li
                className={
                  props.header === 6
                    ? "nav-item mr-2  mini-item active"
                    : "nav-item mr-2  mini-item"
                }
              >
                {/* <NavLink className="nav-link" to="/chat" exact>
                  Hỏi đáp
                </NavLink> */}
              </li>
            )}
          </ul>
          {props.user && (
            <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={user_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
          )}
          {!props.user && (
            <Dropdown
              customToggle={() => renderUserToggle(curr_user)}
              contentData={not_menu}
              renderItems={(item, index) => renderUserMenu(item, index)}
            />
          )}
          <div
            className={
              props.header === 3
                ? "nav-item mr-2  mini-item active"
                : "nav-item mr-2  mini-item"
            }
          >
            <NavLink className="nav-link relative" to="/cart" exact>
              <IoCartOutline style={{ color: "black", fontSize: "28px" }} />
              {quantityCart > -1 && (
                <span
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "#007bff",
                    borderRadius: "50%",
                    padding: "0.25em 0.5em",
                    fontSize: "13px",
                  }}
                >
                  {quantityCart}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
