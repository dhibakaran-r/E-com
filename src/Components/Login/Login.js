import React from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import login from "../../images/em.png";
import fb from "../../images/fb.png";
import gl from "../../images/google.png";
import Navigation from "../Navigation/Navigation";
// import bg from '../../images/bg.jpg'
import { IoIosArrowRoundBack } from "react-icons/io";

const Login = () => {
  const back = useNavigate();
  return (
    <>
      <Navigation />
      <div className="body">
        <div className="back">
          <button
            onClick={() => {
              back("/");
            }}
          >
            <IoIosArrowRoundBack className="icon-style" />
            Back To Home Page
          </button>
        </div>

        <section className="main">
          <div className="main-container">
            <div className="content-1">
              <div className="header">
                <h2>Login</h2>
                <p>
                  Doesn't have an account yet?{" "}
                  <NavLink to={"/signin"}>Sign up</NavLink>{" "}
                </p>
              </div>

              <div className="form">
                <form action="#" className="form">
                  <div className="input-block">
                    <div className="input">
                      <label for="email">Email Address</label>
                      <input
                        type="mail"
                        id="email"
                        placeholder="you@example.com"
                      />
                      <div className="error"></div>
                    </div>

                    <div className="input">
                      <label for="password">
                        Password <a href="#">Forget Password?</a>
                      </label>

                      <input
                        type="password"
                        id="password"
                        placeholder="Enter 6 character or more"
                      />
                      <div className="error"></div>
                    </div>

                    <div className="check-block">
                      <input type="checkbox" id="remain" value="Checked" />
                      <label for="remain">Remember me</label>
                    </div>

                    <div className="input">
                      <button type="submit" onclick="sendValue()">
                        login
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="bottom">
                <div className="hint">
                  <span>or login with</span>
                </div>

                <div className="more">
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    className="google"
                  >
                    <span className="logo">
                      <img src={gl} alt="google" />
                    </span>{" "}
                    <span className="name">Google</span>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="facebook"
                  >
                    <span className="logo">
                      <img src={fb} alt="facebook" />
                    </span>{" "}
                    <span className="name">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="content-2">
              <img src={login} alt="login image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
