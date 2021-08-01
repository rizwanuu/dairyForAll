import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../../css/UserRegistration.css";

const Login = ({ show, onHide, hideloginShowsignup, setUserData,setShowLogin }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9002/login", user).then((res) => {
      // alert(res.data.message);
      setUserData(res.data.user);
      setShowLogin(false);
      history.push("/");
    });
  };
  return (
    <Modal centered show={show} onHide={onHide} size="md">
      <div className="inner">
        <form className="mb-5">
          <h3>Log in</h3>
          <div className="form-group mb-3">
            <label className="mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group mb-3">
            <label className="mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-block w-100 btn-outline-light"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="/login">password?</a>
          </p>
          <div className="forgot-password text-right">
            Don't have Account?{" "}
            <div onClick={hideloginShowsignup} style={{ cursor: "pointer" }}>
              Signup?
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

export default Login;
