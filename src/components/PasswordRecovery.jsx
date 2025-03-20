import React, { useRef, useState } from "react";
import { Link as RouteLink } from "react-router-dom";

import Input from "./Input";

import "../styles/password_recovery.css";

const PasswordRecovery = () => {
   const codeInput = document.querySelectorAll(".code__field");
   const [recoverStep, setRecoveryStep] = useState(1);

   codeInput.forEach((element) => {
      element.oninput = function () {
         this.value = this.value.replace(/[^\d]/g, "");
      };
   });

   const list = [...Array(6).keys()];
   const inputRef = useRef([]);
   const handler = (idx) => (e) => {
      const next = inputRef.current[idx + 1];
      if (next) {
         next.focus();
      }
   };

   const chengeStep = () => {
      setRecoveryStep(0);
      setTimeout(() => {
         setRecoveryStep(2);
         setTimeout(() => {
            setRecoveryStep(3);
            setTimeout(() => {
               setRecoveryStep(4);
            }, 300);
         }, 2000);
      }, 300);
   };

   return (
      <div className="sign__container recovery__container">
         <h2 className="login__header">Восстановление пароля</h2>

         <div
            className={`recovery-step recovery-email-step ${
               recoverStep === 1 ? "active" : "disactive"
            }`}
         >
            <Input idName="login" text="Email" />
            <button
               className="enter__button recovery__button"
               onClick={chengeStep}
            >
               Отправить код
            </button>

            <div className="link-box recovery-link-box">
               <RouteLink
                  className="sign-link"
                  to="/login"
                  state={{ from: "signUp" }}
               >
                  Зарегистрироваться
               </RouteLink>
               <RouteLink
                  className="sign-link"
                  to="/login"
                  state={{ from: "signIn" }}
               >
                  Войти
               </RouteLink>
            </div>
         </div>

         <div
            className={`recovery-step recovery-text-step ${
               recoverStep === 2
                  ? "active"
                  : (recoverStep === 3 || recoverStep === 4) && "disactive"
            }`}
         >
            <p className="recovery-notification">Код отправлен на ваш email</p>
         </div>

         <div className={`recovery-step ${recoverStep === 4 && "active"}`}>
            <div className="code__input">
               {list.map((x) => (
                  <input
                     key={x}
                     ref={(el) => (inputRef.current[x] = el)}
                     onInput={handler(x)}
                     className="code__field"
                     maxLength={1}
                  />
               ))}
            </div>

            <RouteLink to="/" className="enter__button">
               Восстановить
            </RouteLink>
         </div>
      </div>
   );
};

export default PasswordRecovery;
