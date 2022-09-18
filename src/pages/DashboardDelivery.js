import React, { Component } from 'react'


class DashboardDelivery extends Component {
    state = {}
    render() {

        return (
            <div className="flex flex-col items-center mx-auto container align-middle w-full bg-secondary-light_orange">
                <div className="flex  flex-col items-center justify-center w-full h-screen bg-light-orange">
                    <div className='flex flex-row items-center w-[800px] h-[600px] rounded-lg shadow-md'>
                        <div className='flex flex-col items-center  w-[400px] h-[600px]'>
                            <div className="flex flex-row text-sm  mt-2 w-[350px]">
                                <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Profile</button>
                                <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">API</button>
                                <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Billing</button>
                                <button className="bg-transparent hover:bg-orange-600 text-orange-600 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded w-1/2">Marketplace</button>
                            </div>
                            <div className='text-2xl font-bold items-start  w-[350px] h-[50px] mt-8'>Account<span className='text-sm ml-3 font-light'>Billing</span></div>
                            <div className='flex flex-col w-[350px] h-[400px] '>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Name On Card
                                    </label>
                                    <input class=" appearance-none border w-[300px] outline-orange-500 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cardName" type="text" placeholder="Enter name on the card" />
                                </div>
                                <div class="mb-6">
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        Card Number
                                    </label>
                                    <input class=" appearance-none border w-[300px] outline-orange-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="cardNumber" type="number" placeholder="xxxx xxxx xxxx xxxx" />

                                </div>
                                <div className='flex flex-row  '>
                                    <label class="block w-[200px] text-gray-700 text-sm font-bold mb-2 ml-2">
                                        Expiration
                                    </label>
                                    <label class="block text-gray-700 text-sm font-bold mb-2">
                                        CVC
                                    </label>
                                </div>
                                <div className='flex flex-row justify-around w-[300px] mb-6'>
                                    <input class=" appearance-none border w-[90px] outline-orange-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="mm" type="number" placeholder="mm" />
                                    <input class=" appearance-none border w-[90px] outline-orange-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="yy" type="number" placeholder="yy" />
                                    <input class=" appearance-none border w-[90px] outline-orange-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="cvc" type="number" placeholder="xxx" />

                                </div>
                                <div >
                                    <button class=" shadow w-[100px] h-[45px] bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                        Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-[400px] h-[400px] border-l-4 border-gray-300'>
                            <div className='text-1xl font-bold ml-4 mt-2 w-full h-[25px]'>Available Cards</div>
                            <div className='flex flex-col overflow-y-scroll space-y-2 w-[390px] h-[280px] mt-4'>
                                <div className='flex flex-col bg-orange-100 w-[350px] h-[80px] rounded-md ml-4'>
                                    <div className='flex flex-row justify-between h-[40px] w-full'>
                                        <div className='flex items-center w-[200px] h-[40px] ml-1'>45356 5987 4058 9248</div>
                                        <div className='flex flex-row items-center justify-around w-[100px] h-[40px]'>
                                            <div>
                                                <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                                            </div>
                                            <div>
                                                <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between h-[40px] w-full'>
                                        <div className='flex flex-row items-center w-[300px] h-[40px] ml-1'>
                                            <div className='flex items-center w-[130px] h-[40px]'>Antoney Rodrigo</div>
                                            <div className='flex items-center w-[140px] h-[40px]'>Exp:03/08/2022</div>
                                        </div>
                                        <div className='flex flex-row items-center justify-end w-[80px] h-[40px] mr-2'>
                                            <div className='font-bold'>
                                                VISA
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-orange-100 w-[350px] h-[80px] rounded-md ml-4'>
                                    <div className='flex flex-row justify-between h-[40px] w-full'>
                                        <div className='flex items-center w-[200px] h-[40px] ml-1'>45356 5987 4058 9248</div>
                                        <div className='flex flex-row items-center justify-around w-[100px] h-[40px]'>
                                            <div>
                                                <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                                            </div>
                                            <div>
                                                <svg class="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row justify-between h-[40px] w-full'>
                                        <div className='flex flex-row items-center w-[300px] h-[40px] ml-1'>
                                            <div className='flex items-center w-[130px] h-[40px]'>Antoney Rodrigo</div>
                                            <div className='flex items-center w-[140px] h-[40px]'>Exp:03/08/2022</div>
                                        </div>
                                        <div className='flex flex-row items-center justify-end w-[80px] h-[40px] mr-2'>
                                            <div className='font-bold'>
                                                MASTER
                                            </div>
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

export default DashboardDelivery;