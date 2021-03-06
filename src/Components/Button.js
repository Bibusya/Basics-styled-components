import React from "react";

// !!! we Should give that className, which is generated by styled-components-library - to our Button, which we are returning.
const Button = ({ className, label }) => {
  const clickHandler = () => {
    alert("Clicked");
  };
  return (
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
  );
};

export default Button;
