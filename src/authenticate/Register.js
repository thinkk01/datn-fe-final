import React from "react";
import "./register.css";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { registerAccount } from "../api/AuthenticateApi";

const Register = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    const result = {
      ...data,
      roleId: "3",
    };
    console.log(result);
    registerAccount(result)
      .then(() => {
        toast.success("Đăng kí thành công!");
        history.push("/sign-in");
      })
      .catch((error) => toast.error(error.response.data.Errors));
  };
  return (
    <div>
      {" "}
      <section className="vh-100 bg-backgroundLogin container-login100 ">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="card wrap-login text-white">
              <div
                className=" wrap-login text-white"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body ">
                  <div className="mt-md-4 flex-col-d">
                    <h3 className=" login100-form-title">Đăng kí</h3>
                    <form
                      className="needs-validation flex-col-d"
                      onSubmit={handleSubmit(onSubmitHandler)}
                    >
                      <div className="wrap-input100 validate-input mb-[23px]">
                        <div className="form-outline">
                          <label className="label-input100 ">Username</label>
                          <input
                            type="text"
                            id="firstName"
                            placeholder="Type your username"
                            className="input100"
                            {...register("username", {
                              required: true,
                              pattern: /^\s*\S+.*/,
                            })}
                          />
                          {errors.username && (
                            <div className="alert alert-danger" role="alert">
                              Tài khoản không hợp lệ!
                            </div>
                          )}
                          <span
                            className="focus-input100"
                            data-symbol="&#xf190;"
                          ></span>
                        </div>
                      </div>
                      <div className="wrap-input100 validate-input mb-[23px]">
                        <div className="form-outline">
                          <label className="label-input100" htmlFor="lastName">
                            Password
                          </label>
                          <input
                            type="password"
                            id="lastName"
                            className="input100"
                            placeholder="Type your password"
                            {...register("password", {
                              required: true,
                              pattern: /^\s*\S+.*/,
                            })}
                          />
                          {errors.password && (
                            <div className="alert alert-danger" role="alert">
                              Mật khẩu không hợp lệ!
                            </div>
                          )}
                          <span
                            className="focus-input100"
                            data-symbol="&#xf190;"
                          ></span>
                        </div>
                      </div>
                      <div className="row-50">
                        <div className="wrap-input50 validate-input mb-[23px]">
                          <div className="form-outline datepicker w-100">
                            <label
                              htmlFor="birthdayDate"
                              className="label-input100"
                            >
                              Họ tên
                            </label>
                            <input
                              type="text"
                              className="input100"
                              placeholder="Type your full name"
                              id="birthdayDate"
                              {...register("fullName", {
                                required: true,
                                pattern: /^\s*\S+.*/,
                              })}
                            />
                            {errors.fullName && (
                              <div className="alert alert-danger" role="alert">
                                Họ tên không hợp lệ!
                              </div>
                            )}
                            <span
                              className="focus-input100"
                              data-symbol="&#xf190;"
                            ></span>
                          </div>
                        </div>
                        <div className="validate-input mb-[23px]">
                          <div>
                            <label className="mb-2 pb-1 label-input100">
                              Giới tính:{" "}
                            </label>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="femaleGender"
                                defaultValue="Nữ"
                                defaultChecked
                                {...register("gender", {
                                  required: true,
                                })}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="femaleGender"
                              >
                                Nữ
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="maleGender"
                                defaultValue="Nam"
                                {...register("gender", {
                                  required: true,
                                })}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="maleGender"
                              >
                                Nam
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row-50">
                        <div className="wrap-input50 validate-input mb-[23px]">
                          <div className="form-outline">
                            <label
                              className="label-input100"
                              htmlFor="emailAddress"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="emailAddress"
                              className="input100"
                              placeholder="Type your email"
                              {...register("email", {
                                required: true,
                                pattern:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              })}
                            />
                            {errors.email && (
                              <div className="alert alert-danger" role="alert">
                                Email không hợp lệ!
                              </div>
                            )}
                            <span
                              className="focus-input100"
                              data-symbol="&#xf190;"
                            ></span>
                          </div>
                        </div>
                        <div className="wrap-input50 validate-input mb-[23px]">
                          <div className="form-outline">
                            <label
                              className="label-input100"
                              htmlFor="phoneNumber"
                            >
                              Số điện thoại
                            </label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              className="input100"
                              placeholder="Type your phone"
                              {...register("phone", {
                                required: true,
                                pattern: /^0[0-9]{9}$/,
                              })}
                            />
                            {errors.phone && (
                              <div className="alert alert-danger" role="alert">
                                Số điện thoại không hợp lệ!
                              </div>
                            )}
                            <span
                              className="focus-input100"
                              data-symbol="&#xf190;"
                            ></span>
                          </div>
                        </div>
                      </div>

                      <div className="wrap-input100 validate-input mb-[23px]">
                        <label className="label-input100">Địa chỉ</label>
                        <textarea
                          name=""
                          id=""
                          cols="50"
                          rows="5"
                          className="input100"
                          placeholder="Type address"
                          {...register("address", { required: false })}
                        ></textarea>
                        <span
                          className="focus-input100"
                          data-symbol="&#xf190;"
                        ></span>
                      </div>

                      <div className="mt-4 pt-2 mb-3">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Đăng kí
                        </button>
                      </div>
                      <div>
                        <p className="mb-0">
                          Đã có tài khoản?{" "}
                          <NavLink to="/sign-in" exact className=" fw-bold">
                            <ins>Đăng nhập ngay</ins>
                          </NavLink>
                        </p>
                      </div>
                    </form>
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

export default Register;
