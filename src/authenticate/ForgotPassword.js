import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./signin.css";
import { forgotPassword } from "../api/AuthenticateApi";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import imgLogin from "../static/images/banner/image.png";
import { MdPerson, MdLock } from "react-icons/md";
const ForgotPassword = () => {
  const history = useHistory();

  const signInHandler = (data) => {
    const userFlag = {
      username: data.username,
    };
    forgotPassword(userFlag)
      .then((res) => {
        toast.success(res.data);
        history.push("/sign-in");
      })
      .catch(() => toast.error("Đã xảy ra lỗi vui lòng quay lại sau!"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="container-login100 bg-backgroundLogin flex-center">
      {" "}
      <section className=" vh-100">
        <div className=" py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="">
              <div
                className="card wrap-login text-white d-flex"
                style={{
                  borderRadius: "1rem",
                  flexDirection: "row",
                  width: "1000px",
                }}
              >
                <div className="">
                  <img src={imgLogin} style={{ height: "100%" }} />
                </div>
                <div className="card-body p-5" style={{ minWidth: "390px" }}>
                  <div className="mb-md-5 mt-md-4 pb-5 flex-col-d">
                    <h2 className="login100-form-title ">Quên mật khẩu</h2>
                    <form
                      className="needs-validation  flex-col-d"
                      onSubmit={handleSubmit(signInHandler)}
                    >
                      <div className="wrap-input100 validate-input mb-[23px]">
                        <span className="label-input100">Username</span>
                        <input
                          type="text"
                          id="typeEmailX"
                          placeholder="Type your username"
                          className="input100"
                          {...register("username", {
                            required: true,
                            pattern: /^\s*\S+.*/,
                          })}
                        />
                        {/* <label className="form-label" htmlFor="typeEmailX">
                          Tài khoản
                        </label> */}
                        <span
                          className="focus-input100"
                          data-symbol="&#xf190;"
                        ></span>
                        <MdPerson className="focus-input100" color="#adadad" />
                        {errors.username && (
                          <div className="alert alert-danger" role="alert">
                            Tài khoản không hợp lệ!
                          </div>
                        )}
                      </div>
                      <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn"></div>
                          <button className="login100-form-btn" type="submit">
                            Lấy lại mật khẩu
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div>
                    <p className="mb-0">
                      <NavLink to="/sign-in" exact className=" fw-bold">
                        Quay lại
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

export default ForgotPassword;
