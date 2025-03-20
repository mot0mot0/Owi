import React from "react";
import { Link as RouteLink } from "react-router-dom";

import Input from "./Input";

const SignUp = () => {
   return (
      <div className="sign__container">
         <h2 className="login__header">Регистрация</h2>

         <Input inputId="nickName" text="Имя пользователя" />
         <Input inputId="login" text="Email" />
         <Input inputId="password" text="Пароль" />

         <RouteLink className="enter__button" to="/" state={{ from: "sign" }}>
            Зарегистрироваться
         </RouteLink>

         <div className="link__box">
            <RouteLink
               className="sign-link"
               to="/login"
               state={{ from: "signIn" }}
            >
               Уже есть аккаунт?
            </RouteLink>
         </div>
      </div>
   );
};

export default SignUp;
