import React, { Component } from 'react'

class Portals extends Component {
    state = {}
    render() {
        return (
            <div className="flex flex-col items-center container align-middle w-full bg-secondary-light_orange">
                <div className="flex  flex-col items-center w-full  bg-light-orange">

                    <div className="flex  flex-col items-center w-full h-[500px] bg-orange">
                        <div className='flex flex-row items-center justify-between  w-full h-[180px]'>
                            <div className='ml-4 mr-0'>
                                <button className='border border-white rounded-3xl w-[120px] h-[50px] text-white'>View Drivers</button>
                            </div>
                            <div className="  w-[60px] h-[120px]">
                                <button onClick={this.handleSetting} className="setting">
                                    <svg class="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center justify-between w-full h-[80px]'>
                            <div className='ml-4 text-2xl font-bold text-white'>Status</div>
                            <div className='flex flex-row items-center  w-[190px] text-white'>
                                <div>Number of Drivers</div>
                                <div>:</div>
                                <div>24</div>
                            </div>
                        </div>

                        <div className='flex flex-row items-center justify-between w-full h-[100px]'>
                            <div className='flex flex-row justify-between bg-white w-[180px] h-[90px] border-none rounded-md ml-4'>
                                <div className='bg-orange rounded-full w-[60px] h-[60px] ml-1 mt-4'>

                                </div>
                                <div className='flex flex-col mt-4 w-[110px]'>
                                    <div className='text-2xl font-bold'>25</div>
                                    <div className='text-orange'>Failed Orders</div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between bg-white w-[180px] h-[90px] border-none rounded-md'>
                                <div className='bg-orange rounded-full w-[60px] h-[60px] ml-1 mt-4'>
                                    <svg class="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="1" y="3" width="15" height="13" />  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />  <circle cx="5.5" cy="18.5" r="2.5" />  <circle cx="18.5" cy="18.5" r="2.5" /></svg>
                                </div>
                                <div className='flex flex-col mt-4 w-[110px]'>
                                    <div className='text-2xl font-bold'>65</div>
                                    <div className='text-orange'>Delivered</div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between bg-white w-[180px] h-[90px] border-none rounded-md mr-10'>
                                <div className='bg-orange rounded-full w-[60px] h-[60px] ml-1 mt-4'></div>
                                <div className='flex flex-col mt-4 w-[110px]'>
                                    <div className='text-2xl font-bold'>34</div>
                                    <div className='text-orange'>In Progress</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex  flex-col items-center w-full h-[500px]">
                        <div className='w-full h-[80px] text-3xl font-bold ml-8 mt-4'>Recent Orders</div>
                        <div className="flex h-[250px] justify-center w-full mt-10">
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
                        <div className='flex items-center justify-end w-full h-[80px]'>
                            <button class="bg-transparent w-[120px] hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4 border border-orange hover:border-transparent rounded mr-10 mt-6">
                                See More
                            </button>
                        </div>
                    </div>

                    <div className="flex  flex-col items-center w-full h-[730px] bg-orange">
                        <div className='text-white font-bold text-3xl ml-6 w-full h-[60px]'>Orders Received vs e-commerce sites</div>
                        <div className='flex flex-row items-center justify-around parent w-[900px] h-[500px]'>
                            <div className='Mp w-[400px] h-[450px] bg-white rounded-md'>chart</div>
                            <div className='flex flex-col items-center justify-evenly w-[450px] h-[500px]'>
                                <div className='upBox w-[450px] h-[210px] bg-white rounded-md'>
                                    <div className='text-2xl font-bold ml-4 mt-4 h-12'>Customer Reaction</div>

                                    <div class="flex items-center justify-center h-16">
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
                                    </div>

                                    <div className='flex items-center justify-center w-full h-16'>
                                        <button class="bg-transparent hover:bg-orange text-orange font-semibold hover:text-white py-2 px-4 border border-orange hover:border-transparent rounded">
                                            Customer Feedback
                                        </button>
                                    </div>

                                </div>
                                <div className='downBox w-[450px] h-[210px] bg-white rounded-md'>
                                    <div className='flex flex-row items-center justify-around mt-3'>
                                        <div className='flex flex-col w-[190px] h-[180px] bg-orange rounded-md'>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px]'>Revenue</div>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px]'>
                                                <svg class="h-16 w-16 text-black" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />  <path d="M12 6v2m0 8v2" /></svg>
                                            </div>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px] mt-2'>$134</div>
                                        </div>
                                        <div className='flex flex-col w-[190px] h-[180px] bg-orange rounded-md'>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px]'>Orders Placed</div>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px]'>
                                                <svg class="h-16 w-16 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            </div>
                                            <div className='flex item-center justify-center font-bold text-1xl text-white h-[60px] mt-2'>1344</div>
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

export default Portals;