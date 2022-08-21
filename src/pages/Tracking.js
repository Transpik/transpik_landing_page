import React from "react";
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// import Map from './Map';

class Tracking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const trackMe = () => {
      console.log("HI");
      // <Map />
      // navigate('/Map');

    }
    // const navigate = useNavigate();

    // const navigateToMap = () => {
    //   navigate('/Map');
    // }

    return (
      <div className="flex flex-col items-center justify-center container mx-auto align-middle w-full h-screen bg-secondary-light_orange">
        <div className="flex items-center justify-center w-full h-screen">
          <div class="flex flex-col items-center shadow-xl w-[600px] h-[300px] bg-white rounded-md">
            <div className="flex items-center justify-center topic w-full h-[70px] font-bold">
              <p className="topic_p text-3xl">Track your order</p>
            </div>
            <div className="dicp flex justify-center w-full h-[50px] ">
              <p className="text text-sm">Enter your order ID here to track your order</p>
            </div>
            <div className="input_btn flex flex-row items-center justify-center border-2 w-[500px] h-[150px] ">
              <input className="input-area text-sm w-[220px] h-[50px] bg-red-50 rounded-md ml-9 border-slate-300 py-2 pl-3 hover:bg-orange-100 placeholder:italic outline-orange" placeholder="Order ID" />

              <button className="track bg-orange hover:bg-red-500 w-[100px] h-[50px] rounded ml-4 text-white font-bold" onClick={() => trackMe}>Track</button>

            </div>
          </div>
          {/* <Routes>
            <Route path="/Map" element={<Map />}>

            </Route>
          </Routes> */}
        </div>
      </div>
    );
  }

}

export default Tracking;
