import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles/main.css";
import App from "./App";
import { Home, Docs, Downloads, Pricing, Tracking, Signup, Login } from "./pages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="docs" element={<Docs />}></Route>
        <Route path="downloads" element={<Downloads />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="tracking" element={<Tracking />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);