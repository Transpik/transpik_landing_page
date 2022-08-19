import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-gradient-to-b from-[#FFF9F6]">
        <div className="bg-white">
          <NavBar navs={["Docs", "Pricing", "Tracking", "Downloads"]} logoText="Transpik" />
        </div>
        <Outlet />
        <Footer />
      </div>
    );
  }
}

export default App;