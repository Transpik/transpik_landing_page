import React from "react";
import SignupCard from "../components/SignupCard/SignupCard";
import ecommerce_png from "../assets/undraw_add_to_cart_re_wrdo.png";
import delivery_png from "../assets/undraw_deliveries_2r4y.png";
import { Link } from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="font-poppins text-dark-gray flex justify-between items-center container mx-auto mt-24">
        <div>
          <p className="w-[296px] text-xl font-normal">
            Mauris volutpat facilisis ante, vitae consequat velit consectetur quis. Integer dapibus dolor eu mauris rhoncus, non ultrices augue interdum.
          </p>
          <div className="bg-orange w-[182px] h-12 rounded-lg flex justify-center items-center mt-16">
            <Link to="pricing" className="font-medium text-base font-poppins text-white">
              Check Pricing
            </Link>
          </div>
        </div>
        <div className="flex">
          <SignupCard
            className="mr-12"
            src={ecommerce_png}
            description="Leverage the power of Transpik API by Including it in your web platform to accomplish all the delivery related tasks."
          />
          <SignupCard
            src={delivery_png}
            description="Register to the Transpik API to use the technical layer which is enhanced for managing all your delivery stuffs."
          />
        </div>
      </div>
    );
  }
}

export default Home;