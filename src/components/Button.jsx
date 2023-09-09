import React from "react";

const Button = ({ styles }) => (
  <a href ="https://discord.gg/2tnatHkMf9">
  <div type="button"  className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Join Now
  </div>
  </a>
  
);

export default Button;
