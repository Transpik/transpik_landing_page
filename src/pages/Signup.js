import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { email: "", password: "", confirmPassword: "", type: ""};
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mx-auto flex justify-center mt-16 font-poppins">
        <div className="rounded-2xl bg-white border border-solid p-9 border-secondary-light-gray w-[436px] flex flex-col items-center" style={{"box-shadow": "0px 10px 20px rgba(229, 229, 229, 0.3)"}}>
          <div className="flex flex-col items-center mb-9">
            <h1 className="text-dark-gray text-xl font-medium mb-4">Sign Up</h1>
            <p className="text-light-gray text-sm">All fields requires for signing process.</p>
          </div>
          <div>
            <form method="POST" onSubmit={this.onSubmit} className="text-dark-gray text-base">
              <div>
                <label className="ml-4">Email Address</label>
                <input type={"email"} name={"email"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-5"></input>
              </div>
              <div>
                <label className="ml-4">Password</label>
                <input type={"password"} name={"password"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-4"></input>
                <div className="text-xs text-[#F14545] ml-4 mb-5">
                  Must be 8 or more characters and contain at least 1 number and 1 special character.
                </div>
              </div>
              <div>
                <label className="ml-4">Confirm Password</label>
                <input type={"password"} name={"confirm-password"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-5"></input>
              </div>
              <div className="mb-5">
                <div className="ml-4 mb-4">Select Account Type</div>
                <div className="flex">
                  <div className="mr-5">
                    <input type={"radio"} name={"delivery-service"}></input>
                    <label className="text-light-gray text-sm ml-2">Delivery service</label>
                  </div>
                  <div>
                    <input type={"radio"} name={"ecomm-platform"}></input>
                    <label className="text-light-gray text-sm ml-2">Ecom. platform</label>
                  </div>
                </div>
              </div>
              <div className="text-xs text-light-gray ml-4 mb-5">
                By clicking Sign Up button you agree to Transpik Terms and Privacy Policy.
              </div>
              <div className="flex justify-center">
                <button type={"submit"} className="bg-orange text-base font-medium text-white h-12 w-[142px] rounded-lg">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;