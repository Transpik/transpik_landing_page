import React from "react";
import { Link } from "react-router-dom";

class SignupCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={`flex flex-col items-center justify-between font-poppins w-[364px] h-[496px] rounded-2xl bg-white border border-solid p-9 border-secondary-light-gray ${this.props.className}`} style={{"box-shadow": "0px 10px 20px rgba(229, 229, 229, 0.3)"}}>
        <div>
          <img src={this.props.src} width="292px" height="215px" className="mb-9"></img>
          <p className="text-base text-dark-gray text-center">{this.props.description}</p>
        </div>
        <div className="w-24 h-9 border-2 border-solid border-orange text-orange font-medium text-base rounded-lg flex justify-center items-center cursor-pointer mt-9 hover:bg-orange hover:text-white delay-100 ease-in"><Link to="signup">Sign Up</Link></div>
      </div>
    );
  }
}

export default SignupCard;