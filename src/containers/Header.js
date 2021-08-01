import React, { useState } from "react";
import '../css/Header.css';
// import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from "react-router-dom";
import Login from "./userRegistration/Login";
import Signup from "./userRegistration/Signup";

const Header = () => {
  const [showlogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUserData] = useState({});
  console.log(user)
  const handleSelect = (e) => {
    console.log(e.target.value);
    if (e.target.value === "logout") {
      setUserData({});
    }
  }
  return (
    <>
      <Link to="/">
        <div className="mediaTitle">Diary's for All</div>
      </Link>
      <div className="header">
        <div className="leftSide">
          <button className="headerbtn">Diary's</button>
          {/* <button className="headerbtn">Start <span className="hideText">a Project</span></button> */}
        </div>

        <Link to="/">
          <div className="title">Diary's for All</div>
        </Link>
        <div className="rightSide">
          <Link to="/profile">
            <button className="headerbtn">Profile</button>
          </Link>
          {
            user && user._id ?
              <select className="headerbtn selectOption" name="loginProfile" onChange={handleSelect} id="loginProfile" >
                <option value="firstName">{user.firstName}</option>
                <option value="logout">logout</option>
              </select> :
              <button className="headerbtn"
                onClick={() => setShowLogin(true)}>Log in
              </button>
          }
        </div>
        <Login
          show={showlogin}
          onHide={() => setShowLogin(false)}
          hideloginShowsignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          setUserData={setUserData}
          setShowLogin={setShowLogin}
        />
        <Signup
          show={showSignup}
          onHide={() => setShowSignup(false)}
          hidesignupShowLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
          setUserData={setUserData}
          setShowSignup={setShowSignup}
        />
      </div>
    </>
  );
};

export default Header;
