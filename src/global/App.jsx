import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Home from "../pages/Home";

const App = () => {
   //Настройки появления прелоудера
   const [loading, setLoading] = useState(
      sessionStorage.getItem("loadingState")
   );

   const greeting_text = document.getElementById("greeting-text");

   if (loading) {
      greeting_text.classList.add("reload");
      greeting_text.classList.remove("first-load");
   } else {
      setTimeout(() => {
         greeting_text.classList.add("reload");
         greeting_text.classList.remove("first-load");
         sessionStorage.setItem("loadingState", true);
         setLoading(sessionStorage.getItem("loadingState"));
      }, 4000);
   }

   return (
      loading && (
         <Router>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route
                  exact
                  path="/login"
                  element={<Login />}
                  firstLoad={true}
               />
            </Routes>
         </Router>
      )
   );
};

export default App;
