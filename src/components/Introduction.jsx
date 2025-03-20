import React from "react";

import "../styles/introduction.css";

const Introduction = () => {
   return (
      <section className="screen__section" id="section_2">
         <div className="container">
            <div className="introduction-text__stack">
               <h2>Что вообще за Owi?</h2>
               <p>
                  Owi - это твой новый помощник, ассистент, брат по оружию и
                  просто друг, живущий у тебя в компьютере.
               </p>
            </div>
            <div className="introduction-slideshow__stack"></div>
         </div>
      </section>
   );
};

export default Introduction;
