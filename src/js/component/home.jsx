import React from "react";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

const Home = () => {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Card />
        <Footer />
      </div>
    );
  }
  
  export default Home;