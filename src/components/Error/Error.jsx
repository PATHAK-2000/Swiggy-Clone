import React from "react";
import './error.css'
import  ERROR  from "../../assets/logo/error.svg";
const Error = () => {
  return (
    <div className="errorMain">
      <h3 >
        {" "}
        <img src={ERROR} alt="error" className="error" />  PAGE NOT FOUND!!
      </h3>
    </div>
  );
};

export default Error;
