import React, { useEffect, useState } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  getAccountDetailByAccountId,
  updatepProfile,
  getByUsername,
} from "../api/AccountApi";
import { MdPerson, MdLock } from "react-icons/md";
const Profile = (props) => {
  const history = useHistory();
  const [flag, setFlag] = useState();

  useEffect(() => {
    getAccountDetailByAccountId(props.user.id)
      .then((res) => {
        reset(res.data);
        setFlag(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitHandler = (data) => {
    const result = {
      ...data,
      id: flag.id,
    };
    console.log(result);
    updatepProfile(result)
      .then(() => {
        toast.success("Cập nhật thông tin thành công!");
        props.refresh(false);
        getByUsername(props.user.username)
          .then((res) => {
            props.userHandler(res.data);
          })
          .catch((error) => console.log(error));
        history.push("/");
      })
      .catch((error) => toast.error(error.response.data.Errors));
  };
  return (
    <div>
      {" "}
      <section className="vh-100 container-login100 bg-backgroundLogin">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card wrap-login text-white"
                style={{ borderRadius: "15px" }}
              >
                <div className="mb-md-5 mt-md-4 pb-5 flex-col-d">
                  <h3 className="login100-form-title">Cập nhật tài khoản</h3>
                  <form
                    className="needs-validation flex-col-d"
                    onSubmit={handleSubmit(onSubmitHandler)}
                  >
                    <div className="col-md-12 mb-4 d-flex align-items-center p-0">
                      <div
                        className="wrap-input100 validate-input mb-[23px]"
                        data-validate="Username is reauired"
                      >
                        <span className="label-input100" htmlFor="birthdayDate">
                          Họ tên
                        </span>
                        <input
                          type="text"
                          className="input100"
                          placeholder="Type your name"
                          id="birthdayDate"
                          {...register("fullname", {
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
                    <div
                      className=" d-flex p-0"
                      style={{ alignItems: "center" }}
                    >
                      <span
                        className="label-input100 "
                        style={{ marginRight: "10px" }}
                      >
                        Giới tính:{" "}
                      </span>
                      <div className="form-check form-check-inline">
                        <input
                          className="input100"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          defaultValue="Nữ"
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
                          className="input100"
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

                    <div className="wrap-input100 validate-input mb-[23px]">
                      <div className="form-outline">
                        <span className="label-input100" htmlFor="emailAddress">
                          Email
                        </span>
                        <input
                          type="text"
                          id="emailAddress"
                          className="input100"
                          {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                    <div className="wrap-input100 validate-input mb-[23px]">
                      <div className="form-outline">
                        <span className="label-input100" htmlFor="phoneNumber">
                          Số điện thoại
                        </span>
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="input100"
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

                    <div className="wrap-input100 validate-input mb-[23px] flex-col">
                      <span className="form-label select-label label-input100">
                        Địa chỉ
                      </span>
                      <textarea
                        name=""
                        id=""
                        cols="62"
                        rows="2"
                        style={{ textAlign: "center" }}
                        {...register("address", { required: false })}
                      ></textarea>
                    </div>

                    <div className="mt-4 pt-2 mb-3">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Cập nhật
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
