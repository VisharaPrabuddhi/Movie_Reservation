import React, { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Navigation.css";
import "../asset/css/Movie.css";
import "../asset/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Header";
import Footer from "./Footer";

function Login() {
  return (
    <div className="pic">
      <Headers />
      <div className="box">
        <h3>Welcome Back!</h3>
        <br />
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter password"
          />
        </div>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary" type="button">
            Login
          </button>
        </div>
        <br />
        <p className="p1">
          Don't have an account<a href="./Register"> Signup</a>?
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
