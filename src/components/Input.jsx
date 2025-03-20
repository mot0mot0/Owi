import React from "react";

import "../styles/input.css";

const Input = (props) => {
   const text = props.text;
   const inputId = props.inputId;

   return (
      <div className="text-field text-field_floating">
         <input
            className="text-field__input"
            type={inputId}
            name={inputId}
            id={inputId}
            placeholder={text}
         />
         <label className="text-field__label" htmlFor={inputId}>
            {text}
         </label>
      </div>
   );
};

export default Input;
