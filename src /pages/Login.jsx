import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Newsletters from "../components/layouts/Newsletters";
import Footer from "../components/footer/Footer";
import metamask from "../assets/LOGOS/metamask.svg"
import img1 from "../assets/images/background/img-login.jpg";
import { connectMetamask } from "../blockchain/connection";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../services/api/api";
import { storeToken, storeUser } from "../services/storage/storage";

const Login = () => {
  const userAddress = useSelector((state) => state.address.address);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(false)
  const [body, setBody] = useState({})



  const blockchainConnection = async () => {
    await connectMetamask(dispatch, navigate);
    const address = localStorage.getItem("address")
    console.log(address)
    // setTimeout(async () => {
    await handleLogin(address)
    // }, 6000)

  };


  const handleLogin = async (userAddress) => {
    console.log(userAddress)
    if (!userAddress) {
      return toast.error("Wallet address not found!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    const body = {
      userAddress: userAddress
    }

    await API.login(body).then((resp) => {
      if (resp.status === 200) {
        console.log(resp)
        storeToken(resp?.data?.data?.token);
        storeUser(resp?.data?.data);
        setIsConnected(true)
        navigate("/")
      }
    });
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    // try {
    if (!body.email) {
      return toast.error("Please enter your email")
    }

    if (!body.password) {
      return toast.error("Please enter your password")
    }

    API.loginWithEmail(body).then((res) => {
      if (res.status == 200) {
        storeToken(res?.data?.data?.token);
        storeUser(res?.data?.data);
        localStorage.setItem("isConnected", "true")
        localStorage.setItem("emailLoggedIn", "true")
        setIsConnected(true)
        toast.success("User logged in successfully")
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
                  <h2 className="heading">Log In</h2>
                </div>
                <div className="breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Log In</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section login-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-create-item-content">
                <div className="form-create-item">
                  <div className="sc-heading">
                    <h3>Login Your Account</h3>
                  </div>
                  <form>
                    {/* <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8"> */}
                    <input
                      name="user"
                      type="text"
                      placeholder="Email Address"
                      className=" mx-3 my-2"
                      required
                      onChange={(e) => body.email = e.target.value}
                    />
                    <input
                      name="number"
                      type="password"
                      className=" mx-3 my-2"
                      placeholder="Password"
                      onChange={(e) => body.password = e.target.value}
                      required
                    />
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
                      Don't have an account? <span onClick={() => navigate("/Register")} style={{ cursor: "pointer" }}> {" "}Sign Up</span>
                    </div>
                    <button
                      name="submit"
                      type="submit"
                      onClick={(e) => handleEmailLogin(e)}
                      className="sc-button style letter style-2  mx-3 my-2"
                    >
                      <span>Sign In</span>{" "}
                    </button>

                  </form>
                  <div className="other-login ">
                    <div className="text my-2">Or</div>

                    <div className="widget-social" onClick={() => blockchainConnection()} >
                      <div className="d-block align-item-center justify-content-center text-center  my-2" > <h6 >MetaMask</h6></div>
                      <ul>



                        <li>

                          <Link to="#">
                            <img src={metamask} style={{
                              width: "20px"
                            }} />

                          </Link>
                        </li>

                      </ul>
                    </div>
                  </div>
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

export default Login;
