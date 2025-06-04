import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
  return (
    <div className="header-cont-main">
      <div className="header-cont">
        Ornamen<span>ts</span>
      </div>
      <div className="login-section">
        <span id="signup-btn">
          <Button>Sign Up</Button>
        </span>
        <span id="login-btn">
          <Button onClick={()=>navigate("/login")}>Login</Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
