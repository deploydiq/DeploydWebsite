import React, { useState, useEffect } from "react";
import Icon from "@ant-design/icons";
import { Button, Space } from "antd";
import DeploydLogo from "images/DeploydLogo.js";
import { Link, NavLink } from "react-router-dom";
import "styles/header.less";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Logo = (props) => <Icon component={DeploydLogo} {...props} />;
function Header(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Space direction="horizontal" size={15} className="logo-wrapper">
              <Logo />
              <span>Deployd</span>
            </Space>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseOutlined /> : <MenuOutlined />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                to="/features"
                className="nav-links title-2"
                activeClassName="nav-links active"
                onClick={closeMobileMenu}
              >
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links title-2" activeClassName="nav-links active" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && (
            <Button type="primary" ghost>
              Login
            </Button>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Header;
