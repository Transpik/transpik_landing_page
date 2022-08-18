import React from "react";
import NavBar from "./components/NavBar/NavBar";
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
      </div>
    );
  }
}

export default App;