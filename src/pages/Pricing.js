import React from "react";
import UserCard from "../components/UserCardComponent/UserCardComponent";


class PricingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-gradient-to-b from-light-orange to-[#fff9f700] font-poppins">
        <p className="pt-16 text-2xl text-center">
          Ready to streamline delivery tasks with Transpik?{" "}
        </p>

          <select className="form-select block rounded-lg w-auto h-12 mx-auto bg-orange hover:bg-[#FFFFFF] font-medium text-center text-[#FFFFFF] hover:text-orange border-2 border-orange shadow-lg hover:border-orange text-sm py-3 px-9 mt-4">
            <option value="Delivery service"> Delivery service</option>
            <option value="E-commerce"> E-commerce</option>
          </select>

        <div className="text-center">
          <UserCard
            content1="Basic"
            content2="30 days one time plan. "
            content5="Suitable for newly deployed platforms or testing purposes. "
            content3="$19"
            content4="Per 30 days"
          ></UserCard>

          <UserCard
            content1="Standard"
            content2="1 year time plan."
            content5="More suitable for stable platforms with short term business strategies. "
            content3="$59"
            content4="Per 1 year"
          ></UserCard>

          <UserCard
            content1="Premium"
            content2="3 years time plan."
            content5="Suitble for more stable platforms with long term business strategies. "
            content3="$200"
            content4="Per 3 years"
          ></UserCard>
        </div>
      </div>
    );
  }
}

export default PricingPage;
