import React, { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Navigation.css";
import "../asset/css/Movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../asset/css/Registration.css";
import Header from "./Header";
import Footer from "./Footer";

function Register() {
  return (
    <div className="image">
      <Header />
      <div className="box1">
        <b>
          <h3>Signup</h3>
        </b>
        <br />
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          />
        </div>
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
            Signup
          </button>
        </div>
        <p>
          Already registered<a href="./Login">Signin</a>?
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
