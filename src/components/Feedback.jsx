import React from "react";
import { RxCrossCircled } from "react-icons/rx";

import "../styles/feedback.css";

const Feedback = (props) => {
   const popupClose = () => {
      const popup__background = document.getElementById(
         "feedback-popup__background"
      );
      const popup = document.getElementById("feedback-popup");

      popup__background.style.animation = "popup_hide 0.5s 1";
      popup.style.animation = "var(--animation__hide) 0.5s 1";
      popup.style.animationFillMode = "forwards";

      setTimeout(() => {
         props.disactiveState(false);

         popup__background.style = null;
         popup.style = null;
      }, 510);
   };

   return (
      <>
         <section
            id="feedback-popup__background"
            className={`feedback-popup__section ${
               props.activeState && "active"
            }`}
         >
            <div
               id="feedback-popup"
               className={`feedback-popup__container ${
                  props.activeState && "active"
               }`}
            >
               <RxCrossCircled
                  size={30}
                  className="close__button"
                  onClick={popupClose}
               />
               <h3 className="popup__text">
                  Напишите нам своё мнение и мы постораемся его учесть)
               </h3>
               <textarea
                  className="popup__message"
                  placeholder="Ваше сообщение"
               ></textarea>
               <button className="send__button">Отправить</button>
            </div>
         </section>
      </>
   );
};

export default Feedback;
