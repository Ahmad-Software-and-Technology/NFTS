import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";

import img from "../assets/images/background/img-register.jpg";
import { API } from "../services/api/api";
import { storeToken, storeUser } from "../services/storage/storage";
import { toast } from "react-toastify";

const Register = () => {
  const [body, setBody] = useState({})
  const navigate = useNavigate()

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    if (!body.userName) {
      return toast.error("Please enter your user name")
    }

    if (!body.fullName) {
      return toast.error("Please enter your full name")
    }

    if (!body.nationality) {
      return toast.error("Please enter your country")
    }

    if (!body.bio) {
      return toast.error("Please enter your bio")
    }

    if (!body.email) {
      return toast.error("Please enter your email")
    }

    if (!body.password) {
      return toast.error("Please enter your password")
    }

    if (!body.confirmPassword) {
      return toast.error("Please enter password again to confirm")
    }

    if (body.password != body.confirmPassword) {
      return toast.error("Password and confirm password doesn't match")
    }

    API.registerWithEmail(body).then((res) => {
      if (res.status == 200) {
        storeToken(res?.data?.data?.token);
        storeUser(res?.data?.data);
        localStorage.setItem("isConnected", "true")
        localStorage.setItem("emailLoggedIn", "true")
        toast.success("User Registered successfully")
        navigate("/")
      } else {
        console.log(res)
      }
    }).catch(e => toast.error(e.response.data.message))

    // } catch (err) {
    //   // console.log(err)
    //   return toast.error(e.response.data.message)
    // }
  }
  return (
    <div>
      <Header />
      <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-inner flex">
                <div className="page-title-heading">
                  <h2 className="heading">Register</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Register</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section login-page register-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-create-item-content">
                <div className="form-create-item">
                  <div className="sc-heading">
                    <h3>Create An Account</h3>
                    <p className="desc">
                      Most popular gaming digital nft market place{" "}
                    </p>
                  </div>
                  <form>
                    {/* <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8"> */}
                    <div className="input-group ">
                      <input
                        name="name"
                        type="text"
                        className="mx-3 my-2"
                        placeholder="User Name"
                        required
                        onChange={(e) => body.userName = e.target.value}
                      />
                      <input
                        name="name"
                        type="text"
                        className="mx-3 my-2"
                        placeholder="Full Name"
                        required
                        onChange={(e) => body.fullName = e.target.value}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        name="phone"
                        type="text"
                        className="mx-3 my-2"
                        placeholder="Country"
                        required
                        onChange={(e) => body.nationality = e.target.value}
                      />
                      <input
                        name="name"
                        type="text"
                        className="mx-3 my-2"
                        placeholder="Bio"
                        required
                        onChange={(e) => body.bio = e.target.value}
                      />
                    </div>
                    <input
                      name="email"
                      type="email"
                      className="mx-3 my-2"
                      placeholder="Email Address"
                      required
                      onChange={(e) => body.email = e.target.value}
                    />
                    <div className="input-group">
                      <input
                        name="password"
                        type="password"
                        className="mx-3 my-2"
                        placeholder="Password"
                        required
                        onChange={(e) => body.password = e.target.value}
                      />
                      <input
                        name="password"
                        type="password"
                        className="mx-3 my-2"
                        placeholder="Re-Password"
                        required
                        onChange={(e) => body.confirmPassword = e.target.value}
                      />
                    </div>
                    <div className="input-group p-3 ml-2 style-2 ">
                      {/* <div className="btn-check">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                          className=" mx-3 my-2"

                        /> */}
                      {/* <label htmlFor="html"></label> */}
                      {/* </div> */}
                      Already have an account? <span onClick={() => navigate("/Login")} style={{ cursor: "pointer" }}> {" "}Sign In</span>
                    </div>
                    <button
                      name="submit"
                      type="submit"
                      onClick={(e) => handleEmailLogin(e)}
                      className="sc-button style mx-3 my-2 letter style-2"
                    >
                      <span >Register Now</span>{" "}
                    </button>
                  </form>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Newsletters /> */}
      <Footer />
    </div>
  );
};

export default Register;
