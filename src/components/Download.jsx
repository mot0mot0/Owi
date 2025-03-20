import React from "react";
import { DiWindows, DiApple, DiLinux } from "react-icons/di";

import "../styles/download.css";

const Download = () => {
   const buttons = [
      {
         id: 1,
         icon: <DiWindows size={35} color="#28d3fa" />,
         text: "Версия для Windows",
         link: "/",
      },
      {
         id: 2,
         icon: <DiApple size={35} color="#2871fa" />,
         text: "Версия для Mac OS",
         link: "/",
      },
      {
         id: 3,
         icon: <DiLinux size={35} color="#6717cd" />,
         text: "Версия для Linux",
         link: "/",
      },
   ];

   return (
      <section id="section_5">
         <div className="download__container">
            <h2 className="download__header__text">
               Всего одно нажатие разделяет вас с Owi!
            </h2>

            <div className="content__stack">
               {buttons.map((item) => (
                  <div className="os-choose__stack" key={item.id}>
                     <p className="button-label">{item.text}</p>

                     <button className="download__button" href={item.link}>
                        {item.icon}
                        <p className="button-text">Скачать</p>
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Download;
