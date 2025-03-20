import React from "react";

import catSrc from "../images/cat.svg";

const Preloader = () => {
   return (
      <section className="greeting__section" id="section_1">
         <img className="cat__image" src={catSrc} alt="Cat" />

         <div className="greeting-text first-load" id="greeting-text">
            <h1>Stop being alone</h1>
            <p className="notice">
               Настало время &nbsp;
               <button
                  className="owi__button"
                  onClick={() => {
                     document.getElementById("scroll-link_4").click();
                  }}
               >
                  скачать Owi
               </button>
            </p>
         </div>
      </section>
   );
};

export default Preloader;
