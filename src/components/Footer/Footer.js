import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/FooterLogo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt-12">
        <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
          <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
            <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
              <div className="lg:flex">
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li>
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Components
                          </a>
                        </Link>
                      </li>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Templates
                          </a>
                        </Link>
                      </li>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Pricing
                          </a>
                        </Link>
                      </li>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            FAQ
                          </a>
                        </Link>
                      </li>
                      <li className="mt-6">
                        <a
                          href="#"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Blog
                          </a>
                        </Link>
                      </li>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Changelog
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex">
                  <div className="w-full lg:w-1/2 px-6">
                    <ul>
                      <li>
                        <a
                          href="#"
                          className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                        >
                          Privacy policy
                        </a>
                      </li>
                      <li className="mt-6">
                        <Link to="#">
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            Terms of service
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                    <div className="flex items-center mb-6">
                      <a href="#">
                        <div className="text-gray-50 hover:text-black hover:bg-neutral-400 hover:rounded-full p-2 cursor-pointer hover:text-brand dark:hover:text-brand ">
                          <svg
                            className="footer-icon feather feather-github"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 flex flex-col justify-center items-center">
            <Link to="#">
              <a>
                <img
                  className="block h-20 w-auto"
                  src={Logo}
                  alt="Brand logo"
                ></img>
              </a>
            </Link>
            <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
              2022 Transik. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
