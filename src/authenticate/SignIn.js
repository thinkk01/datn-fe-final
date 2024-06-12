import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./signin.css";
import { signIn } from "../api/AuthenticateApi";
import { useForm } from "react-hook-form";
import { MdPerson, MdLock } from "react-icons/md";
import { toast } from "react-toastify";
import { getMe } from "../api/AccountApi";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";

const SignIn = (props) => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authenticateUser(token);
    }
  }, []);
  const authenticateUser = (token) => {
    getMe(token)
      .then((res) => {
        props.setUser(res.data);
        history.push("/");
      })
      .catch((error) => console.error("Error fetching user info:", error));
  };
  const signInHandler = (data) => {
    const userFlag = {
      ...data,
      admin: false,
    };
    signIn(userFlag)
      .then((res) => {
        toast.success("Đăng nhập thành công!", { autoClose: true });
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
                  <div className="mb-md-5 mt-md-4 pb-5 flex-col-d">
                    <h2 className=" login100-form-title">Đăng nhập</h2>
                    <form
                      className="needs-validation flex-col-d"
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
                          data-symbol="&#xf190;"
                        ></span>
                        <MdPerson className="focus-input100" color="#adadad" />
                      </div>
                      {errors.username && (
                        <div className="alert alert-danger error" role="alert">
                          Tài khoản không hợp lệ!
                        </div>
                      )}

                      <div
                        className="wrap-input100 validate-input"
                        data-validate="Password is required"
                      >
                        <span className="label-input100">Password</span>
                        <input
                          className="input100"
                          type="password"
                          name="password"
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
                        <MdLock className="focus-input100" color="#adadad" />
                      </div>
                      {errors.password && (
                        <div className="alert alert-danger error" role="alert">
                          Mật khẩu không hợp lệ!
                        </div>
                      )}
                      {/* <div className="text-right p-t-8 p-b-31">
                        <a href="#">Forgot password?</a>
                      </div> */}

                      <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn"></div>
                          <button className="login100-form-btn ">Login</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0 text-center">
                      Chưa có tài khoản?{" "}
                      <NavLink to="/register" exact className=" fw-bold">
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
