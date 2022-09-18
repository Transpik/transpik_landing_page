import React from "react";

class PortalsOrders extends React.Component {
    state = {}

    handleSetting() {
        console.log("open Setting");
    }
    
    render() {
        return (
            <div className="bg-light-orange w-full h-screen">
                <div>
                    <div className="grid grid-flow-col">
                        <div className="grid grid-flow-col text-sm h-10 text-orange mt-2 ml-4">
                            <button className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">All</button>
                            <button className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Processing</button>
                            <button className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Picked up</button>
                            <button className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">In transit</button>
                            <button className="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Delivered</button>

                        </div>
                        <div className="flex items-center justify-end mr-8">
                            <button onClick={this.handleSetting} className="setting">
                                <svg class="h-6 w-6 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-end mr-16 h-12 text-4xl text-gray-600 font-bold mt-2 mb-2">Reject/Accept Deliveries</div>
                    <div className="flex flex-row justify-around mb-2">
                        <div className="flex flex-col bg-white w-[500px] h-[300px] rounded-md">
                            <div className="flex flex-row items-center justify-around h-20 w-full border-b-2 border-gray-300">
                                <div className="flex flex-row left w-1/2 pl-4">
                                    <div className="w-[80px]">img</div>
                                    <div className="w-[120px]">
                                        <div className="font-bold">Customer:</div>
                                        <div>Ms. Diana</div>
                                    </div>
                                </div>
                                <div className="right w-1/2 pl-6">
                                    <div className="font-bold">Status:</div>
                                    <div>In transit</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-around border-b-2 border-gray-300 h-20 w-full">
                                <div className="flex flex-row left w-1/2 pl-4">
                                    <div className="w-[80px]">img</div>
                                    <div className="w-[120px]">
                                        <div className="font-bold">Driver:</div>
                                        <div>John Stone</div>
                                    </div>
                                </div>
                                <div className="right w-1/2 pl-6">
                                    <div className="font-bold">Address:</div>
                                    <div>43, Will's Street</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-around border-b-2 border-gray-300 h-20 w-full">
                                <div className="left w-1/2 pl-4">
                                    <div className="font-bold">Seller:</div>
                                    <div>58649213</div>
                                </div>
                                <div className="right w-1/2 pl-6">
                                    <div className="font-bold">Appointment:</div>
                                    <div>In transit</div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-around h-20 w-full">
                                <div className="left w-1/2 pl-4">
                                    <div className="font-bold">Tracking ID:</div>
                                    <div>58649213</div>
                                </div>
                                <div className="right w-1/2 pl-6">
                                    <div>Message:</div>
                                    {/* <div>In transit</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-[500px] h-[300px] rounded-md">Map</div>
                    </div>
                    {/* grid grid-flow-row w-5/6 ml-16 */}
                    <div className="flex h-[210px] justify-center w-full mt-10">
                        <div className="flex flex-col overflow-y-auto space-y-2 w-[1080px] pt-2 pl-2 pr-2">
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>
                            <div className="flex items-center justify-between flex-initial flex-shrink-0 w-full h-14 bg-white rounded-md pr-4">
                                <div className="ml-2">Parcel to Samantha</div>
                                <div className='flex justify-start'>
                                    <div>Tracking ID:</div>
                                    <div className="ml-1">123456</div>
                                </div>
                                <button className="bg-gray-600 hover:bg-gray-800 text-white font-bold rounded-md w-[120px] h-10">Status</button>
                                <button className="bg-orange hover:bg-red-500 text-white font-bosk rounded-md w-[120px] h-10">Track</button>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default PortalsOrders;