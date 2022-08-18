import React from "react";
import Image from "../../assets/SignUp.png";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="bg-gradient-to-b from-orange-100 to-orange-0 h-96 w-full">
          <div className="md:px-20 px-4 py-8"></div>
          <div className="w-full flex items-center justify-center my-12">
            <div className="flex items-center w-9/12">
              <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white">
                <div className="hidden lg:block h-0 lg:h-64">
                  <img
                    className="block w-auto shadow rounded"
                    src={Image}
                    alt="Image"
                  ></img>
                </div>
                <div className="h-64">
                  <div className="bg-white shadow rounded pt-12 pb-6 lg:px-12 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                      Let’s chat and get a quote!
                    </p>
                    <div className="md:flex items-center mt-12">
                      <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Full Name
                        </label>
                        <input
                          tabIndex={0}
                          aria-label="Please input full name"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please input full name"
                        />
                      </div>
                      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Company Name
                        </label>
                        <input
                          tabIndex={0}
                          aria-label="Please input email address"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please input email address"
                        />
                      </div>
                    </div>
                    <div className="md:flex items-center mt-6">
                      <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Work Email
                        </label>
                        <input
                          tabIndex={0}
                          role="input"
                          aria-label="Please input work email"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please input work email"
                        />
                      </div>
                      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Phone Number
                        </label>
                        <input
                          tabIndex={0}
                          aria-label="Please input phone number"
                          type="name"
                          className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please input phone number"
                        />
                      </div>
                    </div>
                    <div className="md:flex items-center mt-6">
                      <div className="md:w-72 flex flex-col">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Create Password
                        </label>
                        <input
                          tabIndex={0}
                          role="input"
                          aria-label="Please enter password"
                          type="password"
                          className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please enter password"
                        />
                      </div>
                      <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-semibold leading-none text-gray-800">
                          Confirm Password
                        </label>
                        <input
                          tabIndex={0}
                          aria-label="Please re-enter password"
                          type="password"
                          className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-gray-50 border-b-2 rounded border-gray-300 placeholder-gray-300"
                          placeholder="Please re-enter password"
                        />
                      </div>
                    </div>
                    <div></div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">
                      By clicking submit you agree to our terms of service,
                      privacy policy and how we use data as stated
                    </p>
                    <div className="flex items-center justify-end w-full">
                      <button className="flex items-center mt-9 text-base font-semibold leading-none text-white py-4 px-6 bg-orange-500 rounded hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none">
                        <p>NEXT</p>
                        <FaArrowRight className="text-white text-lg ml-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
