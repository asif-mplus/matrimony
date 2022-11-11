import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form">
          {/* <div className="form"> */}
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="input-container ic1">
            <input
              id="firstname"
              className="input"
              type="text"
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="firstname" className="placeholder">
              First name
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="lastname"
              className="input"
              type="text"
              placeholder=" "
            />
            <div className="cut" />
            <label htmlFor="lastname" className="placeholder">
              Last name
            </label>
          </div>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <div className="cut cut-short" />
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <button type="text" className="submit">
            SUBMIT
          </button>
          {/* </div> */}
        </div>
        <div className="form-bg"></div>
      </div>
    </div>
  );
};

export default Form;
