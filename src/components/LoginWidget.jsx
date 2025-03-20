import React, { useState } from "react";
import { Link as RouteLink, useLocation, useNavigate } from "react-router-dom";
import { RiUserAddLine, RiUserFollowLine } from "react-icons/ri";

import "../styles/login_widget.css";

const LoginWidget = () => {
   const routeStates = ["signUp", "signIn", "recovery"];
   const [accountOpen, setAccountOpen] = useState(null);

   const location = useLocation();
   const history = useNavigate();
   const [signStatus, setSignStatus] = useState(location.state?.from);

   const [sectionBackgroune, setSectionBackgroune] = useState(false);

   const delayRedirect = (e) => {
      e.preventDefault();

      setSectionBackgroune(true);

      setTimeout(() => {
         setSectionBackgroune(true);
         routeStates.forEach((st) => {
            if (e.target.id === "login_route-link_" + st) {
               history("/login", {
                  state: {
                     from: st,
                  },
               });
            }
         });
      }, 1300);
   };

   return (
      <>
         <section
            id="home-transition__background"
            className={`home-transition__section ${
               sectionBackgroune && "active"
            }`}
         />
         {(signStatus === "sign" && (
            <RiUserFollowLine
               onMouseEnter={() => {
                  setAccountOpen(true);
               }}
               onMouseLeave={() => {
                  setAccountOpen(false);
               }}
               className={`account__button ${
                  (accountOpen === true && "active") ||
                  (accountOpen === false && "disactive")
               }`}
               size={40}
            />
         )) || (
            <RiUserAddLine
               onMouseEnter={() => {
                  setAccountOpen(true);
               }}
               onMouseLeave={() => {
                  setAccountOpen(false);
               }}
               className={`account__button ${
                  (accountOpen === true && "active") ||
                  (accountOpen === false && "disactive")
               }`}
               size={40}
            />
         )}

         {(signStatus !== "sign" && (
            <div
               id="login__widget"
               className="account__data"
               onMouseEnter={() => {
                  setAccountOpen(true);
               }}
               onMouseLeave={() => {
                  setAccountOpen(false);
               }}
            >
               <p className="person-name">Вы не вошли в аккаунт</p>
               <hr className="hr-line" />
               <RouteLink
                  id="login_route-link_signUp"
                  className="account__link"
                  to="/login"
                  onClick={delayRedirect}
               >
                  Зарегистрироваться
               </RouteLink>
               <RouteLink
                  id="login_route-link_signIn"
                  className="account__link"
                  to="/login"
                  onClick={delayRedirect}
               >
                  Войти
               </RouteLink>
            </div>
         )) ||
            (signStatus === "sign" && (
               <div
                  id="login__widget"
                  className="account__data"
                  onMouseEnter={() => {
                     setAccountOpen(true);
                  }}
                  onMouseLeave={() => {
                     setAccountOpen(false);
                  }}
               >
                  <p className="person-name">Имя аккаунта</p>
                  <hr className="hr-line" />
                  <RouteLink
                     id="login_route-link_recovery"
                     className="account__link"
                     to="/login"
                     onClick={delayRedirect}
                  >
                     Сменить пароль
                  </RouteLink>
                  <button
                     className="account__link"
                     onClick={() => {
                        setSignStatus("unSign");
                     }}
                  >
                     Выйти
                  </button>
               </div>
            ))}
      </>
   );
};

export default LoginWidget;
