import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Employees from "./pages/Employees";
import "./index.css";
import"./components/modal/modal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Router>
         <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/employees" index element={<Employees />} />
         </Routes>
      </Router>
   </React.StrictMode>
);
