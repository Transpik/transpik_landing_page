import React from "react";

class Map extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="flex flex-col items-center justify-center container align-middle w-full h-screen bg-secondary-light_orange">
                <div class="nav-bar shadow-xl w-full h-16 bg-white"></div>
                <div className="grid grid-flow-col items-center justify-center w-full h-screen">
                    
                    <div class="shadow-xl max-w-sm bg-white h-80 rounded-xl ml-16">
                        <div className="flex flex-row justify-between gap-4 pt-2 pb-2">
                            <div className="flex">
                            <div className="flex items-center topic pl-2 font-bold">Order</div>
                            <div className="flex items-center order-name text-sm text-gray-500">#3456</div>
                            </div>
                            <div className=" flex items-center loading-map pr-2 text-sm text-orange">Load live map</div>
                        </div>
                        <div className="flex items-center justify-around w-full  h-14 text-white">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">1</div>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">2</div>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange">3</div>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary-orange">4</div>
                        </div>
                        <div className="gird-3 grid-rows-2 grid-flow-row gap-4 pt-2 pb-2">
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
                        <div className="subTopic font-bold pl-2">Status Records</div>
                        
                        <div className="grid grid-flow-row w-80 ml-2 mr-2 mt-2 bg-red-50 rounded-md">
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
                    <div className="w-60 h-80 bg-green">Map</div>
                </div>
            </div>
        );
    }
}
 
export default Map;