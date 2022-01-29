import React from "react";
import Button from './Button'
import Footer from "./Footer";

const Navbar = (props) => {
  return (
    <>
      <div
        id={props.id}
        style={{ width: "100%", height: "10%", background: "red" }}
        onClick={props.addchildtags}
      >
        hi navbar compo
        {props.childtags.map((ele, index) => {
          if (ele.element === "Navbar") {
            return <Navbar key={index} id={index} childtags={ele.children}/>;
          } else if (ele.element === "Footer") {
            return <Footer key={index} id={index} />;
          } else if (ele.element === "Button") {
            return <Button key={index} id={index} />;
          }
        })}
      </div>
    </>
  );
};

export default Navbar;
