import React, { useState, useEffect } from "react";
import axios from "axios";
import "../asset/css/Navigation.css";
import "../asset/css/Movie.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <div>Enter the main content</div>
      <Footer />
    </div>
  );
}

export default Home;
