import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

const Login = () => {
  const navigate = useNavigate();

  const loginSubmit = async (formdata, { resetForm }) => {
    console.log(formdata);
    const response = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Logedin",
      });

      const data = await response.json();
      if (data.isAdmin) {
        sessionStorage.setItem("admin", JSON.stringify(data));
        navigate("/admin/addequipment");
      } else {
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/user/profile");
      }
      resetForm();
    } else if (response.status === 401) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
      });
    } else {
      console.log("unknown error ocuured");
    }
  };
  return (
    <div>
      <div className="col-md-8 mx-auto justify-content-center d-flex align-items-center vh-100">
        <div>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <img style={{ height: 100 }} src="logo.png" alt="" />
            <h2 className="display-1">Shoot It</h2>
          </div>
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={loginSubmit}
                  >
                    {({ values, handleSubmit, handleChange, isSubmiting }) => (
                      <form onSubmit={handleSubmit}>
                        {/* Email input */}
                        <MDBInput
                          label="Email Address"
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          className="mb-4"
                        />
                        <MDBInput
                          label="Password"
                          id="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          className="mb-4"
                        />
                        <div className="row mb-4">
                          <div className="col d-flex justify-content-center">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="form2Example31"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example31"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign in
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
