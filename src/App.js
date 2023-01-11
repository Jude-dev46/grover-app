import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Cta from "./components/cta/Cta";
import Features from "./components/features/Features";
import Features02 from "./components/features/Features02";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Service from "./components/service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Service />
      <Features />
      <Features02 />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
