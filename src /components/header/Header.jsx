import React, { useRef, useState, useEffect } from "react";
// import TopBar from "./TopBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';

import menus from "../../pages/menu";
import ProfileImage from "../../assets/profile-user-svgrepo-com.svg"
import DarkMode from "./DarkMode";
import logosvg from "../../assets/sir-01 ahmed123-01-01-01.png";
import icon from "../../assets/images/icon/connect-wallet.svg";
import { connectMetamask } from "../../blockchain/connection";
import { useDispatch, useSelector } from "react-redux";
import { storeAddress } from "../../redux/AddressRedux";
import { getUser } from "../../services/storage/storage";
import TopBar from "./TopBar";

const Header = () => {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false)
  const userAddress = localStorage.getItem("address");
  console.log(userAddress)
  const user = getUser()
  const emailConnected = localStorage.getItem("emailLoggedIn")
  const navigate = useNavigate()
  console.log(emailConnected)
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;

    scrollTop >= 100
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 120
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };


  useEffect(() => {
    const connected = localStorage.getItem("isConnected")
    if (connected) {
      setIsConnected(true)
    }
  }, [])


  const shorten = (address) => {
    if (address.length > 10) {
      return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    }
    return address;
  };

  const handleSigninAndLogout = () => {
    if (isConnected == true) {
      dispatch(storeAddress(""));
      setIsConnected(false)
      localStorage.removeItem("isConnected")
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } else {
      navigate("/Login")
    }
  }


  return (
    <div>
      {/* <TopBar /> */}
      <header id="header_main" className="header_1 js-header" ref={headerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="mobile-button mx-5"
                ref={btnToggle}

                onClick={menuToggle}
              >
                <span></span>
              </div>
              <div id="site-header-inner" className="flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        className="logo-dark"
                        src={logosvg}
                        alt="nft-gaming"
                      />
                      <img
                        id="logo_header"
                        className="logo-light"
                        src={logosvg}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                </div>
                {/* <form className="form-search">
                  <input type="text" placeholder="Search here" />
                  <button>
                    <i className="far fa-search"></i>
                  </button>
                </form> */}

                <nav id="main-nav" className="main-nav " ref={menuLeft}>
                  <ul id="menu-primary-menu " className="menu">
                    <li className={"menu-item"}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={"menu-item"}>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                
                    {menus.map((data, index) => (
                      <li
                        key={index}
                        onClick={() => handleOnClick(index)}
                        className={`menu-item menu-item-has-children ${activeIndex === index ? "active" : ""
                          } `}
                      >
                        <Link to={`${data.link ? data.link : "#"}`}>
                          {data.name}
                        </Link>
                        <ul className="sub-menu">
                          {data.namesub ? (
                            data.namesub.map((submenu, index) => (
                              <li
                                key={index}
                                className={
                                  pathname === submenu.links
                                    ? "menu-item current-item"
                                    : "menu-item"
                                }
                              >
                                <Link to={submenu.links}>{submenu.sub}</Link>
                                
                              </li>
                              
                            ))
                          ) : (
                            <></>
                          )}
                        </ul>
                        
                      </li>
                    ))}
                    <li className={"menu-item"}>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  
              
                </nav>
                <DarkMode />
               
                <div className=" mr-1 ">
                  {
                    isConnected ?(<></>):(<> <button
                      className="sc-button   style-2 mr-5"
  
                    >
  
                      <div onClick={() => handleSigninAndLogout()} style={{
                        color: "white"
                      }}>{isConnected ? "Logout" : "Login"}</div>
                    </button></>)
                  }
                 
                </div>


                {/* <div style={{
                  marginRight: "40px"

                }}>
                  <button
                    className="sc-button    style-2"

                  >

                    <Link to="/Register" style={{
                      color: "white"
                    }}>Register</Link>
                  </button>
                </div> */}
                {/* <div className="button-connect-wallet">
                                <Link to="/connect-wallet" className="sc-button wallet  style-2">
                                    <img src={icon} alt="icon" />
                                    <span>Connect Wallet</span>
                                </Link>
                            </div> */}

             {
              isConnected &&<Dropdown alignRight className="profile-image-dropdown    mr-5" >
              <Dropdown.Toggle variant="transparent"          id="dropdown-profile" className="  sc-button "
               
              >
                  <img
                      src={ProfileImage}
                      alt="Profile"
                      className="rounded-circle"
                      style={{ width: '30px', height: '30px', objectFit: 'cover',
                    backgroundColor:"white",
                  border:"1px solid black"
  }} // Adjust the size as needed
                  />
              </Dropdown.Toggle>
  
              <Dropdown.Menu>
                  <Dropdown.Item href="#/profile">My Profile</Dropdown.Item>
                  <Link to="/setting">Settings</Link>
                  <div className="flex">
                  <Dropdown.Item className="header_dropdown_item">

{isConnected && <div >
<button
className="sc-button    style-1"
>

<div style={{
  color: "white"
}}>
  {emailConnected == "true" ? user?.fullName : shorten(userAddress)}
</div>
</button>
</div>}

</Dropdown.Item>
                  <Dropdown.Item className="header_dropdown_item">
                    <div>
                  {
                      isConnected ?(<>
                      <button
  
                        className="sc-button   style-1"
                        
                      >
    
                        <div onClick={() => handleSigninAndLogout()} style={{
                          color: "white",
                          marginLeft:"0px"
                          
                        }}>{isConnected ? "Logout" : "Login"}</div>
                      </button></>):(<> </>)
                    }
                    </div>
          </Dropdown.Item>
                  
          </div>
              </Dropdown.Menu>
          </Dropdown>
             }
                
   
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
