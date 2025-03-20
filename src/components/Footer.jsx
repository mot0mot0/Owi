import React, { useState } from "react";
import { SlSocialVkontakte, SlSocialInstagram } from "react-icons/sl";

import Feedback from "./Feedback";

import "../styles/footer.css";

const Footer = () => {
   const [feedbackPopup, setFeedbackPopup] = useState(false);

   let closePopup = (closeState) => {
      setFeedbackPopup(closeState);
   };

   return (
      <div className="footer">
         <div className="footer-social__box">
            <div className="footer-social__button vk">
               <SlSocialVkontakte size={35} />
               <p className="footer-social__text ">Вконтакте</p>
            </div>
            <div className="footer-social__button inst">
               <SlSocialInstagram size={35} />
               <p className="footer-social__text">Инстаграм</p>
            </div>
         </div>
         <div className="footer-link__box">
            <a className="footer-link" href="/">
               Мой аккаунт
            </a>
            <a className="footer-link" href="/">
               Юридическая информация
            </a>
            <a className="footer-link" href="/">
               Пользовательское соглашение
            </a>
            <a className="footer-link" href="/">
               aaa@aaa.com
            </a>
         </div>
         <button
            className="footer-feedback__button"
            onClick={() => {
               setFeedbackPopup(true);
            }}
         >
            Если хочешь поделиться своими идеями по улучшению Owi - жми сюда!
         </button>

         <Feedback disactiveState={closePopup} activeState={feedbackPopup} />
      </div>
   );
};

export default Footer;
