import React, { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Navigation.css";
import "../asset/css/Movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headers from "./Header";
import Footer from "./Footer";
import image from "../asset/image/login.jpg";

function Login() {
  return (
    <div className="image">
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
            placeholder="name@example.com"
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
          />
        </div>
        <div class="d-grid gap-2 d-md-block">
          <button class="btn btn-primary" type="button">
            Button
          </button>
        </div>
        <br />
        <a href="./Register">Signup</a>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
