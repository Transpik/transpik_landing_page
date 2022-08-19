import React from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.activeStyle = { "color": "#FE793D" };
    this.navLinks = this.props.navs.map(nav => <li key={nav} className="m-14 cursor-pointer"><NavLink style={({isActive}) => isActive ? this.activeStyle : undefined} to={`${"/"+nav.toLowerCase()}`}>{nav}</NavLink></li>);
  }

  render() {
    return (
      <nav className="flex justify-between items-center font-poppins text-xl font-medium h-28 bg-white container mx-auto">
        <div className="cursor-pointer"><NavLink to="/">{this.props.logoText || "Logo Text"}</NavLink></div>
        <div>
          <ul className="flex">
            {this.navLinks}
          </ul>
        </div>
        <div className="text-base text-orange bg-light-orange w-24 h-9 flex justify-center items-center rounded-lg cursor-pointer"><Link to={"login"}>Login</Link></div>
      </nav>
    );
  }
}

export default NavBar;