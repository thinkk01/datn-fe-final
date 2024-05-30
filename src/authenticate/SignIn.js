import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./signin.css";
import { signIn } from "../api/AuthenticateApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getMe } from "../api/AccountApi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const SignIn = (props) => {
  const history = useHistory();
  const signInHandler = (data) => {
    const userFlag = {
      ...data,
      admin: false,
    };
    signIn(userFlag)
      .then((res) => {
        toast.success("Đăng nhập thành công!");
        localStorage.setItem("token", res.data.accessToken);
        getMe(res.data.accessToken)
          .then((res) => {
            props.userHandler(res.data);
            localStorage.setItem("username", res.data.username);
            localStorage.setItem("password", "123456");
          })
          .catch((error) => console.log(error));
        history.push("/");
      })
      .catch((error) => toast.error(error.response.data.Errors));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container-login100 bg-backgroundLogin">
      {" "}
      <section className="vh-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card wrap-login text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className=" login100-form-title">Đăng nhập</h2>
                    <form
                      className="needs-validation"
                      onSubmit={handleSubmit(signInHandler)}
                    >
                      <div
                        className="wrap-input100 validate-input mb-[23px]"
                        data-validate="Username is reauired"
                      >
                        <span className="label-input100">Username</span>
                        <input
                          className="input100"
                          type="text"
                          name="username"
                          placeholder="Type your username"
                          {...register("username", {
                            required: true,
                            pattern: /^\s*\S+.*/,
                          })}
                        />
                        <span
                          className="focus-input100"
                          data-symbol="&#xf206;"
                        ></span>
                        {errors.username && (
                          <div
                            className="alert alert-danger error"
                            role="alert"
                          >
                            Tài khoản không hợp lệ!
                          </div>
                        )}
                      </div>

                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Password is required"
                      >
                        <span className="label-input100">Password</span>
                        <input
                          className="input100"
                          type="password"
                          name="pass"
                          placeholder="Type your password"
                          {...register("password", {
                            required: true,
                            pattern: /^\s*\S+.*/,
                          })}
                        />
                        <span
                          className="focus-input100"
                          data-symbol="&#xf190;"
                        ></span>
                        {errors.password && (
                          <div
                            className="alert alert-danger error"
                            role="alert"
                          >
                            Mật khẩu không hợp lệ!
                          </div>
                        )}
                      </div>

                      <div className="text-right p-t-8 p-b-31">
                        <a href="#">Forgot password?</a>
                      </div>

                      <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn"></div>
                          <button className="login100-form-btn">Login</button>
                        </div>
                      </div>

                      <div className="txt1 text-center pt-[54px] pb-[20px]">
                        <span>Or Sign Up Using</span>
                      </div>

                      <div className="flex-c-m">
                        <a href="#" className="login100-social-item bg1">
                          <SlSocialFacebook />
                        </a>

                        <a href="#" className="login100-social-item bg2">
                          <SlSocialGoogle />
                        </a>
                      </div>

                      <div className="flex-col-c pt-[15px]">
                        <span className="txt1 pb-[17px]">Or Sign Up Using</span>

                        <a href="#" className="txt2">
                          Sign Up
                        </a>
                      </div>
                    </form>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      Chưa có tài khoản?{" "}
                      <NavLink
                        to="/register"
                        exact
                        className="text-white-50 fw-bold"
                      >
                        Đăng kí ngay
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
