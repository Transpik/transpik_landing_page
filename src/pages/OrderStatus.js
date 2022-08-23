import React from "react";
import { Link } from "react-router-dom";

class OrderStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center container align-middle w-full h-screen bg-secondary-light_orange">
        {/* <div class="nav-bar shadow-xl w-full h-16 bg-white"></div> */}
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div class="flex shadow-xl  w-[380px] h-[450px] rounded-xl bg-white">
            <div className="flex flex-col w-[350px] h-[450px]">
              <div className="flex flex-row  h-[60px] justify-between gap-4 pt-2 pb-2">
                <div className="flex">
                  <div className="flex items-center topic pl-2 font-bold">Order</div>
                  <div className="flex items-center order-name text-sm text-gray-500">#3456</div>
                </div>
                <div className=" flex items-center loading-map pr-2 text-sm text-orange"><Link to="/map">Load live map</Link></div>
              </div>
              <div className="flex items-center  h-[90px] justify-around w-full text-white">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">1</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">2</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">3</div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-orange">4</div>
              </div>
              <div className="gird-3 grid-rows-2 grid-flow-row  h-[70px] gap-4 pt-2 pb-2">
                <div className="address flex justify-start pl-2 text-sm">
                  <div className="font-bold">Address</div>
                  <div>:</div>
                  <div className="est_address ml-12">No 39, Temple street, Colombo 10</div>
                </div>
                <div className="estimatedDate flex justify-start pl-2 text-sm">
                  <div className="font-bold">Estimated Date</div>
                  <div>:</div>
                  <div className="est_date ml-1">29 June 2021</div>
                </div>
              </div>
              <div className="subTopic  h-[40px] font-bold pl-2">Status Records</div>

              <div className="grid grid-flow-row w-[360px] h-[150px] ml-2 mr-2 mt-4 bg-secondary-orange rounded-md">
                <div className="row_1 flex justify-start pl-2 mr-2 h-8 text-sm">
                  <div>Processing</div>
                  <div>:</div>
                  <div className="ml-2">Handling the packageing</div>
                </div>
                <div className="row_2 flex justify-start pl-2 mr-2 h-8 text-sm">
                  <div>Processing</div>
                  <div>:</div>
                  <div className="ml-2">Done packing process</div>
                </div>
                <div className="row_3 flex justify-start pl-2 mr-2 h-8 text-sm">
                  <div>Picked up</div>
                  <div>:</div>
                  <div className="ml-3">Hand over to the Draco service</div>
                </div>
                <div className="row_4 flex justify-start pl-2 mr-2 h-8 text-sm">
                  <div>Delivering</div>
                  <div>:</div>
                  <div className="ml-2">On arriving</div>
                </div>
              </div>
            </div>
            {/* <div className="row_5 bg-white text-white">hi</div> */}


          </div>
        </div>
      </div>


      // <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

      //     <div class="p-5">
      //         <a href="#">
      //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      //         </a>
      //         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      //         <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      //             Read more
      //             <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      //         </a>
      //     </div>
      // </div>

    );
  }
}

export default OrderStatus;