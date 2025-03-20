import React, { useState, useEffect } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import PasswordRecovery from "../components/PasswordRecovery";

import "../styles/login.css";

import Fire from "../images/fire.svg";

const Login = () => {
   const preloader = document.getElementById("preloader");
   if (preloader) {
      preloader.style.display = "none";
   }

   const [loginBackgroud, setLoginBackground] = useState(false);

   const location = useLocation();
   const sign = location.state?.from;

   useEffect(() => {
      if (sessionStorage.getItem("loginLoadingState") === "true") {
         setLoginBackground(true);

         sessionStorage.setItem("loginLoadingState", false);

         setTimeout(() => {
            setLoginBackground(false);
         }, 3000);
      }
   }, []);

   return (
      <>
         <section
            id="login-transition__background"
            className={`login-transition__section ${
               loginBackgroud && "active"
            }`}
         />
         <section className="screen__section screen-shadow">
            <RouteLink
               className="home-button"
               id="home-button"
               to={"/"}
               size={35}
               state={
                  sign === "recovery" ? { from: "signIn" } : { from: "unSign" }
               }
               onMouseLeave={() => {
                  document.getElementById("home-button").style.animation =
                     "narrow 0.3s ease-in-out";
                  setTimeout(() => {
                     if (document.getElementById("home-button")?.style) {
                        document.getElementById("home-button").style = null;
                     }
                  }, 310);
               }}
            >
               <MdKeyboardArrowLeft
                  className="home-arrow"
                  color="var(--main__text__color)"
                  size={35}
               ></MdKeyboardArrowLeft>

               <p className="home-button__label">Главная</p>
            </RouteLink>

            <div className="login-container">
               {(sign === "signUp" && <SignUp />) ||
                  (sign === "signIn" && <SignIn />) ||
                  (sign === "recovery" && <PasswordRecovery />)}
               <img className="fire-image" src={Fire} alt="Fire" />
            </div>
         </section>
      </>
   );
};

export default Login;
