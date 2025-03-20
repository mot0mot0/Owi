import React from "react";
import { Link as RouteLink } from "react-router-dom";

import Input from "./Input";

const SignIn = () => {
   return (
      <div className="sign__container">
         <h2 className="login__header">Авторизация</h2>

         <Input idName="login" text="Email" />
         <Input idName="password" text="Пароль" />

         <RouteLink className="enter__button" to="/" state={{ from: "sign" }}>
            Войти
         </RouteLink>

         <div className="link-box">
            <RouteLink
               className="sign-link"
               to="/login"
               state={{ from: "recovery" }}
            >
               Забыли пароль?
            </RouteLink>
            <RouteLink
               className="sign-link"
               to="/login"
               state={{ from: "signUp" }}
            >
               Зарегистрироваться
            </RouteLink>
         </div>
      </div>
   );
};

export default SignIn;
