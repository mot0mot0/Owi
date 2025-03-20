import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "../styles/functional.css";

import Game from "../images/game.png";
import Game1 from "../images/game_1.png";
import Desktop from "../images/desktop.png";
import WorkSpace from "../images/workspace.png";
import TextEditor from "../images/text-editor.png";

const Functional = () => {
   const [swipeAbility, setSwipeAbility] = useState(true);

   const functionalItems = [
      {
         id: 1,
         itemId: "topLeftImage",
         className: "image-stack__item_top_left",
         imageSrs: Game,
      },
      {
         id: 2,
         itemId: "topRightImage",
         className: "image-stack__item_top_right",
         imageSrs: Game1,
      },
      {
         id: 3,
         itemId: "midLeftImage",
         className: "image-stack__item_mid_left",
         imageSrs: Desktop,
      },
      {
         id: 4,
         itemId: "midRightImage",
         className: "image-stack__item_mid_right",
         imageSrs: TextEditor,
      },
      {
         id: 5,
         itemId: "centerImage",
         className: "image-stack__item_center",
         imageSrs: WorkSpace,
      },
   ];

   const leftArrowClick = () => {
      setSwipeAbility(false);

      const center = document.getElementById("centerImage");
      const midLeft = document.getElementById("midLeftImage");
      const midRight = document.getElementById("midRightImage");
      const topLeft = document.getElementById("topLeftImage");
      const topRight = document.getElementById("topRightImage");

      center.style.transition = "0.7s";
      midLeft.style.transition = "0.7s";
      midRight.style.transition = "0.4s";
      topLeft.style.transition = "0.7s";
      topRight.style.transition = "0.7s";

      center.style.transform = "translate(-40%, -50%) scale(0.3)";
      center.style.filter = "opacity(0.6) brightness(50%)";
      center.style.zIndex = "2";

      midLeft.style.transform = "translate(83%, -66%) scale(0.67)";
      midLeft.style.filter = "opacity(0.3) brightness(30%)";

      midRight.style.transform = "translate(-133%, 167%) scale(3.5)";
      midRight.style.filter = "opacity(1) brightness(100%)";
      midRight.style.zIndex = "3";

      setTimeout(() => {
         midRight.style.transition = "0.3s";
         midRight.style.transform = "translate(-133%, 167%) scale(3.33)";
      }, 400);

      topLeft.style.transform = "translate(150%, 0%)";

      topRight.style.transform = "translate(125%, 100%) scale(1.5)";
      topRight.style.filter = "opacity(0.6) brightness(50%)";

      setTimeout(() => {
         center.classList.remove("image-stack__item_center");
         center.classList.add("image-stack__item_mid_left");
         center.style = null;

         midLeft.classList.remove("image-stack__item_mid_left");
         midLeft.classList.add("image-stack__item_top_left");
         midLeft.style = null;

         midRight.classList.remove("image-stack__item_mid_right");
         midRight.classList.add("image-stack__item_center");
         midRight.style = null;

         topLeft.classList.remove("image-stack__item_top_left");
         topLeft.classList.add("image-stack__item_top_right");
         topLeft.style = null;

         topRight.classList.remove("image-stack__item_top_right");
         topRight.classList.add("image-stack__item_mid_right");
         topRight.style = null;

         center.id = "midLeftImage";
         midLeft.id = "topLeftImage";
         midRight.id = "centerImage";
         topLeft.id = "topRightImage";
         topRight.id = "midRightImage";

         setSwipeAbility(true);
      }, 700);
   };

   const rightArrowClick = () => {
      setSwipeAbility(false);

      const center = document.getElementById("centerImage");
      const midLeft = document.getElementById("midLeftImage");
      const midRight = document.getElementById("midRightImage");
      const topLeft = document.getElementById("topLeftImage");
      const topRight = document.getElementById("topRightImage");

      center.style.transition = "0.7s";
      midLeft.style.transition = "0.4s";
      midRight.style.transition = "0.7s";
      topLeft.style.transition = "0.7s";
      topRight.style.transition = "0.7s";

      center.style.transform = "translate(40%, -50%) scale(0.3)";
      center.style.filter = "opacity(0.6) brightness(50%)";
      center.style.zIndex = "2";

      midLeft.style.transform = "translate(133%, 167%) scale(3.5)";
      midLeft.style.animationTimingFunction = "easy-out";
      midLeft.style.filter = "opacity(1) brightness(100%)";
      midLeft.style.zIndex = "3";

      setTimeout(() => {
         midLeft.style.transition = "0.3s";
         midLeft.style.transform = "translate(133%, 167%) scale(3.33)";
      }, 400);

      midRight.style.transform = "translate(-83%, -66%) scale(0.67)";
      midRight.style.filter = "opacity(0.3) brightness(30%)";

      topLeft.style.transform = "translate(-125%, 100%) scale(1.5)";
      topLeft.style.filter = "opacity(0.6) brightness(50%)";

      topRight.style.transform = "translate(-150%, 0%)";

      setTimeout(() => {
         center.classList.remove("image-stack__item_center");
         center.classList.add("image-stack__item_mid_right");
         center.style = null;

         midLeft.classList.remove("image-stack__item_mid_left");
         midLeft.classList.add("image-stack__item_center");
         midLeft.style = null;

         midRight.classList.remove("image-stack__item_mid_right");
         midRight.classList.add("image-stack__item_top_right");
         midRight.style = null;

         topLeft.classList.remove("image-stack__item_top_left");
         topLeft.classList.add("image-stack__item_mid_left");
         topLeft.style = null;

         topRight.classList.remove("image-stack__item_top_right");
         topRight.classList.add("image-stack__item_top_left");
         topRight.style = null;

         center.id = "midRightImage";
         midLeft.id = "centerImage";
         midRight.id = "topRightImage";
         topLeft.id = "midLeftImage";
         topRight.id = "topLeftImage";

         setSwipeAbility(true);
      }, 700);
   };

   return (
      <section className="screen__section" id="section_3">
         <div className="container functional__container">
            <div className="functional-image__stack">
               <MdKeyboardArrowLeft
                  id="arrow__left"
                  className="arrow arrow__left"
                  onClick={swipeAbility ? leftArrowClick : () => {}}
                  size={35}
               ></MdKeyboardArrowLeft>

               <MdKeyboardArrowRight
                  id="arrow__right"
                  className="arrow arrow__right"
                  onClick={swipeAbility ? rightArrowClick : () => {}}
                  size={35}
               ></MdKeyboardArrowRight>

               <div
                  className="hover__space"
                  onMouseEnter={() => {
                     const center = document.getElementById("centerImage");
                     center.style.transition = "0.2s";
                  }}
                  onMouseLeave={() => {
                     const center = document.getElementById("centerImage");
                     setTimeout(() => {
                        center.style = null;
                     }, 200);
                  }}
               ></div>

               {functionalItems.map((item) => (
                  <div
                     key={item.id}
                     className={`image-stack__item ${item.className}`}
                     id={item.itemId}
                  >
                     <img src={item.imageSrs} alt={"image_" + item.id} />
                  </div>
               ))}
            </div>

            <div className="functional-text__stack">
               <h2>Море возможностей</h2>
               <p>
                  В данном разеде вы можете ознакомиться с возможностями нашего
                  продукта
               </p>
            </div>
         </div>
      </section>
   );
};

export default Functional;
