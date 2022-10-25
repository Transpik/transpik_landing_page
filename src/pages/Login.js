import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.typeDel = React.createRef();
    this.typeEcom = React.createRef();
  }

  onSubmit(event) {
    event.preventDefault();
    const email = this.emailInput.current.value;
    const password = this.passwordInput.current.value;

    const type = (this.typeDel.current.checked) ? this.typeDel.current.value : this.typeEcom.current.value;
    axios({
      method: 'post',
      url: 'https://transpikapi.onrender.com/users/login',
      withCredentials: true,
      mode: 'cors',
      data: {
        email: email,
        password: password,
        type: type,
      }
    }).then((response) => {
      window.location.href = response.data.data.redirect;
    }).catch((error) => {
      if(error.response) {
        alert(error.response.data.message);
      }
    });
  }

  render() {
    return (
      <div className="container mx-auto flex justify-center mt-16 font-poppins">
        <div className="rounded-2xl bg-white border border-solid p-9 border-secondary-light-gray w-[436px] flex flex-col items-center" style={{"box-shadow": "0px 10px 20px rgba(229, 229, 229, 0.3)"}}>
          <div className="flex flex-col items-center mb-9">
            <h1 className="text-dark-gray text-xl font-medium mb-4">Login</h1>
            <p className="text-light-gray text-sm text-center w-2/3">You can login as a delivery service or an ecommerece platform.</p>
          </div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label className="ml-4">Email Address</label>
              <input ref={this.emailInput} type={"email"} name={"email"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-5"></input>
            </div>
            <div>
              <label className="ml-4">Password</label>
              <input ref={this.passwordInput} type={"password"} name={"password"} className="h-12 w-full bg-light-orange outline-orange border border-solid border-secondary-orange rounded-lg p-4 mt-4 mb-4"></input>
            </div>
            <div className="mb-4">
              <label className="ml-4">User Type</label>
              <div>
                
                  <input ref={this.typeDel} id="delivery_id" type="radio" name="type" value="delivery" className="p-4 mt-4 mb-4" checked></input>
                  <label for="delivery_id" className="ml-2 text-light-gray text-sm">Delivery Service</label>
                
                
                  <input ref={this.typeEcom} id="ecommerce_id" type="radio" name="type" value="ecommerce" className="p-4 mt-4 mb-4 ml-4"></input>
                  <label for="ecommerce_id" className="ml-2 text-light-gray text-sm">Ecomm. Platform</label>
                
              </div>
            </div>
            <div className="flex justify-center">
              <button type={"submit"} className="bg-orange text-base font-medium text-white h-12 w-[142px] rounded-lg">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;