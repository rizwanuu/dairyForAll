import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../../css/UserRegistration.css";
// import { Link } from "react-router-dom";

const Signup = ({
  show,
  onHide,
  hidesignupShowLogin,
  setUserData,
  setShowSignup,
}) => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, reEnterPassword } = user;
    if (
      firstName &&
      lastName &&
      email &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        // alert(res.data.message);
        setUserData(res.data.user);
        setShowSignup(false);
        history.push("/");
      });
    } else {
      alert("invlid input");
    }
  };

  return (
    <Modal centered show={show} onHide={onHide} size="md">
      <div className="inner">
        <form className="mb-5">
          <h3>Register</h3>

          <div className="form-group mb-3">
            <label className="mb-1">First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              vlaue={user.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-1">Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              vlaue={user.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              vlaue={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              vlaue={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="reEnterPassword"
              vlaue={user.reEnterPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block w-100 btn-outline-light"
            onClick={handleSignUp}
          >
            Register
          </button>
          <div className="forgot-password text-right">
            Already registered{" "}
            <div onClick={hidesignupShowLogin} style={{ cursor: "pointer" }}>
              {" "}
              log in?{" "}
            </div>
          </div>
        </form>
        {/* <button
          type="submit"
          className="btn btn-info btn-lg btn-block w-100 btn-outline-light mb-2"
        >
          Login with google
        </button>
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block w-100 btn-outline-light"
        >
          Login with facebook
        </button> */}
      </div>
    </Modal>
  );
};

export default Signup;
