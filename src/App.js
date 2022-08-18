import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SamplePage from "./pages/SamplePage";
// import NavBar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
import SignUpPage from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        {/*<Route path="/" element={<Home/>}></Route>*/}
        {/* <Route path="/" element={<SamplePage />}></Route> */}
        <Route path="/" element={<SignUpPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Router>
//               <NavBar />
//                 <Routes>
//                     {/*<Route path="/" element={<Home/>}></Route>*/}
//                     <Route path="/" element={<SamplePage/>}></Route>
//                 </Routes>
//             </Router>
//         // <div>
//         //     <h1>Welcome to Transpik</h1>
//         //     <SamplePage></SamplePage>
//         // </div>
//     )

//     }
// }

export default App;
