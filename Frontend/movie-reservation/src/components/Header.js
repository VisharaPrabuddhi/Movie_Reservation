import React, { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div class="container">
        <h1 className="color">Movie Reservation Center</h1>
      </div>
      <div className="topnav">
        <div className="topnavbar">
          <a href="./Login">Login|Register</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
