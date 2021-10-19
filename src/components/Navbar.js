import React, { useState } from "react";
import "../css/Navbar.css";
import {Link} from "react-router-dom"
function Navbar() {
  const [toggle, setToggle] = useState(false);
  var change = () => {
    setToggle(!toggle);
  };
  return (
        <>
        <div className="navbar">
            <div className="nav-left">
              <div className="logo">
                <Link to="/">
                <img src="/assets/youtube.png" alt="" />

                </Link>
              </div>
            </div>
            <div className='nav-right'>
                  <ul>
                    <li>
                      <Link to="/series">
                        Series
                      </Link>
                    </li>
                    <li>
                      <Link to="/bollywood" href="">
                        Hollywood
                      </Link>
                    </li>
                    <li>
                      <Link to="/hollywood" href="">
                        Bollywood
                      </Link>
                    </li>
                    <li>
                      <a href="" className="nav-btn">
                          Login
                      </a>
                    </li>
                  </ul>
            </div>
        </div>
        </>
  );
}
export default Navbar;
