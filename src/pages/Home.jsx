import React from "react";

import LoginWidget from "../components/LoginWidget";
import ScrollBar from "../components/ScrollBar";
import Introduction from "../components/Introduction";
import Functional from "../components/Functional";
import NoNamePart from "../components/NoNamePart";
import Download from "../components/Download";
import Footer from "../components/Footer";

const Home = () => {
   const preloader = document.getElementById("preloader");
   if (preloader) {
      preloader.style.display = "block";
   }

   sessionStorage.setItem("loginLoadingState", true);

   //Переходы между секциями
   const startAnimation = (entries) => {
      entries.forEach((entry) => {
         entry.target.classList.toggle("container-scale", entry.isIntersecting);
      });
   };

   window.onload = () => {
      const options = {
         root: null,
         rootMargin: "0px",
         threshold: 0.3,
      };

      const elements = document.querySelectorAll(".container");
      const observer = new IntersectionObserver(startAnimation, options);

      elements.forEach((el) => {
         observer.observe(el);
      });
   };

   return (
      <>
         <ScrollBar />

         <LoginWidget />

         <Introduction />
         <Functional />
         <NoNamePart />
         <Download />

         <Footer />
      </>
   );
};

export default Home;
